'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Music, CheckCircle2 } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  url: string;
}

const TRACK_LIST: Track[] = [
  {
    id: 1,
    title: "Raw Energy Hook",
    artist: "Six Raw Music",
    duration: "6:12",
    url: "https://soundhelix.com" 
  },
  {
    id: 2,
    title: "Industry Lyric Demo",
    artist: "Six Raw Music",
    duration: "4:05",
    url: "https://soundhelix.com"
  }
];

export default function Home() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.8);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = TRACK_LIST[currentTrackIndex];

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(err => console.log("Playback interrupted:", err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    setCurrentTime(0);
    setDuration(0);
  }, [currentTrackIndex]);

  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const nextIndex = (currentTrackIndex + 1) % TRACK_LIST.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    const prevIndex = (currentTrackIndex - 1 + TRACK_LIST.length) % TRACK_LIST.length;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <main className="p-6 md:p-12 max-w-7xl mx-auto min-h-screen bg-black text-white flex flex-col justify-between">
      
      {/* Top Navbar Section */}
      <header className="mb-12 border-b border-zinc-900 pb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-black tracking-wider text-white">
            SIX RAW MUSIC GROUP
          </h1>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-zinc-400">
          <a href="#" className="text-white border-b-2 border-indigo-500 pb-1">Catalog</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </header>
      
      <audio 
        ref={audioRef} 
        src={currentTrack.url} 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNext}
      />

      {/* Modern 3-Column Desktop Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start my-auto">
        
        {/* COLUMN 1: Value Proposition Copy Section */}
        <div className="lg:col-span-4 flex flex-col justify-center h-full pr-0 lg:pr-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-white leading-tight">
            Your Voice. Your Talent. <br />
            <span className="text-indigo-500">Our Words.</span>
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            You have the vocal range, the flow, and the stage presence. You know exactly how to captivate an audience, but finding the right words to say or the perfect melody to carry your talent shouldn't stand in your way. 
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Whether you are hitting creative writer's block or simply prefer to focus on what you do best—performing—we have you covered. Welcome to your ultimate creative catalog. This platform is built specifically for talented singers, rappers, and spoken word artists who are ready to release professional music without the stress of writing from scratch.
          </p>
          
          {/* Feature List Deck */}
          <div className="space-y-3 bg-zinc-950 p-5 rounded-xl border border-zinc-900">
            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">What We Offer:</h4>
            {[
              "Full original songs and rap tracks",
              "Ready-to-record spoken word poems",
              "Catchy choruses and radio hooks",
              "Custom vocal tags, intros, and bridges"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-zinc-300">
                <CheckCircle2 size={16} className="text-indigo-500 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 2: Audio Player Deck Interface */}
        <div className="lg:col-span-4 bg-zinc-900/30 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-zinc-800/80 flex flex-col justify-between shadow-2xl min-h-[440px]">
          <div className="w-full aspect-square bg-gradient-to-br from-indigo-950/40 to-zinc-950 rounded-xl mb-6 flex items-center justify-center border border-zinc-800/50 relative overflow-hidden group shadow-inner">
            <div className="absolute inset-0 bg-indigo-500/5 mix-blend-color-dodge animate-pulse" />
            <Music size={40} className="text-indigo-500/30 animate-bounce [animation-duration:4s]" />
          </div>

          <div className="text-center mb-6">
            <h3 className="text-xl font-bold tracking-tight text-white mb-1 truncate">{currentTrack.title}</h3>
            <p className="text-indigo-400 text-xs font-semibold uppercase tracking-wider">{currentTrack.artist}</p>
          </div>
          
          {/* Progress Seek Slider */}
          <div className="mb-6">
            <input 
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400 transition"
            />
            <div className="flex justify-between text-[11px] font-medium text-zinc-500 mt-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Player Media Control Hub */}
          <div className="flex items-center justify-between gap-4 pt-3 border-t border-zinc-900">
            {/* Volume Mixer Component */}
            <div className="flex items-center gap-1.5 w-1/4">
              <button onClick={toggleMute} className="text-zinc-500 hover:text-white transition-colors">
                {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              <input 
                type="range" min="0" max="1" step="0.01" value={isMuted ? 0 : volume} onChange={handleVolumeChange}
                className="w-16 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
            </div>

            {/* Core Buttons */}
            <div className="flex items-center gap-3">
              <button onClick={handlePrev} className="text-zinc-500 hover:text-white p-2 rounded-lg hover:bg-zinc-900 transition-colors">
                <SkipBack size={18} />
              </button>
              <button onClick={togglePlay} className="bg-indigo-600 hover:bg-indigo-500 text-white p-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-600/10">
                {isPlaying ? <Pause size={18} fill="white" /> : <Play size={18} fill="white" />}
              </button>
              <button onClick={handleNext} className="text-zinc-500 hover:text-white p-2 rounded-lg hover:bg-zinc-900 transition-colors">
                <SkipForward size={18} />
              </button>
            </div>

            <div className="w-1/4" />
          </div>
        </div>

        {/* COLUMN 3: Right Track List Sheet Segment */}
        <div className="lg:col-span-4 h-full flex flex-col justify-between min-h-[440px]">
          <div>
            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="text-base font-bold tracking-tight text-zinc-3
          00">Browse Creative Catalog</h3>
              <span className="text-[11px] font-bAd text-zinc-500 bg-zinc-9
              </