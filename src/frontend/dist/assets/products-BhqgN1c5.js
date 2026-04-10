const products = [
  {
    id: 1,
    name: "Pastel Blossom Claw Clutch",
    price: 12.99,
    description: "A dreamy claw clutch adorned with handmade fabric flowers in the softest pastel pink and cream. Perfect for everyday sweetness.",
    materials: "Acetate base, hand-stitched fabric flowers, pearl beads",
    category: "clutchers",
    featured: true,
    image: "/assets/generated/product-flower-clutch.dim_600x600.jpg"
  },
  {
    id: 2,
    name: "Sparkly Butterfly Clip",
    price: 8.99,
    description: "Flutter through your day with this shimmery butterfly hair clip. Hand-painted with glitter accents that catch every light.",
    materials: "Resin wings, glitter coating, spring clip base",
    category: "clips",
    featured: true,
    image: "/assets/generated/product-butterfly-clip.dim_600x600.jpg"
  },
  {
    id: 3,
    name: "Rainbow Ribbon Bow",
    price: 9.99,
    description: "A joyful burst of rainbow colors! This handcrafted satin ribbon bow adds instant charm to any hairstyle.",
    materials: "Satin ribbon, felt center, alligator clip",
    category: "bows",
    featured: true,
    image: "/assets/generated/product-rainbow-bow.dim_600x600.jpg"
  },
  {
    id: 4,
    name: "Unicorn Dream Claw",
    price: 14.99,
    description: "Magical iridescent claw clutch with unicorn horn accent and tiny star charms. Every girl's fantasy come true!",
    materials: "Iridescent acrylic, resin unicorn charm, gold stars",
    category: "clutchers",
    featured: true,
    image: "/assets/generated/products-flatlay.dim_800x600.jpg"
  },
  {
    id: 5,
    name: "Dainty Daisy Snap Clips",
    price: 7.99,
    description: "A set of 4 tiny daisy snap clips — wear them all at once or spread the joy! Handmade with embroidered flower tops.",
    materials: "Snap clips, hand-embroidered cotton daisies",
    category: "clips",
    featured: false,
    image: "/assets/generated/product-flower-clutch.dim_600x600.jpg"
  },
  {
    id: 6,
    name: "Velvet Heart Barrette",
    price: 10.99,
    description: "Plush velvet heart barrette in deep rose. A timeless keepsake-style piece that feels as luxurious as it looks.",
    materials: "Velvet fabric, French barrette base, satin lining",
    category: "clips",
    featured: false,
    image: "/assets/generated/product-butterfly-clip.dim_600x600.jpg"
  },
  {
    id: 7,
    name: "Lavender Cloud Scrunchie",
    price: 6.99,
    description: "Pillowy soft lavender scrunchie with a ruffle cloud edge. Gentle on hair and gorgeous in any ponytail.",
    materials: "Chiffon fabric, elastic band, hand-ruffled edges",
    category: "clips",
    featured: false,
    image: "/assets/generated/products-flatlay.dim_800x600.jpg"
  },
  {
    id: 8,
    name: "Princess Pearl Headband",
    price: 15.99,
    description: "An elegant wide headband wrapped in ivory satin with hand-placed pearl beads. Perfect for parties and special occasions.",
    materials: "Velvet headband, glass pearl beads, satin ribbon",
    category: "clutchers",
    featured: true,
    image: "/assets/generated/product-flower-clutch.dim_600x600.jpg"
  },
  {
    id: 9,
    name: "Sunshine Bow Bundle",
    price: 24.99,
    description: "A curated set of 5 sunshine-inspired bows in yellow, peach, coral, and gold tones. Mix and match daily!",
    materials: "Grosgrain ribbon, felt backing, alligator clips",
    category: "sets",
    featured: false,
    image: "/assets/generated/product-rainbow-bow.dim_600x600.jpg"
  },
  {
    id: 10,
    name: "Floral Fantasy Set",
    price: 29.99,
    description: "Our best-selling set! Includes 1 claw clutch, 2 snap clips, and 1 barrette — all in coordinating floral pastel designs.",
    materials: "Mixed materials, gift-ready packaging included",
    category: "sets",
    featured: true,
    image: "/assets/generated/products-flatlay.dim_800x600.jpg"
  },
  {
    id: 11,
    name: "Mini Star Claw Clip",
    price: 11.99,
    description: "Tiny starry claw clutch in pearlescent white with hand-glued rhinestone stars. Small but mighty adorable.",
    materials: "Acetate, rhinestone stars, silver finish",
    category: "clutchers",
    featured: false,
    image: "/assets/generated/product-flower-clutch.dim_600x600.jpg"
  },
  {
    id: 12,
    name: "Cherry Blossom Bow",
    price: 8.99,
    description: "Delicate cherry blossom pink satin bow with embroidered petal details. A spring dream you can wear all year.",
    materials: "Satin ribbon, embroidery thread, spring clip",
    category: "bows",
    featured: false,
    image: "/assets/generated/product-rainbow-bow.dim_600x600.jpg"
  }
];
const featuredProducts = products.filter((p) => p.featured);
const getProductById = (id) => products.find((p) => p.id === id);
export {
  featuredProducts as f,
  getProductById as g,
  products as p
};
