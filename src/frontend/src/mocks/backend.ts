import type { backendInterface } from "../backend";

const sampleProducts = [
  {
    id: BigInt(1),
    featured: true,
    name: "Pastel Blossom Clucher Set",
    description: "A gorgeous set of handcrafted pastel flower hair clutchers, perfect for everyday wear.",
    materials: "Satin, resin flowers, metal clasp",
    category: "Claw Clips",
    image: "https://images.unsplash.com/photo-1599163425927-cb7a81023b3b?w=400&h=400&fit=crop",
    price: 24.99,
  },
  {
    id: BigInt(2),
    featured: true,
    name: "Sparkly Butterfly Clip",
    description: "Shimmery butterfly hair clip with hand-painted wings and glitter accents.",
    materials: "Acrylic, glitter, metal pin",
    category: "Hair Pins",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    price: 18.99,
  },
  {
    id: BigInt(3),
    featured: true,
    name: "Rainbow Ribbon Bow",
    description: "A handmade rainbow grosgrain ribbon bow, great for parties and school days.",
    materials: "Grosgrain ribbon, alligator clip",
    category: "Bows",
    image: "https://images.unsplash.com/photo-1583916375758-4d1ede5da1b0?w=400&h=400&fit=crop",
    price: 14.99,
  },
  {
    id: BigInt(4),
    featured: false,
    name: "Unicorn Dream Claw",
    description: "Pastel unicorn-themed claw clip with hand-applied gems and swirls.",
    materials: "Acetate, resin gems",
    category: "Claw Clips",
    image: "https://images.unsplash.com/photo-1592669241067-2a5f9b1c8c2f?w=400&h=400&fit=crop",
    price: 22.99,
  },
  {
    id: BigInt(5),
    featured: false,
    name: "Dainty Daisy Snap Clips",
    description: "Set of 6 dainty daisy snap clips in mixed pastel shades.",
    materials: "Resin daisies, metal snap clips",
    category: "Hair Pins",
    image: "https://images.unsplash.com/photo-1590157175309-f2db8d8f68e7?w=400&h=400&fit=crop",
    price: 16.99,
  },
  {
    id: BigInt(6),
    featured: false,
    name: "Velvet Heart Barrette",
    description: "Rich velvet heart barrette in deep rose, a timeless accessory for all ages.",
    materials: "Velvet, metal barrette",
    category: "Barrettes",
    image: "https://images.unsplash.com/photo-1602471615287-d733c59b79d4?w=400&h=400&fit=crop",
    price: 12.99,
  },
];

export const mockBackend: backendInterface = {
  getProducts: async () => sampleProducts,
  getFeaturedProducts: async () => sampleProducts.filter((p) => p.featured),
  getProductById: async (id: bigint) => sampleProducts.find((p) => p.id === id) ?? null,
  getProductsByCategory: async (category: string) =>
    sampleProducts.filter((p) => p.category === category),
};
