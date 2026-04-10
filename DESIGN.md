# Design Brief: Clutch & Charm

## Tone & Purpose
**Cute, feminine, artisanal eCommerce.** Handmade hair clutchers for girls, teens, women. Warm brand storytelling; playful, trendy, accessible voice. Showcase aesthetic with visual richness—micro-interactions and depth celebrate the handmade craft.

## Color Palette

| Token | OKLCH | Purpose |
|-------|-------|---------|
| primary | 65 0.34 330 | Soft rose pink; brand hero, CTAs, active states |
| secondary | 72 0.20 295 | Lavender; complementary accents, secondary actions |
| accent | 95 0.08 70 | Warm cream; highlights, surface accents |
| background | 99 0.02 50 | Soft warm white; main canvas |
| foreground | 15 0.02 50 | Soft charcoal; primary text |
| muted | 88 0.05 70 | Warm grey; secondary text, dividers |
| destructive | 62 0.22 25 | Warm coral; alerts, deletions |
| success | 75 0.15 155 | Soft mint; confirmations |

## Typography

| Role | Font | Usage |
|------|------|-------|
| Display | BricolageGrotesque | Headers, hero copy, product names; rounded, friendly |
| Body | GeneralSans | Descriptions, body text, UI labels; clean, readable |
| Mono | GeistMono | Codes, metadata, technical info |

**Type Scale:** 12–14px (captions), 14–16px (body), 18–24px (headings), 32–48px (hero).

## Structural Zones

| Zone | Treatment |
|------|-----------|
| Header/Nav | `bg-card` with subtle `border-b` (1px, 40% opacity) |
| Hero | Gradient: rose → lavender; full viewport height on mobile |
| Content sections | Alternating `bg-muted/30` for visual rhythm |
| Product cards | `bg-card` with `shadow-subtle`; hover → `shadow-hover` + subtle scale |
| Footer | `bg-muted/20` with `border-t`; secondary text links |

## Elevation & Depth

- **shadow-subtle**: 0 2px 8px, 6% foreground opacity — cards at rest
- **shadow-hover**: 0 8px 16px, 12% foreground opacity — interactive lift
- **shadow-elevated**: 0 12px 24px, 8% foreground opacity — modals, popovers

## Spacing & Rhythm

- **Mobile-first density**: 16px base unit; 8px, 12px, 16px, 24px, 32px increments
- **Breathing room**: generous gaps between product cards (gap-6 to gap-8)
- **Micro-padding**: 12–16px inside cards for rounded aesthetic

## Component Patterns

| Pattern | Implementation |
|---------|-----------------|
| Buttons | Primary (rose bg, cream text); secondary (muted bg); hover with scale(1.02) |
| Cards | `bg-card` rounded-lg, `shadow-subtle`, hover → `shadow-hover` |
| Links | Inline rose primary, underline on hover |
| Inputs | `bg-input` with rose ring focus; 4px border-radius |
| Hero | Gradient background, large headline (BricolageGrotesque), CTA button |
| Product grid | 2 cols mobile, 3 cols tablet, 4 cols desktop; gap-6 |

## Motion & Interaction

- **Page transitions**: fade-in 0.3s on mount
- **Card hover**: scale(1.02) + shadow-hover transition-smooth
- **Button hover**: scale(1.05) + color shift
- **Scroll reveal**: slide-up 0.3s staggered on product grid
- **No bounce**: spring physics avoided; smooth ease-out curves

## Differentiation

**Handmade warmth through color texture.** Subtle gradient buttons glow on hover. Layered backgrounds (muted pastels behind content sections) create depth without visual noise. Smooth micro-interactions (scale, shadow, color shift) feel personable and crafted—not corporate.

## Signature Detail

Rounded UI corners (24px) paired with BricolageGrotesque's organic letterforms create cohesive visual language. Product cards lift gently on hover with warm shadow bloom. Hero gradient (rose → lavender) reinforces femininity and playfulness.

## Constraints

- ✓ No neon or harsh saturation; pastels only
- ✓ No bounce animations; ease-out exclusively
- ✓ No pure black; use soft charcoal (foreground token)
- ✓ No generic blues; pink/lavender palette only
- ✓ Mobile-first layout; touch-friendly tap targets (44px min)
- ✓ Semantic tokens only; no arbitrary colors or hardcoded hex
