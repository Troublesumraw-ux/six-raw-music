import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-200">
      {/* Dynamic Announcement Bar */}
      <div className="bg-amber-600 text-white px-4 py-2 text-center text-xs font-bold tracking-widest uppercase">
        ⚡ FREE SHIPPING ON CUSTOM CURATED SETS THIS WEEK
      </div>

      {/* Modern High-Contrast Navigation */}
      <nav className="border-b border-stone-200 bg-white sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="text-2xl font-black tracking-tighter text-stone-950 font-serif">
          SIXRAW <span className="text-amber-600 font-sans text-xl font-normal">HOME DECOR</span>
        </div>
        <div className="flex gap-6 text-xs font-bold tracking-widest uppercase">
          <a href="#shop" className="hover:text-amber-600 transition text-stone-600">Shop</a>
          <a href="#manifesto" className="hover:text-amber-600 transition text-stone-600">Manifesto</a>
        </div>
      </nav>

      {/* Premium Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block bg-stone-950 text-stone-100 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            📍 UNBORING YOUR SPACE
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-stone-950 leading-tight font-serif">
            One-of-a-kind decor for people who <span className="underline decoration-amber-500 decoration-wavy">refuse to blend in</span>.
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

        {/* Interactive Feature Visual Display */}
        <div className="grid grid-cols-2 gap-4 relative">
          <div className="h-72 bg-gradient-to-br from-stone-800 to-stone-950 rounded-2xl flex flex-col justify-end p-6 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-amber-600/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400">Handcrafted</span>
            <h3 className="font-serif text-xl font-bold mt-1">Bold Textures</h3>
          </div>
          <div className="h-72 bg-gradient-to-tr from-amber-700 to-amber-900 rounded-2xl flex flex-col justify-end p-6 text-white translate-y-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <span className="text-xs uppercase font-bold tracking-widest text-amber-200">Limited Run</span>
            <h3 className="font-serif text-xl font-bold mt-1">Original Art</h3>
          </div>
        </div>
      </section>

      {/* Alive Dynamic Product Grid */}
      <section id="shop" className="max-w-6xl mx-auto px-6 py-24 border-t border-stone-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-black text-stone-950 tracking-tight font-serif">The Curated Release</h2>
            <p className="text-stone-500 mt-1">Customizable statement elements engineered for small urban spaces.</p>
          </div>
          <span className="text-xs font-bold tracking-widest uppercase text-amber-600 mt-4 md:mt-0 border-b-2 border-amber-600 pb-1">
            Browse All Items (3)
          </span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="h-80 bg-stone-900 rounded-xl mb-4 flex flex-col justify-between p-4 text-white relative overflow-hidden">
              <span className="bg-amber-500 text-stone-950 font-bold text-[10px] tracking-widest uppercase px-2 py-1 rounded self-start z-10">Best Seller</span>
              <div className="text-center italic font-serif text-stone-400 my-auto text-sm">[ Ceramic Display ]</div>
              <button className="bg-white text-stone-950 font-bold text-xs uppercase tracking-wide py-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                Quick View
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-stone-950 group-hover:text-amber-600 transition font-serif">Striking Ceramics</h3>
                <p className="text-xs text-stone-500 mt-0.5">Vibrant reactive glaze finishes</p>
              </div>
              <span className="font-bold text-stone-950">$48+</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="h-80 bg-stone-100 rounded-xl mb-4 flex flex-col justify-between p-4 text-stone-950 relative overflow-hidden">
              <span className="bg-stone-950 text-white font-bold text-[10px] tracking-widest uppercase px-2 py-1 rounded self-start z-10">Customizable</span>
              <div className="text-center font-serif text-stone-500 my-auto p-4 border border-dashed border-stone-300 rounded-lg">
                "Your Quote Here"
              </div>
              <button className="bg-stone-950 text-white font-bold text-xs uppercase tracking-wide py-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                Personalize Sign
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-stone-950 group-hover:text-amber-600 transition font-serif">Custom Quote Signs</h3>
                <p className="text-xs text-stone-500 mt-0.5">High-contrast bold modern typography</p>
              </div>
              <span className="font-bold text-stone-950">$65</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="h-80 bg-stone-900 rounded-xl mb-4 flex flex-col justify-between p-4 text-white relative overflow-hidden">
              <span className="bg-amber-500 text-stone-950 font-bold text-[10px] tracking-widest uppercase px-2 py-1 rounded self-start z-10">Space Saver</span>
              <div className="text-center italic font-serif text-stone-400 my-auto text-sm">[ Collapsible Mechanism ]</div>
              <button className="bg-white text-stone-950 font-bold text-xs uppercase tracking-wide py-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                See Dimensions
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-stone-950 group-hover:text-amber-600 transition font-serif">Collapsible Wall Desk</h3>
                <p className="text-xs text-stone-500 mt-0.5">Premium oak wood minimal finish</p>
              </div>
              <span className="font-bold text-stone-950">$189</span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Manifesto Callout Banner */}
      <section id="manifesto" className="bg-gradient-to-br from-stone-900 to-stone-950 text-stone-100 py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 text-stone-800/20 text-9xl font-black select-none pointer-events-none font-serif translate-x-10 translate-y-10">
          SIXRAW
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight font-serif text-white">
            "Your walls shouldn't look like a catalog, and your shelves shouldn't look like everyone else’s."
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-stone-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Discover bold textures, original artwork, and unexpected design details that start conversations and redefine your living space.
