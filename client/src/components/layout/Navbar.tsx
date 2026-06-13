"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Search,
  ShoppingBag,
  User,
} from "lucide-react";

import Container from "@/components/layout/Container";
import useAuthStore from "@/features/auth/store/authStore";

export default function Navbar() {
  const router = useRouter();

  const {
    isAuthenticated,
    logout,
  } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav className="bg-[#121212] text-white border-b border-white/10">
      <Container>
        {/* Logo */}
        <div className="flex justify-center pt-4 pb-4">
          <Link
            href="/"
            className="
              text-[24px]
              font-semibold
              tracking-[10px]
              uppercase
              hover:opacity-80
              transition
            "
          >
            KIAN
          </Link>
        </div>

        {/* Menu Row */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-[60px]">
          {/* Left */}
          <div className="flex items-center justify-start pl-8 gap-5">
            <button className="hover:opacity-70 transition">
              <Search
                size={24}
                strokeWidth={1.5}
              />
            </button>
          </div>

          {/* Center */}
          <div
            className="
              flex
              items-center
              justify-center
              gap-10
              text-[14px]
              tracking-[0.5px]
              whitespace-nowrap
            "
          >
            <Link
              href="/"
              className="
                text-white
                border-b
                border-white
                pb-1
              "
            >
              Home
            </Link>

            <button className="text-white/75 hover:text-white transition">
              Men
            </button>

            <button className="text-white/75 hover:text-white transition">
              Women
            </button>

            <button className="text-white/75 hover:text-white transition">
              Punjabi
            </button>

            <button className="text-white/75 hover:text-white transition">
              Kids
            </button>

            <button className="text-white/75 hover:text-white transition">
              Accessories
            </button>

            <button className="text-white/75 hover:text-white transition">
              Watches
            </button>

            <button className="text-white/75 hover:text-white transition">
              Shoes
            </button>

            <button className="text-white/75 hover:text-white transition">
              Others
            </button>
          </div>

          {/* Right */}
          <div className="flex items-center justify-end gap-5">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="hover:opacity-70 transition"
              >
                <User
                  size={24}
                  strokeWidth={1.5}
                />
              </button>
            ) : (
              <Link
                href="/login"
                className="hover:opacity-70 transition"
              >
                <User
                  size={24}
                  strokeWidth={1.5}
                />
              </Link>
            )}

            <Link
              href="/cart"
              className="hover:opacity-70 transition"
            >
              <ShoppingBag
                size={24}
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}