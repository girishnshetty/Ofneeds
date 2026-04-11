import { Award, Briefcase, Leaf, Package, Shirt } from "lucide-react";
import { motion } from "motion/react";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const products = [
  {
    name: "T-Shirt",
    price: "₹299",
    moq: "MOQ: 50 pcs",
    icon: Shirt,
    image: "/assets/Widget images/tshirt.png",
  },
  {
    name: "Corporate Jacket",
    price: "₹899",
    moq: "MOQ: 25 pcs",
    icon: Shirt,
    image: "/assets/Widget images/Jacket.png",
  },
  {
    name: "Embroidered Cap",
    price: "₹199",
    moq: "MOQ: 50 pcs",
    icon: Award,
    image: "/assets/Widget images/caps.png",
  },
  {
    name: "Steel Sipper Bottle",
    price: "₹249",
    moq: "MOQ: 50 pcs",
    icon: Package,
    image: "/assets/Widget images/sipper_bottle.png",
  },
  {
    name: "Back Bags",
    price: "₹799",
    moq: "MOQ: 50 pcs",
    icon: Briefcase,
    image: "/assets/Widget images/bag_packs.png",
  },
  {
    name: "Crystal Trophy",
    price: "₹899",
    moq: "MOQ: 10 pcs",
    icon: Award,
    image: "/assets/Widget images/trophys.png",
  },
  {
    name: "Premium Notebook",
    price: "₹249",
    moq: "MOQ: 50 pcs",
    icon: Package,
    image: "/assets/Widget images/notebook.png",
  },
  {
    name: "Eco Tote Bag",
    price: "₹179",
    moq: "MOQ: 50 pcs",
    icon: Leaf,
    image: "/assets/Widget images/tote_bag.png",
  },
];

export function ProductsSection() {
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
                className="relative flex h-64 w-full items-center justify-center overflow-hidden p-4 bg-white"
              >
                {p.image ? (
                  <img src={p.image} alt={p.name} className="h-full w-full object-contain transition-transform duration-500 hover:scale-110" />
                ) : (
                  <p.icon className="h-16 w-16 text-primary opacity-25" />
                )}
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
