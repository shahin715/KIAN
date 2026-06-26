"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  ShoppingBag,
  User,
} from "lucide-react";

import Container from "@/components/layout/Container";
import NavDropdown from "@/components/layout/NavDropdown";
import SearchOverlay from "@/components/layout/SearchOverlay";
import { navigation } from "@/constants/navigation";
import useAuthStore from "@/features/auth/store/authStore";

export default function Navbar() {
  const router = useRouter();

  const [searchOpen, setSearchOpen] =
    useState(false);

  const {
    isAuthenticated,
    logout,
  } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <>
      <nav className="bg-[#222222] text-white border-b border-white/10">
        <Container>
          {/* Logo */}
          <div className="flex justify-center py-4">
            <Link
              href="/"
              className="
                text-[24px]
                font-semibold
                tracking-[6px]
                uppercase
                hover:opacity-80
                transition
              "
            >
              KIAN
            </Link>
          </div>

          {/* Menu Row */}
          <div className="grid grid-cols-[120px_1fr_120px] items-center h-15">
            {/* Left */}
            <div className="flex justify-start">
              <button
                onClick={() =>
                  setSearchOpen(true)
                }
                className="hover:opacity-70 transition"
              >
                <Search
                  size={24}
                  strokeWidth={1.5}
                />
              </button>
            </div>

            {/* Center Menu */}
            <div
              className="
                flex
                items-center
                justify-center
                gap-6
                text-[13px]
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

              {navigation.map((menu) => (
                <NavDropdown
                  key={menu.name}
                  title={menu.name}
                  items={menu.items}
                />
              ))}
            </div>

            {/* Right */}
            <div className="flex justify-end items-center gap-5">
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

      <SearchOverlay
        isOpen={searchOpen}
        onClose={() =>
          setSearchOpen(false)
        }
      />
    </>
  );
}