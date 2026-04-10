import { r as reactExports, j as jsxRuntimeExports, S as Sparkles, B as Button, L as Link, a as SiWhatsapp, H as Heart, b as SiInstagram, u as useCartStore } from "./index-Bs6YLlYg.js";
import { B as Badge } from "./badge-CGAEj2nU.js";
import { f as featuredProducts } from "./products-BhqgN1c5.js";
import { s as setPageMeta, m as motion } from "./seo-D9wKaABM.js";
import { A as ArrowRight, S as Star, U as Users, C as CircleCheckBig } from "./users-Ct4Xakwe.js";
const WHATSAPP_NUMBER = "923001234567";
const INSTAGRAM_HANDLE = "clutchandcharm";
const STATS = [
  {
    icon: Users,
    value: "500+",
    label: "Happy Customers",
    color: "text-primary"
  },
  {
    icon: Sparkles,
    value: "12+",
    label: "Unique Styles",
    color: "text-secondary"
  },
  {
    icon: Heart,
    value: "Handmade",
    label: "with Love",
    color: "text-primary"
  },
  {
    icon: CircleCheckBig,
    value: "100%",
    label: "Quality Guaranteed",
    color: "text-secondary"
  }
];
const INSTAGRAM_TILES = [
  {
    gradient: "from-pink-300/70 to-rose-200/70",
    emoji: "🌸",
    caption: "Pastel dreams"
  },
  {
    gradient: "from-violet-300/70 to-purple-200/70",
    emoji: "🦋",
    caption: "Flutter & glow"
  },
  {
    gradient: "from-pink-200/70 to-fuchsia-300/70",
    emoji: "🎀",
    caption: "Bow goals"
  },
  {
    gradient: "from-rose-200/70 to-pink-300/70",
    emoji: "✨",
    caption: "Sparkle on"
  },
  {
    gradient: "from-purple-200/70 to-violet-300/70",
    emoji: "💜",
    caption: "Soft & sweet"
  },
  {
    gradient: "from-fuchsia-200/70 to-pink-300/70",
    emoji: "🌷",
    caption: "Bloom daily"
  }
];
function ProductCard({ product }) {
  const addItem = useCartStore((s) => s.addItem);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "group bg-card rounded-2xl overflow-hidden shadow-subtle hover:shadow-hover transition-smooth border border-border flex flex-col",
      whileHover: { y: -5, scale: 1.01 },
      transition: { duration: 0.2 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop/$productId", params: { productId: String(product.id) }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.image,
              alt: product.name,
              className: "w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
            }
          ),
          product.featured && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold shadow-sm", children: "✨ Bestseller" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col gap-2 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop/$productId", params: { productId: String(product.id) }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-sm sm:text-base leading-snug hover:text-primary transition-colors duration-200 line-clamp-2", children: product.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5", children: [
            [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 11, className: "fill-primary text-primary" }, star)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-1", children: "(24)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-primary text-base sm:text-lg", children: [
              "$",
              product.price.toFixed(2)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => addItem({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image
                }),
                className: "flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-smooth",
                "data-ocid": `add-to-cart-${product.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 11, className: "fill-current" }),
                  "Add"
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/shop/$productId",
              params: { productId: String(product.id) },
              className: "text-xs text-center text-primary/70 hover:text-primary underline underline-offset-2 transition-colors duration-200 mt-1",
              "data-ocid": `view-details-${product.id}`,
              children: "View Details"
            }
          )
        ] })
      ]
    }
  );
}
function Home() {
  reactExports.useEffect(() => {
    setPageMeta(
      "Handmade Hair Clutchers for Every Style",
      "Clutch & Charm — handcrafted girls' hair clutchers, butterfly clips, colorful bows & accessories. Artisanal quality with pastel magic, made with love."
    );
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[92vh] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-primary opacity-90" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/generated/hero-girl-hair.dim_1200x600.jpg",
          alt: "Girl with beautiful handcrafted hair accessories",
          className: "w-full h-full object-cover mix-blend-overlay opacity-30"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-10 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl",
          style: {
            background: "radial-gradient(circle, oklch(0.85 0.15 295), transparent)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute bottom-10 left-10 w-56 h-56 rounded-full opacity-20 blur-3xl",
          style: {
            background: "radial-gradient(circle, oklch(0.90 0.10 50), transparent)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 40 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.75, ease: "easeOut" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "mb-5 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 backdrop-blur-sm text-sm px-4 py-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14, className: "mr-1.5" }),
                "Handcrafted with Love"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground leading-[1.1] tracking-tight mb-5", children: [
                "Handmade Hair",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Clutchers for",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light", children: "Every Style" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "not-italic font-extrabold", children: "✨" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base sm:text-lg text-primary-foreground/85 leading-relaxed mb-8 max-w-lg", children: [
                "At ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Clutch & Charm" }),
                ", every piece is crafted with love — soft fabrics, dreamy pastels, and a little bit of magic. Made by hand, worn with heart."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    asChild: true,
                    size: "lg",
                    className: "rounded-full px-8 gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated font-semibold transition-smooth",
                    "data-ocid": "hero-shop-now-cta",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", children: [
                      "Shop Now",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    asChild: true,
                    variant: "outline",
                    size: "lg",
                    className: "rounded-full px-8 gap-2 border-2 border-primary-foreground/70 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 transition-smooth",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: `https://wa.me/${WHATSAPP_NUMBER}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "data-ocid": "hero-whatsapp-cta",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SiWhatsapp, { size: 18 }),
                          "Order on WhatsApp"
                        ]
                      }
                    )
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "hidden lg:flex flex-col gap-4 items-end",
            initial: { opacity: 0, x: 40 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8, delay: 0.2 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary-foreground/20 backdrop-blur-md rounded-3xl p-6 border border-primary-foreground/30 max-w-xs shadow-elevated", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/90 font-display font-semibold text-lg mb-1", children: "🎀 New Arrivals" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-sm", children: "Fresh designs drop every week — don't miss out!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary-foreground/20 backdrop-blur-md rounded-3xl p-6 border border-primary-foreground/30 max-w-xs shadow-elevated ml-12", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-2", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    size: 14,
                    className: "fill-primary-foreground text-primary-foreground"
                  },
                  s
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/90 text-sm font-medium", children: `"The prettiest hair clutcher I've ever owned!" — Ayesha M.` })
              ] })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          viewBox: "0 0 1440 60",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "w-full",
          preserveAspectRatio: "none",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z",
              fill: "oklch(0.99 0.02 50)"
            }
          )
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-6", children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-card border border-border shadow-subtle",
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        "data-ocid": `stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { size: 24, className: stat.color }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `font-display font-bold text-2xl ${stat.color}`,
              children: stat.value
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm font-medium", children: stat.label })
        ]
      },
      stat.label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "text-center mb-10",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-primary/10 text-primary border-primary/20 px-4 py-1", children: "✨ Fan Favorites" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground mt-2", children: "Bestsellers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground max-w-md mx-auto text-sm sm:text-base", children: "Our most-loved pieces — handpicked for maximum charm and sparkle." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6", children: featuredProducts.slice(0, 6).map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product })
        },
        product.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          asChild: true,
          size: "lg",
          className: "rounded-full px-8 gap-2 shadow-elevated",
          "data-ocid": "bestsellers-view-all",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", children: [
            "View All Products",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-accent/30 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.65 },
          className: "order-2 lg:order-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30", children: "Our Story" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground mb-4 leading-snug", children: "The Magic in the Making" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm sm:text-base mb-3", children: "Clutch & Charm was born from a simple love — the joy of making something beautiful with your own hands. Every clutch, clip, and bow is stitched, painted, and assembled with heart." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm sm:text-base mb-6", children: "We choose the softest fabrics, the prettiest colors, and the most durable materials so each piece becomes a little keepsake — a sprinkle of joy in every hairstyle." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                variant: "outline",
                className: "rounded-full gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth",
                "data-ocid": "story-read-more",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", children: [
                  "Read Our Story",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
                ] })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.65 },
          className: "order-1 lg:order-2 relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/about-crafting.dim_800x500.jpg",
                alt: "Handcrafting hair accessories with love",
                className: "rounded-3xl shadow-elevated w-full object-cover max-h-[380px]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-5 py-3 shadow-hover", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-sm", children: "Crafted by hand 🌸" }) })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "text-center mb-8",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SiInstagram, { size: 28, className: "text-primary mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-2xl sm:text-3xl text-foreground", children: [
              "Follow Us",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
                "@",
                INSTAGRAM_HANDLE
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 max-w-sm mx-auto text-sm sm:text-base", children: "Tag us in your photos for a chance to be featured on our feed! ✨" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mb-8", children: INSTAGRAM_TILES.map((tile, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.a,
        {
          href: `https://instagram.com/${INSTAGRAM_HANDLE}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: `relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${tile.gradient} flex flex-col items-center justify-center gap-1 cursor-pointer group hover:ring-2 hover:ring-primary hover:ring-offset-2 transition-smooth`,
          initial: { opacity: 0, scale: 0.85 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { delay: i * 0.07 },
          "data-ocid": `instagram-tile-${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-200", children: tile.emoji }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs text-foreground/60 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-2", children: tile.caption }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" })
          ]
        },
        tile.caption
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: `https://instagram.com/${INSTAGRAM_HANDLE}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full gradient-primary text-primary-foreground font-semibold text-sm sm:text-base shadow-elevated hover:opacity-90 transition-smooth",
          "data-ocid": "home-instagram-follow-cta",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SiInstagram, { size: 18 }),
            "Follow @",
            INSTAGRAM_HANDLE
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-primary py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl sm:text-3xl text-primary-foreground mb-3", children: "Order Directly on WhatsApp 💬" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 mb-7 text-sm sm:text-base", children: "Chat with us to customize your order, ask about availability, or get a special bundle deal — we're always here for you!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Clutch%20%26%20Charm!%20I'd%20like%20to%20place%20an%20order%20%F0%9F%8C%B8`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-primary-foreground text-primary font-semibold text-base shadow-elevated hover:bg-primary-foreground/90 transition-smooth",
              "data-ocid": "whatsapp-order-band-cta",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SiWhatsapp, { size: 20 }),
                "Chat with Us on WhatsApp"
              ]
            }
          )
        ]
      }
    ) }) })
  ] });
}
export {
  Home as default
};
