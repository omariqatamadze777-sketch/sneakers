import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
      {/* Decorative Glow Effects */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* Left Column: Text & CTAs */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              New Season Drop
            </span>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Unleash Your <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sneaker Game.
              </span>
            </h1>

            <p className="mx-auto max-w-lg text-base text-slate-400 sm:text-lg lg:mx-0">
              Shop authentic sneakers from Nike, Adidas, Jordan, and designer streetwear collections with fast nationwide delivery.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                to="/catalog"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 hover:shadow-indigo-500/40 transition-all active:scale-95"
              >
                Shop Catalog →
              </Link>
              <a
                href="#categories"
                className="inline-flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 px-8 py-3.5 text-sm font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition-all"
              >
                Explore Brands
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800 text-center lg:text-left">
              <div>
                <p className="text-2xl font-black text-white">100%</p>
                <p className="text-xs text-slate-400">Authentic</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">14+</p>
                <p className="text-xs text-slate-400">Sneaker Models</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">24h</p>
                <p className="text-xs text-slate-400">Fast Shipping</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl bg-slate-800/80 p-6 backdrop-blur-xl border border-slate-700/50 shadow-2xl group">
              
              {/* Badge */}
              <span className="absolute top-4 left-4 z-10 rounded-full bg-indigo-600 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-md">
                Featured Item
              </span>

              {/* Shoe Showcase Image */}
              <div className="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl bg-slate-900/50 p-4">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
                  alt="Nike Air Max 270 Hero Showcase"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                />
              </div>

              {/* Item Info Footer */}
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                    Nike
                  </span>
                  <h3 className="text-lg font-bold text-white">Air Max 270</h3>
                  <p className="text-xs text-slate-400">White / Orange · Size 42</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-white">350 ₾</span>
                  <Link
                    to="/catalog/1"
                    className="block text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors mt-0.5"
                  >
                    View Details →
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}