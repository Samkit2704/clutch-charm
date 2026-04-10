import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

const WHATSAPP_NUMBER = "923001234567";
const INSTAGRAM_HANDLE = "clutchandcharm";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl">✿</span>
              <span className="font-display font-bold text-lg text-foreground">
                Clutch &amp; Charm
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Handcrafted with love to add a sprinkle of joy to every hairstyle.
              Designed for girls who dare to sparkle.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="WhatsApp"
                data-ocid="footer-whatsapp"
              >
                <SiWhatsapp size={18} />
              </a>
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Instagram"
                data-ocid="footer-instagram"
              >
                <SiInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Stay Connected
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Have questions? Slide into our DMs or reach out on WhatsApp!
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-smooth"
              data-ocid="footer-whatsapp-cta"
            >
              <SiWhatsapp size={16} />
              Chat with us
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p className="flex items-center gap-1">
            Clutch &amp; Charm © {year}. Made with{" "}
            <Heart size={12} className="text-primary fill-current" /> by hand.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
