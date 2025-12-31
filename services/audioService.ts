
export class AudioService {
  private ctx: AudioContext | null = null;
  private activeNodes: Set<AudioScheduledSourceNode> = new Set();
  private isLocked: boolean = false;

  private init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private trackNode(node: AudioScheduledSourceNode) {
    this.activeNodes.add(node);
    node.onended = () => {
      this.activeNodes.delete(node);
    };
  }

  stopAll() {
    this.isLocked = true;
    this.activeNodes.forEach(node => {
      try {
        node.stop();
      } catch (e) {
        // Ignore
      }
    });
    this.activeNodes.clear();
    // 确保取消所有正在进行的语音
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  /**
   * 体育馆脉冲音效果 (无人工语音)
   * 采用多层合成：重低音、白噪声瞬态和金属质感共鸣
   */
  playTick(num?: number) {
    this.isLocked = false;
    this.init();
    if (!this.ctx || this.isLocked) return;
    
    const now = this.ctx.currentTime;

    // 1. Layer: 深层重低音 (Stadium Thump)
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(70, now);
    subOsc.frequency.exponentialRampToValueAtTime(35, now + 0.12);
    subGain.gain.setValueAtTime(0.5, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    subOsc.connect(subGain);
    subGain.connect(this.ctx.destination);

    // 2. Layer: 冲击感白噪声 (Impact Transient)
    const bufferSize = this.ctx.sampleRate * 0.1;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    
    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.setValueAtTime(1000, now);
    
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.2, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    
    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);

    // 3. Layer: 金属共振脉冲 (Metallic Resonance)
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.05);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    this.trackNode(subOsc);
    this.trackNode(osc);
    
    noiseSource.start(now);
    subOsc.start(now);
    subOsc.stop(now + 0.2);
    osc.start(now);
    osc.stop(now + 0.1);
  }

  playExplosion(pan: number = 0) {
    this.init();
    if (!this.ctx || this.isLocked) return;
    
    const bufferSize = this.ctx.sampleRate * 0.5;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.4);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.5);

    const panner = this.ctx.createStereoPanner();
    panner.pan.value = pan;

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(panner);
    panner.connect(this.ctx.destination);

    this.trackNode(noise);
    noise.start();
    noise.stop(this.ctx.currentTime + 0.5);
  }
}

export const audioService = new AudioService();
