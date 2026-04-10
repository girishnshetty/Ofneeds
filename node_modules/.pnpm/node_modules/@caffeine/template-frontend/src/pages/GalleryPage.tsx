import { Navbar } from "../components/sections/Navbar";
import { Footer } from "../components/sections/Footer";
import { motion } from "motion/react";

const galleryItems = [
  {
    title: "Employee Welcome Kit",
    image: "/assets/generated/essential-welcome-kit-599.dim_800x600.jpg",
    category: "Welcome Kits",
  },
  {
    title: "Premium Gift Box",
    image: "/assets/generated/hero-gift-boxes.dim_800x600.jpg",
    category: "Gift Boxes",
  },
  {
    title: "Customized Apparel",
    image: "/assets/generated/starter-pack-premium.dim_600x500.jpg",
    category: "Apparel",
  },
  {
    title: "Eco-Friendly Kit",
    image: "/assets/generated/category-eco.dim_512x512.png",
    category: "Eco-Friendly",
  },
  {
    title: "Onboarding Essentials",
    image: "/assets/generated/category-welcome-kit.dim_512x512.png",
    category: "Welcome Kits",
  },
  {
    title: "Tech Gadgets",
    image: "/assets/generated/category-tech.dim_512x512.png",
    category: "Tech",
  },
];

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-muted/30 py-20 lg:py-28">
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              Our Work
            </span>
            <h1 className="font-display mt-2 text-4xl font-bold text-primary sm:text-5xl">
              Product Gallery
            </h1>
            <p className="mt-3 text-lg text-muted-foreground mx-auto max-w-2xl">
              Explore our collection of successful corporate gifting projects, 
              from employee welcome kits to premium customized merchandise.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-soft"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
