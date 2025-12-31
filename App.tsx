import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Clock, RefreshCw, FastForward, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppState } from './types';
import ParticleBackground from './components/ParticleBackground';
import FireworkCanvas, { FireworkCanvasHandle } from './components/FireworkCanvas';
import ParticleCountdown from './components/ParticleCountdown';
import PhotoMemoir from './components/PhotoMemoir';
import { audioService } from './services/audioService';

const TARGET_DATE = new Date('2026-01-01T00:00:00');
const FIXED_BLESSING = '愿新的一年，星辰璀璨，万事胜意';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.IDLE);
  const [countdown, setCountdown] = useState(10);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [memories, setMemories] = useState<string[]>([]);

  const fireworkRef = useRef<FireworkCanvasHandle>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const timeRemaining = useMemo(() => {
    const diff = TARGET_DATE.getTime() - currentTime.getTime();
    if (diff <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return { total: diff, days, hours, minutes, seconds };
  }, [currentTime]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newUrls = Array.from(files).map(file => URL.createObjectURL(file));
      setMemories(prev => [...prev, ...newUrls]);
    }
  };

  const startCountdown = useCallback(() => {
    audioService.playTick(10);
    setState(AppState.COUNTDOWN);
    setCountdown(10);
  }, []);

  const handleCelebrate = useCallback(() => {
    setState(AppState.CELEBRATING);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (state === AppState.IDLE && timeRemaining.total > 0 && timeRemaining.total <= 10000) {
      startCountdown();
    }
  }, [timeRemaining.total, state, startCountdown]);

  useEffect(() => {
    let timer: number;
    if (state === AppState.COUNTDOWN && countdown > 0) {
      if (countdown < 10) audioService.playTick(countdown);
      timer = window.setInterval(() => setCountdown(prev => prev - 1), 1000);
    } else if (state === AppState.COUNTDOWN && countdown === 0) {
      handleCelebrate();
    }
    return () => clearInterval(timer);
  }, [state, countdown, handleCelebrate]);

  const handleScreenClick = (e: React.MouseEvent) => {
    if (state === AppState.CELEBRATING && fireworkRef.current) {
      fireworkRef.current.launchAt(e.clientX, e.clientY);
    }
  };

  const reset = (e: React.MouseEvent) => {
    e.stopPropagation();
    audioService.stopAll();
    setState(AppState.IDLE);
    // Cleanup object URLs
    memories.forEach(url => URL.revokeObjectURL(url));
    setMemories([]);
  };

  return (
    <div
      onClick={handleScreenClick}
      className={`relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden ${state === AppState.CELEBRATING ? 'cursor-crosshair' : ''}`}
    >
      <ParticleBackground />

      {state === AppState.CELEBRATING && (
        <>
          <FireworkCanvas ref={fireworkRef} />
          <PhotoMemoir photos={memories} />
        </>
      )}

      {/* 按钮组：移动端位于顶部居中，桌面端位于右上角 */}
      {state === AppState.IDLE && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 md:top-6 md:right-6 md:bottom-auto md:left-auto md:translate-x-0 z-[60] flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => { e.stopPropagation(); startCountdown(); }}
            className="flex items-center justify-center gap-2 w-36 md:w-44 py-2.5 md:py-3 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 rounded-full transition-all group backdrop-blur-lg shadow-[0_0_20px_rgba(234,179,8,0.1)]"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.4em] text-yellow-500 group-hover:text-yellow-400 uppercase">Start</span>
            <FastForward className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-500" />
          </motion.button>

          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
            className="flex items-center justify-center gap-2 w-36 md:w-44 py-2.5 md:py-3 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 rounded-full transition-all group backdrop-blur-lg shadow-[0_0_20px_rgba(234,179,8,0.1)]"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.4em] text-yellow-500 group-hover:text-yellow-400 uppercase">Memories</span>
            <Camera className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-500" />
            {memories.length > 0 && (
              <span className="ml-1 text-[10px] bg-yellow-500 text-black px-1.5 rounded-full font-bold">
                {memories.length}
              </span>
            )}
          </motion.button>
        </div>
      )}

      <AnimatePresence mode="wait">
        {state === AppState.IDLE && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 2, filter: 'blur(40px)' }}
            transition={{ duration: 0.8 }}
            className="z-50 text-center space-y-10 p-6 w-full max-w-5xl"
          >
            <div className="space-y-4">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="flex justify-center mb-4"
              >
                <div className="relative">
                  <div className="absolute inset-0 blur-2xl bg-yellow-500/20 rounded-full" />
                  <div className="relative bg-black/40 p-5 rounded-full border border-yellow-500/40 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                    <Clock className="w-12 h-12 text-yellow-500" />
                  </div>
                </div>
              </motion.div>
              <h2 className="text-sm md:text-lg font-black tracking-[0.8em] animate-gradient-text uppercase pl-[0.8em]">
                Countdown to 2026
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
              {[
                { label: '天', value: timeRemaining.days },
                { label: '时', value: timeRemaining.hours },
                { label: '分', value: timeRemaining.minutes },
                { label: '秒', value: timeRemaining.seconds },
              ].map((unit) => (
                <motion.div key={unit.label} whileHover={{ y: -5 }} className="group">
                  <div className="relative w-full aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-white/10 to-transparent border border-white/20 rounded-[2rem] backdrop-blur-2xl shadow-2xl transition-colors group-hover:border-yellow-500/40 overflow-hidden">
                    <span className="text-5xl md:text-7xl font-black font-countdown tabular-nums tracking-tighter gradient-text-gold">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span className="mt-2 text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest">{unit.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {state === AppState.COUNTDOWN && (
          <motion.div
            key="countdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ scale: 4, opacity: 0, filter: 'blur(60px)' }}
            transition={{ duration: 1 }}
            className="z-50"
          >
            <ParticleCountdown countdown={countdown} active={true} />
            <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-yellow-500/5 to-transparent" />
          </motion.div>
        )}

        {state === AppState.CELEBRATING && (
          <motion.div
            key="celebrating"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="z-50 w-full text-center px-4 max-w-4xl pointer-events-none pt-48"
          >
            <div className="space-y-4 md:space-y-6">
              <div className="relative inline-block">
                <motion.div
                  animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -inset-10 blur-3xl bg-yellow-400/10 rounded-full"
                />
                <motion.h1
                  className="relative text-6xl sm:text-7xl md:text-[7.5rem] font-black tracking-tighter gradient-text-gold drop-shadow-[0_10px_30px_rgba(234,179,8,0.3)]"
                  initial={{ scale: 0.8, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 80, damping: 20 }}
                >
                  2026
                </motion.h1>
              </div>

              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg md:text-2xl font-black tracking-[0.5em] animate-gradient-text uppercase"
                >
                  Happy New Year
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="text-white/50 text-xs md:text-lg font-light tracking-[0.2em] italic max-w-2xl mx-auto drop-shadow-md"
                >
                  {FIXED_BLESSING}
                </motion.p>
              </div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="pt-20 pointer-events-auto">
                <button
                  onClick={reset}
                  className="group px-8 py-3 bg-white/5 hover:bg-yellow-500 hover:text-black transition-all border border-white/10 hover:border-yellow-500 rounded-full flex items-center gap-3 mx-auto backdrop-blur-md"
                >
                  <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-700" />
                  <span className="uppercase tracking-[0.4em] text-[10px] font-black">Restart</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;