"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";

const slides = [
  "/demo/slide1.jpg",
  "/demo/slide2.jpg",
  "/demo/slide3.jpg",
  "/demo/slide4.jpg",
];

export default function HeroSlider() {
  const [current, setCurrent] =
    useState(0);

  useEffect(() => {
    const interval =
      setInterval(() => {
        setCurrent((prev) =>
          prev === slides.length - 1
            ? 0
            : prev + 1
        );
      }, 3000);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f5f5f5] py-10">
        <Container>
      <div className="max-w-[1240px] mx-auto px-6">
        <div
          className="
            relative
            h-[650px]
            overflow-hidden
          "
        >
          <Image
            src={slides[current]}
            alt="Store"
            fill
            priority
            className="
              object-cover
              transition-all
              duration-700
            "
          />
        </div>

        {/* Dots */}
        <div
          className="
            flex
            justify-center
            gap-3
            mt-6
          "
        >
          {slides.map(
            (_, index) => (
              <button
                key={index}
                onClick={() =>
                  setCurrent(index)
                }
                className={`
                  w-3
                  h-3
                  rounded-full
                  transition

                  ${
                    current === index
                      ? "bg-black"
                      : "bg-gray-300"
                  }
                `}
              />
            )
          )}
        </div>
      </div>
      </Container>
    </section>
  );
}