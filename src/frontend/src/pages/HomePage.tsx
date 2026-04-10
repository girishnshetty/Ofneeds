import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Award,
  Briefcase,
  Check,
  ChevronRight,
  Gift,
  HeadphonesIcon,
  Leaf,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Package,
  Phone,
  Shirt,
  Star,
  Truck,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitInquiry } from "../hooks/useSubmitInquiry";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ── Navbar ────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", id: "home" },
    { label: "Products", id: "products" },
    { label: "Starter Packs", id: "starter-packs" },
    { label: "Blog", id: "blog" },
    { label: "About Us", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur-md">
      <div className="flex h-16 w-full items-center justify-between px-6 lg:px-16 xl:px-24">
        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="flex items-center gap-3 focus:outline-none"
          aria-label="OfNeeds - Corporate gifting company India"
          data-ocid="nav.link"
        >
          <span className="font-display text-xl font-bold tracking-tight text-white">
            Of<span className="text-accent">Needs</span>
          </span>
        </button>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <button
              type="button"
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-white/70 transition-all duration-200 hover:text-white"
              data-ocid="nav.link"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-accent-foreground shadow-gold transition-all duration-200 hover:brightness-110 hover:shadow-[0_6px_24px_-4px_oklch(0.70_0.12_73_/_0.5)] active:scale-95"
            data-ocid="nav.primary_button"
          >
            Get a Quote
          </button>
        </div>

        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/10 bg-primary lg:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-4 py-4"
              aria-label="Mobile navigation"
            >
              {links.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => {
                    scrollTo(link.id);
                    setOpen(false);
                  }}
                  className="rounded-lg px-3 py-3 text-left text-sm font-medium text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  scrollTo("contact");
                  setOpen(false);
                }}
                className="mt-2 w-full rounded-lg bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground"
                data-ocid="nav.primary_button"
              >
                Get a Quote
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ── Trust Bar ─────────────────────────────────────────────────────
function TrustBar() {
  const items = [
    "500+ Companies Served",
    "Pan-India Delivery",
    "8+ Years Experience",
  ];
  return (
    <div className="border-b border-white/10 bg-primary/90 backdrop-blur-md">
      <div className="flex w-full items-center justify-center gap-0 overflow-x-auto px-6 py-2.5">
        {items.map((item, i) => (
          <div key={item} className="flex items-center">
            {i > 0 && <span className="mx-4 select-none text-white/20">|</span>}
            <span className="whitespace-nowrap text-xs font-semibold text-white/70">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Hero ───────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section id="home" aria-label="Hero" className="bg-background">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-semibold text-accent">
              <span>✦</span>
              Gifts that speaks your brand
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl lg:tracking-[-0.03em]">
              Your Reliable Partner for{" "}
              <span className="text-accent">Corporate Gifting</span> Solutions
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Premium employee welcome kits and bulk corporate gifts for
              forward-thinking companies. Trusted by 500+ HR teams across India
              for merchandise, starter packs, and onboarding gifts.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollTo("starter-packs")}
                className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground shadow-gold transition-all duration-200 hover:brightness-110 hover:shadow-[0_6px_28px_-4px_oklch(0.70_0.12_73_/_0.55)] active:scale-95"
                data-ocid="hero.primary_button"
              >
                Explore Packs
              </button>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="rounded-lg border-2 border-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition-all duration-200 hover:bg-primary/5 hover:shadow-[0_0_0_3px_oklch(0.70_0.12_73_/_0.25)]"
                data-ocid="hero.secondary_button"
              >
                Get a Quote
              </button>
            </div>

            <div className="mt-2 flex flex-wrap gap-8">
              {[
                { value: "500+", label: "Companies" },
                { value: "1L+", label: "Kits Delivered" },
                { value: "50+", label: "Clients" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-primary">
                    {s.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img
              src="/assets/generated/hero-gift-boxes.dim_800x600.jpg"
              alt="Corporate gifts India - Employee welcome kits and merchandise by OfNeeds"
              className="w-full rounded-2xl object-cover shadow-hero"
              width={800}
              height={600}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Starter Packs ──────────────────────────────────────────────────
function StarterPacksSection() {
  const packs = [
    {
      badge: "Most Popular",
      image: "/assets/generated/essential-welcome-kit-599.dim_800x600.jpg",
      imageAlt:
        "₹599 starter pack for employees - Budget corporate welcome kit India",
      title: "Essential Welcome Kit",
      price: "₹599",
      includes: ["T-Shirt", "Notebook", "Pen", "Welcome Card"],
      ocid: "pack.item.1",
      btnOcid: "pack.primary_button.1",
    },
    {
      badge: "Premium Choice",
      image: "/assets/generated/starter-pack-premium.dim_600x500.jpg",
      imageAlt:
        "₹1199 premium starter pack for employees - Corporate welcome kit with merchandise",
      title: "Premium Welcome Kit",
      price: "₹1199",
      includes: [
        "Polo Shirt",
        "Premium Notebook",
        "Metal Sipper Bottle",
        "Cap",
        "Welcome Card",
      ],
      ocid: "pack.item.2",
      btnOcid: "pack.primary_button.2",
    },
  ];

  return (
    <section
      id="starter-packs"
      aria-label="Ready-to-ship starter packs"
      className="bg-primary py-20 lg:py-28"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-accent/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
            Ready to Ship
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
            Starter Packs for Employees
          </h2>
          <p className="mt-3 text-lg text-white/60">
            India's Trusted Corporate Gifting Company — Welcome Kits, Bulk Gifts
            &amp; Merchandise
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          {packs.map((pack, i) => (
            <motion.div
              key={pack.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl bg-card shadow-card flex flex-col h-full"
              data-ocid={pack.ocid}
            >
              {pack.image && (
                <div className="relative">
                  <img
                    src={pack.image}
                    alt={pack.imageAlt}
                    className="h-64 w-full object-cover"
                    loading="lazy"
                    width={600}
                    height={500}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">
                    {pack.badge}
                  </span>
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight tracking-tight text-primary mb-3">
                  {pack.title}
                </h3>
                <div className="mb-4 flex-1">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Includes:
                  </p>
                  <ul className="space-y-1">
                    {pack.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <Check className="h-4 w-4 flex-shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div>
                    <span className="text-3xl font-bold text-accent">
                      {pack.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      /person
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => scrollTo("contact")}
                    className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-all duration-200 hover:opacity-90"
                    data-ocid={pack.btnOcid}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Categories ─────────────────────────────────────────────────────
const categories = [
  {
    icon: Gift,
    title: "Welcome Kits",
    desc: "Complete onboarding kits for new hires",
  },
  { icon: Shirt, title: "Apparel", desc: "T-shirts, Jackets, Caps & more" },
  {
    icon: Briefcase,
    title: "Accessories",
    desc: "Bottles, Lanyards & essentials",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    desc: "Sustainable & earth-conscious products",
  },
  {
    icon: Award,
    title: "Trophies & Awards",
    desc: "Recognition & milestone gifts",
  },
];

function CategoriesSection() {
  return (
    <section
      id="products"
      aria-label="Product categories"
      className="bg-white py-20 lg:py-28"
    >
      <div id="welcome-kits" className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            What We Offer
          </span>
          <h2 className="font-display mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Our Product Range
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
            Everything you need to create the perfect experience — welcome kits,
            eco-friendly corporate gifts, trophies, and more
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group cursor-pointer rounded-xl border border-border bg-background p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
              data-ocid={`category.item.${i + 1}`}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/8">
                <cat.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-primary">
                {cat.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {cat.desc}
              </p>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="mt-4 flex items-center justify-center gap-1 text-xs font-semibold uppercase tracking-wide text-accent transition-all duration-200 hover:opacity-70"
              >
                View Products <ChevronRight className="h-3 w-3" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Featured Products ──────────────────────────────────────────────
const products = [
  {
    name: "T-Shirt",
    price: "₹299",
    moq: "MOQ: 50 pcs",
    gradient: "from-blue-50 to-blue-100",
    icon: Shirt,
  },
  {
    name: "Corporate Jacket",
    price: "₹899",
    moq: "MOQ: 25 pcs",
    gradient: "from-slate-50 to-slate-100",
    icon: Shirt,
  },
  {
    name: "Embroidered Cap",
    price: "₹199",
    moq: "MOQ: 50 pcs",
    gradient: "from-amber-50 to-amber-100",
    icon: Award,
  },
  {
    name: "Steel Sipper Bottle",
    price: "₹349",
    moq: "MOQ: 50 pcs",
    gradient: "from-teal-50 to-teal-100",
    icon: Package,
  },
  {
    name: "Eco Tote Bag",
    price: "₹179",
    moq: "MOQ: 100 pcs",
    gradient: "from-purple-50 to-purple-100",
    icon: Briefcase,
  },
  {
    name: "Crystal Trophy",
    price: "₹599",
    moq: "MOQ: 10 pcs",
    gradient: "from-yellow-50 to-yellow-100",
    icon: Award,
  },
  {
    name: "Premium Notebook",
    price: "₹249",
    moq: "MOQ: 50 pcs",
    gradient: "from-orange-50 to-orange-100",
    icon: Package,
  },
  {
    name: "Eco Tote Bag",
    price: "₹179",
    moq: "MOQ: 50 pcs",
    gradient: "from-green-50 to-green-100",
    icon: Leaf,
  },
];

function ProductsSection() {
  return (
    <section aria-label="Popular products" className="bg-muted py-20 lg:py-28">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Merchandise
          </span>
          <h2 className="font-display mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Popular Bulk Corporate Gifts
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            High-quality merchandise loved by leading companies across India
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.div
              key={`${p.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              className="overflow-hidden rounded-xl bg-card shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
              data-ocid={`product.item.${i + 1}`}
            >
              <div
                className={`flex h-40 items-center justify-center bg-gradient-to-br ${p.gradient}`}
              >
                <p.icon className="h-16 w-16 text-primary opacity-25" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{p.name}</h3>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-lg font-bold text-accent">
                    {p.price}
                    <span className="text-xs font-normal text-muted-foreground">
                      /unit
                    </span>
                  </span>
                  <span className="text-xs text-muted-foreground">{p.moq}</span>
                </div>
                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className="mt-3 w-full rounded-lg bg-primary py-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground transition-all duration-200 hover:opacity-90"
                  data-ocid={`product.button.${i + 1}`}
                >
                  Get Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About Us ───────────────────────────────────────────────────────
function AboutSection() {
  const features = [
    {
      icon: Package,
      title: "Custom Branding",
      desc: "Your logo on every product",
    },
    { icon: Users, title: "Bulk Orders", desc: "From 50 to 50,000 units" },
    {
      icon: Truck,
      title: "Pan-India Delivery",
      desc: "Fast shipping nationwide",
    },
    {
      icon: HeadphonesIcon,
      title: "Account Manager",
      desc: "Dedicated support team",
    },
  ];

  const stats = [
    { value: "500+", label: "Corporate Clients" },
    { value: "1L+", label: "Kits Delivered" },
    { value: "8+", label: "Years Experience" },
    { value: "50+", label: "Clients" },
  ];

  return (
    <section
      id="about"
      aria-label="About OfNeeds"
      className="bg-white py-20 lg:py-28"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-background p-6 text-center"
                >
                  <p className="text-3xl font-bold text-accent">{s.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              About OfNeeds
            </span>
            <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
              Why Companies Choose OfNeeds for Corporate Gifts in India
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We are India's leading B2B corporate gifting company, specialising
              in employee welcome kits, bulk corporate gifts, and custom
              merchandise. From 50 to 50,000 units — we handle it all with
              consistent quality, on-time delivery, and dedicated account
              management.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/12">
                    <f.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      {f.title}
                    </p>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="w-fit rounded-lg bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-all duration-200 hover:opacity-90"
              data-ocid="about.primary_button"
            >
              Start Your Order
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ───────────────────────────────────────────────────
const testimonials = [
  {
    quote:
      "The quality of their welcome kits was outstanding. Every new hire loved their onboarding package. The custom branding was flawless and delivery was right on time.",
    name: "Priya Sharma",
    role: "HR Head",
    company: "TechCorp India",
    initials: "PS",
  },
  {
    quote:
      "We've ordered 500+ kits through OfNeeds and the consistency in quality is remarkable. Our employees always ask where we source these beautiful gifts.",
    name: "Rahul Mehta",
    role: "Operations Manager",
    company: "StartupHub",
    initials: "RM",
  },
  {
    quote:
      "Best vendor for merchandise. On-time delivery, great quality, and their account manager is super responsive. Highly recommend for bulk corporate orders.",
    name: "Anita Patel",
    role: "Procurement Head",
    company: "MNC Corp",
    initials: "AP",
  },
];

function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="bg-muted py-20 lg:py-28"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Client Stories
          </span>
          <h2 className="font-display mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Trusted by Leading Companies Across India
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Don't take our word for it — here's what our clients say about our
            corporate gifts and welcome kits
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl bg-card p-7 shadow-soft"
              data-ocid={`testimonial.item.${i + 1}`}
            >
              <div className="mb-4 font-display text-5xl font-bold leading-none text-accent/40">
                "
              </div>
              <div className="mb-4 flex gap-1">
                {["s1", "s2", "s3", "s4", "s5"].map((sk) => (
                  <Star key={sk} className="h-4 w-4 fill-current text-accent" />
                ))}
              </div>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Blog ───────────────────────────────────────────────────────────
const blogPosts = [
  {
    tag: "Employee Onboarding",
    title: "Top 10 Welcome Kit Ideas for New Employees in 2025",
    excerpt:
      "Make your employee onboarding memorable with these curated welcome kit ideas that include merchandise, eco-friendly products, and personalized notebooks.",
    icon: Gift,
  },
  {
    tag: "Eco-Friendly Gifts",
    title: "Best Eco-Friendly Corporate Gifts in India",
    excerpt:
      "Discover sustainable and eco-friendly corporate gift options that align with your company's green values — from bamboo notebooks to reusable sipper bottles.",
    icon: Leaf,
  },
  {
    tag: "Starter Packs",
    title: "How to Choose the Perfect Starter Pack for Your Team",
    excerpt:
      "Learn how to build the ideal starter pack for employees — from budget-friendly ₹599 kits to premium ₹1199 welcome packs with customized merchandise.",
    icon: Package,
  },
];

// ── Trusted By Section ────────────────────────────────────────────
function TrustedBySection() {
  const logos = [
    {
      name: "Amazon",
      src: "/assets/generated/logo-amazon-transparent.dim_200x80.png",
    },
    {
      name: "Antstack",
      src: "/assets/generated/logo-antstack-transparent.dim_200x80.png",
    },
    {
      name: "Infor",
      src: "/assets/generated/logo-infor-transparent.dim_200x80.png",
    },
    {
      name: "SLK Infotech",
      src: "/assets/generated/logo-slk-transparent.dim_200x80.png",
    },
    {
      name: "SVT",
      src: "/assets/generated/logo-svt-transparent.dim_200x80.png",
    },
    {
      name: "Valzy",
      src: "/assets/generated/logo-valzy-transparent.dim_200x80.png",
    },
  ];
  return (
    <section
      id="trusted-by"
      aria-label="Trusted by global leaders"
      className="bg-gray-50 py-16 lg:py-24"
    >
      <div className="w-full px-6 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-primary mb-3">
            Trusted by Global Leaders
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg max-w-xl mx-auto">
            Powering gifting programs at leading organizations across India
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {logos.map((logo, idx) => (
            <div
              key={logo.name}
              data-ocid={`trusted.item.${idx + 1}`}
              className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                loading="lazy"
                className="h-16 w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section
      id="blog"
      aria-label="Corporate gifting blog"
      className="bg-white py-20 lg:py-28"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Resources
          </span>
          <h2 className="font-display mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Corporate Gifting Insights
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
            Expert tips and ideas for corporate gifts in India, employee welcome
            kits, and merchandise
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
              data-ocid={`blog.item.${i + 1}`}
            >
              <div className="flex h-44 items-center justify-center bg-primary/5">
                <post.icon className="h-16 w-16 text-primary opacity-25" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="inline-flex w-fit rounded-full bg-accent/12 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
                  {post.tag}
                </span>
                <h3 className="font-display text-lg font-bold leading-snug text-primary">
                  {post.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <button
                  type="button"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all duration-200 hover:opacity-70"
                  data-ocid={`blog.link.${i + 1}`}
                >
                  Read More <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Contact ────────────────────────────────────────────────────────
function ContactSection() {
  const submitInquiry = useSubmitInquiry();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productInterest: "",
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.company.trim()) errs.company = "Company name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email is required";
    if (!form.productInterest)
      errs.productInterest = "Please select a category";
    if (!form.quantity) errs.quantity = "Please select quantity";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    try {
      await submitInquiry.mutateAsync(form);
      toast.success(
        "Enquiry submitted! Our team will contact you within 24 hours.",
      );
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        productInterest: "",
        quantity: "",
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact and bulk quote"
      className="bg-white py-20 lg:py-28"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Get In Touch
          </span>
          <h2 className="font-display mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Request a Bulk Corporate Gift Quote
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Fill in your requirements and our team will get back within 24 hours
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="mb-6 text-xl font-bold text-primary">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "hello@ofneeds.com",
                    href: "mailto:hello@ofneeds.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 70907 95666",
                    href: "tel:+917090795666",
                  },
                  {
                    icon: MapPin,
                    label: "Address",
                    value:
                      "# 31, 3rd Main BDA Road, Kalyana Nagar, Moodalapalya, Nagarabhavi Main Road, Bangalore - 560072",
                    href: undefined,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/12">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-primary hover:text-accent transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-primary">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Follow Us
              </p>
              <div className="flex gap-3">
                {[
                  {
                    name: "Instagram",
                    href: "https://instagram.com/ofneeds",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ),
                  },
                  {
                    name: "X",
                    href: "https://x.com/ofneeds",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.735-8.835L1.254 2.25H8.08l4.213 5.567 5.951-5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Facebook",
                    href: "https://facebook.com/ofneeds",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    name: "LinkedIn",
                    href: "https://linkedin.com/company/ofneeds",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow OfNeeds on ${social.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8 text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="mb-3 text-sm font-semibold text-primary">
                Why trust us?
              </p>
              <ul className="space-y-2">
                {[
                  "Custom branding on every product",
                  "On-time delivery guaranteed",
                  "Quality check on all orders",
                  "Dedicated account manager",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 flex-shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-background p-8"
              data-ocid="contact.modal"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-primary">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Priya Sharma"
                    data-ocid="contact.input"
                  />
                  {errors.name && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="contact.error_state"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-primary">
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="TechCorp India"
                    data-ocid="contact.input"
                  />
                  {errors.company && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="contact.error_state"
                    >
                      {errors.company}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-primary">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="priya@techcorp.in"
                    data-ocid="contact.input"
                  />
                  {errors.email && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="contact.error_state"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-primary">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+91 70907 95666"
                    data-ocid="contact.input"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-primary">Product Interest *</Label>
                  <Select
                    value={form.productInterest}
                    onValueChange={(v) => handleChange("productInterest", v)}
                  >
                    <SelectTrigger data-ocid="contact.select">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Welcome Kits">Welcome Kits</SelectItem>
                      <SelectItem value="Apparel">Apparel</SelectItem>
                      <SelectItem value="Accessories">Accessories</SelectItem>
                      <SelectItem value="Eco-Friendly">Eco-Friendly</SelectItem>
                      <SelectItem value="Trophies">
                        Trophies & Awards
                      </SelectItem>
                      <SelectItem value="Custom Bundle">
                        Custom Bundle
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.productInterest && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="contact.error_state"
                    >
                      {errors.productInterest}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label className="text-primary">Quantity Required *</Label>
                  <Select
                    value={form.quantity}
                    onValueChange={(v) => handleChange("quantity", v)}
                  >
                    <SelectTrigger data-ocid="contact.select">
                      <SelectValue placeholder="Select quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50-100">50 – 100 units</SelectItem>
                      <SelectItem value="100-500">100 – 500 units</SelectItem>
                      <SelectItem value="500-1000">500 – 1000 units</SelectItem>
                      <SelectItem value="1000+">1000+ units</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.quantity && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="contact.error_state"
                    >
                      {errors.quantity}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="message" className="text-primary">
                    Message / Requirements
                  </Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your requirements — event, branding needs, deadline, etc."
                    rows={4}
                    data-ocid="contact.textarea"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={submitInquiry.isPending}
                className="mt-6 w-full bg-primary py-6 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
                data-ocid="contact.submit_button"
              >
                {submitInquiry.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending
                    Enquiry...
                  </>
                ) : (
                  "Send Enquiry"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────
function SiteFooter() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "Products", id: "products" },
    { label: "Starter Packs", id: "starter-packs" },
    { label: "Blog", id: "blog" },
    { label: "About Us", id: "about" },
    { label: "Contact", id: "contact" },
  ];
  const productLinks = [
    "Welcome Kits",
    "Apparel",
    "Accessories",
    "Eco-Friendly",
    "Trophies & Awards",
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/ofneeds",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/ofneeds",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.735-8.835L1.254 2.25H8.08l4.213 5.567 5.951-5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/ofneeds",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/ofneeds",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-primary">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-5">
            <span className="font-display text-2xl font-bold tracking-tight text-white">
              Of<span className="text-accent">Needs</span>
            </span>
            <p className="text-sm leading-relaxed text-white/60">
              India's premier B2B corporate gifting company. Elevating employee
              experiences through merchandise and welcome kits.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow OfNeeds on ${social.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/8 text-white/60 transition-all duration-200 hover:bg-white/15 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-accent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-white/60 transition-all duration-200 hover:text-white"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-accent">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    onClick={() => scrollTo("products")}
                    className="text-sm text-white/60 transition-all duration-200 hover:text-white"
                    data-ocid="footer.link"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-accent">
              Contact Info
            </h4>
            <address className="space-y-3 text-sm text-white/60 not-italic">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:hello@ofneeds.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  hello@ofneeds.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+917090795666"
                  className="hover:text-white transition-colors duration-200"
                >
                  +91 70907 95666
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>
                  # 31, 3rd Main BDA Road, Kalyana Nagar, Moodalapalya,
                  Nagarabhavi Main Road, Bangalore - 560072
                </span>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          © {year} OfNeeds. All rights reserved. |{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white/70"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

// ── Main ──────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <TrustBar />
      <main>
        <HeroSection />
        <StarterPacksSection />
        <CategoriesSection />
        <ProductsSection />
        <AboutSection />
        <TestimonialsSection />
        <TrustedBySection />
        <BlogSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
