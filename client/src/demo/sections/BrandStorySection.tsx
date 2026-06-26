export default function BrandStorySection() {
  return (
    <section
      className="
        bg-[#f7f7f7]
        py-28
        px-6
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
          text-center
        "
      >
        <h2
          className="
            text-[28px]
            font-light
            text-[#222]
            mb-4
          "
        >
          What we are as KIAN.
        </h2>
 {/* text-[15px] */}
        <p
          className="
            max-w-4xl
            mx-auto

            text-sm
            leading-loose

            text-[#555]
          "
        >
          Welcome to KIAN, where style
          meets substance and fashion
          is more than just fabric.
          We are not just a <br></br>brand;
          We are a lifestyle.
        </p>

        <button
          className="
           mt-5
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
          SHOP NOW
        </button>
      </div>
    </section>
  );
}