"use client";

import { useState, useRef } from "react";

interface NavDropdownProps {
  title: string;
  items: string[];
}

export default function NavDropdown({
  title,
  items,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <div
      style={{
        position: "relative",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        style={{
          color: "rgba(255,255,255,0.75)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "13px",
          letterSpacing: "0.5px",
        }}
      >
        {title}
      </button>

      {open && items.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: "4px",

            width: "320px",

            backgroundColor: "#ffffff",

            borderRadius: "4px",

            boxShadow:
              "0 12px 32px rgba(0,0,0,0.12)",

            paddingTop: "12px",
            paddingBottom: "12px",

            zIndex: 999,
          }}
        >
          {items.map((item: string) => (
            <button
              key={item}
              style={{
                display: "block",
                width: "100%",

                textAlign: "left",

                paddingLeft: "40px",
                paddingRight: "40px",

                paddingTop: "10px",
                paddingBottom: "10px",

                fontSize: "16px",
                fontWeight: 400,

                color: "#5f6368",

                background: "transparent",
                border: "none",

                cursor: "pointer",

                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "#f8f8f8";

                e.currentTarget.style.color =
                  "#111111";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "transparent";

                e.currentTarget.style.color =
                  "#5f6368";
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}