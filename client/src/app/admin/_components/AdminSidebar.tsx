"use client";

import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside
      className="
        w-65
        min-h-screen
        bg-black
        text-white
        p-6
      "
    >
      <h1
        className="
          text-2xl
          font-semibold
          tracking-[5px]
          mb-10
        "
      >
        KIAN
      </h1>

      <nav className="space-y-2">
        <Link
          href="/admin"
          className="block px-4 py-3 hover:bg-white/10 rounded"
        >
          Dashboard
        </Link>

        <Link
          href="/admin/categories"
          className="block px-4 py-3 hover:bg-white/10 rounded"
        >
          Categories
        </Link>

        <Link
          href="/admin/products"
          className="block px-4 py-3 hover:bg-white/10 rounded"
        >
          Products
        </Link>

        <Link
          href="/admin/orders"
          className="block px-4 py-3 hover:bg-white/10 rounded"
        >
          Orders
        </Link>

        <Link
          href="/admin/customers"
          className="block px-4 py-3 hover:bg-white/10 rounded"
        >
          Customers
        </Link>
      </nav>
    </aside>
  );
}