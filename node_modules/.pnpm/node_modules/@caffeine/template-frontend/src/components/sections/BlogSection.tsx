import { Gift, Leaf, Package } from "lucide-react";
import { motion } from "motion/react";

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

export function BlogSection() {
  return (
    <section id="blog" aria-label="Latest blog posts" className="bg-white py-20 lg:py-28">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Knowledge Center
          </span>
          <h2 className="font-display mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Latest From Our Blog
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Tips and insights on corporate gifting, employee engagement, and branding
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8">
                <post.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="mb-2 text-xs font-bold uppercase tracking-wide text-accent">
                {post.tag}
              </span>
              <h3 className="mb-3 font-display text-xl font-bold text-primary group-hover:text-accent">
                {post.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <button className="mt-auto text-sm font-bold uppercase tracking-wide text-primary">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
