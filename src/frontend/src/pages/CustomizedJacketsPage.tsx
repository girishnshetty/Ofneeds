import FAQSection from "@/components/seo/FAQSection";
import LandingCTA from "@/components/seo/LandingCTA";
import LandingFooter from "@/components/seo/LandingFooter";
import LandingNav from "@/components/seo/LandingNav";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const faqs = [
  {
    question:
      "What is the difference between a corporate jacket and a customized jacket?",
    answer:
      "A corporate jacket is any jacket ordered for company use (often in bulk, standard colors). A customized jacket goes further \u2014 it has your company logo, team name, employee names, or unique brand colors applied through embroidery, printing, or custom-cut tailoring. At OfNeeds, we offer both options, but our most popular orders are fully customized jackets where the logo, text, and color are matched to the client's brand identity.",
  },
  {
    question: "How is a company logo applied to customized jackets?",
    answer:
      "OfNeeds primarily uses embroidery for logo application on jackets \u2014 this produces a premium, long-lasting result that doesn't fade with washing. For colorful or complex designs, we also use heat transfer vinyl (HTV) and sublimation printing on applicable jacket types. Our design team will advise the best method based on your logo complexity and jacket material.",
  },
  {
    question: "Can I order single-piece customized jackets for employees?",
    answer:
      "OfNeeds requires a minimum order of 25 units for most customized jacket styles. However, we understand that some companies need individual jackets for specific employees (e.g., a newly promoted employee, a departing farewell gift). Contact us directly for single-piece or small-batch orders \u2014 we handle these on a case-by-case basis.",
  },
  {
    question:
      "What is the turnaround time for customized jackets in Bangalore?",
    answer:
      "Standard customized jacket orders take 15\u201320 business days from artwork approval. We prioritize Bangalore orders for faster local delivery. For upcoming events or batch onboarding, we recommend placing your order at least 25\u201330 days in advance. Rush production is available for an additional charge.",
  },
  {
    question:
      "Do you offer eco-friendly fabric options for customized jackets?",
    answer:
      "Yes! OfNeeds offers eco-friendly customized jacket options made from recycled PET plastic bottles (rPET fleece) and GOTS-certified organic cotton blends. These are ideal for companies with ESG commitments or sustainability-focused brand messaging. Eco-friendly options are available at a slight premium but come with material certifications on request.",
  },
];

export default function CustomizedJacketsPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Customized Jackets India \u2014 OfNeeds Bangalore",
      description:
        "Personalized corporate jackets with company logo. Embroidery, HTV printing. Bulk orders, eco-friendly options, pan-India delivery from Bangalore.",
      brand: { "@type": "Brand", name: "OfNeeds" },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "699",
        highPrice: "3500",
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
          name: "Customized Jackets",
          item: "https://ofneeds.com/customized-jackets",
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
        title="Customized Jackets India | Personalized Corporate Jackets | OfNeeds Bangalore"
        description="Get customized jackets with your company logo from OfNeeds, Bangalore. Personalized corporate jackets, team jackets & bulk orders for companies across India."
        keywords="customized jackets India, personalized corporate jackets, company jackets logo, custom embroidery jackets India, OfNeeds customized jackets Bangalore"
        canonicalPath="/customized-jackets"
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
            <span style={{ color: "#c9a84c" }}>Customized Jackets</span>
          </nav>
          <h1
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Customized Jackets India — Personalized Corporate Outerwear by
            OfNeeds
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            Jackets that carry your brand. Fully customized with your logo, team
            name, and colors through embroidery and printing. Bulk orders from
            25 units, pan-India delivery.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact">
              <button
                type="button"
                className="font-bold px-8 py-3 rounded-lg text-lg hover:opacity-90"
                style={{ background: "#c9a84c", color: "#1a2744" }}
              >
                Customize Your Jackets
              </button>
            </a>
            <Link to="/jackets">
              <button
                type="button"
                className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-[#1a2744] transition-colors"
              >
                All Corporate Jackets
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
            What Makes a Great Customized Jacket?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A great customized jacket is one where the branding feels natural —
            not slapped on. The logo placement, size, thread colors, and jacket
            style all need to work together to create a cohesive brand look. At
            OfNeeds, we have years of experience helping companies in Bangalore
            and across India achieve exactly that.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our design team works with you on every detail: jacket style, fabric
            weight, color, zipper type, lining, logo placement (chest, back,
            sleeve), and packaging. Whether you want a sleek minimalist
            embroidered logo on a navy fleece jacket or a bold full-back print
            on a bomber jacket, we can execute it to perfection.
          </p>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Customization Process
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            {[
              {
                step: "01",
                title: "Design Brief",
                desc: "Share your logo, brand colors, preferred jacket style, and any specific requirements with our team.",
              },
              {
                step: "02",
                title: "Artwork Proof",
                desc: "Our design team creates a digital mockup showing logo placement on your chosen jacket style within 24 hours.",
              },
              {
                step: "03",
                title: "Sample Approval",
                desc: "A physical sample is produced for your review. We make adjustments until you are fully satisfied.",
              },
              {
                step: "04",
                title: "Bulk Production",
                desc: "Upon sample approval, bulk production begins. Your order is dispatched within the agreed timeline.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex-1 bg-gray-50 rounded-xl p-6 text-center"
              >
                <div
                  className="text-3xl font-bold mb-2"
                  style={{
                    color: "#c9a84c",
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#1a2744] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Industry Use Cases for Customized Jackets
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            {[
              "IT companies for employee welcome kits",
              "Logistics and delivery teams (windbreakers)",
              "Field sales teams (softshell jackets)",
              "Company offsites and retreats",
              "Annual day and milestone events",
              "Startup and accelerator cohorts",
              "Sports and corporate games teams",
              "Client and partner gifting",
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
            Why Choose OfNeeds for Customized Jackets in India?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            OfNeeds brings together quality manufacturing, in-house design
            expertise, and reliable logistics to deliver customized jackets that
            meet the highest corporate standards. We are trusted by 500+
            companies across India — from IT giants in Bangalore to
            manufacturing companies in Pune — for our consistent quality and
            timely delivery.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our customized jackets can be combined with our{" "}
            <Link to="/customized-tshirts" className="text-[#c9a84c] underline">
              customized T-shirts
            </Link>{" "}
            and
            <Link to="/lanyards" className="text-[#c9a84c] underline">
              {" "}
              custom lanyards
            </Link>{" "}
            for complete uniform sets. They also make excellent additions to{" "}
            <Link to="/welcome-gifts" className="text-[#c9a84c] underline">
              employee welcome kits
            </Link>
            .
          </p>
        </section>

        <section className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-[#1a2744] mb-4">
            Related Products
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Corporate Jackets", to: "/jackets" },
              { label: "Customized T-Shirts", to: "/customized-tshirts" },
              { label: "Welcome Kits", to: "/welcome-gifts" },
              { label: "Corporate Gifts", to: "/corporate-gifts" },
              { label: "Custom Lanyards", to: "/lanyards" },
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
        heading="Get Your Team in Customized Jackets"
        subheading="Premium customization. Minimum 25 units. Eco-friendly options available."
      />
      <FAQSection faqs={faqs} />
      <LandingFooter />
    </>
  );
}
