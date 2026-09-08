import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Dynamic Announcement Bar */}
      <div className="bg-amber-600 text-stone-950 px-4 py-2 text-center text-xs font-black tracking-widest uppercase">
        ⚡ DRIFTING OUTSIDE THE CATALOG — ONE-OF-A-KIND RELEASES LIVE NOW
      </div>

      {/* Modern High-Contrast Navigation */}
      <nav className="border-b border-stone-800 bg-stone-900 sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-xl">
        <div style={{ fontFamily: 'Georgia, serif' }} className="text-2xl font-black tracking-tighter text-white">
          SIXRAW <span style={{ fontFamily: 'system-ui, sans-serif' }} className="text-amber-500 text-xl font-normal tracking-normal ml-1">ART & DECOR</span>
        </div>
        <div className="flex gap-6 text-xs font-bold tracking-widest uppercase">
          <a href="#shop" className="hover:text-amber-500 transition text-stone-400">Shop Drop</a>
          <a href="#manifesto" className="hover:text-amber-500 transition text-stone-400">Manifesto</a>
        </div>
      </nav>

      {/* Premium Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {/* Manifesto Banner Look */}
          <div className="w-full bg-stone-900 text-stone-100 text-xs font-black uppercase tracking-[0.25em] py-3 px-4 rounded-xl flex items-center gap-3 border border-stone-800 shadow-inner">
            <span className="text-amber-500 text-sm">✦</span>
            <span>Unboring your space</span>
            <span className="hidden sm:inline text-stone-500 font-normal">| Manifesto Release No. 01</span>
          </div>

          <h1 style={{ fontFamily: 'Georgia, serif' }} className="text-4xl md:text-6xl font-black text-white leading-tight">
            One-of-a-kind decor for people who <span className="underline decoration-amber-500 decoration-wavy">refuse to blend in</span>.
          </h1>
          <p className="text-base md:text-lg text-stone-400 leading-relaxed font-normal">
            Welcome to custom art designed for modern urban rebellion. We bridge the gap between boring, repetitive layouts and high-end underground design with original, hand-splattered pieces that turn ordinary spaces into custom galleries.
          </p>
          <p className="text-base md:text-lg text-stone-400 leading-relaxed">
            Whether you are hunting for custom neon statement pieces, conversation-starting skull ash-holders, or hand-painted furniture layers, our collection is built to make your space feel unmistakably yours.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <a href="#shop" className="bg-amber-500 text-stone-950 font-black tracking-wide uppercase text-xs px-8 py-4 rounded-lg shadow-xl hover:bg-amber-400 transition-all transform hover:-translate-y-0.5">
              Explore Collection
            </a>
          </div>
        </div>

        {/* Feature Visual Display using your real artwork */}
        <div className="grid grid-cols-2 gap-4 relative">
          <div className="h-72 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl relative group">
            <img src="/Mirror_Gun_Clock.jpeg" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" alt="Neon Skull Clock" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex flex-col justify-end p-4">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400">Statement Piece</span>
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-lg font-bold text-white mt-0.5">Neon Work</h3>
            </div>
          </div>
          <div className="h-72 rounded-2xl overflow-hidden border border-stone-800 translate-y-8 shadow-2xl relative group">
            <img src="/6_Bedside_Table.jpeg" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" alt="Hand Painted Table" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex flex-col justify-end p-4">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400">Hand Splattered</span>
              <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-lg font-bold text-white mt-0.5">Custom Furniture</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Real Product Store Grid */}
      <section id="shop" className="max-w-6xl mx-auto px-6 py-24 border-t border-stone-800">
        <div className="mb-12">
          <h2 style={{ fontFamily: 'Georgia, serif' }} className="text-3xl font-black text-white tracking-tight">The Active Drop</h2>
          <p className="text-stone-400 mt-1">Handcrafted underground statement elements designed to turn heads.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 — Clock */}
          <div className="bg-stone-900 p-4 rounded-2xl border border-stone-800 shadow-xl group">
            <div className="h-80 rounded-xl mb-4 overflow-hidden border border-stone-800 bg-stone-950 flex items-center justify-center">
              <img src="/Mirror_Gun_Clock.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Neon Skull Clock" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 style={{ fontFamily: 'Georgia, serif' }} className="font-bold text-lg text-white group-hover:text-amber-400 transition">Neon Skull Clock</h3>
                <p className="text-xs text-stone-400 mt-0.5">Custom glowing back-lit wall timer</p>
              </div>
              <span className="font-bold text-amber-500 text-lg">$120</span>
            </div>
          </div>

          {/* Card 2 — Talking Teeth */}
          <div className="bg-stone-900 p-4 rounded-2xl border border-stone-800 shadow-xl group">
            <div className="h-80 rounded-xl mb-4 overflow-hidden border border-stone-800 bg-stone-950 flex items-center justify-center">
              <img src="/Love_Picture_Frame.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Talking Teeth Sculpture" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 style={{ fontFamily: 'Georgia, serif' }} className="font-bold text-lg text-white group-hover:text-amber-400 transition">Chime Mouth Ashtray</h3>
                <p className="text-xs text-stone-400 mt-0.5">Hand-detailed conversational art</p>
              </div>
              <span className="font-bold text-amber-500 text-lg">$45</span>
            </div>
          </div>

          {/* Card 3 — Painted Stand */}
          <div className="bg-stone-900 p-4 rounded-2xl border border-stone-800 shadow-xl group">
            <div className="h-80 rounded-xl mb-4 overflow-hidden border border-stone-800 bg-stone-950 flex items-center justify-center">
              <img src="/6_Bedside_Table.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="SIX RAW Painted Table" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 style={{ fontFamily: 'Georgia, serif' }} className="font-bold text-lg text-white group-hover:text-amber-400 transition">"RAW" Splatter Stand</h3>
                <p className="text-xs text-stone-400 mt-0.5">Multi-tier custom painted accent desk</p>
              </div>
              <span className="font-bold text-amber-500 text-lg">$240</span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Manifesto Callout Banner */}
      <section id="manifesto" className="bg-gradient-to-br from-stone-900 to-stone-950 text-stone-100 py-24 px-6 border-t border-stone-800 text-center space-y-6">
        <h2 style={{ fontFamily: 'Georgia, serif' }} className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white max-w-4xl mx-auto">
          "Your walls shouldn't look like a catalog, and your shelves shouldn't look like everyone else’s."
        </h2>
        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
        <p className="text-stone-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
          Discover bold textures, original artwork, and unexpected design details that start conversations and redefine your living space.
        </p>
      </section>
    </main>
  );
}
