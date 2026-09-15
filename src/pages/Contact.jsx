import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/"
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Page Title */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Have questions about sizing, orders, or stock? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          
          {/* Left Column: Contact Info Cards */}
          <div className="space-y-6 lg:col-span-1">
            
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 font-bold text-lg">
                📍
              </div>
              <h3 className="font-bold text-slate-900">Visit Our Store</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                Rustaveli Avenue 24<br />
                Tbilisi, Georgia
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 font-bold text-lg">
                📞
              </div>
              <h3 className="font-bold text-slate-900">Call Us</h3>
              <p className="mt-1 text-xs text-slate-500">
                +995 (32) 200-0000
              </p>
              <p className="mt-0.5 text-[11px] text-slate-400">
                Mon - Sun: 10:00 AM - 8:00 PM
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 font-bold text-lg">
                ✉️
              </div>
              <h3 className="font-bold text-slate-900">Email Support</h3>
              <p className="mt-1 text-xs text-slate-500">
                support@sneakerhub.ge
              </p>
              <p className="mt-0.5 text-[11px] text-slate-400">
                Average reply time: 2 hours
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm lg:col-span-2">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-2xl text-emerald-600">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
                <p className="mt-2 max-w-md text-xs text-slate-500">
                  Thank you for reaching out. Our support team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-lg font-bold text-slate-900">Send us a message</h2>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Subject
                  </label>
                  <select className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all">
                    <option>General Inquiry</option>
                    <option>Order Status / Shipping</option>
                    <option>Size & Fit Questions</option>
                    <option>Returns & Exchange</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="How can we help you?"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-slate-900 py-3.5 text-xs font-bold text-white hover:bg-indigo-600 shadow-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}