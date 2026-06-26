export default function FooterSection() {
  return (
    <footer className="bg-[#111] text-white">
      <div
        className="
          max-w-[1400px]
          mx-auto
          px-6
          py-20
        "
      >
        <div
          className="
            grid
            md:grid-cols-4
            gap-12
          "
        >
          {/* Brand */}
          <div>
            <h2
              className="
                text-3xl
                tracking-[6px]
                mb-4
              "
            >
              KIAN
            </h2>

            <p className="text-white/70">
              Style Meets Substance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4">
              Shop
            </h3>

            <ul className="space-y-3 text-white/70">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>New Arrivals</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="mb-4">
              Customer Care
            </h3>

            <ul className="space-y-3 text-white/70">
              <li>
                Return Policy
              </li>
              <li>
                Exchange Policy
              </li>
              <li>
                Delivery Info
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">
              Contact
            </h3>

            <ul className="space-y-3 text-white/70">
              <li>
                Mirpur, Dhaka
              </li>

              <li>
                01727955023
              </li>

              <li>
                support@kian.com
              </li>
            </ul>
          </div>
        </div>

        <div
          className="
            border-t
            border-white/10
            mt-16
            pt-6

            flex
            flex-col
            md:flex-row

            justify-between

            gap-4
          "
        >
          <p className="text-white/50 text-sm">
            © 2026 KIAN. All rights
            reserved.
          </p>

          <div
            className="
              flex
              gap-6
              text-white/70
            "
          >
            <span>Facebook</span>
            <span>Instagram</span>
            <span>TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
}