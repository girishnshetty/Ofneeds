import FAQSection from "@/components/seo/FAQSection";
import LandingCTA from "@/components/seo/LandingCTA";
import LandingFooter from "@/components/seo/LandingFooter";
import LandingNav from "@/components/seo/LandingNav";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const faqs = [
  {
    question: "What types of corporate trophies are available in India?",
    answer:
      "OfNeeds offers a wide range of corporate trophies including crystal glass trophies, metal trophies, acrylic trophies, wooden trophies, and custom resin trophies. We also offer combo award sets with a trophy, certificate, and wooden plaque. Our Bangalore design team can create fully custom trophy shapes to match your brand or event theme.",
  },
  {
    question: "Can trophies be customized with company name and logo?",
    answer:
      "Yes, all our trophies can be fully customized with your company name, logo, the recipient's name, award category, and year. Customization options include laser engraving, UV printing, and metal plate embedding. We recommend sharing your artwork files in AI, EPS, or high-resolution PNG format for the best results.",
  },
  {
    question: "What is the minimum order for bulk trophies in Bangalore?",
    answer:
      "OfNeeds accepts trophy orders with a minimum of 5 units for most standard styles. For fully custom trophy designs, the minimum is 25 units. Bulk orders above 50 units receive discounts. We serve companies across Bangalore, Karnataka, and all major Indian cities.",
  },
  {
    question: "What materials are used for corporate trophies?",
    answer:
      "We offer trophies in crystal glass (elegant and premium), metal (durable and prestigious), acrylic (lightweight and cost-effective), wood (eco-friendly and classic), and resin (custom shapes). Each material has different pricing and is suited for different occasions \u2014 crystal for top awards, acrylic for participation trophies, and wood for a natural, sustainable look.",
  },
  {
    question: "How long does trophy manufacturing take?",
    answer:
      "Standard trophies with laser engraving take 5\u20137 business days after artwork approval in Bangalore. Fully custom trophies (unique shapes or premium crystal) take 10\u201315 business days. Rush orders within 3\u20135 days are available for an additional charge. We ship pan-India via courier.",
  },
];

export default function TrophiesPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Corporate Trophies & Awards \u2014 OfNeeds Bangalore",
      description:
        "Custom corporate trophies and awards from OfNeeds, Bangalore. Crystal, metal, acrylic, and wooden trophies for employee recognition events across India.",
      brand: { "@type": "Brand", name: "OfNeeds" },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "350",
        highPrice: "5000",
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
          name: "Trophies",
          item: "https://ofneeds.com/trophies",
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
        title="Corporate Trophies & Awards India | Custom Trophies | OfNeeds Bangalore"
        description="Order custom corporate trophies and awards from OfNeeds, Bangalore. Crystal, metal & acrylic trophies for employee recognition, sports events & annual meets. Bulk orders."
        keywords="corporate trophies India, custom trophies Bangalore, employee awards, recognition trophies, bulk trophies India, acrylic trophies, crystal trophies, OfNeeds trophies"
        canonicalPath="/trophies"
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
            <span style={{ color: "#c9a84c" }}>Trophies</span>
          </nav>
          <h1
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Corporate Trophies &amp; Awards — Custom Recognition Gifts by
            OfNeeds India
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            Celebrate excellence with custom corporate trophies and awards from
            OfNeeds, Bangalore. Crystal, metal, acrylic, and wooden options
            available for bulk orders across India.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact">
              <button
                type="button"
                className="font-bold px-8 py-3 rounded-lg text-lg hover:opacity-90"
                style={{ background: "#c9a84c", color: "#1a2744" }}
              >
                Get Trophy Quote
              </button>
            </a>
            <Link to="/corporate-gifts">
              <button
                type="button"
                className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-[#1a2744] transition-colors"
              >
                All Corporate Gifts
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
            Why Recognition Matters in the Workplace
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Employee recognition is one of the most powerful drivers of
            engagement and retention. When employees are publicly recognized for
            their achievements with a quality trophy or award, it sends a clear
            message: their hard work is seen and valued. Studies show that
            companies with robust recognition programs see up to 31% lower
            voluntary turnover and significantly higher employee satisfaction
            scores.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At OfNeeds, we believe every award should feel special. Our
            corporate trophies and awards are crafted with precision and care —
            from the choice of material to the engraving quality and final
            packaging. Whether you&apos;re organizing an annual employee awards
            night in Bangalore or recognizing top performers at a quarterly
            review, we have the perfect trophy to make the moment memorable.
          </p>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Types of Trophies We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Crystal Glass Trophies",
                desc: "Premium, elegant trophies with laser-engraved artwork. Best for top-tier awards and executive recognition.",
                price: "From \u20b9800",
              },
              {
                title: "Metal Trophies",
                desc: "Durable zinc alloy and die-cast trophies with custom plating in gold, silver, or bronze finish.",
                price: "From \u20b9600",
              },
              {
                title: "Acrylic Trophies",
                desc: "Lightweight, vibrant trophies with full-color printing and UV coating. Great for large-volume awards.",
                price: "From \u20b9350",
              },
              {
                title: "Wooden Trophies",
                desc: "Eco-friendly natural wood awards with laser engraving. Perfect for sustainability-focused brands.",
                price: "From \u20b9450",
              },
              {
                title: "Resin Custom Trophies",
                desc: "Fully custom shapes and designs. Ideal for unique brand mascots, product shapes, or special awards.",
                price: "From \u20b91200",
              },
              {
                title: "Combo Award Sets",
                desc: "Trophy + certificate frame + wooden plaque combo packs. Complete recognition packages for awardees.",
                price: "From \u20b91000",
              },
            ].map((cat) => (
              <div
                key={cat.title}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-[#1a2744] mb-2">
                  {cat.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{cat.desc}</p>
                <span className="font-bold" style={{ color: "#c9a84c" }}>
                  {cat.price}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Occasions for Corporate Trophies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-bold text-[#1a2744] mb-2">
                Annual Employee Awards
              </h3>
              <p>
                Recognize outstanding performers, best teams, and long-service
                employees at your annual awards night. We help companies in
                Bangalore design and produce complete award sets including
                trophies, certificates, and gift vouchers.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#1a2744] mb-2">
                Sports & Team Events
              </h3>
              <p>
                Custom trophies for company cricket leagues, badminton
                tournaments, football matches, and other inter-team sports
                events. Available in acrylic and metal, with quick turnaround
                for upcoming events.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#1a2744] mb-2">
                Sales & Revenue Milestones
              </h3>
              <p>
                Celebrate your top sales performers every quarter with
                personalized trophies. Sales recognition trophies with the
                employee's name, quarter, and achievement category engraved make
                powerful motivational tools.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#1a2744] mb-2">
                Client & Partner Recognition
              </h3>
              <p>
                Show appreciation to your top clients and business partners with
                premium crystal or metal trophies. A well-crafted award makes a
                lasting impression and reinforces your business relationships.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Customization Options
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every OfNeeds trophy is customized to your exact specifications.
            Share your company logo, award category, recipient name, and any
            additional text, and our design team will create a proof within 24
            hours. Customization options include laser engraving (for crystal
            and metal), UV printing (for acrylic), and metal plate embedding
            (for wood and resin trophies).
          </p>
          <p className="text-gray-700 leading-relaxed">
            We also offer custom trophy shapes — if you want a trophy in the
            shape of your product, mascot, or company logo, our design team in
            Bangalore can make it happen with a minimum order of 25 units. All
            trophies are individually packed in velvet-lined gift boxes for a
            premium presentation.
          </p>
        </section>

        <section className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-[#1a2744] mb-4">
            Related Products
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Corporate Gifts India", to: "/corporate-gifts" },
              { label: "Welcome Gifts", to: "/welcome-gifts" },
              { label: "Custom Lanyards", to: "/lanyards" },
              { label: "Welcome Goodies", to: "/welcome-goodies" },
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
        heading="Order Corporate Trophies in Bulk"
        subheading="Minimum 5 units. Pan-India delivery. Custom designs available."
      />
      <FAQSection faqs={faqs} />
      <LandingFooter />
    </>
  );
}
