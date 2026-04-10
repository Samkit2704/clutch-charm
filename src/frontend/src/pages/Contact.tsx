import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Instagram,
  Send,
  ShoppingBag,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { setPageMeta } from "../utils/seo";

const WHATSAPP_NUMBER = "923001234567";
const INSTAGRAM_HANDLE = "clutchandcharm";

const FAQS = [
  {
    q: "How long does delivery take?",
    a: "Standard delivery takes 3–5 business days across most cities. Express same-day delivery is available in select areas — just ask us on WhatsApp!",
  },
  {
    q: "Can I request a custom design?",
    a: "Absolutely! We love creating custom pieces. Share your color preferences, occasion, or inspiration via WhatsApp and we'll craft something just for you. Custom orders typically take 5–7 days.",
  },
  {
    q: "What materials are used?",
    a: "We use premium satin ribbons, soft velvet, hypoallergenic metals, and hand-picked embellishments. All materials are safe, gentle on hair, and built to last.",
  },
  {
    q: "Do you ship nationwide?",
    a: "Yes! We ship all across Pakistan. Shipping charges vary by city. Orders above PKR 2,000 get free standard shipping — details shared at checkout via WhatsApp.",
  },
];

const ORDER_STEPS = [
  {
    num: "01",
    icon: "🛍️",
    title: "Browse the Shop",
    desc: "Explore our colorful collection and pick your favorites.",
  },
  {
    num: "02",
    icon: "💬",
    title: "Order via WhatsApp",
    desc: "Click 'Order via WhatsApp' on any product to send us a message.",
  },
  {
    num: "03",
    icon: "✨",
    title: "We Confirm & Deliver!",
    desc: "We'll confirm your order, pack it with love, and deliver straight to you.",
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="rounded-2xl overflow-hidden border border-border shadow-subtle"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-card hover:bg-accent/40 transition-smooth"
        aria-expanded={open}
        data-ocid="faq-toggle"
      >
        <span className="font-display font-semibold text-foreground text-base">
          {q}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-primary shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 pt-2 bg-card/80 text-muted-foreground text-sm leading-relaxed">
          {a}
        </div>
      )}
    </motion.div>
  );
}

export default function Contact() {
  useEffect(() => {
    setPageMeta(
      "Contact Us | Clutch & Charm",
      "Get in touch with Clutch & Charm! Order handmade hair clutchers via WhatsApp, follow us on Instagram, or send us a message. We'd love to hear from you!",
    );
  }, []);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      !formState.name ||
      !formState.email ||
      !formState.subject ||
      !formState.message
    )
      return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4 border-b border-border">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.95 0.05 330 / 0.55) 0%, oklch(0.93 0.06 295 / 0.45) 50%, oklch(0.96 0.04 60 / 0.35) 100%)",
          }}
        />
        <div className="absolute top-10 left-10 w-28 h-28 rounded-full opacity-25 blur-3xl bg-primary" />
        <div className="absolute bottom-6 right-16 w-36 h-36 rounded-full opacity-20 blur-3xl bg-secondary" />
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4 bg-primary/15 text-primary border-primary/25 font-body">
            Clutch & Charm
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Get in Touch 💬
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            We'd love to hear from you! Whether it's a custom order, a question,
            or just saying hi — we're always here. 🌸
          </p>
        </motion.div>
      </section>

      {/* Main Two-Column Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Options */}
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Contact Options
            </h2>

            {/* WhatsApp CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card
                className="p-6 rounded-3xl border-0 shadow-elevated overflow-hidden relative"
                data-ocid="whatsapp-card"
              >
                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.70 0.17 155) 0%, oklch(0.60 0.19 155) 100%)",
                  }}
                />
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/20 shrink-0">
                    <WhatsAppIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-white text-lg leading-tight">
                      WhatsApp Us
                    </h3>
                    <p className="text-white/80 text-sm mt-1 mb-4 leading-relaxed">
                      The fastest way to place an order, ask questions, or get
                      styling tips. We usually reply within minutes!
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid="whatsapp-cta"
                    >
                      <Button
                        type="button"
                        className="bg-white text-green-700 hover:bg-white/90 font-semibold rounded-xl shadow-hover transition-smooth gap-2"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        Chat with Us on WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Instagram Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <Card
                className="p-5 rounded-3xl border border-border shadow-subtle bg-card"
                data-ocid="instagram-card"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 gradient-primary">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-foreground">
                      Instagram
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      @{INSTAGRAM_HANDLE} — daily inspo & new drops!
                    </p>
                  </div>
                  <a
                    href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="instagram-follow"
                  >
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="rounded-xl font-semibold shrink-0 transition-smooth"
                    >
                      Follow
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* Business Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card
                className="p-5 rounded-3xl border border-border shadow-subtle bg-card"
                data-ocid="hours-card"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-accent/60">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-foreground">
                      Business Hours
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Mon – Sat &nbsp;·&nbsp; 10:00 AM – 7:00 PM
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Closed on Sundays & public holidays 🌙
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-5">
              Send a Message
            </h2>

            {submitted ? (
              <Card
                className="p-8 rounded-3xl border border-border shadow-elevated bg-card flex flex-col items-center text-center gap-4"
                data-ocid="success-message"
              >
                <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Message Received! 🎀
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  Thank you for reaching out, {formState.name}! We'll get back
                  to you within 24 hours. In the meantime, feel free to browse
                  our new arrivals 🌸
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-xl mt-2"
                  onClick={() => setSubmitted(false)}
                  data-ocid="send-another"
                >
                  Send Another Message
                </Button>
              </Card>
            ) : (
              <Card
                className="p-6 rounded-3xl border border-border shadow-elevated bg-card"
                data-ocid="contact-form-card"
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="name" className="font-semibold text-sm">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="e.g. Ayesha Khan"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="rounded-xl"
                        data-ocid="input-name"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="email" className="font-semibold text-sm">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="hello@example.com"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="rounded-xl"
                        data-ocid="input-email"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="subject" className="font-semibold text-sm">
                      Subject
                    </Label>
                    <Select
                      value={formState.subject}
                      onValueChange={(v) =>
                        setFormState((s) => ({ ...s, subject: v }))
                      }
                      required
                    >
                      <SelectTrigger
                        className="rounded-xl"
                        id="subject"
                        data-ocid="input-subject"
                      >
                        <SelectValue placeholder="Choose a topic…" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="order">Order Question</SelectItem>
                        <SelectItem value="custom">Custom Order</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="message" className="font-semibold text-sm">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us what's on your mind… 💭"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="rounded-xl resize-none"
                      data-ocid="input-message"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="rounded-xl gradient-primary border-0 text-white font-semibold h-11 gap-2 transition-smooth shadow-hover"
                    data-ocid="submit-contact"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            )}
          </motion.div>
        </div>
      </section>

      {/* Order via WhatsApp Steps */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-primary/15 text-primary border-primary/25 font-body">
              Easy Ordering
            </Badge>
            <h2 className="font-display text-3xl font-bold text-foreground">
              How to Order via WhatsApp
            </h2>
            <p className="text-muted-foreground mt-2">
              No app, no hassle — just message us and we'll handle the rest!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {ORDER_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card
                  className="p-6 rounded-3xl border border-border shadow-subtle bg-card text-center flex flex-col items-center gap-3 h-full"
                  data-ocid="order-step"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <span className="font-display text-xs font-bold text-primary tracking-widest">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold text-foreground text-lg leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/shop" data-ocid="browse-shop-cta">
              <Button
                type="button"
                className="rounded-xl gradient-primary border-0 text-white font-semibold h-12 px-8 gap-2 shadow-hover transition-smooth"
              >
                <ShoppingBag className="w-5 h-5" />
                Browse the Shop
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-secondary/20 text-secondary-foreground border-secondary/25 font-body">
              Got Questions?
            </Badge>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Frequently Asked
            </h2>
          </div>
          <div className="flex flex-col gap-3" data-ocid="faq-list">
            {FAQS.map((item, i) => (
              <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-16 px-4 bg-muted/30">
        <motion.div
          className="max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Follow Our Journey
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Follow us on Instagram{" "}
            <span className="font-semibold text-primary">
              @{INSTAGRAM_HANDLE}
            </span>{" "}
            for daily styling inspiration, new arrivals, and behind-the-scenes
            magic ✨
          </p>
          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="social-follow"
          >
            <Button
              type="button"
              className="rounded-xl gradient-primary border-0 text-white font-semibold h-11 px-8 gap-2 shadow-hover transition-smooth"
            >
              <Instagram className="w-4 h-4" />
              Follow @{INSTAGRAM_HANDLE}
            </Button>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
