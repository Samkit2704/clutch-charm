import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Heart,
  Scissors,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { setPageMeta } from "../utils/seo";

const makeSteps = [
  {
    icon: Scissors,
    step: "01",
    title: "Choose Materials",
    description:
      "We handpick only the softest fabrics — plush velvet, lustrous silk ribbons, and delicate lace — in the season's most gorgeous pastel shades.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Handcraft Each Piece",
    description:
      "Every clutcher is cut, stitched, and embellished entirely by hand. No machines, no shortcuts — just pure artisan love in every stitch.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Quality Check & Pack",
    description:
      "Each piece is inspected with love before being wrapped in our signature pink tissue and ribbon — ready to delight its new owner.",
  },
];

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "Every piece is made to last. We source premium materials and pour attention into every detail so you get heirlooms, not just accessories.",
    bgClass: "bg-pink-50",
    iconClass: "text-primary",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Genuine care goes into every clutcher we make. From the first stitch to the final ribbon, love is the secret ingredient in every piece.",
    bgClass: "bg-purple-50",
    iconClass: "text-secondary",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "You are why we do this. We love hearing your stories, celebrating your special moments, and making sure every order makes you smile.",
    bgClass: "bg-amber-50",
    iconClass: "text-amber-500",
  },
];

const timeline = [
  {
    year: "2022",
    title: "Started making hair clutchers at home",
    description:
      "It began on a quiet afternoon with fabric scraps, a needle, and a big dream. The first clutcher was gifted to a friend — she wore it everywhere.",
  },
  {
    year: "2023",
    title: "First 100 customers",
    description:
      "Word spread through Instagram and WhatsApp. Reaching 100 happy customers felt magical. We cried happy tears.",
  },
  {
    year: "2024",
    title: "Expanded to 12+ styles",
    description:
      "From classic claw clips to velvet butterflies and pearl bow barrettes — the collection grew as beautifully as our community.",
  },
  {
    year: "2025",
    title: "Growing with love",
    description:
      "New colours, new collections, and the same handmade soul. Thank you for being part of the Clutch & Charm family.",
  },
];

export default function About() {
  useEffect(() => {
    setPageMeta(
      "About Us | Clutch & Charm",
      "Discover the heartfelt story behind Clutch & Charm — handmade hair clutchers crafted with love, premium materials, and artisan care for girls, teens, and women.",
    );
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.97 0.04 350) 0%, oklch(0.96 0.05 300) 50%, oklch(0.97 0.03 60) 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute top-10 left-8 w-32 h-32 rounded-full opacity-20"
            style={{ background: "oklch(0.85 0.12 330)" }}
          />
          <div
            className="absolute bottom-16 right-12 w-48 h-48 rounded-full opacity-15"
            style={{ background: "oklch(0.82 0.1 295)" }}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-card text-primary border-primary/20 mb-4">
              <Sparkles size={13} className="mr-1" />
              Our Story
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Made with Love,{" "}
              <span className="text-primary">Worn with Pride</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every hair clutcher from Clutch &amp; Charm begins as a dream and
              ends as something beautiful — handcrafted just for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
                The Heart Behind the Brand
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-snug">
                Hi! I'm the heart behind{" "}
                <span className="text-primary">Clutch &amp; Charm</span> ✨
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
                It all started with a love for beautiful hair accessories and a
                dream to create something handmade and special. Every clutcher
                is crafted by hand, stitched with care, and designed to make you
                feel beautiful every single day.
              </p>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
                I'd spend weekends surrounded by ribbons, beads, and fabric
                swatches — completely in my element. Whether it's for school, a
                birthday party, or just a regular Tuesday — there's a Clutch
                &amp; Charm piece for every moment.
              </p>
              <p className="font-body text-base md:text-lg text-foreground font-medium leading-relaxed">
                Thank you for choosing handmade. It means the world. 💕
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/assets/generated/about-crafting.dim_800x600.jpg"
                  alt="Handcrafted Clutch & Charm hair accessories flat lay"
                  className="w-full h-72 md:h-96 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-border/30" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-elevated px-5 py-3 border border-border/50">
                <p className="font-display text-sm font-bold text-foreground">
                  100% Handmade 💗
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  Every single piece
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Make */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
              The Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Make Each Piece
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
              From raw materials to your doorstep — a labour of love at every
              stage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {makeSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-card rounded-2xl p-8 shadow-subtle border border-border/50 hover:shadow-hover transition-smooth group"
                data-ocid={`make-step-${item.step}`}
              >
                <div className="absolute -top-3 left-6 font-display text-5xl font-bold text-primary/10 select-none group-hover:text-primary/20 transition-smooth">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 shadow-subtle">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
              What We Stand For
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
              Three simple things guide everything we do at Clutch &amp; Charm.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`rounded-2xl p-8 ${val.bgClass} border border-border/30 hover:shadow-hover transition-smooth`}
                data-ocid={`value-card-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center mb-5 shadow-subtle">
                  <val.icon className={`w-6 h-6 ${val.iconClass}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {val.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Growing with Love 🌸
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
              From a kitchen table hobby to a brand loved by hundreds — here's
              our story so far.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div
                className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"
                aria-hidden="true"
              />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-6 items-start"
                    data-ocid={`timeline-${item.year}`}
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-elevated relative z-10">
                      <span className="font-display text-sm font-bold text-primary-foreground text-center leading-tight">
                        {item.year}
                      </span>
                    </div>
                    <div className="bg-card rounded-2xl p-6 flex-1 shadow-subtle border border-border/40 hover:shadow-hover transition-smooth">
                      <h3 className="font-display text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.65 0.34 330) 0%, oklch(0.72 0.2 295) 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-6 right-16 w-40 h-40 rounded-full bg-white/10" />
          <div className="absolute bottom-8 left-10 w-24 h-24 rounded-full bg-white/10" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <Heart
              size={44}
              className="text-primary-foreground/80 fill-current"
            />
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Ready to Find Your{" "}
              <span className="italic">Perfect Clutcher?</span>
            </h2>
            <p className="font-body text-primary-foreground/80 text-lg max-w-xl mx-auto">
              Browse our collection of handmade hair clutchers — each one
              waiting to become your new favourite accessory. 💕
            </p>
            <Button
              asChild
              size="lg"
              className="bg-card text-primary hover:bg-card/90 rounded-full px-8 gap-2 shadow-elevated hover:shadow-hover hover:-translate-y-1 transition-smooth"
              data-ocid="cta-shop-link"
            >
              <Link to="/shop">
                <Sparkles size={18} />
                Shop the Collection
                <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
