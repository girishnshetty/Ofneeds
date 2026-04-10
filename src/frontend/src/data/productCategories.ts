export interface ProductCategory {
  name: string;
  slug: string;
  description: string;
  image?: string;
  exampleItems: string[];
}

export const productCategories: ProductCategory[] = [
  {
    name: "Welcome Kits",
    slug: "welcome-kits",
    description:
      "Make a lasting first impression with thoughtfully curated welcome packages for new employees, clients, or partners.",
    image: "/assets/generated/category-welcome-kit.dim_512x512.png",
    exampleItems: [
      "Branded notebooks and premium pens",
      "Company swag (t-shirts, hoodies, caps)",
      "Welcome letter and team directory",
      "Desk accessories and organizers",
      "Reusable water bottles or coffee mugs",
      "Tech accessories (USB drives, cable organizers)",
    ],
  },
  {
    name: "Executive Gifts",
    slug: "executive-gifts",
    description:
      "Premium, sophisticated gifts for executives, board members, and high-value clients that reflect excellence and appreciation.",
    exampleItems: [
      "Luxury leather goods (portfolios, cardholders)",
      "Premium writing instruments",
      "Fine wines and spirits",
      "Designer desk accessories",
      "High-end tech gadgets",
      "Artisan gift baskets",
    ],
  },
  {
    name: "Eco-Friendly Gifts",
    slug: "eco-friendly",
    description:
      "Sustainable and environmentally conscious gifts that align with your company's green initiatives and values.",
    image: "/assets/generated/category-eco.dim_512x512.png",
    exampleItems: [
      "Reusable bamboo utensil sets",
      "Organic cotton tote bags",
      "Plantable seed paper products",
      "Solar-powered chargers",
      "Recycled material notebooks",
      "Sustainable coffee and tea sets",
    ],
  },
  {
    name: "Tech Accessories",
    slug: "tech-accessories",
    description:
      "Modern, practical tech gifts that enhance productivity and showcase your company's forward-thinking approach.",
    image: "/assets/generated/category-tech.dim_512x512.png",
    exampleItems: [
      "Wireless charging pads",
      "Bluetooth speakers and headphones",
      "Laptop sleeves and cases",
      "Smart home devices",
      "Portable power banks",
      "Cable management solutions",
    ],
  },
  {
    name: "Apparel & Wearables",
    slug: "apparel",
    description:
      "High-quality branded clothing and accessories that turn your team and clients into brand ambassadors.",
    exampleItems: [
      "Premium polo shirts and button-downs",
      "Soft-shell jackets and vests",
      "Performance athletic wear",
      "Branded caps and beanies",
      "Custom socks and ties",
      "Luxury scarves and accessories",
    ],
  },
  {
    name: "Desk Essentials",
    slug: "desk-essentials",
    description:
      "Practical and stylish items that enhance any workspace while keeping your brand top of mind.",
    exampleItems: [
      "Ergonomic mouse pads",
      "Desktop organizers and trays",
      "Premium sticky note sets",
      "Desk plants and planters",
      "Monitor stands and risers",
      "Personalized nameplates",
    ],
  },
];
