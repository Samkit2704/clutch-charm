import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { featuredProducts } from "../data/products";
import { useCartStore } from "../stores/cart";
import type { Product } from "../types/product";
import { setPageMeta } from "../utils/seo";

const WHATSAPP_NUMBER = "923001234567";
const INSTAGRAM_HANDLE = "clutchandcharm";

const STATS = [
  {
    icon: Users,
    value: "500+",
    label: "Happy Customers",
    color: "text-primary",
  },
  {
    icon: Sparkles,
    value: "12+",
    label: "Unique Styles",
    color: "text-secondary",
  },
  {
    icon: Heart,
    value: "Handmade",
    label: "with Love",
    color: "text-primary",
  },
  {
    icon: CheckCircle,
    value: "100%",
    label: "Quality Guaranteed",
    color: "text-secondary",
  },
];

const INSTAGRAM_TILES = [
  {
    gradient: "from-pink-300/70 to-rose-200/70",
    emoji: "🌸",
    caption: "Pastel dreams",
  },
  {
    gradient: "from-violet-300/70 to-purple-200/70",
    emoji: "🦋",
    caption: "Flutter & glow",
  },
  {
    gradient: "from-pink-200/70 to-fuchsia-300/70",
    emoji: "🎀",
    caption: "Bow goals",
  },
  {
    gradient: "from-rose-200/70 to-pink-300/70",
    emoji: "✨",
    caption: "Sparkle on",
  },
  {
    gradient: "from-purple-200/70 to-violet-300/70",
    emoji: "💜",
    caption: "Soft & sweet",
  },
  {
    gradient: "from-fuchsia-200/70 to-pink-300/70",
    emoji: "🌷",
    caption: "Bloom daily",
  },
];

function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <motion.div
      className="group bg-card rounded-2xl overflow-hidden shadow-subtle hover:shadow-hover transition-smooth border border-border flex flex-col"
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <Link to="/shop/$productId" params={{ productId: String(product.id) }}>
        <div className="relative aspect-square overflow-hidden bg-muted/30">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          />
          {product.featured && (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold shadow-sm">
              ✨ Bestseller
            </Badge>
          )}
        </div>
      </Link>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <Link to="/shop/$productId" params={{ productId: String(product.id) }}>
          <h3 className="font-display font-semibold text-foreground text-sm sm:text-base leading-snug hover:text-primary transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={11} className="fill-primary text-primary" />
          ))}
          <span className="text-xs text-muted-foreground ml-1">(24)</span>
        </div>
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="font-display font-bold text-primary text-base sm:text-lg">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() =>
                addItem({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                })
              }
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-smooth"
              data-ocid={`add-to-cart-${product.id}`}
            >
              <Heart size={11} className="fill-current" />
              Add
            </button>
          </div>
        </div>
        <Link
          to="/shop/$productId"
          params={{ productId: String(product.id) }}
          className="text-xs text-center text-primary/70 hover:text-primary underline underline-offset-2 transition-colors duration-200 mt-1"
          data-ocid={`view-details-${product.id}`}
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}

export default function Home() {
  useEffect(() => {
    setPageMeta(
      "Handmade Hair Clutchers for Every Style",
      "Clutch & Charm — handcrafted girls' hair clutchers, butterfly clips, colorful bows & accessories. Artisanal quality with pastel magic, made with love.",
    );
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Full gradient background */}
        <div className="absolute inset-0 gradient-primary opacity-90" />
        {/* Hero image overlay */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-girl-hair.dim_1200x600.jpg"
            alt="Girl with beautiful handcrafted hair accessories"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
        </div>
        {/* Soft bokeh circles */}
        <div
          className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.85 0.15 295), transparent)",
          }}
        />
        <div
          className="absolute bottom-10 left-10 w-56 h-56 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.90 0.10 50), transparent)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <Badge className="mb-5 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 backdrop-blur-sm text-sm px-4 py-1.5">
                <Sparkles size={14} className="mr-1.5" />
                Handcrafted with Love
              </Badge>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground leading-[1.1] tracking-tight mb-5">
                Handmade Hair
                <br />
                Clutchers for
                <br />
                <span className="italic font-light">Every Style</span>{" "}
                <span className="not-italic font-extrabold">✨</span>
              </h1>

              <p className="text-base sm:text-lg text-primary-foreground/85 leading-relaxed mb-8 max-w-lg">
                At <strong>Clutch & Charm</strong>, every piece is crafted with
                love — soft fabrics, dreamy pastels, and a little bit of magic.
                Made by hand, worn with heart.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated font-semibold transition-smooth"
                  data-ocid="hero-shop-now-cta"
                >
                  <Link to="/shop">
                    Shop Now
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 gap-2 border-2 border-primary-foreground/70 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 transition-smooth"
                >
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="hero-whatsapp-cta"
                  >
                    <SiWhatsapp size={18} />
                    Order on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Floating accent cards */}
            <motion.div
              className="hidden lg:flex flex-col gap-4 items-end"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-primary-foreground/20 backdrop-blur-md rounded-3xl p-6 border border-primary-foreground/30 max-w-xs shadow-elevated">
                <p className="text-primary-foreground/90 font-display font-semibold text-lg mb-1">
                  🎀 New Arrivals
                </p>
                <p className="text-primary-foreground/70 text-sm">
                  Fresh designs drop every week — don't miss out!
                </p>
              </div>
              <div className="bg-primary-foreground/20 backdrop-blur-md rounded-3xl p-6 border border-primary-foreground/30 max-w-xs shadow-elevated ml-12">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={14}
                      className="fill-primary-foreground text-primary-foreground"
                    />
                  ))}
                </div>
                <p className="text-primary-foreground/90 text-sm font-medium">
                  "The prettiest hair clutcher I've ever owned!" — Ayesha M.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z"
              fill="oklch(0.99 0.02 50)"
            />
          </svg>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="bg-background py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-card border border-border shadow-subtle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <stat.icon size={24} className={stat.color} />
                <span
                  className={`font-display font-bold text-2xl ${stat.color}`}
                >
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bestsellers ── */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 px-4 py-1">
              ✨ Fan Favorites
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mt-2">
              Bestsellers
            </h2>
            <p className="mt-2 text-muted-foreground max-w-md mx-auto text-sm sm:text-base">
              Our most-loved pieces — handpicked for maximum charm and sparkle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {featuredProducts.slice(0, 6).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 gap-2 shadow-elevated"
              data-ocid="bestsellers-view-all"
            >
              <Link to="/shop">
                View All Products
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Story Teaser ── */}
      <section className="bg-accent/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="order-2 lg:order-1"
            >
              <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30">
                Our Story
              </Badge>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4 leading-snug">
                The Magic in the Making
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-3">
                Clutch & Charm was born from a simple love — the joy of making
                something beautiful with your own hands. Every clutch, clip, and
                bow is stitched, painted, and assembled with heart.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
                We choose the softest fabrics, the prettiest colors, and the
                most durable materials so each piece becomes a little keepsake —
                a sprinkle of joy in every hairstyle.
              </p>
              <Button
                asChild
                variant="outline"
                className="rounded-full gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                data-ocid="story-read-more"
              >
                <Link to="/about">
                  Read Our Story
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="order-1 lg:order-2 relative"
            >
              <img
                src="/assets/generated/about-crafting.dim_800x500.jpg"
                alt="Handcrafting hair accessories with love"
                className="rounded-3xl shadow-elevated w-full object-cover max-h-[380px]"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-5 py-3 shadow-hover">
                <span className="font-display font-bold text-sm">
                  Crafted by hand 🌸
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Instagram Section ── */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SiInstagram size={28} className="text-primary mx-auto mb-3" />
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
              Follow Us{" "}
              <span className="text-primary">@{INSTAGRAM_HANDLE}</span>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-sm mx-auto text-sm sm:text-base">
              Tag us in your photos for a chance to be featured on our feed! ✨
            </p>
          </motion.div>

          {/* Simulated Instagram grid */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mb-8">
            {INSTAGRAM_TILES.map((tile, i) => (
              <motion.a
                key={tile.caption}
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${tile.gradient} flex flex-col items-center justify-center gap-1 cursor-pointer group hover:ring-2 hover:ring-primary hover:ring-offset-2 transition-smooth`}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                data-ocid={`instagram-tile-${i + 1}`}
              >
                <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-200">
                  {tile.emoji}
                </span>
                <span className="text-[10px] sm:text-xs text-foreground/60 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-2">
                  {tile.caption}
                </span>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full gradient-primary text-primary-foreground font-semibold text-sm sm:text-base shadow-elevated hover:opacity-90 transition-smooth"
              data-ocid="home-instagram-follow-cta"
            >
              <SiInstagram size={18} />
              Follow @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </section>

      {/* ── WhatsApp CTA Band ── */}
      <section className="gradient-primary py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-primary-foreground mb-3">
              Order Directly on WhatsApp 💬
            </h2>
            <p className="text-primary-foreground/80 mb-7 text-sm sm:text-base">
              Chat with us to customize your order, ask about availability, or
              get a special bundle deal — we're always here for you!
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Clutch%20%26%20Charm!%20I'd%20like%20to%20place%20an%20order%20%F0%9F%8C%B8`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-primary-foreground text-primary font-semibold text-base shadow-elevated hover:bg-primary-foreground/90 transition-smooth"
              data-ocid="whatsapp-order-band-cta"
            >
              <SiWhatsapp size={20} />
              Chat with Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
