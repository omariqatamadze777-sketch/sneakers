import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    // Web3Forms Access Key
    formData.append("access_key", "525e9c30-7a0e-4bd8-bd33-f088cd979f92");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error submitting form. Please check your connection.");
    } finally {
      setLoading(false);
    }
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

          {/* Right Column: Active Web3Forms Contact Form */}
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm lg:col-span-2">
            <form onSubmit={onSubmit} className="space-y-6">
              <h2 className="text-lg font-bold text-slate-900">Send us a message</h2>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
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
                    name="email"
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
                <select 
                  name="subject"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Order Status / Shipping">Order Status / Shipping</option>
                  <option value="Size & Fit Questions">Size & Fit Questions</option>
                  <option value="Returns & Exchange">Returns & Exchange</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="How can we help you?"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-slate-900 py-3.5 text-xs font-bold text-white hover:bg-indigo-600 shadow-md transition-colors disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit Form"}
              </button>

              {/* Status Banner */}
              {result && (
                <div 
                  className={`mt-4 rounded-xl p-3 text-center text-xs font-semibold ${
                    result === "Form Submitted Successfully"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-amber-50 text-amber-800 border border-amber-200"
                  }`}
                >
                  {result}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}