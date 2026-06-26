import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="relative h-[85vh]">
        <Image
          src="/demo/hero/hero-banner.jpg"
          alt="KIAN Hero"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/25
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

            text-center
            text-white

            px-6
          "
        >
          <h1
            className="
              text-5xl
              md:text-7xl

              font-light

              tracking-[8px]
              uppercase
            "
          >
            KIAN
          </h1>

          <p
            className="
              mt-6

              text-lg
              md:text-xl

              max-w-xl
            "
          >
            Timeless Style.
            Modern Identity.
          </p>

          <button
            className="
              mt-10

              border
              border-white

              px-10
              py-4

              tracking-[2px]

              hover:bg-white
              hover:text-black

              transition
            "
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}