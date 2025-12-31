import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface PhotoMemoirProps {
  photos: string[];
}

const PhotoMemoir: React.FC<PhotoMemoirProps> = ({ photos }) => {
  // 生成更丰富的随机动画参数，模拟 3D 空间漂浮
  const photoConfigs = useMemo(() => {
    return photos.map(() => ({
      startX: Math.random() * 100 - 50, // -50% to 50%
      startY: Math.random() * 100 - 50, // -50% to 50%
      rotateX: Math.random() * 40 - 20,
      rotateY: Math.random() * 40 - 20,
      rotateZ: Math.random() * 20 - 10,
      floatX: Math.random() * 20 - 10,
      floatY: Math.random() * -60 - 20,
      scaleStart: 0.2 + Math.random() * 0.3,
      duration: 18 + Math.random() * 12,
      delay: Math.random() * 8,
      blur: Math.random() * 4
    }));
  }, [photos]);

  if (photos.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[20] overflow-hidden perspective-[1200px]">
      {photos.map((src, index) => {
        const config = photoConfigs[index];
        return (
          <motion.div
            key={index}
            initial={{ 
              opacity: 0, 
              scale: config.scaleStart,
              x: `${config.startX}vw`, 
              y: `${config.startY + 20}vh`,
              rotateX: config.rotateX,
              rotateY: config.rotateY,
              rotateZ: config.rotateZ,
              z: -500
            }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [config.scaleStart, 1.2, 1.4, 1.6],
              x: [`${config.startX}vw`, `${config.startX + config.floatX}vw`],
              y: [`${config.startY + 20}vh`, `${config.startY + config.floatY}vh`],
              rotateX: [config.rotateX, -config.rotateX],
              rotateY: [config.rotateY, -config.rotateY],
              rotateZ: [config.rotateZ, config.rotateZ + 15],
              z: [ -500, 200 ]
            }}
            transition={{
              duration: config.duration,
              delay: config.delay,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1] // 柔和的加减速
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d"
          >
            {/* 记忆碎片外框 - 玻璃质感 */}
            <div className="relative group p-1.5 md:p-2.5 bg-white/5 backdrop-blur-xl border border-white/20 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(234,179,8,0.1)] overflow-hidden">
              
              {/* 金色呼吸光晕 */}
              <motion.div 
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-yellow-500/10 blur-2xl"
              />

              {/* 照片容器 */}
              <div className="relative w-36 h-48 md:w-56 md:h-72 overflow-hidden rounded-md">
                <img 
                  src={src} 
                  alt={`Memory ${index}`}
                  className="w-full h-full object-cover transition-all duration-1000 scale-110"
                />
                
                {/* 动态扫光特效 */}
                <motion.div 
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: config.delay }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />

                {/* 复古颗粒感叠加层 */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
              </div>

              {/* 底部装饰线 */}
              <div className="mt-2 md:mt-3 flex flex-col items-center gap-1 opacity-60">
                <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <div className="text-[8px] tracking-[0.3em] font-light text-white/40 italic">MOMENT</div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PhotoMemoir;