import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { audioService } from '../services/audioService';

/**
 * 烟花模块接口定义
 */
export interface FireworkCanvasHandle {
  launchAt: (x: number, y: number) => void;
}

/**
 * 爆炸粒子类
 */
class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  gravity: number;
  friction: number;
  size: number;
  decay: number;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    // 随机爆炸方向与速度
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 8 + 2;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    
    this.alpha = 1;
    this.color = color;
    this.gravity = 0.12;    // 重力感
    this.friction = 0.95;   // 空气阻力
    this.size = Math.random() * 2.5 + 0.5;
    this.decay = Math.random() * 0.015 + 0.008; // 消失速度
  }

  update() {
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.vy += this.gravity;
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= this.decay;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    // 增加辉光效果
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.restore();
  }
}

/**
 * 烟花发射主体类
 */
class Firework {
  x: number;
  y: number;
  targetY: number;
  color: string;
  particles: Particle[];
  isExploded: boolean;
  vy: number;
  canvasWidth: number;
  canvasHeight: number;

  constructor(width: number, height: number, opts: { startX?: number; targetY?: number }) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.x = opts.startX ?? Math.random() * (width * 0.8) + (width * 0.1);
    this.y = height;
    this.targetY = opts.targetY ?? (Math.random() * height * 0.4 + height * 0.1);
    
    const hue = Math.random() * 360;
    this.color = `hsl(${hue}, 100%, 65%)`;
    this.particles = [];
    this.isExploded = false;
    
    // 向上发射的速度初值
    const distance = height - this.targetY;
    this.vy = -Math.sqrt(2 * 0.15 * distance); 
  }

  update(isUnmounting: boolean) {
    if (!this.isExploded) {
      this.y += this.vy;
      this.vy += 0.15; // 发射阶段重力

      // 到达顶点或速度变慢时爆炸
      if (this.vy >= 0 || this.y <= this.targetY) {
        if (!isUnmounting) this.explode();
        else this.isExploded = true;
      }
    } else {
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.update();
        if (p.alpha <= 0) {
          this.particles.splice(i, 1);
        }
      }
    }
  }

  explode() {
    this.isExploded = true;
    // 计算声音方位 (Pan: -1 左, 1 右)
    const pan = (this.x / this.canvasWidth) * 2 - 1;
    audioService.playExplosion(pan);
    
    // 生成爆炸粒子束
    const count = 100 + Math.floor(Math.random() * 50);
    for (let i = 0; i < count; i++) {
      this.particles.push(new Particle(this.x, this.y, this.color));
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (!this.isExploded) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 15;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.restore();
    } else {
      this.particles.forEach(p => p.draw(ctx));
    }
  }
}

/**
 * 烟花画布组件
 */
const FireworkCanvas = forwardRef<FireworkCanvasHandle, {}>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fireworksRef = useRef<Firework[]>([]);
  const isUnmountingRef = useRef(false);

  // 暴露给父组件的接口
  useImperativeHandle(ref, () => ({
    launchAt: (x: number, y: number) => {
      if (canvasRef.current && !isUnmountingRef.current) {
        fireworksRef.current.push(new Firework(
          canvasRef.current.width, 
          canvasRef.current.height, 
          { startX: x, targetY: y }
        ));
      }
    }
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    let animId: number;

    const render = () => {
      if (isUnmountingRef.current) return;

      // 核心特效：实现动态拖尾
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 粒子融合效果
      ctx.globalCompositeOperation = 'lighter';

      // 随机背景环境烟花 (低频率自动发射)
      if (Math.random() < 0.03) {
        fireworksRef.current.push(new Firework(canvas.width, canvas.height, {}));
      }

      for (let i = fireworksRef.current.length - 1; i >= 0; i--) {
        const fw = fireworksRef.current[i];
        fw.update(isUnmountingRef.current);
        fw.draw(ctx);
        // 清理已结束的烟花
        if (fw.isExploded && fw.particles.length === 0) {
          fireworksRef.current.splice(i, 1);
        }
      }
      animId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', setSize);
    animId = requestAnimationFrame(render);

    return () => {
      isUnmountingRef.current = true;
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', setSize);
      fireworksRef.current = [];
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-10 pointer-events-none opacity-90" 
      style={{ filter: 'contrast(1.1) brightness(1.2)' }} // 进一步增强视觉冲击力
    />
  );
});

export default FireworkCanvas;
