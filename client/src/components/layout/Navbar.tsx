import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">
          KIAN Ecommerce
        </h1>

        <div className="flex gap-4">
          <Link href="/">Home</Link>

          <Link href="/products">
            Products
          </Link>

          <Link href="/cart">
            Cart
          </Link>

          <Link href="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}