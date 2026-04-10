import { c as createLucideIcon, e as useParams, u as useCartStore, r as reactExports, j as jsxRuntimeExports, B as Button, L as Link, f as Separator, d as ShoppingBag, a as SiWhatsapp } from "./index-CzN1_jR2.js";
import { b as useProduct, a as useProducts, S as Skeleton } from "./useQueries-BNCFLDIl.js";
import { s as setPageMeta, m as motion } from "./seo-FukVFP8Q.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode);
const WHATSAPP_NUMBER = "919876543210";
const CATEGORY_COLORS = {
  Florals: "bg-pink-100 text-pink-700 border-pink-200",
  Pastels: "bg-purple-100 text-purple-700 border-purple-200",
  Boho: "bg-amber-100 text-amber-700 border-amber-200",
  Metallics: "bg-yellow-100 text-yellow-700 border-yellow-200"
};
function MaterialChip({ label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground border border-border", children: label });
}
function LoadingSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/20 border-b border-border py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-48" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-28 mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-square rounded-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-20 rounded-full" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-3/4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-24" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-px w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-5/6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4/5" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-16" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-24 rounded-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-20 rounded-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-28 rounded-full" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 flex-1 rounded-xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 flex-1 rounded-xl" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
function ProductDetail() {
  const { productId } = useParams({ from: "/shop/$productId" });
  const id = Number(productId);
  const { data: product, isLoading, isError } = useProduct(id);
  const { data: allProducts = [] } = useProducts();
  const addItem = useCartStore((s) => s.addItem);
  reactExports.useEffect(() => {
    if (product) {
      setPageMeta(
        product.name,
        `${product.description} Shop handmade hair accessories at Clutch & Charm.`
      );
    }
  }, [product]);
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSkeleton, {});
  if (isError || !product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center gap-4 bg-background p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl", children: "😕" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground", children: "Product not found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "This item might have fluttered away!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", children: "Back to Shop" }) })
    ] });
  }
  const whatsAppMsg = encodeURIComponent(
    `Hi! I want to order: ${product.name} at ₹${product.price}. Please let me know the next steps!`
  );
  const materials = product.materials.split(",").map((m) => m.trim()).filter(Boolean);
  const related = allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
  const badgeClass = CATEGORY_COLORS[product.category] ?? "bg-muted text-muted-foreground border-border";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/20 border-b border-border py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-sm text-muted-foreground flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          className: "hover:text-primary transition-colors duration-200",
          children: "Home"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/shop",
          className: "hover:text-primary transition-colors duration-200",
          children: "Shop"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium truncate max-w-[180px]", children: product.name })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          asChild: true,
          variant: "ghost",
          className: "mb-6 gap-2 -ml-2 text-muted-foreground hover:text-primary",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }),
            "Back to Shop"
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.97 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.45 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl overflow-hidden shadow-elevated aspect-square bg-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: product.image,
                alt: product.name,
                className: "w-full h-full object-cover"
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "flex flex-col gap-5",
            initial: { opacity: 0, x: 24 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.45, delay: 0.1 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-xs font-medium px-3 py-1 rounded-full border ${badgeClass}`,
                    children: product.category
                  }
                ),
                product.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20", children: "✨ Bestseller" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight", children: product.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-display font-bold text-primary", children: [
                "₹",
                product.price
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-base", children: product.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground uppercase tracking-wider mb-2.5", children: "Materials" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: materials.map((mat) => /* @__PURE__ */ jsxRuntimeExports.jsx(MaterialChip, { label: mat }, mat)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    size: "lg",
                    className: "flex-1 gap-2 gradient-primary text-primary-foreground rounded-xl shadow-elevated hover:opacity-90",
                    onClick: () => addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image
                    }),
                    "data-ocid": "product-add-to-cart",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 18 }),
                      "Add to Cart"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    asChild: true,
                    size: "lg",
                    variant: "outline",
                    className: "flex-1 gap-2 rounded-xl border-[#25D366]/40 text-[#128C7E] hover:bg-[#25D366]/10",
                    "data-ocid": "product-whatsapp-order",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsAppMsg}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SiWhatsapp, { size: 18, className: "text-[#25D366]" }),
                          "Order via WhatsApp"
                        ]
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center border border-dashed border-border rounded-xl py-2.5 px-4", children: "💌 Free gift wrapping on orders over ₹500  ·  🚚 Delivered with care" })
            ]
          }
        )
      ] })
    ] }) }),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 py-12 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-6", children: "You Might Also Love ✨" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: related.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/shop/$productId",
              params: { productId: String(p.id) },
              className: "group block bg-card rounded-2xl overflow-hidden shadow-subtle hover:shadow-hover hover:-translate-y-1 transition-all duration-300 border border-border",
              "data-ocid": `related-product-${p.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square overflow-hidden bg-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: p.image,
                    alt: p.name,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-display font-semibold text-foreground truncate group-hover:text-primary transition-colors", children: p.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base font-bold text-primary mt-1", children: [
                    "₹",
                    p.price
                  ] })
                ] })
              ]
            }
          )
        },
        p.id
      )) })
    ] }) })
  ] });
}
export {
  ProductDetail as default
};
