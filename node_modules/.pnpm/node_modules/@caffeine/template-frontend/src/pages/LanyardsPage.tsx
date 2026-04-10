import FAQSection from "@/components/seo/FAQSection";
import LandingCTA from "@/components/seo/LandingCTA";
import LandingFooter from "@/components/seo/LandingFooter";
import LandingNav from "@/components/seo/LandingNav";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const faqs = [
  {
    question: "What is a custom lanyard and how is it used in companies?",
    answer:
      "A custom lanyard is a cord or strap worn around the neck or wrist to hold ID cards, access cards, keys, or USB drives. In companies, lanyards are used daily by employees to carry their ID badges. Custom lanyards printed with a company name, logo, and brand colors turn a functional item into a branding opportunity. OfNeeds provides bulk custom lanyards for IT companies, banks, hospitals, and event organizers across India.",
  },
  {
    question: "Can lanyards be printed with a company logo?",
    answer:
      "Yes, all OfNeeds lanyards can be customized with your company logo, name, tagline, and brand colors. We use heat transfer printing and screen printing for lanyards, ensuring vibrant, durable results. Both sides of the lanyard can be printed. We recommend sharing logo files in AI, EPS, or high-resolution PNG format for the sharpest output.",
  },
  {
    question: "What is the minimum order for bulk lanyards in India?",
    answer:
      "The minimum order for custom printed lanyards at OfNeeds is 50 units. For larger orders of 500+ units, we offer progressive bulk discounts. We serve companies across Bangalore, Delhi, Mumbai, Hyderabad, Chennai, and all major Indian cities. Contact us for a custom quote based on your quantity and design requirements.",
  },
  {
    question: "What types of lanyard materials does OfNeeds offer?",
    answer:
      "OfNeeds offers lanyards in polyester (most common and budget-friendly), nylon (premium, smooth finish), woven fabric (text or logo woven into the material), and eco-friendly recycled PET material. Each material has different characteristics for durability, print quality, and feel. Our sales team can help you choose the right material based on your budget and use case.",
  },
  {
    question: "How long does lanyard delivery take in Bangalore?",
    answer:
      "Standard custom printed lanyards are delivered within 7\u201310 business days after artwork approval for orders within Bangalore. Pan-India orders take 10\u201315 business days. Rush production in 3\u20135 business days is available for urgent requirements. We offer free delivery for orders above a certain value within Bangalore.",
  },
];

export default function LanyardsPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Custom Lanyards for Companies \u2014 OfNeeds Bangalore",
      description:
        "Bulk custom printed lanyards with company logo for offices, events and ID cards. Polyester, nylon and eco-friendly options. Pan-India delivery from Bangalore.",
      brand: { "@type": "Brand", name: "OfNeeds" },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "25",
        highPrice: "200",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    };
    const bc = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://ofneeds.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Lanyards",
          item: "https://ofneeds.com/lanyards",
        },
      ],
    };
    const s1 = document.createElement("script");
    s1.type = "application/ld+json";
    s1.id = "pg-product-schema";
    s1.textContent = JSON.stringify(schema);
    const s2 = document.createElement("script");
    s2.type = "application/ld+json";
    s2.id = "pg-breadcrumb-schema";
    s2.textContent = JSON.stringify(bc);
    document.head.appendChild(s1);
    document.head.appendChild(s2);
    return () => {
      s1.remove();
      s2.remove();
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Custom Lanyards for Companies India | Bulk Lanyards | OfNeeds Bangalore"
        description="Order custom printed lanyards for your company from OfNeeds. Bulk lanyards with logo for offices, events & ID cards in Bangalore, India. Competitive pricing."
        keywords="custom lanyards India, bulk lanyards Bangalore, company lanyards, ID card lanyards, printed lanyards, corporate lanyards India, OfNeeds lanyards"
        canonicalPath="/lanyards"
      />
      <LandingNav />

      <section
        className="py-20 px-4 text-white"
        style={{
          background: "linear-gradient(135deg, #1a2744 0%, #2d4373 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-blue-200 mb-4">
            <Link to="/" className="hover:text-white">
              Home
            </Link>{" "}
            <span className="mx-1">›</span>{" "}
            <span style={{ color: "#c9a84c" }}>Lanyards</span>
          </nav>
          <h1
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Custom Lanyards for Companies — Bulk Printed Lanyards by OfNeeds
            India
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            High-quality custom lanyards with your company logo. Ideal for
            offices, corporate events, ID cards, and employee welcome kits. Bulk
            orders from 50 units, pan-India delivery.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact">
              <button
                type="button"
                className="font-bold px-8 py-3 rounded-lg text-lg hover:opacity-90"
                style={{ background: "#c9a84c", color: "#1a2744" }}
              >
                Order Lanyards Now
              </button>
            </a>
            <Link to="/welcome-gifts">
              <button
                type="button"
                className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-[#1a2744] transition-colors"
              >
                See Welcome Kits
              </button>
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            What Are Corporate Lanyards?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lanyards are one of the most underrated corporate branding tools.
            Every time an employee wears their ID badge, they are potentially
            displaying your company&apos;s logo to dozens of people — in the
            elevator, in the office lobby, at a client site, or at a networking
            event. A well-designed custom lanyard is a subtle but constant brand
            reminder.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At OfNeeds, we produce high-quality custom lanyards for companies
            across Bangalore and India. From simple polyester lanyards for
            everyday ID card use to premium woven fabric lanyards for executive
            teams and client-facing staff, we offer a wide range of options to
            match your brand style and budget.
          </p>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Types of Lanyards We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Polyester Lanyards",
                desc: "The most popular and cost-effective option. Smooth surface ideal for crisp logo printing. Available in 15mm and 20mm widths. Best for everyday office use.",
              },
              {
                title: "Nylon Lanyards",
                desc: "Premium feel with a slightly glossy finish. Superior print quality and durability. Ideal for executive teams and client-gifting.",
              },
              {
                title: "Woven Lanyards",
                desc: "Logo or text woven directly into the fabric. Most premium and durable option. Best for companies with longer brand names or detailed logos.",
              },
              {
                title: "Eco-Friendly Lanyards",
                desc: "Made from recycled PET bottles or organic cotton. Perfect for companies with sustainability commitments. Available with green certification.",
              },
              {
                title: "Sublimation Print Lanyards",
                desc: "Full-color photo-quality print across the entire lanyard surface. Best for colorful designs, gradients, and multi-color logos.",
              },
              {
                title: "Retractable Badge Reels",
                desc: "Retractable card reel attachments for lanyards. Available with logo printing on the reel body. Standard, heavy-duty, and twist-free options.",
              },
            ].map((t) => (
              <div key={t.title} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-[#1a2744] mb-2">{t.title}</h3>
                <p className="text-gray-600 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Uses for Corporate Lanyards
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            {[
              "Employee ID card holders in offices and campuses",
              "Access card lanyards for secure zones",
              "Conference and event badges",
              "Corporate welcome kits for new joiners",
              "Trade show and exhibition giveaways",
              "School and college ID lanyards",
              "Hospital and healthcare staff lanyards",
              "Hotel and hospitality staff lanyards",
            ].map((use) => (
              <li key={use} className="flex items-start gap-2">
                <span style={{ color: "#c9a84c" }} className="font-bold mt-0.5">
                  ✓
                </span>
                <span>{use}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Why Order Lanyards from OfNeeds Bangalore?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            OfNeeds specializes in bulk corporate lanyards for companies of all
            sizes. Our in-house design team works with you to get the colors,
            logo placement, and finish exactly right. All lanyards are
            quality-checked before dispatch. We accept minimum orders of 50
            units and offer significant discounts on orders of 500+ units.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our Bangalore fulfillment center ensures fast dispatch within
            Karnataka, and we ship to all major Indian cities including Delhi,
            Mumbai, Hyderabad, Chennai, and Pune. Lanyards are often included in
            our{" "}
            <Link to="/welcome-gifts" className="text-[#c9a84c] underline">
              employee welcome kits
            </Link>
            , and they pair well with our{" "}
            <Link to="/customized-tshirts" className="text-[#c9a84c] underline">
              customized T-shirts
            </Link>{" "}
            for onboarding packs.
          </p>
        </section>

        <section className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-[#1a2744] mb-4">
            Related Products
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Corporate Gifts", to: "/corporate-gifts" },
              { label: "Welcome Gifts", to: "/welcome-gifts" },
              { label: "Customized T-Shirts", to: "/customized-tshirts" },
              { label: "Welcome Goodies", to: "/welcome-goodies" },
              { label: "Trophies", to: "/trophies" },
            ].map((link) => (
              <Link key={link.to} to={link.to}>
                <span className="inline-block bg-white border border-[#c9a84c] text-[#1a2744] font-medium px-4 py-2 rounded-full text-sm hover:bg-[#c9a84c] transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <LandingCTA
        heading="Order Custom Lanyards in Bulk"
        subheading="Minimum 50 units. Polyester, nylon & eco-friendly options. Pan-India delivery."
      />
      <FAQSection faqs={faqs} />
      <LandingFooter />
    </>
  );
}
