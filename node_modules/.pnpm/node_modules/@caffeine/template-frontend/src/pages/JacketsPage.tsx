import FAQSection from "@/components/seo/FAQSection";
import LandingCTA from "@/components/seo/LandingCTA";
import LandingFooter from "@/components/seo/LandingFooter";
import LandingNav from "@/components/seo/LandingNav";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const faqs = [
  {
    question: "What types of corporate jackets are available in India?",
    answer:
      "OfNeeds offers a wide range of corporate jackets including fleece jackets (warm and soft for winter), softshell jackets (wind and water resistant), bomber jackets (trendy and casual), windbreaker jackets (lightweight and packable), and full-zip sweatshirts. All styles are available in bulk with company logo customization. We serve companies across Bangalore, Karnataka, and all major Indian cities.",
  },
  {
    question: "Can company jackets be customized with logo and name?",
    answer:
      "Yes, all OfNeeds corporate jackets can be customized with your company logo, team name, and employee names. We primarily use embroidery for jackets (durable and premium-looking) but also support heat transfer vinyl (HTV) for colorful designs. Both chest and back placements are available. Share your logo in AI, EPS, or PNG format for best results.",
  },
  {
    question: "What is the minimum order for bulk corporate jackets?",
    answer:
      "The minimum order for customized corporate jackets at OfNeeds is 25 units for standard styles. For fully custom jacket designs (custom patterns, colors, or lining), the minimum is 50 units. We offer bulk pricing discounts for orders above 100 units. Contact our Bangalore team for a quote.",
  },
  {
    question: "What fabrics are used for corporate jackets at OfNeeds?",
    answer:
      "We use premium fabrics including polar fleece (250 GSM for warmth), softshell fabric (water and wind resistant), ripstop nylon (lightweight and durable), and cotton-polyester blends for hybrid styles. All fabrics are sourced from certified mills and tested for colorfastness and durability before production begins.",
  },
  {
    question: "How long does jacket manufacturing and delivery take?",
    answer:
      "Standard corporate jacket orders take 15\u201320 business days from artwork approval. Custom-cut and sewn jackets (fully custom styles) take 25\u201330 business days. We recommend placing jacket orders well in advance of your event or onboarding date. Pan-India delivery typically adds 3\u20135 business days after dispatch from our Bangalore facility.",
  },
];

export default function JacketsPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Corporate Jackets for Companies \u2014 OfNeeds Bangalore",
      description:
        "Premium corporate jackets for companies. Fleece, bomber, windbreaker and softshell jackets with logo customization. Bulk orders, pan-India delivery from Bangalore.",
      brand: { "@type": "Brand", name: "OfNeeds" },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "599",
        highPrice: "3000",
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
          name: "Jackets",
          item: "https://ofneeds.com/jackets",
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
        title="Corporate Jackets India | Company Jackets & Outerwear | OfNeeds Bangalore"
        description="Order premium corporate jackets for your team from OfNeeds Bangalore. Bulk company jackets, fleece, bomber and windbreaker jackets for employees across India."
        keywords="corporate jackets India, company jackets Bangalore, bulk jackets companies, fleece jackets corporate, branded jackets India, OfNeeds jackets"
        canonicalPath="/jackets"
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
            <span style={{ color: "#c9a84c" }}>Jackets</span>
          </nav>
          <h1
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Corporate Jackets for Companies — Premium Team Outerwear by OfNeeds
            India
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            Dress your team in premium corporate jackets that reflect your
            brand&apos;s quality and professionalism. Fleece, bomber, softshell
            and windbreaker jackets with logo customization. Bulk orders from 25
            units.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact">
              <button
                type="button"
                className="font-bold px-8 py-3 rounded-lg text-lg hover:opacity-90"
                style={{ background: "#c9a84c", color: "#1a2744" }}
              >
                Get Jacket Quote
              </button>
            </a>
            <Link to="/customized-jackets">
              <button
                type="button"
                className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-[#1a2744] transition-colors"
              >
                Customized Jackets
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
            Corporate Jackets for a Professional Look
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A corporate jacket is more than just outerwear — it is a symbol of
            team unity, professionalism, and company pride. When your employees
            wear matching jackets at a client visit, trade show, or company
            offsite, it creates an instant perception of cohesion and brand
            strength. In Bangalore&apos;s cool evenings and air-conditioned
            offices, corporate jackets also serve a practical purpose.
          </p>
          <p className="text-gray-700 leading-relaxed">
            OfNeeds produces premium corporate jackets for companies across
            India — from Bangalore-based IT companies and fintech startups to
            manufacturing firms in Pune and retail chains in Delhi. Our jackets
            are crafted from high-quality fabrics with precise stitching and
            professional logo application.
          </p>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Types of Corporate Jackets We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Polar Fleece Jackets",
                desc: "Warm, soft, and lightweight. 250 GSM fleece. Ideal for cooler months. Full-zip or half-zip options. Embroidery logo placement on chest.",
                price: "From \u20b9799",
              },
              {
                title: "Softshell Jackets",
                desc: "Wind and water resistant outer shell with fleece lining. Professional look, highly functional. Great for field teams and outdoor use.",
                price: "From \u20b91199",
              },
              {
                title: "Bomber Jackets",
                desc: "Trendy, urban style. Polyester shell with satin lining. Popular for tech companies, creative agencies, and young teams.",
                price: "From \u20b9899",
              },
              {
                title: "Windbreaker Jackets",
                desc: "Ultra-lightweight, packable. Ripstop nylon shell. Perfect for travel, events, and year-round use. Great for outstation offsites.",
                price: "From \u20b9699",
              },
              {
                title: "Full-Zip Sweatshirts",
                desc: "100% cotton or blended. Casual and comfortable. A versatile corporate apparel option for startups and tech companies.",
                price: "From \u20b9599",
              },
              {
                title: "Executive Blazer-Style Jackets",
                desc: "Smart, structured outerwear for client-facing roles and formal occasions. Available in navy, black, and charcoal.",
                price: "From \u20b91599",
              },
            ].map((t) => (
              <div key={t.title} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-[#1a2744] mb-2">{t.title}</h3>
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
            Occasions for Corporate Jackets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-bold text-[#1a2744] mb-2">
                Employee Onboarding
              </h3>
              <p>
                Include a premium corporate jacket in your{" "}
                <Link to="/welcome-gifts" className="text-[#c9a84c] underline">
                  employee welcome kit
                </Link>
                . A jacket is a high-perceived-value gift that employees will
                wear repeatedly, keeping your brand visible.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#1a2744] mb-2">
                Company Offsites & Retreats
              </h3>
              <p>
                Matching team jackets at company retreats and team-building
                events create a sense of unity. Custom bomber or windbreaker
                jackets with the event name and year become cherished keepsakes.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#1a2744] mb-2">
                Trade Shows & Conferences
              </h3>
              <p>
                Stand out at exhibitions and industry events with a coordinated
                team look. Corporate softshell or fleece jackets with
                embroidered logos make your team easily identifiable and
                professional.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#1a2744] mb-2">Client Gifting</h3>
              <p>
                A premium corporate jacket in a gift box makes an exceptional
                client gift. We offer gift-ready packaging with tissue paper and
                ribbon for jacket gifts destined for key clients and partners.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-[#1a2744] mb-4">
            Related Products
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Customized Jackets", to: "/customized-jackets" },
              { label: "Customized T-Shirts", to: "/customized-tshirts" },
              { label: "Welcome Kits", to: "/welcome-gifts" },
              { label: "Corporate Gifts", to: "/corporate-gifts" },
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
        heading="Order Corporate Jackets for Your Team"
        subheading="Premium quality. Minimum 25 units. Custom embroidery. Pan-India delivery."
      />
      <FAQSection faqs={faqs} />
      <LandingFooter />
    </>
  );
}
