# D.S.I Health Training LLC — Website

Personal trainer & corporate wellness website for **D.S.I Health Training LLC** based in Atlanta, GA.

## Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Lucide React** (icons)

Built for deployment on [Lovable](https://lovable.dev) — import this project and deploy instantly.

## Sections

1. **Hero** — Bold headline with stats and CTAs
2. **About** — Company values and mission
3. **Services** — Personal training, group training, nutrition, and corporate wellness
4. **Transformations** — Before/after showcase + testimonials
5. **Corporate Wellness** — Benefits, ROI stats, and program packages
6. **Contact** — Booking form with service selection

## Setup

```bash
npm install
npm run dev
```

## Customization

- Update phone/email in `src/components/Contact.tsx`
- Add real transformation photos to the `public/` folder and reference them in `Transformations.tsx`
- Connect the contact form to a service like [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com)
- Update stats in `Hero.tsx` to reflect actual client numbers

## Brand Colors

- **Gold**: `#C9A84C`
- **Black**: `#0A0A0A`
- **Dark**: `#111111`
