import { Navbar } from "../components/sections/Navbar";
import { TrustBar } from "../components/sections/TrustBar";
import { HeroSection } from "../components/sections/HeroSection";
import { StarterPacksSection } from "../components/sections/StarterPacksSection";
import { CategoriesSection } from "../components/sections/CategoriesSection";
import { ProductsSection } from "../components/sections/ProductsSection";
import { AboutSection } from "../components/sections/AboutSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { TrustedBySection } from "../components/sections/TrustedBySection";
import { BlogSection } from "../components/sections/BlogSection";
import { ContactSection } from "../components/sections/ContactSection";
import { Footer } from "../components/sections/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <TrustBar />
      <main>
        <HeroSection />
        <StarterPacksSection />
        <CategoriesSection />
        <ProductsSection />
        <AboutSection />
        <TestimonialsSection />
        <TrustedBySection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
