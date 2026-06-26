import Image from "next/image";
import { collections } from "../data/collections";

export default function FeaturedCollections() {
  return (
    <section className="py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2
            className="
              text-4xl
              font-light
              tracking-wide
            "
          >
            Featured Collections
          </h2>
        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {collections.map(
            (collection) => (
              <div
                key={collection.title}
                className="
                  group
                  relative
                  overflow-hidden
                  cursor-pointer
                "
              >
                <div
                  className="
                    relative
                    h-[520px]
                  "
                >
                  <Image
                    src={
                      collection.image
                    }
                    alt={
                      collection.title
                    }
                    fill
                    className="
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/20

                    group-hover:bg-black/40

                    transition
                  "
                />

                {/* Content */}
                <div
                  className="
                    absolute
                    inset-0

                    flex
                    flex-col
                    items-center
                    justify-center

                    text-white
                  "
                >
                  <h3
                    className="
                      text-3xl
                      font-light
                      tracking-widest
                      mb-4
                    "
                  >
                    {
                      collection.title
                    }
                  </h3>

                  <button
                    className="
                      border
                      border-white

                      px-6
                      py-2

                      opacity-0

                      group-hover:opacity-100

                      transition
                    "
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}