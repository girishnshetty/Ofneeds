import { Link } from "@tanstack/react-router";

export default function LandingFooter() {
  return (
    <footer className="py-10 px-4" style={{ background: "#1a2744" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3
              className="text-xl font-bold mb-3"
              style={{
                color: "#c9a84c",
                fontFamily: "Playfair Display, serif",
              }}
            >
              OfNeeds
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              India&apos;s trusted corporate gifting company, based in
              Bangalore, Karnataka. Specializing in employee welcome kits, bulk
              merchandise, trophies, lanyards, and customized apparel.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Corporate Gifts", to: "/corporate-gifts" },
                { label: "Welcome Gifts", to: "/welcome-gifts" },
                { label: "Trophies", to: "/trophies" },
                { label: "Lanyards", to: "/lanyards" },
                { label: "Customized T-Shirts", to: "/customized-tshirts" },
                { label: "Jackets", to: "/jackets" },
                { label: "Welcome Goodies", to: "/welcome-goodies" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-blue-200 hover:text-[#c9a84c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>📞 +91 70907 95666</li>
              <li>✉️ hello@ofneeds.com</li>
              <li>
                📍 #31, 3rd Main BDA Road, Kalyana Nagar,
                <br />
                Moodalapalya Nagarabhavi Main Road,
                <br />
                Bangalore - 560072, Karnataka
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-700 pt-6 text-center text-sm text-blue-300">
          <p>
            © {new Date().getFullYear()} OfNeeds — Corporate Gifting Company,
            Bangalore, India. All rights reserved.
          </p>
          <p className="mt-1">
            <Link to="/" className="hover:text-[#c9a84c]">
              Home
            </Link>{" "}
            ·{" "}
            <Link to="/corporate-gifts" className="hover:text-[#c9a84c]">
              Corporate Gifts
            </Link>{" "}
            ·{" "}
            <Link to="/welcome-gifts" className="hover:text-[#c9a84c]">
              Welcome Kits
            </Link>{" "}
            ·{" "}
            <Link to="/lanyards" className="hover:text-[#c9a84c]">
              Lanyards
            </Link>{" "}
            ·{" "}
            <Link to="/trophies" className="hover:text-[#c9a84c]">
              Trophies
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
