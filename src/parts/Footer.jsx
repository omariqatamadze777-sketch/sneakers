import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="text-xl font-black tracking-tight text-slate-900">
              SNEAKER<span className="text-indigo-600">HUB.</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Your premier destination for authentic sneakers, performance footwear, and streetwear essentials.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Shop Categories
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/catalog" className="hover:text-slate-900 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-slate-900 transition-colors">
                  Running
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-slate-900 transition-colors">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-slate-900 transition-colors">
                  Basketball
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Customer Care
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Stay in the loop
            </h3>
            <p className="mt-4 text-sm text-slate-500">
              Subscribe to get special offers, free giveaways, and deal alerts.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
              <button
                type="submit"
                className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-colors"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-100 pt-6 sm:flex-row">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} SneakerHub. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 sm:mt-0 text-xs text-slate-400">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}