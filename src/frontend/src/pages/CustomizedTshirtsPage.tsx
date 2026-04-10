import FAQSection from "@/components/seo/FAQSection";
import LandingCTA from "@/components/seo/LandingCTA";
import LandingFooter from "@/components/seo/LandingFooter";
import LandingNav from "@/components/seo/LandingNav";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const faqs = [
  {
    question: "What types of t-shirts can be customized for companies?",
    answer:
      "OfNeeds offers customization on a wide range of t-shirt styles including round-neck tees, polo shirts, collar tees, V-neck t-shirts, and dry-fit performance tees. For corporate use, polo shirts are the most popular choice due to their professional appearance. We offer fabric weights from 160 GSM (lightweight) to 240 GSM (premium heavy-duty).",
  },
  {
    question: "What printing methods does OfNeeds use for corporate t-shirts?",
    answer:
      "We use three main printing techniques: (1) Screen Printing \u2014 best for bulk orders with 1\u20133 colors, very durable and cost-effective; (2) DTF (Direct-to-Film) printing \u2014 best for full-color, detailed designs with gradients; (3) Embroidery \u2014 premium, long-lasting option for polo shirts and collared tees. Our team recommends the best technique based on your design and quantity.",
  },
  {
    question: "What is the minimum order for bulk company t-shirts in India?",
    answer:
      "The minimum order for customized t-shirts at OfNeeds is 25 units for a single design. For multiple designs or colors, the minimum per-design is 12 units. Bulk discounts apply for orders of 100+ units. We cater to companies across India from our Bangalore production facility.",
  },
  {
    question: "How long does t-shirt customization take in Bangalore?",
    answer:
      "Standard orders of customized t-shirts take 7\u201312 business days from artwork approval in Bangalore. Pan-India delivery adds 2\u20133 business days. Rush orders of 72 hours are available for select styles and quantities. We recommend placing orders at least 15 days before your event or onboarding date.",
  },
  {
    question: "Can I see a sample before placing a bulk t-shirt order?",
    answer:
      "Yes, OfNeeds provides sample t-shirts (pre-production samples) before bulk production. A sample approval process is followed for all first-time orders. Sample delivery within Bangalore takes 2\u20133 days. Remote samples (shipped to other cities) take 4\u20135 business days. Sample costs may be adjusted against your bulk order payment.",
  },
];

export default function CustomizedTshirtsPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Customized T-Shirts for Companies \u2014 OfNeeds India",
      description:
        "Bulk customized t-shirts with company logo for corporate teams, events, and onboarding kits. Screen printing, DTF, and embroidery. Pan-India delivery from Bangalore.",
      brand: { "@type": "Brand", name: "OfNeeds" },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "199",
        highPrice: "800",
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
          name: "Customized T-Shirts",
          item: "https://ofneeds.com/customized-tshirts",
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
        title="Customized T-Shirts for Companies India | Bulk Corporate T-Shirts | OfNeeds"
        description="Get high-quality customized t-shirts for your company from OfNeeds Bangalore. Bulk corporate t-shirts with logo printing, team uniforms & event merchandise across India."
        keywords="customized t-shirts India, bulk corporate t-shirts, company t-shirts Bangalore, printed t-shirts companies, custom polo shirts India, OfNeeds t-shirts"
        canonicalPath="/customized-tshirts"
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
            <span style={{ color: "#c9a84c" }}>Customized T-Shirts</span>
          </nav>
          <h1
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Customized T-Shirts for Companies — Bulk Corporate Apparel by
            OfNeeds India
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            High-quality customized T-shirts with your company logo. Perfect for
            employee uniforms, team events, onboarding kits, and corporate
            merchandise. Bulk orders from 25 units.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact">
              <button
                type="button"
                className="font-bold px-8 py-3 rounded-lg text-lg hover:opacity-90"
                style={{ background: "#c9a84c", color: "#1a2744" }}
              >
                Get T-Shirt Quote
              </button>
            </a>
            <Link to="/jackets">
              <button
                type="button"
                className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-[#1a2744] transition-colors"
              >
                See Corporate Jackets
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
            Why Customized T-Shirts for Companies?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A customized company t-shirt is one of the most effective and
            affordable corporate branding tools. When your employees wear your
            brand during team outings, events, or even at home, they become
            walking brand ambassadors. In India&apos;s fast-growing startup and
            enterprise ecosystem, customized t-shirts are now a staple of
            employee onboarding kits, annual day events, and team-building
            activities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At OfNeeds, Bangalore, we produce premium customized t-shirts for
            companies of all sizes — from 10-person startups to 10,000-employee
            enterprises. Our fabrics are carefully selected for comfort,
            durability, and print quality. Every t-shirt is quality-checked
            before dispatch to ensure your brand looks sharp in every stitch.
          </p>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            T-Shirt Types and Fabric Options
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Classic Round-Neck Tee",
                desc: "100% cotton or cotton-polyester blend. 180\u2013240 GSM. Best for casual team events and giveaways.",
                price: "From \u20b9199",
              },
              {
                title: "Polo / Collar T-Shirt",
                desc: "Premium cotton pique or dry-fit. Professional look. Most popular for corporate uniforms and welcome kits.",
                price: "From \u20b9299",
              },
              {
                title: "Dry-Fit Performance Tee",
                desc: "100% polyester moisture-wicking fabric. Ideal for sports events, team challenges, and outdoor activities.",
                price: "From \u20b9249",
              },
              {
                title: "V-Neck T-Shirt",
                desc: "Elegant and modern. Available in 180 GSM cotton. Great for retail teams and corporate casual wear.",
                price: "From \u20b9219",
              },
              {
                title: "Full-Sleeve T-Shirt",
                desc: "Full cotton or blended fabric. Available in round-neck and collar options. Great for winter months.",
                price: "From \u20b9299",
              },
              {
                title: "Sublimation All-Over Print",
                desc: "Full-body custom printing. Best for cricket team jerseys, event merchandise, and unique brand designs.",
                price: "From \u20b9399",
              },
            ].map((t) => (
              <div
                key={t.title}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-[#1a2744] mb-2">
                  {t.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{t.desc}</p>
                <span className="font-bold" style={{ color: "#c9a84c" }}>
                  {t.price}
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
            Printing Techniques We Use
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-[#1a2744] mb-2">Screen Printing</h3>
              <p>
                The most cost-effective method for bulk orders. Ideal for
                1\u20133 color designs. Produces vibrant, long-lasting prints.
                Available for both dark and light fabrics. Best for logos and
                simple text-based designs. Price decreases significantly with
                higher quantity.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-[#1a2744] mb-2">
                DTF (Direct-to-Film) Printing
              </h3>
              <p>
                Modern digital printing technique that allows full-color,
                photo-quality prints with no color limits. Best for complex
                designs, gradients, and detailed artwork. Slightly higher cost
                per unit but offers unmatched design flexibility. Available for
                any quantity.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-[#1a2744] mb-2">Embroidery</h3>
              <p>
                The most premium and durable option. Logo is stitched directly
                into the fabric using thread. Creates a three-dimensional,
                textured look that signals quality and professionalism. Best for
                polo shirts, collar tees, and workwear. Price depends on stitch
                count.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Uses for Corporate T-Shirts
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            {[
              "Employee onboarding welcome kits",
              "Company uniform for client-facing teams",
              "Team-building and offsite events",
              "Annual day and company parties",
              "Sports events and cricket leagues",
              "Trade shows and exhibitions",
              "Product launches and brand campaigns",
              "Corporate social responsibility (CSR) events",
            ].map((use) => (
              <li key={use} className="flex items-start gap-2">
                <span style={{ color: "#c9a84c" }} className="font-bold">
                  \u2713
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
            Ordering Bulk T-Shirts in Bangalore
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            OfNeeds&apos; t-shirt customization facility in Bangalore handles
            orders from 25 to 10,000+ units. Our in-house design team will
            create artwork proofs within 24 hours of receiving your logo and
            requirements. We source premium fabrics from trusted mills and
            produce in-house to maintain quality control at every step.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our customized t-shirts are often paired with{" "}
            <Link to="/lanyards" className="text-[#c9a84c] underline">
              company lanyards
            </Link>{" "}
            and included in{" "}
            <Link to="/welcome-gifts" className="text-[#c9a84c] underline">
              employee welcome kits
            </Link>
            . For complete onboarding packages, explore our{" "}
            <Link to="/welcome-goodies" className="text-[#c9a84c] underline">
              welcome goodies
            </Link>{" "}
            collection.
          </p>
        </section>

        <section className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-[#1a2744] mb-4">
            Related Products
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Corporate Jackets", to: "/jackets" },
              { label: "Customized Jackets", to: "/customized-jackets" },
              { label: "Custom Lanyards", to: "/lanyards" },
              { label: "Welcome Kits", to: "/welcome-gifts" },
              { label: "Corporate Gifts", to: "/corporate-gifts" },
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
        heading="Order Customized T-Shirts for Your Company"
        subheading="Minimum 25 units. Screen printing, DTF, and embroidery. Pan-India delivery."
      />
      <FAQSection faqs={faqs} />
      <LandingFooter />
    </>
  );
}
