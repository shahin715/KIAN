"use client";

import { useEffect } from "react";
import { Search } from "lucide-react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({
  isOpen,
  onClose,
}: SearchOverlayProps) {
  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-9999

        bg-black/14
        backdrop-blur-xs
      "
      onClick={onClose}
    >
      <div
        className="
          max-w-250
          mx-auto

          mt-6

          px-4

          flex
          items-center
          gap-5
        "
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        {/* Search Box */}
        <div
          className="
            flex-1

            h-12.5

            border
            border-white

            bg-[#050505]

            px-7

            flex
            items-center
            justify-between
          "
        >
          <input
            autoFocus
            type="text"
            placeholder="Search"
            className="
              flex-1

              bg-transparent

              text-white
              text-[17px]

              placeholder:text-white/70

              outline-none
            "
          />

          <Search
            size={34}
            strokeWidth={1.5}
            className="text-white"
          />
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="
            text-white

            text-[38px]
            font-light

            hover:opacity-50

            transition
          "
        >
          ×
        </button>
      </div>
    </div>
  );
}