import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-200">
      {/* Announcement Bar */}
      <div className="bg-amber-600 text-white px-4 py-2 text-center text-xs font-bold tracking-widest uppercase">
        ⚡ FREE SHIPPING ON CUSTOM CURATED SETS THIS WEEK
      </div>

      {/* Navigation */}
      <nav className="border-b border-stone-200 bg-white sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-sm">
        <div style={{ fontFamily: 'Georgia, serif' }} className="text-2xl font-black tracking-tighter text-stone-950">
          SIXRAW <span style={{ fontFamily: 'system-ui, sans-serif' }} className="text-amber-600 text-xl font-normal tracking-normal ml-1">HOME DECOR</span>
        </div>
        <div className="flex gap-6 text-xs font-bold tracking-widest uppercase">
          <a href="#shop" className="hover:text-amber-600 transition text-stone-600">Shop</a>
          <a href="#manifesto" className="hover:text-amber-600 transition text-stone-600">Manifesto</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
         <div className="w-full bg-stone-950 text-stone-100 text-xs font-black uppercase tracking-[0.25em] py-3 px-4 rounded-xl flex items-center gap-3 border border-stone-800 shadow-inner">
  <span className="text-amber-500 text-sm">✦</span>
  <span>Unboring your space</span>
  <span className="hidden sm:inline text-stone-500 font-normal">| Manifesto Release No. 01</span>
</div>

          <h1 style={{ fontFamily: 'Georgia, serif' }} className="text-4xl md:text-6xl font-black text-stone-950 leading-tight">
            One-of-a-kind decor for people who refuse to blend in.
          </h1>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed font-normal">
            Welcome to home decor designed for modern urban living. We bridge the gap between budget-conscious renting and high-end design with original, customizable pieces that maximize your space without sacrificing your style. 
          </p>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed">
            Whether you are looking for a striking colorful ceramic, a custom quote sign that speaks your truth, or a space-saving collapsible wall desk, our minimalist collection is built to make your apartment feel unmistakably yours.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <a href="#shop" className="bg-stone-950 text-white font-bold tracking-wide uppercase text-xs px-8 py-4 rounded-lg shadow-xl hover:bg-amber-600 transition-all transform hover:-translate-y-0.5">
              Explore Collection
            </a>
            <a href="#manifesto" className="border-2 border-stone-300 text-stone-800 font-bold tracking-wide uppercase text-xs px-8 py-4 rounded-lg hover:border-stone-950 transition-all">
              Our Concept
            </a>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="h-72 bg-stone-900 rounded-2xl flex flex-col justify-end p-6 text-white shadow-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400">Handcrafted</span>
            <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-xl font-bold mt-1">Bold Textures</h3>
          </div>
          <div className="h-72 bg-amber-800 rounded-2xl flex flex-col justify-end p-6 text-white translate-y-8 shadow-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-200">Limited Run</span>
            <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-xl font-bold mt-1">Original Art</h3>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="shop" className="max-w-6xl mx-auto px-6 py-24 border-t border-stone-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 style={{ fontFamily: 'Georgia, serif' }} className="text-3xl font-black text-stone-950 tracking-tight">The Curated Release</h2>
            <p className="text-stone-500 mt-1">Customizable statement elements engineered for small urban spaces.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm group">
            <div className="h-80 bg-stone-900 rounded-xl mb-4 flex items-center justify-center text-stone-400 font-serif italic">
              [ Ceramic Display ]
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 style={{ fontFamily: 'Georgia, serif' }} className="font-bold text-lg text-stone-950">Striking Ceramics</h3>
                <p className="text-xs text-stone-500 mt-0.5">Vibrant reactive glaze finishes</p>
              </div>
              <span className="font-bold text-stone-950">$48+</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm group">
            <div className="h-80 bg-stone-100 rounded-xl mb-4 flex items-center justify-center text-stone-500 p-4 text-center font-serif border border-dashed border-stone-300">
              "Your Quote Here"
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 style={{ fontFamily: 'Georgia, serif' }} className="font-bold text-lg text-stone-950">Custom Quote Signs</h3>
                <p className="text-xs text-stone-500 mt-0.5">High-contrast modern typography</p>
              </div>
              <span className="font-bold text-stone-950">$65</span>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm group">
            <div className="h-80 bg-stone-900 rounded-xl mb-4 flex items-center justify-center text-stone-400 font-serif italic">
              [ Collapsible Mechanism ]
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 style={{ fontFamily: 'Georgia, serif' }} className="font-bold text-lg text-stone-950">Collapsible Wall Desk</h3>
                <p className="text-xs text-stone-500 mt-0.5">Premium oak wood minimal finish</p>
              </div>
              <span className="font-bold text-stone-950">$189</span>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section id="manifesto" className="bg-stone-950 text-stone-100 py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h2 style={{ fontFamily: 'Georgia, serif' }} className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white">
            "Your walls shouldn't look like a catalog, and your shelves shouldn't look like everyone else’s."
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-stone-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Discover bold textures, original artwork, and unexpected design details that start conversations and redefine your living space.
          </p>
        </div>
      </section>
    </main>
  );
}
