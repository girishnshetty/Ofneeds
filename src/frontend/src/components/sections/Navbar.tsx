import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const isHome = routerState.location.pathname === "/";

  const links = [
    { label: "Home", id: "home", href: "/" },
    { label: "Products", id: "products", href: "/#products" },
    { label: "Gallery", href: "/gallery" },
    { label: "Starter Packs", id: "starter-packs", href: "/#starter-packs" },
    { label: "Blog", id: "blog", href: "/#blog" },
    { label: "About Us", id: "about", href: "/#about" },
    { label: "Contact", id: "contact", href: "/#contact" },
  ];

  const handleNavClick = (link: any) => {
    if (isHome && link.id) {
      scrollTo(link.id);
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur-md transition-all duration-300">
      <div className="flex h-14 lg:h-16 w-full items-center justify-between px-4 lg:px-10 xl:px-16">
        <Link
          to="/"
          onClick={() => isHome && scrollTo("home")}
          className="flex items-center gap-4 focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
          aria-label="OfNeeds - Corporate gifting company India"
          data-ocid="nav.link"
        >
          <div className="flex items-center">
            <img src="/assets/gift-box-logo.png" alt="OfNeeds Icon" className="h-10 lg:h-12 object-contain" />
            <img src="/assets/Ofneeds.png" alt="OfNeeds Brand" className="h-6 lg:h-8 w-auto object-contain brightness-0 invert" />
          </div>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            link.id ? (
              <Link
                key={link.label}
                to="/"
                hash={link.id}
                onClick={() => handleNavClick(link)}
                className="text-sm font-medium text-white/70 transition-all duration-200 hover:text-white"
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-white/70 transition-all duration-200 hover:text-white"
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Link
            to="/"
            hash="contact"
            onClick={() => isHome && scrollTo("contact")}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-all duration-200 hover:brightness-110 active:scale-95"
            data-ocid="nav.primary_button"
          >
            Get a Quote
          </Link>
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
                <Link
                  key={link.label}
                  to={link.id ? "/" : link.href}
                  hash={link.id}
                  onClick={() => handleNavClick(link)}
                  className="rounded-lg px-3 py-3 text-left text-sm font-medium text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
                  data-ocid="nav.link"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/"
                hash="contact"
                onClick={() => {
                  isHome && scrollTo("contact");
                  setOpen(false);
                }}
                className="mt-2 w-full rounded-lg bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground text-center"
                data-ocid="nav.primary_button"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

