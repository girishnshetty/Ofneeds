import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
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
            <div className="flex flex-col gap-6">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-bold tracking-[0.3em] uppercase"
              >
                <span className="bg-gradient-to-r from-[#6366f1] via-[#d946ef] to-[#f43f5e] bg-clip-text text-transparent">
                  Brand it.
                </span>{" "}
                <span className="bg-gradient-to-r from-[#f43f5e] via-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
                  Gift it.
                </span>{" "}
                <span className="bg-gradient-to-r from-[#10b981] via-[#3b82f6] to-[#6366f1] bg-clip-text text-transparent">
                  Own it.
                </span>
              </motion.p>
              <motion.button
                type="button"
                onClick={() => scrollTo("starter-packs")}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="group relative flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-accent/20 to-accent/5 px-7 py-4 backdrop-blur-md border border-accent/30 shadow-[0_0_20px_rgba(222,147,61,0.15)] hover:shadow-[0_0_25px_rgba(222,147,61,0.25)] transition-all duration-500 cursor-pointer"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" />

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Sparkles size={18} fill="currentColor" />
                </span>

                <span className="text-base font-black uppercase tracking-widest text-primary md:text-lg">
                  Start your welcome kit from Just <span className="text-2xl text-accent font-black">₹699</span>
                </span>

                {/* Decorative sparkle */}
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full blur-[2px] animate-pulse" />
              </motion.button>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl lg:tracking-[-0.03em]">
              Your Reliable Partner for{" "}
              <span className="text-accent">Corporate Gifting</span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Premium employee welcome kits and bulk corporate gifts for
              forward-thinking companies. Trusted by 50+ HR teams across India
              for merchandise, starter packs, and onboarding gifts.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollTo("starter-packs")}
                className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-all duration-200 hover:brightness-110 active:scale-95"
                data-ocid="hero.primary_button"
              >
                Explore Packs
              </button>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="rounded-lg border-2 border-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition-all duration-200 hover:bg-primary/5"
                data-ocid="hero.secondary_button"
              >
                GET A QUOTE
              </button>
            </div>

            <div className="mt-2 flex flex-wrap gap-8">
              {[
                { value: "50+", label: "Companies" },
                { value: "10K+", label: "Kits Delivered" },
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
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative w-full overflow-hidden rounded-3xl shadow-2xl"
          >
            <img
              src="/assets/generated/hero-gift-boxes.dim_800x600.jpg"
              alt="Corporate gifts India - Employee welcome kits and merchandise by OfNeeds"
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              width={800}
              height={600}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
