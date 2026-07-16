'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX } from 'lucide-react';

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
  const [volume, setVolume] = useState<number>(0.8); // 80% volume default
  const [isMuted, setIsMuted] = useState<boolean>(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = TRACK_LIST[currentTrackIndex];

  // Sync play/pause execution
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(err => console.log("Playback interrupted:", err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  // Sync volume level updates to audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Reset timeline progress when song changes
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
    <main className="p-8 max-w-2xl mx-auto min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">Six Raw Music Player</h1>
      
      <audio 
        ref={audioRef} 
        src={currentTrack.url} 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNext}
      />

      {/* Main Playing Interface Card */}
      <div className="bg-zinc-900 p-6 rounded-lg mb-8 text-center border border-zinc-800">
        <h2 className="text-xl font-semibold">{currentTrack.title}</h2>
        <p className="text-zinc-400 mb-6">{currentTrack.artist}</p>
        
        {/* Progress Time Slider */}
        <div className="mb-6 px-4">
          <input 
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400"
          />
          <div className="flex justify-between text-xs text-zinc-500 mt-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Audio Control Panel Elements */}
        <div className="flex items-center justify-between px-4 mt-4">
          {/* Volume Deck Widget */}
          <div className="flex items-center gap-2 w-1/4">
            <button 
              onClick={toggleMute}
              className="text-zinc-400 hover:text-white transition"
              aria-label="Toggle Mute"
            >
              {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <input 
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          {/* Central Track Navigation Core */}
          <div className="flex items-center gap-4 justify-center flex-1">
            <button 
              onClick={handlePrev}
              className="text-zinc-400 hover:text-white transition p-2"
              aria-label="Previous Track"
            >
              <SkipBack size={22} />
            </button>
            
            <button 
              onClick={togglePlay}
              className="bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-full transition flex items-center justify-center shadow-lg"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={24} fill="white" /> : <Play size={24} fill="white" />}
            </button>

            <button 
              onClick={handleNext}
              className="text-zinc-400 hover:text-white transition p-2"
              aria-label="Next Track"
            >
              <SkipForward size={22} />
            </button>
          </div>

          {/* Blank Spacer layout balancing to perfectly center player tools */}
          <div className="w-1/4 hidden sm:block"></div>
        </div>
      </div>

      <h3 className="text-lg font-medium mb-3 text-zinc-300">Track List</h3>
      <div className="space-y-2">
        {TRACK_LIST.map((track, index) => (
          <div 
            key={track.id}
            onClick={() => selectTrack(index)}
            className={`flex justify-between items-center p-4 rounded-lg cursor-pointer transition ${
              index === currentTrackIndex 
                ? 'bg-indigo-950/40 border border-indigo-500 text-white' 
                : 'bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300'
            }`}
          >
            <div>
              <p className="font-medium">{track.title}</p>
              <p className="text-sm text-zinc-500">{track.artist}</p>
            </div>
            <span className="text-sm text-zinc-400">{track.duration}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
