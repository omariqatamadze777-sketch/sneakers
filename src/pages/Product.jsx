import { Link, useParams } from "react-router-dom";
import { shoes } from "../data/shoes";

export default function Product() {
  const { id } = useParams();

  // URL params are strings, ids in the data are numbers.
  const product = shoes.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-50 px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <p className="text-gray-500">There is no product with id “{id}”.</p>
        <Link
          to="/catalog"
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
        >
          Back to catalog
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          to="/catalog"
          className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 transition hover:text-gray-900"
        >
          ← Back to catalog
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-stone-100 via-white to-slate-100 p-4 shadow-sm ring-1 ring-gray-200">
              <img
                src={product.image}
                alt={`${product.brand} ${product.model}`}
                className="h-full w-full object-contain mix-blend-multiply"
              />
            </div>

            {product.images.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-4">
                {product.images.map((src, index) => (
                  <div
                    key={src}
                    className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-stone-100 via-white to-slate-100 p-3 shadow-sm ring-1 ring-gray-200"
                  >
                    <img
                      src={src}
                      alt={`${product.brand} ${product.model} view ${index + 2}`}
                      className="h-full w-full object-contain mix-blend-multiply transition duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <span className="w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              {product.category}
            </span>

            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
              {product.brand}
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {product.model}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">
                {product.price} ₾
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  product.inStock
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {product.inStock ? "In stock" : "Sold out"}
              </span>
            </div>

            <p className="mt-6 leading-relaxed text-gray-600">
              {product.description}
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-gray-200 py-6">
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-500">
                  Size
                </dt>
                <dd className="mt-1 font-semibold text-gray-900">
                  EU {product.size}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-500">
                  Color
                </dt>
                <dd className="mt-1 font-semibold text-gray-900">
                  {product.color}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-500">
                  Category
                </dt>
                <dd className="mt-1 font-semibold text-gray-900">
                  {product.category}
                </dd>
              </div>
            </dl>

            <button
              type="button"
              disabled={!product.inStock}
              className="mt-8 w-full rounded-xl bg-gray-900 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-300 sm:w-auto"
            >
              {product.inStock ? "Add to cart" : "Out of stock"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
