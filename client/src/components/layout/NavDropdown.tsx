"use client";

import { useRef, useState } from "react";
import Link from "next/link";

interface NavDropdownProps {
  title: string;
  slug: string;
  items: string[];
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
          text-white/75
          hover:text-white
          transition
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
              mt-1
              w-80
              bg-white
              rounded
              shadow-xl
              py-3
              z-50
            "
          >
            {items.map((item) => (
              <button
                key={item}
                className="
                  block
                  w-full
                  text-left
                  px-10
                  py-2.5
                  text-base
                  text-gray-600
                  hover:bg-gray-100
                  hover:text-black
                  transition
                "
              >
                {item}
              </button>
            ))}
          </div>
        )}
    </div>
  );
}