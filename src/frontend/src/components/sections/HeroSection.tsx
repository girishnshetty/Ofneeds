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
            {/* ... contents ... */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-sm font-comfortaa">
              <span className="text-[#3b0764]">✦</span>
              <span className="bg-gradient-to-r from-[#3b0764] to-[#e11d48] bg-clip-text text-transparent tracking-wide text-base font-semibold">
                Brand it. Gift it. Own it.
              </span>
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
                Get a Quote
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative aspect-[4/3] w-full flex justify-center lg:justify-end"
          >
            <img
              src="/assets/generated/hero-gift-boxes.dim_800x600.jpg"
              alt="Corporate gifts India - Employee welcome kits and merchandise by OfNeeds"
              className="h-full w-[95%] rounded-2xl object-cover shadow-hero"
              width={800}
              height={600}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
