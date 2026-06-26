"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
} from "lucide-react";

export default function PolicySection() {
  const [open, setOpen] =
    useState("return");

  return (
    <section className="bg-[#f5f5f5] py-2">
      <div className="max-w-3xl mx-auto px-6">
        {/* Outlet */}
        <div className="text-center mb-24">
         <div
  className="
    flex
    items-center
    justify-center
    gap-2
    mb-8
  "
>
  <MapPin
    size={18}
    className="text-pink-500"
  />

  <h2 className="text-5xl font-light">
    Outlet
  </h2>
</div>

          <p className="text-gray-600 text-sm">
            Outlet - Aftabnager, Block - C, Main Road, Dhaka
          </p>

          <p className="text-gray-600 text-sm mt-2">
            Contact no:
            0123456789
          </p>

          <p className="text-gray-600 text-sm mt-2">
            ✔ Everyday
          </p>

          <p className="text-gray-600 text-sm mt-2">
            Hours - 11 am to 10 pm
          </p>

          <button
            className="
              mt-8
              bg-black
              text-white
              px-8
              py-3
              text-sm
              tracking-wide
              hover:bg-[#222]
              transition
            "
          >
            Get Directions
          </button>
        </div>

        {/* Policy */}
        <h2 className="text-center text-5xl font-light mb-10">
          Policy
        </h2>

        {/* Return Policy */}
        <div className="border-t border-gray-300">
          <button
            onClick={() =>
              setOpen(
                open === "return"
                  ? ""
                  : "return"
              )
            }
            className="
              w-full
              flex
              items-center
              justify-between
              py-4
              text-left
            "
          >
            <span>
              Return Policy
            </span>

            {open === "return" ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>

          {open === "return" && (
            <div className="pb-6 text-gray-700 text-sm leading-8">
              <p className="font-medium">
                ✅ Please inspect
                your product in
                front of the
                delivery
                personnel.
              </p>

              <p className="mt-2">
                If you do not like
                the item or notice
                any defects,
                kindly return it
                on the spot.
              </p>

              <ul className="mt-4 space-y-2 list-disc pl-6">
                <li>
                  If you
                  haven&apos;t
                  paid the
                  delivery charge
                  yet, please pay
                  it and return
                  the product.
                </li>

                <li>
                  If you already
                  paid the
                  delivery charge
                  in advance,
                  simply return
                  the item.
                </li>

                <li className="font-medium">
                  ⚠️ Any complaints
                  made after the
                  delivery person
                  has left will
                  not be accepted.
                </li>

                <li>
                  Please check the
                  product
                  carefully and
                  be fully sure
                  before making
                  the payment.
                </li>
              </ul>

              <p className="mt-4">
                Thank you 🖤
              </p>
            </div>
          )}
        </div>

        {/* Exchange Policy */}
        <div className="border-t border-gray-300">
          <button
            onClick={() =>
              setOpen(
                open ===
                  "exchange"
                  ? ""
                  : "exchange"
              )
            }
            className="
              w-full
              flex
              items-center
              justify-between
              py-4
              text-left
            "
          >
            <span>
              Exchange Policy
            </span>

            {open ===
            "exchange" ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>

          {open ===
            "exchange" && (
            <div className="pb-6 text-gray-700 text-sm leading-8">
              <p>
                If you need to
                exchange a
                product due to
                size issues or
                wish to replace
                it with a
                different item
                (subject to stock
                availability),
                you may do so
                within
                <span className="font-semibold">
                  {" "}
                  72 hours of
                  receiving the
                  product
                </span>
                .
              </p>

              <p className="mt-3">
                Please ensure the
                item is unused,
                in its original
                condition, and
                includes all tags
                and packaging.
              </p>

              <p className="mt-4">
                Kindly Knock us
                on our FB page :
              </p>

              <a
                href="#"
                className="
                  underline
                  text-black
                  font-medium
                "
              >
                Chat with Arc
                Inc.
              </a>
            </div>
          )}
        </div>

        {/* Delivery Charge */}
        <div className="border-y border-gray-300">
          <button
            onClick={() =>
              setOpen(
                open ===
                  "delivery"
                  ? ""
                  : "delivery"
              )
            }
            className="
              w-full
              flex
              items-center
              justify-between
              py-4
              text-left
            "
          >
            <span>
              Delivery Charge
            </span>

            {open ===
            "delivery" ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>

          {open ===
            "delivery" && (
            <div className="pb-6 text-gray-700 text-sm leading-8">
              <p>
                🚚 Standard
                Delivery (1/2
                days) - 70tk -
                Inside Dhaka
                City
              </p>

              <p className="mt-3">
                🚚 Standard
                Delivery (1/2
                days) - 100tk -
                Dhaka Suburb
                (Savar,
                Keranigonj,
                Gazipur,
                Narayanganj &
                Tongi)
              </p>

              <p className="mt-3">
                🚚 Standard
                Delivery (2/3
                days) - 120tk -
                Outside Dhaka
                City
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}