import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";
import { getProductById, products } from "../data/products";
import { useCartStore } from "../stores/cart";
import { setPageMeta } from "../utils/seo";

const WHATSAPP_NUMBER = "923001234567";

const CATEGORY_COLORS: Record<string, string> = {
  clutchers: "bg-pink-100 text-pink-700 border-pink-200",
  clips: "bg-purple-100 text-purple-700 border-purple-200",
  bows: "bg-rose-100 text-rose-700 border-rose-200",
  sets: "bg-amber-100 text-amber-700 border-amber-200",
};

function MaterialChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground border border-border">
      {label}
    </span>
  );
}

export default function ProductDetail() {
  const { productId } = useParams({ from: "/shop/$productId" });
  const id = Number(productId);
  const product = getProductById(id);
  const addItem = useCartStore((s) => s.addItem);

  useEffect(() => {
    if (product) {
      setPageMeta(
        product.name,
        `${product.description} Shop handmade hair accessories at Clutch & Charm.`,
      );
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background p-8 text-center">
        <span className="text-5xl">😕</span>
        <h2 className="font-display font-bold text-2xl text-foreground">
          Product not found
        </h2>
        <p className="text-muted-foreground">
          This item might have fluttered away!
        </p>
        <Button asChild variant="outline">
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const whatsAppMsg = encodeURIComponent(
    `Hi Clutch & Charm! 🌸 I'd like to order: ${product.name} ($${product.price.toFixed(2)}). Please let me know the next steps!`,
  );

  const materials = product.materials
    .split(",")
    .map((m) => m.trim())
    .filter(Boolean);

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const badgeClass =
    CATEGORY_COLORS[product.category] ??
    "bg-muted text-muted-foreground border-border";

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/20 border-b border-border py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link
            to="/"
            className="hover:text-primary transition-colors duration-200"
          >
            Home
          </Link>
          <span className="text-border">/</span>
          <Link
            to="/shop"
            className="hover:text-primary transition-colors duration-200"
          >
            Shop
          </Link>
          <span className="text-border">/</span>
          <span className="text-foreground font-medium truncate max-w-[180px]">
            {product.name}
          </span>
        </div>
      </div>

      {/* Product detail */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Button
            asChild
            variant="ghost"
            className="mb-6 gap-2 -ml-2 text-muted-foreground hover:text-primary"
          >
            <Link to="/shop">
              <ArrowLeft size={16} />
              Back to Shop
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-elevated aspect-square bg-accent">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              className="flex flex-col gap-5"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              {/* Category badge */}
              <div className="flex flex-wrap gap-2">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full border capitalize ${badgeClass}`}
                >
                  {product.category}
                </span>
                {product.featured && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    ✨ Bestseller
                  </span>
                )}
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight">
                {product.name}
              </h1>

              <p className="text-3xl font-display font-bold text-primary">
                ${product.price.toFixed(2)}
              </p>

              <Separator />

              <p className="text-muted-foreground leading-relaxed text-base">
                {product.description}
              </p>

              {/* Materials as chips */}
              <div>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2.5">
                  Materials
                </p>
                <div className="flex flex-wrap gap-2">
                  {materials.map((mat) => (
                    <MaterialChip key={mat} label={mat} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button
                  type="button"
                  size="lg"
                  className="flex-1 gap-2 gradient-primary text-primary-foreground rounded-xl shadow-elevated hover:opacity-90"
                  onClick={() =>
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    })
                  }
                  data-ocid="product-add-to-cart"
                >
                  <ShoppingBag size={18} />
                  Add to Cart
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="flex-1 gap-2 rounded-xl border-[#25D366]/40 text-[#128C7E] hover:bg-[#25D366]/10"
                  data-ocid="product-whatsapp-order"
                >
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsAppMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiWhatsapp size={18} className="text-[#25D366]" />
                    Order via WhatsApp
                  </a>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center border border-dashed border-border rounded-xl py-2.5 px-4">
                💌 Free gift wrapping on orders over $25 &nbsp;·&nbsp; 🚚
                Delivered with care
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-muted/20 py-12 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="font-display font-bold text-2xl text-foreground mb-6">
              You Might Also Love ✨
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to="/shop/$productId"
                    params={{ productId: String(p.id) }}
                    className="group block bg-card rounded-2xl overflow-hidden shadow-subtle hover:shadow-hover hover:-translate-y-1 transition-all duration-300 border border-border"
                    data-ocid={`related-product-${p.id}`}
                  >
                    <div className="aspect-square overflow-hidden bg-accent">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-display font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                        {p.name}
                      </p>
                      <p className="text-base font-bold text-primary mt-1">
                        ${p.price.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
