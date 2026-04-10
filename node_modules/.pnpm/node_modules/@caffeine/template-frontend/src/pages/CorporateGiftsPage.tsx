import FAQSection from "@/components/seo/FAQSection";
import LandingCTA from "@/components/seo/LandingCTA";
import LandingFooter from "@/components/seo/LandingFooter";
import LandingNav from "@/components/seo/LandingNav";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const faqs = [
  {
    question: "What are the best corporate gifts for employees in India?",
    answer:
      "The best corporate gifts for employees in India include customized welcome kits, branded notebooks, premium sipper bottles, polo shirts, caps, and personalized accessories. At OfNeeds, we offer curated starter packs starting from \u20b9599/person that include a thoughtful mix of utility items and branded merchandise, ideal for onboarding new employees.",
  },
  {
    question: "What is the minimum order quantity for corporate gifts?",
    answer:
      "At OfNeeds, Bangalore, we accept bulk corporate gift orders with a minimum quantity of 25 units per product. For starter packs and welcome kits, the minimum order is 10 kits. We cater to both SMEs and large enterprises across India, including Bangalore, Mumbai, Delhi, and Hyderabad.",
  },
  {
    question: "Can corporate gifts be customized with a company logo?",
    answer:
      "Yes, absolutely. All corporate gifts at OfNeeds can be customized with your company logo, brand colors, and personalized messages. We support screen printing, embroidery, laser engraving, and digital printing depending on the product. Our design team in Bangalore works closely with you to ensure brand consistency across all items.",
  },
  {
    question: "How long does corporate gift delivery take in Bangalore?",
    answer:
      "For standard bulk orders in Bangalore and the surrounding Karnataka region, we deliver within 7\u201310 business days after artwork approval. Pan-India deliveries typically take 10\u201315 business days. Rush orders are available for an additional charge. We work with leading logistics partners to ensure timely and safe delivery.",
  },
  {
    question: "What is the price range for bulk corporate gifts in India?",
    answer:
      "OfNeeds offers corporate gift starter packs starting at \u20b9599/person for budget-friendly options and \u20b91199/person for premium welcome kits. Individual items like lanyards, notebooks, and caps can be ordered separately. Volume discounts are available for orders above 100 units. Contact us for a customized quote tailored to your budget and requirements.",
  },
];

export default function CorporateGiftsPage() {
  useEffect(() => {
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Corporate Gifts India \u2014 OfNeeds",
      description:
        "Bulk corporate gifts, employee welcome kits, customized merchandise, trophies, lanyards, and branded apparel from OfNeeds, Bangalore's leading corporate gifting company.",
      brand: { "@type": "Brand", name: "OfNeeds" },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "599",
        highPrice: "5000",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "OfNeeds" },
      },
    };
    const breadcrumb = {
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
          name: "Corporate Gifts",
          item: "https://ofneeds.com/corporate-gifts",
        },
      ],
    };
    const s1 = document.createElement("script");
    s1.type = "application/ld+json";
    s1.id = "pg-product-schema";
    s1.textContent = JSON.stringify(productSchema);
    const s2 = document.createElement("script");
    s2.type = "application/ld+json";
    s2.id = "pg-breadcrumb-schema";
    s2.textContent = JSON.stringify(breadcrumb);
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
        title="Corporate Gifts India | Bulk Corporate Gifting Company | OfNeeds Bangalore"
        description="OfNeeds is India's leading corporate gifts company in Bangalore. Order bulk corporate gifts, employee welcome kits, customized merchandise & trophies. Free quote available."
        keywords="corporate gifts India, bulk corporate gifts, corporate gifting company Bangalore, employee gifts India, company gifts, corporate gifting Bangalore, bulk gifts India"
        canonicalPath="/corporate-gifts"
      />
      <LandingNav />

      {/* Hero */}
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
            <span style={{ color: "#c9a84c" }}>Corporate Gifts</span>
          </nav>
          <h1
            className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Corporate Gifts India — Bulk &amp; Customized Corporate Gifting by
            OfNeeds
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            India&apos;s trusted corporate gifting partner based in Bangalore.
            Premium bulk corporate gifts, employee welcome kits, and customized
            merchandise delivered across India.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact">
              <button
                type="button"
                className="font-bold px-8 py-3 rounded-lg text-lg transition-opacity hover:opacity-90"
                style={{ background: "#c9a84c", color: "#1a2744" }}
              >
                Get a Free Quote
              </button>
            </a>
            <Link to="/welcome-gifts">
              <button
                type="button"
                className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-[#1a2744] transition-colors font-semibold"
              >
                Explore Welcome Kits
              </button>
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Section 1 */}
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Why Corporate Gifts Matter for Your Business
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Corporate gifts are more than just tokens of appreciation — they are
            powerful tools for building lasting relationships with employees,
            clients, and partners. In India&apos;s competitive business
            landscape, a well-curated corporate gift can reinforce your brand
            identity, boost employee morale, and leave a lasting impression on
            new clients. Research consistently shows that employees who receive
            thoughtful welcome gifts during onboarding feel more valued and are
            more likely to stay with a company long term.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For HR teams, procurement managers, and operations heads across
            Bangalore and the rest of India, finding the right corporate gifting
            partner is essential. OfNeeds has helped 500+ companies — from
            fast-growing startups in Bangalore to enterprise firms in Mumbai and
            Delhi — create impactful gift experiences that align with their
            brand and budget.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you need onboarding welcome kits for 10 new employees or
            1,000 units of customized merchandise for an annual company event,
            OfNeeds has the capacity, quality control, and logistics
            infrastructure to deliver on time, every time.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Corporate Gift Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Welcome Kits",
                desc: "Curated onboarding packs with notebooks, pens, sipper bottles, and branded apparel. Starting at \u20b9599/person.",
                link: "/welcome-gifts",
              },
              {
                title: "Custom Lanyards",
                desc: "ID card lanyards with company logo, available in polyester, nylon, and eco-friendly materials.",
                link: "/lanyards",
              },
              {
                title: "Customized T-Shirts",
                desc: "High-quality cotton and dry-fit polo shirts with screen printing, embroidery, or DTF printing.",
                link: "/customized-tshirts",
              },
              {
                title: "Corporate Jackets",
                desc: "Fleece, bomber, and windbreaker jackets with custom embroidery or printing for your team.",
                link: "/jackets",
              },
              {
                title: "Trophies & Awards",
                desc: "Crystal, metal, acrylic, and wooden trophies for employee recognition and corporate events.",
                link: "/trophies",
              },
              {
                title: "Welcome Goodies",
                desc: "Fun, useful goody bags and hampers for new joiners, clients, and corporate events.",
                link: "/welcome-goodies",
              },
            ].map((cat) => (
              <Link key={cat.link} to={cat.link}>
                <div className="border border-gray-200 rounded-xl p-6 hover:border-[#c9a84c] hover:shadow-md transition-all cursor-pointer">
                  <h3 className="text-lg font-bold text-[#1a2744] mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{cat.desc}</p>
                  <span className="text-[#c9a84c] text-sm font-semibold mt-3 block">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Corporate Gifts for Every Occasion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                Employee Onboarding
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Make new hires feel welcome from day one. Our onboarding welcome
                kits include branded notebooks, premium pens, company-branded
                apparel, sipper bottles, and a personalized welcome card. These
                starter packs can be fully customized to reflect your
                company&apos;s culture and values. We offer packs starting at
                \u20b9599 per person for essential kits and \u20b91199 for
                premium packs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                Corporate Events & Annual Meets
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Make your next company event memorable with branded merchandise,
                trophies, and gift hampers. From annual day celebrations to
                sales conferences, OfNeeds provides bulk corporate gifts that
                double as event merchandise and lasting brand reminders. We
                serve events across Bangalore, Hyderabad, Chennai, Pune, and all
                major Indian cities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                Client Appreciation Gifts
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Strengthen client relationships with premium corporate gift
                hampers. Whether it&apos;s a Diwali gift box, a project
                completion gift, or a simple thank-you package, OfNeeds helps
                you create meaningful gestures that leave lasting impressions.
                Premium options include leather notebooks, metal pens,
                personalized trophies, and curated hampers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                Festival Gifting
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Celebrate Diwali, Pongal, Eid, Christmas, and New Year with
                branded gift boxes for your entire team or client base. Festival
                corporate gifting in India is a significant tradition, and
                OfNeeds makes it easy with curated hampers, quick turnaround,
                and pan-India delivery. Bulk orders for festivals are best
                placed 3\u20134 weeks in advance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            How We Work: The OfNeeds Process
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            {[
              {
                step: "01",
                title: "Share Your Requirements",
                desc: "Tell us the occasion, budget, quantity, and any customization needs. Use our bulk enquiry form or call us directly.",
              },
              {
                step: "02",
                title: "Receive a Custom Quote",
                desc: "Our team prepares a detailed quote with product options, customization samples, and pricing within 24 hours.",
              },
              {
                step: "03",
                title: "Design Approval",
                desc: "Review artwork proofs for your logo placement, colors, and layout. We make revisions until you&apos;re 100% satisfied.",
              },
              {
                step: "04",
                title: "Production & Delivery",
                desc: "Your order goes into production and is delivered pan-India within 7\u201315 business days after approval.",
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

        {/* Section 5 */}
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Why Choose OfNeeds for Corporate Gifts in India?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            {[
              "500+ happy companies served across India",
              "Minimum order from just 10 units",
              "Pan-India delivery with real-time tracking",
              "In-house design team for custom artwork",
              "Strict quality checks before dispatch",
              "Budget-friendly packs from \u20b9599 per person",
              "Eco-friendly and sustainable options available",
              "Trusted by Amazon, Antstack, Infor, and more",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#c9a84c" }} className="font-bold mt-0.5">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 6 */}
        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Corporate Gifting in Bangalore &amp; Karnataka
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            OfNeeds is headquartered in Bangalore, Karnataka — India&apos;s
            Silicon Valley and one of the fastest-growing business hubs in the
            country. We are ideally positioned to serve Bangalore&apos;s
            thriving IT sector, manufacturing companies, and emerging startups
            with fast, high-quality corporate gifting solutions. Our warehouse
            and fulfillment center in Kalyana Nagar, Bangalore ensures same-city
            orders are dispatched within 2\u20133 business days.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We serve companies in Whitefield, Electronic City, Koramangala, HSR
            Layout, Indiranagar, and all major Bangalore business districts.
            Whether you are an HR team at a Bangalore IT firm needing monthly
            onboarding kits or a startup ordering 500 customized jackets for
            your first company offsite, OfNeeds is your reliable corporate
            gifting partner in Karnataka.
          </p>
        </section>

        {/* Internal links */}
        <section className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-[#1a2744] mb-4">
            Explore Our Product Range
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Welcome Gifts for Employees", to: "/welcome-gifts" },
              { label: "Corporate Trophies & Awards", to: "/trophies" },
              { label: "Custom Lanyards", to: "/lanyards" },
              { label: "Customized T-Shirts", to: "/customized-tshirts" },
              { label: "Corporate Jackets", to: "/jackets" },
              { label: "Customized Jackets", to: "/customized-jackets" },
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

      <LandingCTA />
      <FAQSection faqs={faqs} />
      <LandingFooter />
    </>
  );
}
