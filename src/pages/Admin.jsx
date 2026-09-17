import { useState } from "react";
import { Link } from "react-router-dom";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

const emptyForm = {
  brand: "",
  model: "",
  size: "",
  color: "",
  price: "",
  category: "Lifestyle",
  image: "",
  description: "",
  inStock: true,
};

export default function Admin({ shoes, onShoesChange }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem("sneakerhub-admin-auth") === "true",
  );
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [form, setForm] = useState(emptyForm);
  const [message, setMessage] = useState("");

  const login = (event) => {
    event.preventDefault();

    if (
      credentials.username === ADMIN_USERNAME &&
      credentials.password === ADMIN_PASSWORD
    ) {
      sessionStorage.setItem("sneakerhub-admin-auth", "true");
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Incorrect username or password.");
    }
  };

  const logout = () => {
    sessionStorage.removeItem("sneakerhub-admin-auth");
    setIsAuthenticated(false);
    setCredentials({ username: "", password: "" });
  };

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addProduct = (event) => {
    event.preventDefault();
    const nextId = Math.max(0, ...shoes.map((shoe) => Number(shoe.id))) + 1;
    const product = {
      ...form,
      id: nextId,
      size: Number(form.size),
      price: Number(form.price),
      images: [form.image],
    };

    onShoesChange([...shoes, product]);
    setForm(emptyForm);
    setMessage(`${product.brand} ${product.model} was added to the catalog.`);
  };

  const removeProduct = (id) => {
    onShoesChange(shoes.filter((shoe) => shoe.id !== id));
    setMessage("Product removed from the catalog.");
  };

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
        <form
          onSubmit={login}
          className="w-full max-w-md rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8"
        >
          <Link
            to="/"
            className="text-sm font-medium text-slate-500 hover:text-slate-900"
          >
            ← Back to store
          </Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
            Restricted area
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
            Admin login
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Sign in to manage the sneaker catalog.
          </p>

          <div className="mt-7 space-y-4">
            <Field
              label="Username"
              name="username"
              value={credentials.username}
              onChange={(event) =>
                setCredentials({ ...credentials, username: event.target.value })
              }
              autoComplete="username"
              required
            />
            <Field
              label="Password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={(event) =>
                setCredentials({ ...credentials, password: event.target.value })
              }
              autoComplete="current-password"
              required
            />
          </div>

          {loginError && (
            <p role="alert" className="mt-4 text-sm font-medium text-red-600">
              {loginError}
            </p>
          )}
          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
          >
            Log in
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Link
              to="/"
              className="text-sm font-medium text-slate-500 hover:text-slate-900"
            >
              ← Back to store
            </Link>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              Store management
            </p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Add products
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Create a listing and publish it directly to your catalog.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-slate-900 px-5 py-4 text-white shadow-sm">
              <p className="text-xs font-medium text-slate-400">
                Total products
              </p>
              <p className="mt-1 text-2xl font-bold">{shoes.length}</p>
            </div>
            <button
              type="button"
              onClick={logout}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-600 transition hover:border-red-200 hover:text-red-600"
            >
              Log out
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)]">
          <form
            onSubmit={addProduct}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Brand"
                name="brand"
                value={form.brand}
                onChange={updateField}
                placeholder="e.g. Nike"
                required
              />
              <Field
                label="Model"
                name="model"
                value={form.model}
                onChange={updateField}
                placeholder="e.g. Air Max 1"
                required
              />
              <Field
                label="Size"
                name="size"
                type="number"
                min="1"
                max="60"
                value={form.size}
                onChange={updateField}
                placeholder="42"
                required
              />
              <Field
                label="Price (₾)"
                name="price"
                type="number"
                min="0"
                step="1"
                value={form.price}
                onChange={updateField}
                placeholder="350"
                required
              />
              <Field
                label="Color"
                name="color"
                value={form.color}
                onChange={updateField}
                placeholder="White / Black"
                required
              />
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-xs font-semibold text-slate-700"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={updateField}
                  className={inputClass}
                >
                  <option>Lifestyle</option>
                  <option>Running</option>
                  <option>Basketball</option>
                  <option>Skate</option>
                  <option>Classic</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <Field
                  label="Image URL"
                  name="image"
                  type="url"
                  value={form.image}
                  onChange={updateField}
                  placeholder="https://..."
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="mb-2 block text-xs font-semibold text-slate-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={updateField}
                  rows="4"
                  placeholder="Tell customers about this pair..."
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <label className="mt-5 flex items-center gap-3 text-sm font-medium text-slate-700">
              <input
                type="checkbox"
                name="inStock"
                checked={form.inStock}
                onChange={updateField}
                className="h-4 w-4 accent-indigo-600"
              />
              Available in stock
            </label>

            <button
              type="submit"
              className="mt-7 w-full rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
            >
              Add product to catalog
            </button>
            {message && (
              <p
                role="status"
                className="mt-4 text-center text-sm font-medium text-emerald-600"
              >
                {message}
              </p>
            )}
          </form>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-bold text-slate-900">
                Catalog inventory
              </h2>
              <Link
                to="/catalog"
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
              >
                View store
              </Link>
            </div>
            <div className="mt-5 divide-y divide-slate-100">
              {shoes
                .slice()
                .reverse()
                .map((shoe) => (
                  <div
                    key={shoe.id}
                    className="flex items-center gap-3 py-4 first:pt-0"
                  >
                    <img
                      src={shoe.image}
                      alt=""
                      className="h-14 w-14 rounded-xl bg-slate-100 object-contain"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-slate-900">
                        {shoe.brand} {shoe.model}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {shoe.price} ₾ ·{" "}
                        {shoe.inStock ? "In stock" : "Sold out"}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeProduct(shoe.id)}
                      className="text-xs font-semibold text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100";

function Field({ label, name, type = "text", ...props }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold text-slate-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={inputClass}
        {...props}
      />
    </div>
  );
}
