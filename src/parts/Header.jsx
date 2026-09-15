import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  // Helper function to handle active navigation styling
  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return isActive
      ? "text-sm font-semibold text-slate-900 border-b-2 border-indigo-600 pb-0.5"
      : "text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors";
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-black tracking-tight text-slate-900 hover:opacity-80">
            SNEAKER<span className="text-indigo-600">HUB.</span>
          </Link>
        </div>

        {/* Navigation Page Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={getLinkStyle('/')}>
            Home
          </Link>
          <Link to="/catalog" className={getLinkStyle('/catalog')}>
            Catalog
          </Link>
          <Link to="/contact" className={getLinkStyle('/contact')}>
            Contact
          </Link>
        </nav>

        {/* Right Section: Search & Actions */}
        <div className="flex items-center gap-3">
          
          {/* Search Bar */}
          <div className="relative hidden sm:block">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search sneakers..."
              className="w-48 lg:w-64 pl-9 pr-4 py-2 bg-slate-50 hover:bg-slate-100 focus:bg-white text-xs text-slate-800 rounded-full border border-slate-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
            />
          </div>

          {/* Cart Button */}
          <button className="relative flex items-center justify-center p-2 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-full transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* Account Icon */}
          <button className="p-2 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-full transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>

        </div>
      </div>
    </header>
  );
}