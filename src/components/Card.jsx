import { Link } from "react-router-dom";

// Renders ONE product. The Catalog page maps over the list and renders many cards.
export default function Card({ shoe }) {
  return (
    <Link
      to={`/catalog/${shoe.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-stone-100 via-white to-slate-100 p-3">
        <img
          src={shoe.image}
          alt={`${shoe.brand} ${shoe.model}`}
          loading="lazy"
          className="h-full w-full object-contain mix-blend-multiply transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
          {shoe.category}
        </span>

        {!shoe.inStock && (
          <span className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
            Sold out
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          {shoe.brand}
        </p>
        <h2 className="text-base font-semibold text-gray-900 transition group-hover:text-indigo-600">
          {shoe.model}
        </h2>
        <p className="text-sm text-gray-500">
          {shoe.color} · Size {shoe.size}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-bold text-gray-900">
            {shoe.price} ₾
          </span>
          <span className="text-sm font-medium text-indigo-600 group-hover:underline">
            View details →
          </span>
        </div>
      </div>
    </Link>
  );
}
