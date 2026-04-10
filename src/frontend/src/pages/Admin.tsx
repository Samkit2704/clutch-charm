import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BarChart3,
  Eye,
  Heart,
  Package,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { useProducts } from "../hooks/useQueries";
import type { Product } from "../types/product";
import { setPageMeta } from "../utils/seo";

const CATEGORY_COLORS: Record<string, string> = {
  Florals: "bg-pink-100 text-pink-700 border-pink-200",
  Pastels: "bg-purple-100 text-purple-700 border-purple-200",
  Boho: "bg-amber-100 text-amber-700 border-amber-200",
  Metallics: "bg-yellow-100 text-yellow-700 border-yellow-200",
};

// Simulated order data for the dashboard
const MOCK_ORDERS = [
  {
    id: "#001",
    customer: "Priya Sharma",
    product: "Rose Petal Clutcher",
    amount: 299,
    status: "delivered",
    date: "Apr 8, 2026",
  },
  {
    id: "#002",
    customer: "Meena Patel",
    product: "Pastel Dream Set",
    amount: 499,
    status: "processing",
    date: "Apr 9, 2026",
  },
  {
    id: "#003",
    customer: "Ananya Rao",
    product: "Lavender Love Clutcher",
    amount: 279,
    status: "delivered",
    date: "Apr 9, 2026",
  },
  {
    id: "#004",
    customer: "Riya Gupta",
    product: "Peach Blossom Set",
    amount: 459,
    status: "shipped",
    date: "Apr 10, 2026",
  },
  {
    id: "#005",
    customer: "Pooja Singh",
    product: "Golden Goddess Pin",
    amount: 249,
    status: "processing",
    date: "Apr 10, 2026",
  },
  {
    id: "#006",
    customer: "Kavya Nair",
    product: "Copper Twist Clutcher",
    amount: 319,
    status: "delivered",
    date: "Apr 7, 2026",
  },
  {
    id: "#007",
    customer: "Divya Iyer",
    product: "Marigold Festival Clutcher",
    amount: 289,
    status: "shipped",
    date: "Apr 10, 2026",
  },
];

const STATUS_STYLES: Record<string, string> = {
  delivered: "bg-green-100 text-green-700 border-green-200",
  processing: "bg-yellow-100 text-yellow-700 border-yellow-200",
  shipped: "bg-blue-100 text-blue-700 border-blue-200",
};

const STATS_DATA = [
  {
    label: "Total Revenue",
    value: "₹18,420",
    icon: TrendingUp,
    change: "+12% this week",
    positive: true,
  },
  {
    label: "Orders Today",
    value: "7",
    icon: ShoppingBag,
    change: "+3 from yesterday",
    positive: true,
  },
  {
    label: "Total Products",
    value: "12",
    icon: Package,
    change: "All in stock",
    positive: true,
  },
  {
    label: "Happy Customers",
    value: "500+",
    icon: Users,
    change: "Growing fast 🌸",
    positive: true,
  },
];

function StatCard({
  stat,
  index,
}: { stat: (typeof STATS_DATA)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
    >
      <Card className="p-5 bg-card border-border shadow-subtle hover:shadow-hover transition-smooth">
        <div className="flex items-start justify-between mb-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <stat.icon size={20} className="text-primary" />
          </div>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${stat.positive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
          >
            {stat.change}
          </span>
        </div>
        <p className="text-2xl font-display font-bold text-foreground">
          {stat.value}
        </p>
        <p className="text-sm text-muted-foreground mt-0.5">{stat.label}</p>
      </Card>
    </motion.div>
  );
}

function ProductRow({ product, index }: { product: Product; index: number }) {
  const badgeClass =
    CATEGORY_COLORS[product.category] ??
    "bg-muted text-muted-foreground border-border";
  return (
    <motion.tr
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04 }}
      className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors"
      data-ocid={`admin-product-row-${product.id}`}
    >
      <td className="py-3 px-4">
        <div className="flex items-center gap-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
          />
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground truncate max-w-[200px]">
              {product.name}
            </p>
            <p className="text-xs text-muted-foreground truncate max-w-[200px]">
              {product.description.slice(0, 50)}…
            </p>
          </div>
        </div>
      </td>
      <td className="py-3 px-4">
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${badgeClass}`}
        >
          {product.category}
        </span>
      </td>
      <td className="py-3 px-4 text-right font-display font-bold text-primary text-sm">
        ₹{product.price}
      </td>
      <td className="py-3 px-4 text-center">
        {product.featured ? (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-full">
            <Star size={10} className="fill-amber-500 text-amber-500" />
            Bestseller
          </span>
        ) : (
          <span className="text-xs text-muted-foreground">—</span>
        )}
      </td>
      <td className="py-3 px-4 text-right">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="text-xs gap-1 h-7 px-2 hover:text-primary"
        >
          <Link
            to="/shop/$productId"
            params={{ productId: String(product.id) }}
          >
            <Eye size={12} />
            View
          </Link>
        </Button>
      </td>
    </motion.tr>
  );
}

function SkeletonRow() {
  return (
    <tr className="border-b border-border">
      <td className="py-3 px-4">
        <div className="flex items-center gap-3">
          <Skeleton className="w-10 h-10 rounded-lg flex-shrink-0" />
          <div className="space-y-1.5">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      </td>
      <td className="py-3 px-4">
        <Skeleton className="h-5 w-16 rounded-full" />
      </td>
      <td className="py-3 px-4">
        <Skeleton className="h-5 w-12 ml-auto" />
      </td>
      <td className="py-3 px-4">
        <Skeleton className="h-5 w-20 mx-auto" />
      </td>
      <td className="py-3 px-4">
        <Skeleton className="h-7 w-14 ml-auto" />
      </td>
    </tr>
  );
}

export default function Admin() {
  const [search, setSearch] = useState("");
  const { data: products = [], isLoading } = useProducts();

  useEffect(() => {
    setPageMeta(
      "Admin Panel",
      "Clutch & Charm admin dashboard — manage products and orders.",
    );
  }, []);

  const filtered = useMemo(() => {
    if (!search.trim()) return products;
    const q = search.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    );
  }, [products, search]);

  const totalRevenue = MOCK_ORDERS.reduce((s, o) => s + o.amount, 0);
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of products) {
      counts[p.category] = (counts[p.category] ?? 0) + 1;
    }
    return counts;
  }, [products]);

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <div className="bg-card border-b border-border sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
              <BarChart3 size={18} className="text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg text-foreground leading-none">
                Admin Panel
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Clutch & Charm Dashboard
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles size={11} className="mr-1" />
              Live Data
            </Badge>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="gap-1.5 text-xs rounded-xl"
            >
              <Link to="/shop">
                <ArrowUpRight size={13} />
                View Shop
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {STATS_DATA.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="products">
          <TabsList className="mb-6 bg-muted/40 rounded-xl p-1">
            <TabsTrigger
              value="products"
              className="rounded-lg gap-1.5 text-sm"
              data-ocid="admin-tab-products"
            >
              <Package size={14} />
              Products ({products.length})
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className="rounded-lg gap-1.5 text-sm"
              data-ocid="admin-tab-orders"
            >
              <ShoppingBag size={14} />
              Recent Orders
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="rounded-lg gap-1.5 text-sm"
              data-ocid="admin-tab-analytics"
            >
              <BarChart3 size={14} />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products">
            <Card className="border-border shadow-subtle overflow-hidden">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between p-4 border-b border-border bg-muted/20">
                <div className="relative w-full sm:w-72">
                  <Search
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products..."
                    className="pl-9 h-9 rounded-xl text-sm"
                    data-ocid="admin-product-search"
                  />
                </div>
                <p className="text-xs text-muted-foreground flex-shrink-0">
                  {isLoading ? "Loading…" : `${filtered.length} products`}
                </p>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs font-semibold text-muted-foreground border-b border-border bg-muted/10">
                      <th className="text-left py-3 px-4 font-medium">
                        Product
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Category
                      </th>
                      <th className="text-right py-3 px-4 font-medium">
                        Price
                      </th>
                      <th className="text-center py-3 px-4 font-medium">
                        Status
                      </th>
                      <th className="text-right py-3 px-4 font-medium">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading
                      ? ["r1", "r2", "r3", "r4", "r5", "r6"].map((key) => (
                          <SkeletonRow key={key} />
                        ))
                      : filtered.map((product, i) => (
                          <ProductRow
                            key={product.id}
                            product={product}
                            index={i}
                          />
                        ))}
                    {!isLoading && filtered.length === 0 && (
                      <tr>
                        <td
                          colSpan={5}
                          className="py-12 text-center text-muted-foreground text-sm"
                          data-ocid="admin-no-products"
                        >
                          <p className="text-3xl mb-2">🔍</p>
                          No products match your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card className="border-border shadow-subtle overflow-hidden">
              <div className="p-4 border-b border-border bg-muted/20 flex items-center justify-between">
                <h3 className="font-display font-semibold text-foreground text-sm">
                  Recent Orders
                </h3>
                <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                  Total: ₹{totalRevenue}
                </Badge>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs font-semibold text-muted-foreground border-b border-border bg-muted/10">
                      <th className="text-left py-3 px-4 font-medium">Order</th>
                      <th className="text-left py-3 px-4 font-medium">
                        Customer
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Product
                      </th>
                      <th className="text-right py-3 px-4 font-medium">
                        Amount
                      </th>
                      <th className="text-center py-3 px-4 font-medium">
                        Status
                      </th>
                      <th className="text-right py-3 px-4 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_ORDERS.map((order, i) => (
                      <motion.tr
                        key={order.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors"
                        data-ocid={`admin-order-row-${order.id}`}
                      >
                        <td className="py-3 px-4 font-mono text-xs text-muted-foreground">
                          {order.id}
                        </td>
                        <td className="py-3 px-4 text-sm font-medium text-foreground">
                          {order.customer}
                        </td>
                        <td className="py-3 px-4 text-sm text-muted-foreground max-w-[160px] truncate">
                          {order.product}
                        </td>
                        <td className="py-3 px-4 text-right font-display font-bold text-primary text-sm">
                          ₹{order.amount}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span
                            className={`text-xs font-medium px-2.5 py-0.5 rounded-full border capitalize ${STATUS_STYLES[order.status] ?? "bg-muted text-muted-foreground border-border"}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-muted-foreground">
                          {order.date}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category breakdown */}
              <Card className="border-border shadow-subtle p-5">
                <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Heart size={16} className="text-primary" />
                  Products by Category
                </h3>
                {isLoading ? (
                  <div className="space-y-3">
                    {["c1", "c2", "c3", "c4"].map((key) => (
                      <Skeleton key={key} className="h-8 w-full rounded-lg" />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {Object.entries(categoryCounts).map(([cat, count]) => {
                      const pct = Math.round((count / products.length) * 100);
                      const badgeClass =
                        CATEGORY_COLORS[cat] ??
                        "bg-muted text-muted-foreground border-border";
                      return (
                        <div key={cat}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span
                              className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${badgeClass}`}
                            >
                              {cat}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {count} products ({pct}%)
                            </span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${pct}%` }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </Card>

              {/* Price range */}
              <Card className="border-border shadow-subtle p-5">
                <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp size={16} className="text-primary" />
                  Order Status Breakdown
                </h3>
                <div className="space-y-3">
                  {["delivered", "shipped", "processing"].map((status) => {
                    const count = MOCK_ORDERS.filter(
                      (o) => o.status === status,
                    ).length;
                    const pct = Math.round((count / MOCK_ORDERS.length) * 100);
                    const styleClass = STATUS_STYLES[status] ?? "";
                    return (
                      <div key={status}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span
                            className={`text-xs font-medium px-2.5 py-0.5 rounded-full border capitalize ${styleClass}`}
                          >
                            {status}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {count} orders ({pct}%)
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${status === "delivered" ? "bg-green-500" : status === "shipped" ? "bg-blue-500" : "bg-yellow-500"}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-5 border-t border-border grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Lowest Price
                    </p>
                    <p className="font-display font-bold text-primary text-lg">
                      ₹
                      {products.length > 0
                        ? Math.min(...products.map((p) => p.price))
                        : 0}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Highest Price
                    </p>
                    <p className="font-display font-bold text-primary text-lg">
                      ₹
                      {products.length > 0
                        ? Math.max(...products.map((p) => p.price))
                        : 0}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Avg. Price</p>
                    <p className="font-display font-bold text-foreground text-lg">
                      ₹
                      {products.length
                        ? Math.round(
                            products.reduce((s, p) => s + p.price, 0) /
                              products.length,
                          )
                        : 0}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Featured</p>
                    <p className="font-display font-bold text-foreground text-lg">
                      {products.filter((p) => p.featured).length} items
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
