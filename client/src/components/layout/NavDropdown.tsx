"use client";

import {
  useRef,
  useState,
} from "react";

import Link from "next/link";

interface SubCategory {
  id: string;
  name: string;
  slug: string;
}

interface NavDropdownProps {
  title: string;
  slug: string;
  items: SubCategory[];
}

export default function NavDropdown({
  title,
  slug,
  items,
}: NavDropdownProps) {
  const [open, setOpen] =
    useState(false);

  const timeoutRef =
    useRef<NodeJS.Timeout | null>(
      null
    );

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(
        timeoutRef.current
      );
    }

    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current =
      setTimeout(() => {
        setOpen(false);
      }, 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={
        handleMouseEnter
      }
      onMouseLeave={
        handleMouseLeave
      }
    >
      <Link
        href={`/categories/${slug}`}
        className="
          text-white/80
          hover:text-white
          transition-colors
          text-[13px]
          tracking-[0.5px]
        "
      >
        {title}
      </Link>

      {open &&
        items.length > 0 && (
          <div
            className="
             absolute
  top-full
  left-1/2
  -translate-x-1/2
  mt-3
  min-w-70
  bg-white
  rounded-lg
  border
  border-gray-200
  shadow-2xl
  py-2
  overflow-hidden
  z-50
            "
          >
            {items.map((item) => (
              <Link
                key={item.id}
                href={`/categories/${slug}/${item.slug}`}
                prefetch={false}
                className="
             block
  px-6
  py-3
  text-[15px]
  font-normal
  text-gray-600
  tracking-wide
  transition-all
  duration-200
  hover:bg-[#f5f5f5]
  hover:text-[#111111]
  hover:font-medium
                "
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
    </div>
  );
}