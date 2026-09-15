import { Link } from "react-router-dom";
import Card from "../components/Card";
import { shoes } from "../data/shoes";

export default function Catalog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Title Header Section */}
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Link
              to="/"
              className="text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              ← Home
            </Link>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sneaker Catalog
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              {shoes.length} products · click a card to see details
            </p>
          </div>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shoes.map((shoe) => (
            <Card key={shoe.id} shoe={shoe} />
          ))}
        </div>
      </main>
    </div>
  );
}