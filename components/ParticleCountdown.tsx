
import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

interface ParticleCountdownProps {
  countdown: number;
  active: boolean;
}

const ParticleCountdown: React.FC<ParticleCountdownProps> = ({ countdown, active }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const ringRef = useRef<THREE.Points | null>(null);
  const targetPositionsRef = useRef<Float32Array | null>(null);
  const currentPositionsRef = useRef<Float32Array | null>(null);
  const velocitiesRef = useRef<Float32Array | null>(null);

  const PARTICLE_COUNT = 2500;
  const RING_COUNT = 800;

  // Helper to get points from a text string using Canvas
  const getPointsFromText = (text: string) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return [];
    
    canvas.width = 400;
    canvas.height = 400;
    ctx.fillStyle = 'white';
    ctx.font = 'bold 300px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 200, 200);

    const imageData = ctx.getImageData(0, 0, 400, 400);
    const points: [number, number, number][] = [];
    const step = 4; // Sampling density

    for (let y = 0; y < 400; y += step) {
      for (let x = 0; x < 400; x += step) {
        const index = (y * 400 + x) * 4;
        if (imageData.data[index] > 128) {
          // Normalize to -2 to 2 range and flip Y
          points.push([
            (x - 200) / 60,
            -(y - 200) / 60,
            (Math.random() - 0.5) * 0.2
          ]);
        }
      }
    }
    return points;
  };

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Initial random positions
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const targets = new Float32Array(PARTICLE_COUNT * 3);
    const velocities = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
      targets[i] = positions[i];
      velocities[i] = 0;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({
      size: 0.06,
      color: 0xEAB308, // text-yellow-500
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;
    currentPositionsRef.current = positions;
    targetPositionsRef.current = targets;
    velocitiesRef.current = velocities;

    // Ring particles
    const ringPositions = new Float32Array(RING_COUNT * 3);
    for (let i = 0; i < RING_COUNT; i++) {
      const angle = (i / RING_COUNT) * Math.PI * 2;
      const radius = 4.5 + Math.random() * 0.2;
      ringPositions[i * 3] = Math.cos(angle) * radius;
      ringPositions[i * 3 + 1] = Math.sin(angle) * radius;
      ringPositions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
    }
    const ringGeometry = new THREE.BufferGeometry();
    ringGeometry.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3));
    const ringMaterial = new THREE.PointsMaterial({
      size: 0.04,
      color: 0xFFFFFF,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });
    const ring = new THREE.Points(ringGeometry, ringMaterial);
    scene.add(ring);
    ringRef.current = ring;

    camera.position.z = 8;

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      
      const posAttr = particles.geometry.getAttribute('position') as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;
      const targetArray = targetPositionsRef.current!;
      const velArray = velocitiesRef.current!;

      for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
        const diff = targetArray[i] - posArray[i];
        velArray[i] = velArray[i] * 0.9 + diff * 0.05; // Spring physics
        posArray[i] += velArray[i];
      }
      posAttr.needsUpdate = true;

      if (ringRef.current) {
        ringRef.current.rotation.z += 0.005;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  // Update target positions when countdown changes
  useEffect(() => {
    if (!active) return;
    
    const points = getPointsFromText(countdown.toString());
    const targetArray = targetPositionsRef.current;
    if (!targetArray) return;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      if (i < points.length) {
        targetArray[i * 3] = points[i][0];
        targetArray[i * 3 + 1] = points[i][1];
        targetArray[i * 3 + 2] = points[i][2];
      } else {
        // Particles that don't fit the number dissipate into a cloud
        const angle = Math.random() * Math.PI * 2;
        const radius = 3 + Math.random() * 2;
        targetArray[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 2;
        targetArray[i * 3 + 1] = Math.sin(angle) * radius + (Math.random() - 0.5) * 2;
        targetArray[i * 3 + 2] = (Math.random() - 0.5) * 5;
      }
    }
  }, [countdown, active]);

  return <div ref={mountRef} className="fixed inset-0 z-40 pointer-events-none" />;
};

export default ParticleCountdown;
