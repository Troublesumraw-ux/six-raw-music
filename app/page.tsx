'use client';

import { useState, useRef, useEffect } from 'react';

// 🔌 Direct MP3 streaming links that will actually play audio!
const TRACK_LIST = [
  { id: 1, title: "Raw Energy Hook", artist: "Six Raw Music", duration: "6:12", url: "https://soundhelix.com" },
  { id: 2, title: "Industry Lyric Demo", artist: "Six Raw Music", duration: "7:05", url: "https://soundhelix.com" },
  { id: 3, title: "Exclusive Instrumental Pack 1", artist: "Prod. Six Raw", duration: "5:02", url: "https://soundhelix.com" }
];

// 🛒 Marketplace Items Data Pool
const MARKETPLACE_ITEMS = [
  { id: 1, title: "Street Certified Lyrics", type: "Full Song Lyrics", price: "$149", tags: ["Hip-Hop", "Aggressive", "Storytelling"] },
  { id: 2, title: "Midnight Melodies Pack", artist: "R&B Hook + Veres", price: "$199", tags: ["R&B", "Smooth", "Radio-Ready"] },
  { id: 3, title: "Trap Anthem Hook", type: "Chorus & Guide Track", price: "$99", tags: ["Trap", "Catchy", "High Energy"] }
];

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(TRACK_LIST[0]);
  const [progress, setProgress] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.log("Playback error or blocked by browser:", err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  const handleTrackSelect = (track: typeof TRACK_LIST[0]) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans pb-32">
      
      <audio ref={audioRef} src={currentTrack.url} onTimeUpdate={handleTimeUpdate} onEnded={() => setIsPlaying(false)} />

      {/* 🎬 HERO SECTION */}
      <div className="absolute inset-0 z-0 bg-neutral-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black z-10" />
        <div className="w-full h-full flex items-center justify-center text-neutral-800 uppercase tracking-widest text-sm font-bold">
          [ Video Background Area ]
        </div>
      </div>

      <header className="relative z-20 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="text-xl font-black tracking-tighter text-red-600 uppercase">Six Raw Music Group</div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase text-neutral-400">
          <a href="#music" className="text-white hover:text-red-500 transition">Music</a>
          <a href="#marketplace" className="hover:text-white transition">Marketplace</a>
          <a href="#contact" className="hover:text-white transition font-bold text-red-500">Custom Request</a>
        </nav>
      </header>

      <main className="relative z-20 flex flex-col items-center justify-center text-center px-4 pt-16 pb-12 max-w-4xl mx-auto">
        <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-bold mb-4 animate-pulse">Now Pushing Sound Globally</span>
        <h1 className="text-4xl md:text-7xl font-black tracking-tight uppercase leading-none mb-6">
          Raw Talent.<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500">Uncut Sound.</span>
        </h1>
      </main>

      {/* 🎵 AUDIO DISCOVERY TRACK PLAYLIST */}
      <section id="music" className="relative z-20 max-w-4xl mx-auto px-4 mt-8">
        <div className="bg-neutral-900/80 border border-neutral-800 p-6 backdrop-blur-md">
          <h2 className="text-lg font-bold uppercase tracking-wider text-red-500 mb-4">Featured Tracks & Demos</h2>
          <div className="space-y-2">
            {TRACK_LIST.map((track) => (
              <div 
                key={track.id} 
                onClick={() => handleTrackSelect(track)} 
                className={`flex items-center justify-between p-3 cursor-pointer transition ${currentTrack.id === track.id ? 'bg-red-600 text-white' : 'bg-neutral-950/60 hover:bg-neutral-800 text-neutral-300'}`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-xs font-mono opacity-60">0{track.id}</span>
                  <div>
                    <p className="font-bold text-sm tracking-wide">{track.title}</p>
                    <p className="text-xs opacity-80">{track.artist}</p>
                  </div>
                </div>
                <div className="text-xs font-mono">{track.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🛒 LYRICS & SONG MARKETPLACE GRID */}
      <section id="marketplace" className="relative z-20 max-w-4xl mx-auto px-4 mt-12">
        <div className="border border-neutral-800 bg-neutral-950/40 backdrop-blur-md p-6">
          <h2 className="text-lg font-bold uppercase tracking-wider text-amber-500 mb-6">Songwriting & Lyrics Marketplace</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MARKETPLACE_ITEMS.map((item) => (
              <div key={item.id} className="border border-neutral-800 bg-neutral-900/40 p-4 flex flex-col justify-between hover:border-red-600 transition group">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Pack 0{item.id}</span>
                    <span className="text-sm font-black text-amber-500">{item.price}</span>
                  </div>
                  <h3 className="font-bold text-base uppercase tracking-tight group-hover:text-red-500 transition mb-1">{item.title}</h3>
                  <p className="text-xs text-neutral-400 mb-4">{item.type}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] bg-neutral-800 px-2 py-0.5 font-medium tracking-wide uppercase text-neutral-400">{tag}</span>
                    ))}
                  </div>
                  <button className="w-full bg-neutral-800 hover:bg-red-600 font-bold uppercase tracking-wider text-[10px] py-2 transition rounded-none">
                    Purchase License
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎛️ FIXED BOTTOM STREAMING CONTROL PANEL DECK */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-950 border-t border-neutral-800 px-6 py-4 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4 w-full md:w-1/4">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center font-bold text-xs uppercase shadow-md">SR</div>
            <div>
              <p className="text-sm font-bold tracking-wide truncate max-w-[200px]">{currentTrack.title}</p>
              <p className="text-xs text-neutral-400 truncate max-w-[150px]">{currentTrack.artist}</p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full md:w-2/4 gap-2">
            <div className="flex items-center space-x-6">
              <button onClick={() => setIsPlaying(!isPlaying)} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-black text-sm hover:scale-105 transition active:scale-95 shadow-md" >
                {isPlaying ? "❚❚" : "▶"}
              </button>
            </div>
            <div className="w-full flex items-center space-x-2 text-xs font-mono text-neutral-500">
              <div className="w-full h-1 bg-neutral-800 relative rounded-full overflow-hidden">
                <div className="h-full bg-red-600 transition-all duration-100" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
          <div className="hidden md:block w-1/4 text-right text-xs text-neutral-500 tracking-widest uppercase font-bold"> Six Raw Stream v1.0 </div>
        </div>
      </div>

    </div>
  );
}
