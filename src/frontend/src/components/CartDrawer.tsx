import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useCartStore } from "../stores/cart";

const WHATSAPP_NUMBER = "919876543210";

function buildWhatsAppMessage(
  items: ReturnType<typeof useCartStore.getState>["items"],
): string {
  const lines = items
    .map(
      (i) =>
        `\u2022 ${i.name} x${i.quantity} \u2014 \u20B9${i.price * i.quantity}`,
    )
    .join("\n");
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  return encodeURIComponent(
    `Hi Clutch & Charm! \uD83C\uDF38 I'd like to order:\n\n${lines}\n\nTotal: \u20B9${total}\n\nPlease let me know the next steps!`,
  );
}

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const totalPrice = useCartStore((s) => s.totalPrice());

  const handleWhatsApp = () => {
    const msg = buildWhatsAppMessage(items);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const handleBackdropKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm"
          onClick={onClose}
          onKeyUp={handleBackdropKey}
          role="button"
          tabIndex={0}
          aria-label="Close cart"
        />
      )}

      {/* Drawer */}
      <dialog
        open={open}
        className={`fixed top-0 right-0 h-full z-50 w-full max-w-sm bg-card shadow-elevated flex flex-col m-0 p-0 border-none transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
        data-ocid="cart-drawer"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-primary" />
            <h2 className="font-display font-bold text-lg text-foreground">
              Your Bag{" "}
              {items.length > 0 &&
                `(${items.reduce((s, i) => s + i.quantity, 0)})`}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-accent transition-smooth"
            aria-label="Close cart"
            data-ocid="cart-close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center flex-1 gap-4 p-8 text-center"
            data-ocid="cart-empty"
          >
            <span className="text-6xl">🛍️</span>
            <h3 className="font-display font-semibold text-foreground">
              Your bag is empty
            </h3>
            <p className="text-sm text-muted-foreground">
              Add some sparkle! Browse our handcrafted collection.
            </p>
            <Button
              onClick={onClose}
              variant="outline"
              data-ocid="cart-continue-shopping"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 px-5 py-3">
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3"
                    data-ocid={`cart-item-${item.id}`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {item.name}
                      </p>
                      <p className="text-sm font-bold text-primary">
                        ₹{item.price * item.quantity}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-smooth"
                          aria-label="Decrease quantity"
                          data-ocid={`cart-qty-minus-${item.id}`}
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-medium w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-smooth"
                          aria-label="Increase quantity"
                          data-ocid={`cart-qty-plus-${item.id}`}
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="ml-auto w-7 h-7 rounded-full flex items-center justify-center hover:bg-destructive/10 hover:text-destructive transition-smooth"
                          aria-label="Remove item"
                          data-ocid={`cart-remove-${item.id}`}
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-border flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-display font-bold text-lg text-foreground">
                  ₹{totalPrice}
                </span>
              </div>
              <Separator />
              <Button
                className="w-full gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white"
                onClick={handleWhatsApp}
                data-ocid="cart-checkout-whatsapp"
              >
                <SiWhatsapp size={18} />
                Checkout via WhatsApp
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={onClose}
                data-ocid="cart-continue-shopping"
              >
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
