import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Corporate Gifts", to: "/corporate-gifts" },
  { label: "Welcome Kits", to: "/welcome-gifts" },
  { label: "Lanyards", to: "/lanyards" },
  { label: "T-Shirts", to: "/customized-tshirts" },
  { label: "Jackets", to: "/jackets" },
  { label: "Trophies", to: "/trophies" },
];

export default function LandingNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 shadow-md"
      style={{ background: "#1a2744" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span
            className="text-2xl font-extrabold tracking-wider"
            style={{ color: "#c9a84c", fontFamily: "Playfair Display, serif" }}
          >
            OfNeeds
          </span>
          <span className="text-xs text-blue-200 hidden sm:block font-medium">
            Corporate Gifting
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-blue-100 hover:text-[#c9a84c] transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/#contact"
            className="text-sm font-bold px-5 py-2 rounded-lg transition-opacity hover:opacity-90 inline-block"
            style={{ background: "#c9a84c", color: "#1a2744" }}
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t border-blue-700 px-4 py-4 space-y-2"
          style={{ background: "#1a2744" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-blue-100 hover:text-[#c9a84c] py-2 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2">
            <a
              href="/#contact"
              className="block w-full text-center font-bold px-5 py-2 rounded-lg text-sm"
              style={{ background: "#c9a84c", color: "#1a2744" }}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
