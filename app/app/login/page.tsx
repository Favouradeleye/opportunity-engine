"use client";

import { useState } from "react";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="container flex min-h-[80vh] items-center justify-center py-10">
        <div className="card w-full max-w-md">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900">
              Opportunity Engine
            </h1>

            <p className="mt-2 text-slate-600">
              {mode === "login"
                ? "Sign in to your account."
                : "Create your Opportunity Engine account."}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 rounded-lg bg-slate-100 p-1">
            <button
              onClick={() => setMode("login")}
              className={`rounded-md px-4 py-2 text-sm font-semibold ${
                mode === "login"
                  ? "bg-white shadow-sm"
                  : "text-slate-500"
              }`}
            >
              Sign in
            </button>

            <button
              onClick={() => setMode("signup")}
              className={`rounded-md px-4 py-2 text-sm font-semibold ${
                mode === "signup"
                  ? "bg-white shadow-sm"
                  : "text-slate-500"
              }`}
            >
              Create account
            </button>
          </div>

          <form className="mt-6 space-y-4">
            {mode === "signup" && (
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-700"
                >
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600"
                  placeholder="Your name"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold text-slate-700"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                autoComplete="email"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-semibold text-slate-700"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                autoComplete={
                  mode === "login" ? "current-password" : "new-password"
                }
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600"
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="primary-button w-full">
              {mode === "login" ? "Sign in" : "Create account"}
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-slate-500">
            Financial transactions and sensitive verification will require
            additional security controls.
          </p>
        </div>
      </section>
    </main>
  );
                }
