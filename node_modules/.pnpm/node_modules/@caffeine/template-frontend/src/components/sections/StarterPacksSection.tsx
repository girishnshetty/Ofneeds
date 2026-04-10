import { Check } from "lucide-react";
import { motion } from "motion/react";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function StarterPacksSection() {
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
        "Polo T-Shirt",
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
