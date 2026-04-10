import FAQSection from "@/components/seo/FAQSection";
import LandingCTA from "@/components/seo/LandingCTA";
import LandingFooter from "@/components/seo/LandingFooter";
import LandingNav from "@/components/seo/LandingNav";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const faqs = [
  {
    question: "What are welcome goodies for new employees?",
    answer:
      "Welcome goodies are a collection of fun, useful, and branded items given to new employees on their first day or before they join. Unlike formal welcome kits, goodies tend to have a more personal, celebratory feel \u2014 think branded notebooks, sticker packs, company swag, snack packs, and personalized items. OfNeeds curates welcome goody bags starting at \u20b9599/person for Bangalore companies and ships pan-India.",
  },
  {
    question: "What items should be included in a welcome goody bag?",
    answer:
      "A well-curated welcome goody bag should include a mix of practical and fun items: a branded notebook and pen, a company T-shirt or polo, a sipper bottle or mug, a cap, snacks or tea/coffee sachets, stickers or badges, and a personalized welcome card. At OfNeeds, we help you choose items that reflect your company culture while staying within budget.",
  },
  {
    question:
      "What is the minimum budget for employee welcome goodies in India?",
    answer:
      "OfNeeds offers welcome goody packs starting at \u20b9599/person for the Essential pack and \u20b91199/person for the Premium pack. For smaller budgets, we can curate a 3\u20134 item goody bag starting from \u20b9300/person. The final price depends on items chosen, quantity, and customization level. Contact us for a quote tailored to your budget.",
  },
  {
    question: "How can I customize welcome goodies with my company brand?",
    answer:
      "All items in OfNeeds welcome goody packs can be customized with your company logo, brand colors, and personalized messages. We use screen printing for T-shirts and bags, laser engraving for metal items, and embossing for notebooks. Your logo is applied to every item for maximum brand visibility. Our design team handles all artwork proofs before production.",
  },
  {
    question: "Can OfNeeds deliver welcome goodies across India?",
    answer:
      "Yes! OfNeeds ships welcome goodies to all major Indian cities including Bangalore, Mumbai, Delhi, Hyderabad, Chennai, Pune, and beyond. We offer individual delivery to employee home addresses (ideal for remote onboarding) or bulk delivery to your office. Remote onboarding welcome goody packs are one of our fastest-growing services since 2024.",
  },
];

export default function WelcomeGoodiesPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Welcome Goodies & Onboarding Kits \u2014 OfNeeds India",
      description:
        "Curated welcome goodies and onboarding kits for new employees starting at \u20b9599/person. Customized goody bags, starter packs and welcome hampers. Pan-India delivery from Bangalore.",
      brand: { "@type": "Brand", name: "OfNeeds" },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "599",
        highPrice: "2500",
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
          name: "Welcome Goodies",
          item: "https://ofneeds.com/welcome-goodies",
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
        title="Welcome Goodies & Onboarding Kits India | New Employee Gifts | OfNeeds"
        description="Shop welcome goodies and onboarding kits for new employees from OfNeeds Bangalore. Curated goody bags, starter packs & welcome hampers starting at \u20b9599 across India."
        keywords="welcome goodies India, employee onboarding goodies, new employee goody bag, welcome hamper India, onboarding kits Bangalore, OfNeeds welcome goodies"
        canonicalPath="/welcome-goodies"
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
            <span style={{ color: "#c9a84c" }}>Welcome Goodies</span>
          </nav>
          <h1
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Welcome Goodies for New Employees — Curated Onboarding Kits by
            OfNeeds India
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            Delight your new hires from day one with curated welcome goody bags.
            OfNeeds crafts personalized goodies starting at just
            \u20b9599/person, delivered to your office or employee&apos;s
            doorstep across India.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact">
              <button
                type="button"
                className="font-bold px-8 py-3 rounded-lg text-lg hover:opacity-90"
                style={{ background: "#c9a84c", color: "#1a2744" }}
              >
                Order Welcome Goodies
              </button>
            </a>
            <Link to="/welcome-gifts">
              <button
                type="button"
                className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-[#1a2744] transition-colors"
              >
                Welcome Kits
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
            What Are Welcome Goodies?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome goodies are curated collections of fun, useful, and branded
            items given to new employees on or before their first day at work.
            Unlike traditional welcome kits which tend to be formal and
            utility-focused, welcome goodies bring a sense of celebration and
            personality to the onboarding experience. Think of them as a
            brand-delivered &ldquo;first impression in a bag.&rdquo;
          </p>
          <p className="text-gray-700 leading-relaxed">
            In India&apos;s growing talent economy, especially in
            Bangalore&apos;s thriving startup and IT sectors, employee
            experience begins even before the first day — and a well-curated
            welcome goody bag is one of the best investments a company can make.
            OfNeeds has helped hundreds of companies create memorable onboarding
            moments through thoughtfully designed welcome goodies.
          </p>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Popular Welcome Goodies Items
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Branded Notebook",
              "Metal Pen",
              "Polo T-Shirt",
              "Cap or Hat",
              "Sipper Bottle",
              "Tote Bag",
              "Sticker Pack",
              "Welcome Card",
              "Cable Organizer",
              "Snack Pack",
              "Mouse Pad",
              "Phone Stand",
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center"
              >
                <p className="text-sm font-semibold text-[#1a2744]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Welcome Goodies by Budget
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-[#1a2744] mb-2">
                Budget Pack (\u20b9300\u2013599)
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Notebook, pen, sticker pack, and welcome card. Simple but
                personal. Great for large batch onboarding with tight budgets.
              </p>
              <ul className="text-sm space-y-1 text-gray-700">
                {[
                  "A5 Notebook",
                  "Branded Pen",
                  "Welcome Card",
                  "Sticker Pack",
                ].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span style={{ color: "#c9a84c" }}>\u2713</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-2 border-[#c9a84c] rounded-xl p-6">
              <h3 className="font-bold text-[#1a2744] mb-2">
                Essential Pack (\u20b9599\u2013999){" "}
                <span className="text-xs bg-[#c9a84c] text-[#1a2744] px-2 py-0.5 rounded-full ml-1">
                  Popular
                </span>
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Our bestselling starter pack. Includes apparel, accessories, and
                branded stationery for a complete first-day experience.
              </p>
              <ul className="text-sm space-y-1 text-gray-700">
                {[
                  "Polo T-Shirt",
                  "Cap",
                  "A5 Notebook",
                  "Metal Pen",
                  "Welcome Card",
                ].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span style={{ color: "#c9a84c" }}>\u2713</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1a2744] rounded-xl p-6 text-white">
              <h3 className="font-bold mb-2" style={{ color: "#c9a84c" }}>
                Premium Pack (\u20b91199+)
              </h3>
              <p className="text-blue-200 text-sm mb-3">
                Premium quality items that make a lasting impression. Best for
                mid to senior-level onboarding.
              </p>
              <ul className="text-sm space-y-1 text-blue-100">
                {[
                  "Premium Polo Shirt",
                  "Metal Sipper Bottle",
                  "Hardcover Notebook",
                  "Cap",
                  "Personalized Welcome Card",
                ].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span style={{ color: "#c9a84c" }}>\u2713</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Building the Perfect Goody Bag
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The best welcome goody bags are those that reflect your
            company&apos;s culture while being genuinely useful to the
            recipient. At OfNeeds, we follow a simple philosophy: every item in
            the bag should earn its place. That means no filler, no generic
            items, and no wasted budget.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We help you select items based on your employee demographics (age,
            role, location), company culture (formal vs. casual, traditional vs.
            startup), and budget per person. Our catalogue includes everything
            from classic branded stationery to premium tech accessories,
            eco-friendly items, and personalized keepsakes.
          </p>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Order Welcome Goodies for Your Team in Bangalore
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            OfNeeds is based in Bangalore and offers the fastest welcome goodies
            delivery in Karnataka. Local Bangalore orders can be fulfilled in as
            little as 5\u20137 business days. For remote employees across India,
            we offer direct-to-home shipping in branded packaging.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our welcome goodies complement our{" "}
            <Link to="/welcome-gifts" className="text-[#c9a84c] underline">
              formal welcome gift kits
            </Link>
            ,
            <Link to="/customized-tshirts" className="text-[#c9a84c] underline">
              {" "}
              customized T-shirts
            </Link>
            , and
            <Link to="/lanyards" className="text-[#c9a84c] underline">
              {" "}
              custom lanyards
            </Link>
            . You can mix and match products from our full catalogue to create
            the ideal onboarding package.
          </p>
        </section>

        <section className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-[#1a2744] mb-4">
            Related Products
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Welcome Gifts", to: "/welcome-gifts" },
              { label: "Corporate Gifts", to: "/corporate-gifts" },
              { label: "Custom Lanyards", to: "/lanyards" },
              { label: "Customized T-Shirts", to: "/customized-tshirts" },
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
        heading="Order Welcome Goodies for Your New Hires"
        subheading="Starting at \u20b9599/person. Minimum 10 bags. Pan-India shipping."
      />
      <FAQSection faqs={faqs} />
      <LandingFooter />
    </>
  );
}
