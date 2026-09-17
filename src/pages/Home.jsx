import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Home({ shoes }) {
  // Grab top 4 featured sneakers for the homepage preview
  const featuredShoes = shoes.slice(0, 4);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <span className="inline-block rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-semibold text-indigo-600 tracking-wide">
                NEW SEASON ARRIVALS
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-slate-900">
                Elevate Your <br className="hidden sm:inline" />
                <span className="text-indigo-600">Street Style.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-500 max-w-lg mx-auto lg:mx-0">
                Discover the latest drops in lifestyle, running, and basketball
                sneakers from top iconic global brands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link
                  to="/catalog"
                  className="rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-all text-center"
                >
                  Shop Full Catalog
                </Link>
                <a
                  href="#categories"
                  className="rounded-full bg-slate-100 px-8 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition-all text-center"
                >
                  Explore Categories
                </a>
              </div>
            </div>

            {/* Featured Hero Banner Card */}
            <div className="relative flex justify-center">
              <div className="relative rounded-3xl bg-slate-100 p-8 w-full max-w-md shadow-xl overflow-hidden group">
                <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm">
                  Hot Drop
                </span>
                <img
                  src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800"
                  alt="Nike Air Max Hero"
                  className="w-full h-64 sm:h-72 object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="mt-4 flex justify-between items-end">
                  <div>
                    <p className="text-xs font-semibold text-indigo-600 uppercase">
                      Nike
                    </p>
                    <h3 className="text-xl font-bold text-slate-900">
                      Air Max 270
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-slate-900">350 ₾</p>
                    <Link
                      to="/catalog"
                      className="text-xs font-semibold text-indigo-600 hover:underline"
                    >
                      View in Catalog →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES SECTION */}
      <section
        id="categories"
        className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Shop by Category
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Browse our collection by wear type
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              name: "Running",
              count: "12 Items",
              bg: "bg-blue-50 text-blue-700",
            },
            {
              name: "Lifestyle",
              count: "24 Items",
              bg: "bg-emerald-50 text-emerald-700",
            },
            {
              name: "Basketball",
              count: "8 Items",
              bg: "bg-orange-50 text-orange-700",
            },
            {
              name: "Skate",
              count: "6 Items",
              bg: "bg-purple-50 text-purple-700",
            },
          ].map((cat, idx) => (
            <Link
              key={idx}
              to="/catalog"
              className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm mb-4 ${cat.bg}`}
              >
                {cat.name[0]}
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1">{cat.count}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. TOP TRENDING PREVIEW */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Top Trending
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Handpicked sneakers popular right now
              </p>
            </div>
            <Link
              to="/catalog"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              See all {shoes.length} items →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredShoes.map((shoe) => (
              <Card key={shoe.id} shoe={shoe} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. PERKS SECTION */}
      <section className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 mb-4 text-xl">
              ⚡
            </div>
            <h4 className="font-bold text-slate-900">Fast Delivery</h4>
            <p className="text-xs text-slate-500 mt-2">
              Quick courier shipping directly across Georgia.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 mb-4 text-xl">
              ✓
            </div>
            <h4 className="font-bold text-slate-900">100% Authentic</h4>
            <p className="text-xs text-slate-500 mt-2">
              All shoes are verified original products only.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 mb-4 text-xl">
              🔄
            </div>
            <h4 className="font-bold text-slate-900">Easy Returns</h4>
            <p className="text-xs text-slate-500 mt-2">
              14-day hassle-free size exchange policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
