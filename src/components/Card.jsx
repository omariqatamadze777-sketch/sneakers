
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Card({ shoe }) {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [gmail, setGmail] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendOrder = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const formData = new FormData();

      formData.append(
        "access_key",
        "525e9c30-7a0e-4bd8-bd33-f088cd979f92"
      );

      formData.append(
        "subject",
        `New Order - ${shoe.brand} ${shoe.model}`
      );

      formData.append("email", gmail);
      formData.append("message", description);

      formData.append(
        "product",
        `${shoe.brand} ${shoe.model}`
      );

      formData.append("price", `${shoe.price} ₾`);
      formData.append("size", shoe.size);
      formData.append("color", shoe.color);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      const data = await response.json();

      console.log("Web3Forms:", data);

      if (data.success) {
        setStatus("Order sent successfully! ✅");
        setGmail("");
        setDescription("");
      } else {
        setStatus(data.message || "Failed to send order.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      {/* PRODUCT CARD */}
      <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        {/* IMAGE */}
        <Link to={`/catalog/${shoe.id}`}>
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-stone-100 via-white to-slate-100 p-3">

            <img
              src={shoe.image}
              alt={`${shoe.brand} ${shoe.model}`}
              loading="lazy"
              className="h-full w-full object-contain mix-blend-multiply transition duration-500 group-hover:scale-105"
            />

            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
              {shoe.category}
            </span>

            {!shoe.inStock && (
              <span className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                Sold out
              </span>
            )}
          </div>
        </Link>

        {/* BODY */}
        <div className="flex flex-1 flex-col p-4">

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            {shoe.brand}
          </p>

          <h2 className="mt-1 text-base font-semibold text-gray-900">
            {shoe.model}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {shoe.color} · Size {shoe.size}
          </p>

          {/* PRICE */}
          <div className="mt-auto flex items-center justify-between pt-4">
            <span className="text-lg font-bold text-gray-900">
              {shoe.price} ₾
            </span>

            <Link
              to={`/catalog/${shoe.id}`}
              className="text-sm font-medium text-indigo-600 hover:underline"
            >
              View details →
            </Link>
          </div>

          {/* BUTTONS */}
          <div className="mt-4 flex gap-2">

            <Link
              to={`/catalog/${shoe.id}`}
              className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              View
            </Link>

            <button
              type="button"
              disabled={!shoe.inStock}
              onClick={() => {
                setShowOrderForm(true);
                setStatus("");
              }}
              className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold text-white transition ${
                shoe.inStock
                  ? "bg-black hover:bg-gray-800"
                  : "cursor-not-allowed bg-gray-400"
              }`}
            >
              {shoe.inStock ? "Add to Cart" : "Sold Out"}
            </button>

          </div>
        </div>
      </div>

      {/* ORDER POPUP */}
      {showOrderForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setShowOrderForm(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER */}
            <div className="mb-6 flex items-center justify-between">

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Order This Sneaker
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {shoe.brand} {shoe.model}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowOrderForm(false)}
                className="text-3xl text-gray-400 hover:text-black"
              >
                ×
              </button>

            </div>

            {/* PRODUCT */}
            <div className="mb-6 rounded-xl bg-gray-100 p-4">
              <div className="flex gap-4">

                <img
                  src={shoe.image}
                  alt={shoe.model}
                  className="h-20 w-20 rounded-lg bg-white object-contain"
                />

                <div>
                  <p className="font-bold text-gray-900">
                    {shoe.brand} {shoe.model}
                  </p>

                  <p className="text-sm text-gray-500">
                    Size: {shoe.size}
                  </p>

                  <p className="text-sm text-gray-500">
                    Color: {shoe.color}
                  </p>

                  <p className="mt-1 font-bold">
                    {shoe.price} ₾
                  </p>
                </div>

              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={sendOrder}
              className="space-y-4"
            >

              {/* GMAIL */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Your Gmail
                </label>

                <input
                  type="email"
                  value={gmail}
                  onChange={(e) => setGmail(e.target.value)}
                  placeholder="example@gmail.com"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Description
                </label>

                <textarea
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                  placeholder="Write what you want to tell us..."
                  rows="5"
                  required
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              {/* SEND */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading
                  ? "Sending..."
                  : "Send Order"}
              </button>

            </form>

            {/* STATUS */}
            {status && (
              <div className="mt-4 rounded-xl bg-gray-100 p-4 text-center text-sm font-medium text-gray-800">
                {status}
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}

