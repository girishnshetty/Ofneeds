import { Award, Briefcase, ChevronRight, Gift, Leaf, Shirt } from "lucide-react";
import { motion } from "motion/react";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

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

export function CategoriesSection() {
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
