"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { Search, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";

import Container from "@/components/layout/Container";
import NavDropdown from "@/components/layout/NavDropdown";
import SearchOverlay from "@/components/layout/SearchOverlay";

import { getMenuCategories } from "@/lib/api";

import useAuthStore from "@/features/auth/store/authStore";

interface SubCategory {
  id: string;
  name: string;
  slug: string;
}

interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  subCategories: SubCategory[];
}

export default function Navbar() {
  const router = useRouter();

  const [searchOpen, setSearchOpen] = useState(false);

  const [navigation, setNavigation] = useState<MenuCategory[]>([]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const { isAuthenticated, logout } = useAuthStore();
  useEffect(() => {
    const loadMenu = async () => {
      try {
        const response = await getMenuCategories();

        setNavigation(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadMenu();
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLogout = () => {
    logout();

    setMobileMenuOpen(false);

    router.push("/login");
  };
  return (
    <>
      <nav className="bg-[#222222] text-white border-b border-white/10">
        <Container>
          {/* Mobile Header */}
          <div className="flex lg:hidden items-center justify-between h-16">
            <button onClick={() => setMobileMenuOpen(true)} className="p-2">
              <Menu size={24} />
            </button>

            <Link
              href="/"
              className="
                text-[22px]
                font-semibold
                tracking-[6px]
                uppercase
              "
            >
              KIAN
            </Link>

            <Link href="/cart" className="p-2">
              <ShoppingBag size={24} />
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden lg:block">
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
            <div className="grid grid-cols-[120px_1fr_120px] items-center h-16">
              {/* Left */}
              <div className="flex justify-start">
                <button
                  onClick={() => setSearchOpen(true)}
                  className="hover:opacity-70 transition"
                >
                  <Search size={24} strokeWidth={1.5} />
                </button>
              </div>

              {/* Center */}
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
                    key={menu.id}
                    title={menu.name}
                    slug={menu.slug}
                    items={menu.subCategories}
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
                    <User size={24} strokeWidth={1.5} />
                  </button>
                ) : (
                  <Link href="/login" className="hover:opacity-70 transition">
                    <User size={24} strokeWidth={1.5} />
                  </Link>
                )}

                <Link href="/cart" className="hover:opacity-70 transition">
                  <ShoppingBag size={24} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Sidebar */}
      <>
        <>
          <div
            className={`
    fixed
    inset-0
    bg-black/40
    z-40
    transition-opacity
    duration-300
    lg:hidden
    ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
  `}
            onClick={() => setMobileMenuOpen(false)}
          />

          <div
            className={`
    fixed
    top-0
    left-0
    h-full
    w-80
    bg-white
    z-50
    shadow-2xl
    overflow-y-auto
    lg:hidden
    transform
    transition-transform
    duration-300
    ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
  `}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <span className="text-xl font-semibold tracking-widest">
                KIAN
              </span>

              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Menu */}
            <div className="py-3">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="
block
px-5
py-3
text-gray-700
hover:bg-gray-100
hover:text-black
transition-colors
duration-200
"
              >
                Home
              </Link>

              {navigation.map((menu) => (
                <div key={menu.id}>
                  <button
                    onClick={() =>
                      setExpandedMenu(expandedMenu === menu.id ? null : menu.id)
                    }
                    className="
w-full
flex
items-center
justify-between
px-5
py-3
text-gray-700
hover:bg-gray-100
hover:text-black
transition-colors
duration-200
"
                  >
                    <span>{menu.name}</span>

                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        expandedMenu === menu.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedMenu === menu.id && (
                    <div className="bg-gray-50">
                      {menu.subCategories.map((sub) => (
                        <Link
                          key={sub.id}
                          href={`/categories/${menu.slug}/${sub.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="
block
pl-10
pr-5
py-2.5
text-sm
text-gray-600
hover:bg-gray-100
hover:text-black
transition-colors
duration-200
"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="border-t my-3" />

              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="
flex
items-center
gap-3
px-5
py-3
text-gray-700
hover:bg-gray-100
hover:text-black
transition-colors
duration-200
"
              >
                <User size={20} />
                Account
              </Link>

              <Link
                href="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="
flex
items-center
gap-3
px-5
py-3
text-gray-700
hover:bg-gray-100
hover:text-black
transition-colors
duration-200
"
              >
                <ShoppingBag size={20} />
                Cart
              </Link>
            </div>
          </div>
        </>
      </>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
