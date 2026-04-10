import FAQSection from "@/components/seo/FAQSection";
import LandingCTA from "@/components/seo/LandingCTA";
import LandingFooter from "@/components/seo/LandingFooter";
import LandingNav from "@/components/seo/LandingNav";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const faqs = [
  {
    question: "What should I include in a welcome gift for new employees?",
    answer:
      "A great employee welcome gift should include practical and meaningful items. At OfNeeds, our welcome kits typically include a branded notebook and pen, a company T-shirt or polo, a premium sipper bottle or coffee mug, a cap, and a personalized welcome card. Our \u20b9599 starter pack is designed for budget-conscious companies while our \u20b91199 premium kit includes higher-quality items like a metal sipper bottle and polo shirt.",
  },
  {
    question: "What is the best welcome gift for employees joining remotely?",
    answer:
      "For remote onboarding, we recommend a curated welcome box that can be shipped directly to the employee's home. OfNeeds offers pan-India shipping of all welcome gift kits. Our remote-friendly packs include items like premium notebooks, pens, branded merchandise, and a personalized welcome letter \u2014 all neatly packaged to create a memorable unboxing experience at home.",
  },
  {
    question: "Can I customize welcome gifts with the employee's name?",
    answer:
      "Yes! OfNeeds offers personal name customization on welcome kits. Items like notebooks, mugs, and welcome cards can be personalized with each employee's name. While this requires a bit more lead time, it creates a far more memorable onboarding experience. Contact us for pricing on personalized welcome gift kits.",
  },
  {
    question: "What is the minimum order for welcome gifts in India?",
    answer:
      "OfNeeds accepts welcome gift orders with a minimum of 10 kits. Whether you're onboarding 10 new employees or 1,000, we scale our production accordingly with no change in quality. For orders above 100 units, we offer volume discounts. Contact our Bangalore team for a customized bulk quote.",
  },
  {
    question: "How much do employee welcome gift kits cost in Bangalore?",
    answer:
      "OfNeeds offers employee welcome gift kits starting at \u20b9599 per person for our Essential Welcome Kit (includes polo T-shirt, cap, notebook, pen, and sipper bottle). Our Premium Welcome Kit is \u20b91199 per person and includes higher-end items like a polo shirt, premium notebook, metal sipper bottle, and cap. Custom kits can be designed to any budget.",
  },
];

export default function WelcomeGiftsPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Employee Welcome Gifts & Onboarding Kits \u2014 OfNeeds",
      description:
        "Curated welcome gifts and onboarding kits for new employees. Starting at \u20b9599/person. Customized, bulk orders, pan-India delivery.",
      brand: { "@type": "Brand", name: "OfNeeds" },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "599",
        highPrice: "2000",
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
          name: "Welcome Gifts",
          item: "https://ofneeds.com/welcome-gifts",
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
        title="Welcome Gifts for New Employees | Employee Welcome Kits | OfNeeds India"
        description="Make new employees feel valued with OfNeeds' welcome gifts and onboarding kits in India. Customized welcome packs starting at \u20b9599. Bulk orders for Bangalore companies."
        keywords="welcome gifts for new employees, employee welcome kits India, onboarding gifts Bangalore, welcome pack employees, new joiner gift kit, welcome goodies India"
        canonicalPath="/welcome-gifts"
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
            <span style={{ color: "#c9a84c" }}>Welcome Gifts</span>
          </nav>
          <h1
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Welcome Gifts for New Employees — Thoughtful Onboarding Kits by
            OfNeeds
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            Create a remarkable first impression. OfNeeds crafts premium welcome
            gift kits for new employees, starting at just \u20b9599/person.
            Fully customizable, bulk-friendly, and delivered across India.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact">
              <button
                type="button"
                className="font-bold px-8 py-3 rounded-lg text-lg hover:opacity-90"
                style={{ background: "#c9a84c", color: "#1a2744" }}
              >
                Order Welcome Kits
              </button>
            </a>
            <Link to="/welcome-goodies">
              <button
                type="button"
                className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-[#1a2744] transition-colors font-semibold"
              >
                See Welcome Goodies
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
            The Power of a Great Welcome Gift
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The first day at a new job is nerve-wracking for most employees. A
            thoughtfully curated welcome gift changes everything. Studies show
            that employees who receive personalized welcome gifts during
            onboarding are 30% more likely to report positive feelings about
            their new employer within the first week. In India&apos;s
            competitive talent market, especially in Bangalore&apos;s tech
            sector, employee experience starts even before the first day — and
            welcome gifts play a significant role.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At OfNeeds, we have helped hundreds of companies across Bangalore,
            Hyderabad, Mumbai, and Pune create unforgettable onboarding
            experiences through carefully curated welcome gift kits. From
            budget-friendly packs at \u20b9599 to premium kits at \u20b91199,
            every item is chosen for utility, brand alignment, and the
            &ldquo;wow factor&rdquo; that makes new employees feel genuinely
            valued.
          </p>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            What Goes Into an OfNeeds Welcome Gift
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#1a2744] mb-3">
                \u20b9599 Essential Welcome Kit
              </h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Polo T-Shirt (branded)",
                  "Cap (embroidered logo)",
                  "Premium Notebook (A5)",
                  "Metal Pen",
                  "Company Introduction Card",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span style={{ color: "#c9a84c" }}>\u2713</span> {i}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Perfect for startups and growing teams. Minimum order: 10 kits.
              </p>
            </div>
            <div className="bg-[#1a2744] rounded-xl p-6 text-white">
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#c9a84c" }}
              >
                \u20b91199 Premium Welcome Kit
              </h3>
              <ul className="space-y-2 text-blue-100">
                {[
                  "Polo Shirt (premium fabric)",
                  "Premium Notebook (A5, hardcover)",
                  "Metal Sipper Bottle",
                  "Cap",
                  "Personalized Welcome Card",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span style={{ color: "#c9a84c" }}>\u2713</span> {i}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-blue-300">
                Ideal for mid to large enterprises. Minimum order: 10 kits.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Welcome Gift Ideas by Budget
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not all onboarding budgets are the same, and OfNeeds is here to help
            you maximize impact regardless of your per-person spend. For
            companies with a budget of \u20b9300\u2013500 per employee, we can
            create a simple but elegant welcome pack with a notebook, pen, and
            branded tote bag. Mid-range budgets of \u20b9600\u20131200 allow for
            more substantial kits with apparel, accessories, and multiple
            branded items. For premium welcome gift experiences at \u20b91500+
            per person, we offer leather notebooks, premium jackets,
            personalized items, and curated gift boxes with custom packaging.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Regardless of budget, every OfNeeds welcome kit is packaged
            attractively and can be shipped directly to the employee&apos;s desk
            in the office or home address for remote employees anywhere in
            India.
          </p>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "IT & Software",
              "E-Commerce & Retail",
              "Banking & Finance",
              "Healthcare & Pharma",
              "Manufacturing",
              "Startups & Scale-ups",
            ].map((ind) => (
              <div
                key={ind}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center"
              >
                <p className="font-semibold text-[#1a2744] text-sm">{ind}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            className="text-3xl font-bold text-[#1a2744] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Why Bangalore Companies Choose OfNeeds
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Based in Kalyana Nagar, Bangalore, OfNeeds is deeply embedded in the
            Bangalore business ecosystem. We understand the unique needs of
            Bangalore&apos;s IT companies, fintech firms, and e-commerce
            startups when it comes to onboarding large batches of new employees
            every quarter. Our proximity to Electronic City, Whitefield, and
            Koramangala means we can turn around local orders faster than most
            pan-India vendors.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We have served HR teams at companies across Bangalore with welcome
            gift kits delivered within 5\u20137 business days. Our local
            warehousing also allows for split-delivery — where you can schedule
            delivery of welcome kits aligned with your joining dates, even for
            staggered batches of new employees.
          </p>
        </section>

        <section className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-[#1a2744] mb-4">
            Related Products
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Corporate Gifts India", to: "/corporate-gifts" },
              { label: "Welcome Goodies", to: "/welcome-goodies" },
              { label: "Custom Lanyards", to: "/lanyards" },
              { label: "Customized T-Shirts", to: "/customized-tshirts" },
              { label: "Corporate Trophies", to: "/trophies" },
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
        heading="Order Welcome Kits for Your Team"
        subheading="Starting at \u20b9599/person. Minimum 10 kits. Pan-India delivery."
      />
      <FAQSection faqs={faqs} />
      <LandingFooter />
    </>
  );
}
