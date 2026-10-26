/**
 * REAL MADRID CF — MATCHDAY AUDIO AMBIENCE (Web Audio API)
 * Synthesizes stadium crowd roar & majestic brass chords without external audio files.
 */

class MatchdayAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.crowdNode = null;
    this.anthemInterval = null;
    this.masterGain = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Generate pink noise / crowd murmur
  createCrowdNoise() {
    if (!this.ctx) return null;
    const bufferSize = this.ctx.sampleRate * 3;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter to simulate stadium acoustics
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(450, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.8, this.ctx.currentTime);

    // Subtle LFO to simulate roaring waves of the crowd
    const lfo = this.ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.2, this.ctx.currentTime);
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    lfo.connect(filter.frequency);
    lfo.start();

    const crowdGain = this.ctx.createGain();
    crowdGain.gain.setValueAtTime(0.18, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(crowdGain);
    crowdGain.connect(this.masterGain);

    whiteNoise.start();
    return { source: whiteNoise, gain: crowdGain, lfo };
  }

  // Play a noble brass chord fanfare (F major - Real Madrid majestic cadence)
  playChimeChord() {
    if (!this.ctx || !this.isPlaying) return;
    const notes = [174.61, 220.0, 261.63, 349.23, 440.0, 523.25]; // F3, A3, C4, F4, A4, C5
    const now = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Lowpass warmth
      const warmFilter = this.ctx.createBiquadFilter();
      warmFilter.type = 'lowpass';
      warmFilter.frequency.setValueAtTime(800, now);

      noteGain.gain.setValueAtTime(0, now);
      noteGain.gain.linearRampToValueAtTime(0.035, now + 0.8 + (idx * 0.1));
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

      osc.connect(warmFilter);
      warmFilter.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 5.0);
    });
  }

  toggle() {
    this.initContext();
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  start() {
    if (this.isPlaying) return;
    this.initContext();
    this.isPlaying = true;
    this.crowdNode = this.createCrowdNoise();
    this.playChimeChord();

    // Occasional fanfare chord
    this.anthemInterval = setInterval(() => {
      if (this.isPlaying) {
        this.playChimeChord();
      }
    }, 12000);
  }

  stop() {
    this.isPlaying = false;
    if (this.crowdNode && this.crowdNode.source) {
      try {
        this.crowdNode.source.stop();
        this.crowdNode.lfo.stop();
      } catch (e) {}
    }
    if (this.anthemInterval) {
      clearInterval(this.anthemInterval);
      this.anthemInterval = null;
    }
  }
}

window.matchdayAudio = new MatchdayAudioEngine();
