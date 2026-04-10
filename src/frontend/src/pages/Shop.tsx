import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { ShoppingBag, SlidersHorizontal } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { useProducts } from "../hooks/useQueries";
import { useCartStore } from "../stores/cart";
import type { Product } from "../types/product";
import { setPageMeta } from "../utils/seo";

type FilterTab = "all" | "Florals" | "Boho" | "Pastels" | "Metallics";
type SortOption = "newest" | "price-asc" | "price-desc" | "best-sellers";

const FILTER_TABS: { label: string; value: FilterTab; emoji: string }[] = [
  { label: "All", value: "all", emoji: "🌈" },
  { label: "Florals", value: "Florals", emoji: "🌸" },
  { label: "Pastels", value: "Pastels", emoji: "🎀" },
  { label: "Metallics", value: "Metallics", emoji: "✨" },
  { label: "Boho", value: "Boho", emoji: "🦋" },
];

const CATEGORY_COLORS: Record<string, string> = {
  Florals: "bg-pink-100 text-pink-700 border-pink-200",
  Boho: "bg-amber-100 text-amber-700 border-amber-200",
  Pastels: "bg-purple-100 text-purple-700 border-purple-200",
  Metallics: "bg-yellow-100 text-yellow-700 border-yellow-200",
};

function ProductCard({ product, index }: { product: Product; index: number }) {
  const addItem = useCartStore((s) => s.addItem);
  const badgeClass =
    CATEGORY_COLORS[product.category] ??
    "bg-muted text-muted-foreground border-border";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-subtle border border-border hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
      data-ocid="product-card"
    >
      <Link to="/shop/$productId" params={{ productId: String(product.id) }}>
        <div className="relative overflow-hidden aspect-square bg-accent">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.featured && (
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
              ✨ Bestseller
            </span>
          )}
        </div>
      </Link>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span
            className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${badgeClass}`}
          >
            {product.category}
          </span>
          <span className="text-lg font-display font-bold text-primary">
            ₹{product.price}
          </span>
        </div>

        <Link to="/shop/$productId" params={{ productId: String(product.id) }}>
          <h3 className="font-display font-semibold text-foreground leading-snug hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed flex-1">
          {product.description}
        </p>

        <div className="flex gap-2 mt-2">
          <Link
            to="/shop/$productId"
            params={{ productId: String(product.id) }}
            className="flex-1"
          >
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="w-full border-primary/40 text-primary hover:bg-primary/10 rounded-xl text-xs"
              data-ocid="view-details-btn"
            >
              View Details
            </Button>
          </Link>
          <Button
            type="button"
            size="sm"
            className="flex-1 gradient-primary text-primary-foreground rounded-xl hover:opacity-90 shadow-subtle gap-1 text-xs"
            onClick={() =>
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              })
            }
            data-ocid={`add-to-cart-${product.id}`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-subtle border border-border flex flex-col">
      <Skeleton className="aspect-square w-full rounded-none" />
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-14" />
        </div>
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="flex gap-2 mt-2">
          <Skeleton className="h-9 flex-1 rounded-xl" />
          <Skeleton className="h-9 flex-1 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  const { data: products = [], isLoading, isError, error } = useProducts();

  useEffect(() => {
    setPageMeta(
      "Shop",
      "Browse our full collection of handmade girls hair clutchers, clips, bows and sets at Clutch & Charm.",
    );
  }, []);

  const filtered = useMemo(() => {
    let list =
      activeFilter === "all"
        ? [...products]
        : products.filter((p) => p.category === activeFilter);

    switch (sortBy) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "best-sellers":
        list = [...list].sort(
          (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0),
        );
        break;
      default:
        list = [...list].sort((a, b) => b.id - a.id);
    }
    return list;
  }, [products, activeFilter, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero banner */}
      <section className="gradient-subtle py-12 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-semibold text-sm tracking-widest uppercase mb-2"
          >
            Handcrafted with love 🌸
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3"
          >
            Shop the Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            Every piece is made by hand, with heart. Discover your perfect hair
            companion from {isLoading ? "12" : products.length} adorable styles!
          </motion.p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filters + Sort row */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
          <div className="flex flex-wrap gap-2" data-ocid="category-filters">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveFilter(tab.value)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeFilter === tab.value
                    ? "gradient-primary text-primary-foreground border-transparent shadow-subtle"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
                }`}
                data-ocid={`filter-${tab.value}`}
              >
                <span>{tab.emoji}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <SlidersHorizontal className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <Select
              value={sortBy}
              onValueChange={(v) => setSortBy(v as SortOption)}
            >
              <SelectTrigger
                className="w-48 rounded-xl border-border bg-card"
                data-ocid="sort-select"
              >
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="best-sellers">Best Sellers</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Error state */}
        {isError && (
          <div
            className="bg-destructive/10 text-destructive border border-destructive/20 rounded-xl px-4 py-3 text-sm mb-6"
            data-ocid="shop-error"
          >
            {String(error)} — Showing cached products instead.
          </div>
        )}

        {/* Product count */}
        {!isLoading && (
          <p className="text-muted-foreground text-sm mb-6">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "product" : "products"}
            {activeFilter !== "all" && (
              <span>
                {" "}
                in{" "}
                <span className="capitalize font-medium text-primary">
                  {activeFilter}
                </span>
              </span>
            )}
          </p>
        )}

        {/* Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["sk-1", "sk-2", "sk-3", "sk-4", "sk-5", "sk-6"].map((key) => (
              <SkeletonCard key={key} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div
            className="text-center py-20 bg-card rounded-2xl border border-dashed border-border"
            data-ocid="shop-empty"
          >
            <p className="text-4xl mb-4">🌸</p>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              No products found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try a different category or check back soon for new arrivals!
            </p>
            <Button
              type="button"
              onClick={() => setActiveFilter("all")}
              className="gradient-primary text-primary-foreground rounded-xl"
            >
              View All Products
            </Button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="product-grid"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
