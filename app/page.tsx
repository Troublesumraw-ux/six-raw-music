import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-200">
      {/* Navigation Bar */}
      <nav className="border-b border-stone-200 bg-white sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-stone-950">
          SIXRAW <span className="text-amber-600">HOME DECOR</span>
        </div>
        <div className="flex gap-6 text-sm font-medium tracking-wide uppercase">
          <a href="#shop" className="hover:text-amber-600 transition">Shop Collection</a>
          <a href="#manifesto" className="hover:text-amber-600 transition">Our Manifesto</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
            Unboring your space
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-stone-950 leading-tight">
            One-of-a-kind decor for people who refuse to blend in.
          </h1>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed">
            Welcome to home decor designed for modern urban living. We bridge the gap between budget-conscious renting and high-end design with original, customizable pieces that maximize your space without sacrificing your style. 
          </p>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed">
            Whether you are looking for a striking colorful ceramic, a custom quote sign that speaks your truth, or a space-saving collapsible wall desk, our minimalist collection is built to make your apartment feel unmistakably yours.
          </p>
          <div className="pt-2">
            <a href="#shop" className="bg-stone-950 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-stone-800 transition-all inline-block">
              Shop Minimalist Collection
            </a>
          </div>
        </div>

        {/* Hero Visual Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="h-64 bg-stone-200 rounded-2xl flex items-center justify-center font-bold text-stone-500 p-4 text-center italic shadow-sm border border-stone-200">
            [ Striking Ceramics ]
          </div>
          <div className="h-64 bg-stone-300 rounded-2xl flex items-center justify-center font-bold text-stone-500 p-4 text-center italic translate-y-6 shadow-sm border border-stone-200">
            [ Custom Quote Signs ]
          </div>
        </div>
      </section>

      {/* Product Collection Grid */}
      <section id="shop" className="max-w-6xl mx-auto px-6 py-16 border-t border-stone-200">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight">The Core Collection</h2>
          <p className="text-stone-500 mt-2">Customizable essentials built for small spaces.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="h-80 bg-stone-200 rounded-xl mb-4 border border-stone-200 flex items-center justify-center text-stone-400 group-hover:opacity-90 transition">
              [ Product Image ]
            </div>
            <h3 className="font-bold text-lg text-stone-950">Colorful Ceramics</h3>
            <p className="text-sm text-stone-500">Striking finishes, handcrafted shapes</p>
          </div>

          <div className="group cursor-pointer">
            <div className="h-80 bg-stone-200 rounded-xl mb-4 border border-stone-200 flex items-center justify-center text-stone-400 group-hover:opacity-90 transition">
              [ Product Image ]
            </div>
            <h3 className="font-bold text-lg text-stone-950">Custom Quote Signs</h3>
            <p className="text-sm text-stone-500">Tailored typography that speaks your truth</p>
          </div>

          <div className="group cursor-pointer">
            <div className="h-80 bg-stone-200 rounded-xl mb-4 border border-stone-200 flex items-center justify-center text-stone-400 group-hover:opacity-90 transition">
              [ Product Image ]
            </div>
            <h3 className="font-bold text-lg text-stone-950">Collapsible Wall Desk</h3>
            <p className="text-sm text-stone-500">Space-saving minimalist work stations</p>
          </div>
        </div>
      </section>

      {/* Brand Manifesto Callout */}
      <section id="manifesto" className="bg-stone-950 text-stone-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            "Your walls shouldn't look like a catalog, and your shelves shouldn't look like everyone else’s."
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto text-base">
            Discover bold textures, original artwork, and unexpected design details that start conversations and redefine your living space.
          </p>
        </div>
      </section>
    </main>
  );
}
