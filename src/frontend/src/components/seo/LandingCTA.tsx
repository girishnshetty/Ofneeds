import { Link } from "@tanstack/react-router";

interface LandingCTAProps {
  heading?: string;
  subheading?: string;
}

export default function LandingCTA({
  heading = "Ready to Order? Get a Free Quote Today",
  subheading = "Join 500+ companies across India who trust OfNeeds for corporate gifting.",
}: LandingCTAProps) {
  return (
    <section
      className="py-16 px-4 text-white text-center"
      style={{
        background: "linear-gradient(135deg, #1a2744 0%, #2d4373 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {heading}
        </h2>
        <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
          {subheading}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/#contact">
            <button
              type="button"
              className="font-bold px-8 py-3 rounded-lg text-lg transition-opacity hover:opacity-90"
              style={{ background: "#c9a84c", color: "#1a2744" }}
            >
              Get a Free Quote
            </button>
          </a>
          <a href="/#contact">
            <button
              type="button"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-[#1a2744] transition-colors font-semibold"
            >
              Bulk Order Enquiry
            </button>
          </a>
          <Link to="/welcome-gifts">
            <button
              type="button"
              className="border-2 border-[#c9a84c] text-[#c9a84c] px-8 py-3 rounded-lg text-lg hover:bg-[#c9a84c] hover:text-[#1a2744] transition-colors font-semibold"
            >
              Explore Welcome Kits
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
