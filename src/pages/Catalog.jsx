import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Catalog({ shoes }) {
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [maxPrice, setMaxPrice] = useState(600);

  // Extract unique sizes sorted numerically
  const sizes = [...new Set(shoes.map((shoe) => shoe.size))].sort(
    (a, b) => a - b,
  );

  // Extract unique colors (handles combined colors like "Black/White")
  const colors = [
    ...new Set(
      shoes.flatMap((shoe) =>
        shoe.color.split("/").map((color) => color.trim()),
      ),
    ),
  ].sort();

  // Filter sneakers base on active controls
  const filteredShoes = shoes.filter((shoe) => {
    const matchesSize =
      selectedSize === "All" || shoe.size === Number(selectedSize);

    const matchesColor =
      selectedColor === "All" ||
      shoe.color
        .split("/")
        .map((color) => color.trim())
        .includes(selectedColor);

    const matchesPrice = shoe.price <= Number(maxPrice);

    return matchesSize && matchesColor && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* HEADER */}
        <header className="mb-8">
          <Link
            to="/"
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            ← Back to Home
          </Link>

          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Sneaker Catalog
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Showing {filteredShoes.length} of {shoes.length} products
          </p>
        </header>

        {/* FILTERS PANEL */}
        <section className="mb-8 rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Filters</h2>

            <button
              type="button"
              onClick={() => {
                setSelectedSize("All");
                setSelectedColor("All");
                setMaxPrice(600);
              }}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Clear filters
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* SIZE FILTER */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Size
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
              >
                <option value="All">All sizes</option>
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    Size {size}
                  </option>
                ))}
              </select>
            </div>

            {/* COLOR FILTER */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Color
              </label>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
              >
                <option value="All">All colors</option>
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>

            {/* PRICE FILTER */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Max Price: {maxPrice} ₾
              </label>
              <input
                type="range"
                min="0"
                max="600"
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full cursor-pointer accent-indigo-600"
              />
              <div className="mt-1 flex justify-between text-[11px] text-slate-400">
                <span>0 ₾</span>
                <span>600 ₾</span>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT GRID */}
        {filteredShoes.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredShoes.map((shoe) => (
              <Card key={shoe.id} shoe={shoe} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900">
              No sneakers found
            </h2>
            <p className="mt-2 text-xs text-slate-500">
              Try adjusting or clearing your size, color, or price filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedSize("All");
                setSelectedColor("All");
                setMaxPrice(600);
              }}
              className="mt-5 rounded-xl bg-slate-900 px-5 py-3 text-xs font-semibold text-white transition hover:bg-indigo-600"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
