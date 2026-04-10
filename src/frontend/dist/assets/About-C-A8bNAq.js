import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, S as Sparkles, H as Heart, B as Button, L as Link } from "./index-CzN1_jR2.js";
import { B as Badge } from "./badge-woc2LslZ.js";
import { s as setPageMeta, m as motion } from "./seo-FukVFP8Q.js";
import { C as CircleCheckBig, A as ArrowRight } from "./circle-check-big-CvFgBYn-.js";
import { U as Users, S as Star } from "./users-YnnM4DER.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }]
];
const Scissors = createLucideIcon("scissors", __iconNode);
const makeSteps = [
  {
    icon: Scissors,
    step: "01",
    title: "Choose Materials",
    description: "We handpick only the softest fabrics — plush velvet, lustrous silk ribbons, and delicate lace — in the season's most gorgeous pastel shades."
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Handcraft Each Piece",
    description: "Every clutcher is cut, stitched, and embellished entirely by hand. No machines, no shortcuts — just pure artisan love in every stitch."
  },
  {
    icon: CircleCheckBig,
    step: "03",
    title: "Quality Check & Pack",
    description: "Each piece is inspected with love before being wrapped in our signature pink tissue and ribbon — ready to delight its new owner."
  }
];
const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "Every piece is made to last. We source premium materials and pour attention into every detail so you get heirlooms, not just accessories.",
    bgClass: "bg-pink-50",
    iconClass: "text-primary"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Genuine care goes into every clutcher we make. From the first stitch to the final ribbon, love is the secret ingredient in every piece.",
    bgClass: "bg-purple-50",
    iconClass: "text-secondary"
  },
  {
    icon: Users,
    title: "Customer First",
    description: "You are why we do this. We love hearing your stories, celebrating your special moments, and making sure every order makes you smile.",
    bgClass: "bg-amber-50",
    iconClass: "text-amber-500"
  }
];
const timeline = [
  {
    year: "2022",
    title: "Started making hair clutchers at home",
    description: "It began on a quiet afternoon with fabric scraps, a needle, and a big dream. The first clutcher was gifted to a friend — she wore it everywhere."
  },
  {
    year: "2023",
    title: "First 100 customers",
    description: "Word spread through Instagram and WhatsApp. Reaching 100 happy customers felt magical. We cried happy tears."
  },
  {
    year: "2024",
    title: "Expanded to 12+ styles",
    description: "From classic claw clips to velvet butterflies and pearl bow barrettes — the collection grew as beautifully as our community."
  },
  {
    year: "2025",
    title: "Growing with love",
    description: "New colours, new collections, and the same handmade soul. Thank you for being part of the Clutch & Charm family."
  }
];
function About() {
  reactExports.useEffect(() => {
    setPageMeta(
      "About Us | Clutch & Charm",
      "Discover the heartfelt story behind Clutch & Charm — handmade hair clutchers crafted with love, premium materials, and artisan care for girls, teens, and women."
    );
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative py-20 md:py-28 overflow-hidden",
        style: {
          background: "linear-gradient(135deg, oklch(0.97 0.04 350) 0%, oklch(0.96 0.05 300) 50%, oklch(0.97 0.03 60) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-10 left-8 w-32 h-32 rounded-full opacity-20",
                    style: { background: "oklch(0.85 0.12 330)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute bottom-16 right-12 w-48 h-48 rounded-full opacity-15",
                    style: { background: "oklch(0.82 0.1 295)" }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-card text-primary border-primary/20 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 13, className: "mr-1" }),
                  "Our Story"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6", children: [
                  "Made with Love,",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Worn with Pride" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: "Every hair clutcher from Clutch & Charm begins as a dream and ends as something beautiful — handcrafted just for you." })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -32 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold uppercase tracking-widest text-primary mb-3 block", children: "The Heart Behind the Brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-snug", children: [
              "Hi! I'm the heart behind",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Clutch & Charm" }),
              " ✨"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-5", children: "It all started with a love for beautiful hair accessories and a dream to create something handmade and special. Every clutcher is crafted by hand, stitched with care, and designed to make you feel beautiful every single day." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-5", children: "I'd spend weekends surrounded by ribbons, beads, and fabric swatches — completely in my element. Whether it's for school, a birthday party, or just a regular Tuesday — there's a Clutch & Charm piece for every moment." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base md:text-lg text-foreground font-medium leading-relaxed", children: "Thank you for choosing handmade. It means the world. 💕" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 32 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.1 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden shadow-elevated", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/assets/generated/about-crafting.dim_800x600.jpg",
                  alt: "Handcrafted Clutch & Charm hair accessories flat lay",
                  className: "w-full h-72 md:h-96 object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl ring-1 ring-border/30" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-elevated px-5 py-3 border border-border/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-bold text-foreground", children: "100% Handmade 💗" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: "Every single piece" })
            ] })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "text-center mb-12",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold uppercase tracking-widest text-primary mb-3 block", children: "The Process" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4", children: "How We Make Each Piece" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-xl mx-auto text-lg", children: "From raw materials to your doorstep — a labour of love at every stage." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto", children: makeSteps.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.1 },
          className: "relative bg-card rounded-2xl p-8 shadow-subtle border border-border/50 hover:shadow-hover transition-smooth group",
          "data-ocid": `make-step-${item.step}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-6 font-display text-5xl font-bold text-primary/10 select-none group-hover:text-primary/20 transition-smooth", children: item.step }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-5 h-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground mb-3", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm leading-relaxed", children: item.description })
          ]
        },
        item.step
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "text-center mb-12",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold uppercase tracking-widest text-primary mb-3 block", children: "What We Stand For" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4", children: "Our Values" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-xl mx-auto text-lg", children: "Three simple things guide everything we do at Clutch & Charm." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto", children: values.map((val, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.12 },
          className: `rounded-2xl p-8 ${val.bgClass} border border-border/30 hover:shadow-hover transition-smooth`,
          "data-ocid": `value-card-${i}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-card flex items-center justify-center mb-5 shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx(val.icon, { className: `w-6 h-6 ${val.iconClass}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground mb-3", children: val.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed", children: val.description })
          ]
        },
        val.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "text-center mb-14",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold uppercase tracking-widest text-primary mb-3 block", children: "Our Journey" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4", children: "Growing with Love 🌸" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-xl mx-auto text-lg", children: "From a kitchen table hobby to a brand loved by hundreds — here's our story so far." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: timeline.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.1 },
            className: "flex gap-6 items-start",
            "data-ocid": `timeline-${item.year}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-elevated relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-bold text-primary-foreground text-center leading-tight", children: item.year }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-6 flex-1 shadow-subtle border border-border/40 hover:shadow-hover transition-smooth", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-lg font-bold text-foreground mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 text-primary fill-primary" }),
                  item.title
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed", children: item.description })
              ] })
            ]
          },
          item.year
        )) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-16 md:py-24 relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, oklch(0.65 0.34 330) 0%, oklch(0.72 0.2 295) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 right-16 w-40 h-40 rounded-full bg-white/10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-10 w-24 h-24 rounded-full bg-white/10" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "flex flex-col items-center gap-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Heart,
                  {
                    size: 44,
                    className: "text-primary-foreground/80 fill-current"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight", children: [
                  "Ready to Find Your",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "Perfect Clutcher?" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-primary-foreground/80 text-lg max-w-xl mx-auto", children: "Browse our collection of handmade hair clutchers — each one waiting to become your new favourite accessory. 💕" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    asChild: true,
                    size: "lg",
                    className: "bg-card text-primary hover:bg-card/90 rounded-full px-8 gap-2 shadow-elevated hover:shadow-hover hover:-translate-y-1 transition-smooth",
                    "data-ocid": "cta-shop-link",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 18 }),
                      "Shop the Collection",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
                    ] })
                  }
                )
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
export {
  About as default
};
