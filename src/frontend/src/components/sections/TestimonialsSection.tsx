import { Star } from "lucide-react";
import { motion } from "motion/react";

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
    name: "Gladwin Bosco",
    role: "Operations Manager",
    company: "AntStack",
    initials: "GB",
  },
  {
    quote:
      "Best vendor for merchandise. On-time delivery, great quality, and their account manager is super responsive. Highly recommend for bulk corporate orders.",
    name: "Anand Sunkad",
    role: "Operations Head",
    company: "Amazon",
    initials: "AS",
  },
];

export function TestimonialsSection() {
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
