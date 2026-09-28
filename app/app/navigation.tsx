"use client";

import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Finance", href: "/finance" },
  { label: "Business", href: "/business" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Account", href: "/account" },
];

export default function Navigation() {
  return (
    <nav className="border-b bg-white">
      <div className="container flex gap-2 overflow-x-auto py-3">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
