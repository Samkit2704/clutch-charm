import type { Product } from "../types/product";

// Product images map by category for fallback
const IMG = {
  floral: "/assets/generated/product-flower-clutch.dim_600x600.jpg",
  butterfly: "/assets/generated/product-butterfly-clip.dim_600x600.jpg",
  bow: "/assets/generated/product-rainbow-bow.dim_600x600.jpg",
  flatlay: "/assets/generated/products-flatlay.dim_800x600.jpg",
};

export const products: Product[] = [
  {
    id: 1,
    name: "Rose Petal Clutcher",
    price: 299,
    description:
      "A delicate handcrafted claw clutcher adorned with intricate rose petal detailing in soft blush pink. Perfect for everyday wear or special occasions.",
    materials: "Acetate base, hand-stitched fabric roses, satin lining",
    category: "Florals",
    featured: true,
    image: IMG.floral,
  },
  {
    id: 2,
    name: "Boho Sunrise Clip",
    price: 199,
    description:
      "A free-spirited boho clip with warm sunrise hues and hand-woven thread details. Effortlessly beautiful for any hairstyle.",
    materials: "Resin base, macrame thread, wooden beads",
    category: "Boho",
    featured: false,
    image: IMG.butterfly,
  },
  {
    id: 3,
    name: "Pastel Dream Set",
    price: 499,
    description:
      "A curated set of 4 pastel hair accessories — a clutcher, 2 mini clips, and a satin scrunchie — all in dreamy coordinating pastels.",
    materials:
      "Mixed materials, satin ribbon, alligator clips, gift box included",
    category: "Pastels",
    featured: true,
    image: IMG.flatlay,
  },
  {
    id: 4,
    name: "Golden Goddess Pin",
    price: 249,
    description:
      "A glamorous metallic gold hair pin with hand-placed rhinestone accents. Add instant luxury to any updo.",
    materials: "Gold-plated metal, rhinestones, spring pin base",
    category: "Metallics",
    featured: false,
    image: IMG.butterfly,
  },
  {
    id: 5,
    name: "Lavender Love Clutcher",
    price: 279,
    description:
      "A soft lavender claw clutcher with hand-embroidered floral motifs. Gentle, romantic, and made with every detail in mind.",
    materials: "Pastel acetate, embroidery thread, pearl accents",
    category: "Pastels",
    featured: true,
    image: IMG.floral,
  },
  {
    id: 6,
    name: "Wildflower Crown Clip",
    price: 229,
    description:
      "A whimsical floral clip inspired by wildflower crowns. Hand-shaped fabric petals in a burst of garden colors.",
    materials: "Fabric flowers, wire frame, snap clip base",
    category: "Florals",
    featured: false,
    image: IMG.floral,
  },
  {
    id: 7,
    name: "Copper Twist Clutcher",
    price: 319,
    description:
      "An eye-catching copper-toned clutcher with a twisted metallic sheen. Bold, modern, and uniquely handcrafted.",
    materials: "Copper-finish acetate, polished metal hardware",
    category: "Metallics",
    featured: true,
    image: IMG.butterfly,
  },
  {
    id: 8,
    name: "Sky Blue Bow",
    price: 179,
    description:
      "A sweet sky blue satin bow with cloud-soft texture and a dainty pearl center. Perfect for little girls and the young at heart.",
    materials: "Satin ribbon, pearl bead, alligator clip",
    category: "Pastels",
    featured: false,
    image: IMG.bow,
  },
  {
    id: 9,
    name: "Marigold Festival Clutcher",
    price: 289,
    description:
      "Inspired by vibrant marigold garlands, this golden clutcher brings festive joy to your everyday style.",
    materials: "Acetate base, hand-painted floral detailing, matte finish",
    category: "Florals",
    featured: true,
    image: IMG.floral,
  },
  {
    id: 10,
    name: "Tribal Boho Clip",
    price: 219,
    description:
      "A bold tribal-patterned boho clip with hand-knotted thread and earthy tones. Wear your free spirit with pride.",
    materials: "Resin base, tribal macrame, terracotta beads",
    category: "Boho",
    featured: false,
    image: IMG.butterfly,
  },
  {
    id: 11,
    name: "Silver Stardust Pin",
    price: 269,
    description:
      "A dreamy silver hair pin dusted with micro-glitter stars. Twinkle in any light with this magical metallic piece.",
    materials: "Silver-finish metal, micro glitter coat, spring pin base",
    category: "Metallics",
    featured: false,
    image: IMG.flatlay,
  },
  {
    id: 12,
    name: "Peach Blossom Set",
    price: 459,
    description:
      "A gorgeous pastel peach gift set — includes a claw clutcher, a ribbon bow, and 2 snap clips in matching peachy tones.",
    materials:
      "Mixed pastel materials, grosgrain ribbon, premium gift packaging",
    category: "Pastels",
    featured: true,
    image: IMG.flatlay,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const getProductById = (id: number): Product | undefined =>
  products.find((p) => p.id === id);

export const getProductsByCategory = (category: string): Product[] =>
  category === "all"
    ? products
    : products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase(),
      );
