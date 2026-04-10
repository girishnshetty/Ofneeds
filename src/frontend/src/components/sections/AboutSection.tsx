import { HeadphonesIcon, Package, Truck, Users } from "lucide-react";
import { motion } from "motion/react";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function AboutSection() {
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
    { value: "50+", label: "Corporate Clients" },
    { value: "10K+", label: "Kits Delivered" },
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
