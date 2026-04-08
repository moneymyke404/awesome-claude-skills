export interface Product {
  id: string;
  name: string;
  price: number;
  tag: string;
  desc: string;
  longDesc: string;
  sizes: string[];
  colors: string[];
  features: { icon: string; title: string; desc: string }[];
  badge?: string;
  // placeholder bg colors for image areas
  heroBg: string;
  thumbBg: string[];
}

export const products: Product[] = [
  {
    id: 'island-reverie-dress',
    name: 'Island Reverie Dress',
    price: 185,
    tag: 'SIGNATURE',
    desc: 'A fluid, sun-kissed midi dress cut from sustainable bamboo-silk — draped for movement, designed for memory.',
    longDesc: 'Inspired by Kingston sunsets and Atlanta rooftops, the Island Reverie Dress flows with intention. Crafted from our signature bamboo-silk blend in limited runs, this piece moves with the body and commands attention in any room.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Guava Cream', 'Midnight Forest', 'Rum Dusk'],
    features: [
      { icon: '♦', title: 'Bamboo-Silk Blend', desc: 'Breathable, sustainable, impossibly soft' },
      { icon: '◈', title: 'Hand-Finished Hem', desc: 'Artisan stitching on every piece' },
      { icon: '✦', title: 'Limited Run', desc: 'Fewer than 80 units worldwide' },
    ],
    badge: 'Best Seller',
    heroBg: 'bg-gradient-to-br from-jt-forest to-jt-espresso',
    thumbBg: ['bg-jt-forest', 'bg-jt-bark', 'bg-jt-teal', 'bg-jt-espresso'],
  },
  {
    id: 'kingston-blazer',
    name: 'Kingston Blazer',
    price: 265,
    tag: 'HERITAGE',
    desc: 'Structured, slouched, unapologetic. An oversized blazer with Jamaica-inspired jacquard lining.',
    longDesc: 'The Kingston Blazer is our most intentional piece — oversized shoulders, a relaxed drape, and a hand-woven jacquard lining that tells a story. Pair with the Reverie Dress or wear alone as the statement.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Ackee Black', 'Cane Sugar', 'Cerulean Isle'],
    features: [
      { icon: '♦', title: 'Jacquard Lining', desc: 'Jamaica-inspired woven pattern inside every jacket' },
      { icon: '◈', title: 'Structured Shoulders', desc: 'Tailored for presence and posture' },
      { icon: '✦', title: 'Gold Hardware', desc: 'Custom brushed-gold buttons, exclusive to JT' },
    ],
    badge: 'New Drop',
    heroBg: 'bg-gradient-to-br from-jt-charcoal to-jt-forest',
    thumbBg: ['bg-jt-charcoal', 'bg-jt-forest-lt', 'bg-jt-bark', 'bg-jt-teal'],
  },
  {
    id: 'toni-co-ord-set',
    name: 'Toni Co-Ord Set',
    price: 155,
    tag: 'COLLECTION',
    desc: 'A matching crop top and high-waist trouser in our signature warm-stone linen — effortless, elevated.',
    longDesc: 'The Toni Co-Ord Set is Jamaican Toni\'s most wearable silhouette. Stone-washed linen with a touch of stretch, it moves from morning errands to evening events without missing a beat.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Stone', 'Espresso', 'Forest'],
    features: [
      { icon: '♦', title: 'Stone-Washed Linen', desc: 'Textured, lived-in, breathable' },
      { icon: '◈', title: 'Matching Set', desc: 'Crop top + high-waist trouser' },
      { icon: '✦', title: 'Adjustable Fit', desc: 'Drawstring waist for custom silhouette' },
    ],
    heroBg: 'bg-gradient-to-br from-jt-stone to-jt-bark',
    thumbBg: ['bg-jt-stone', 'bg-jt-bark', 'bg-jt-cream-dk', 'bg-jt-muted'],
  },
  {
    id: 'aurion-wrap-top',
    name: 'Aurion Wrap Top',
    price: 95,
    tag: 'ESSENTIAL',
    desc: 'A versatile wrap silhouette in our island-weight jersey — your most-reached-for piece.',
    longDesc: 'Simple in form, rich in execution. The Aurion Wrap Top layers under the Kingston Blazer, stands alone for summer, and knots into a skirt if you dare. Island-weight jersey that never wrinkles.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Guava', 'Black', 'Forest'],
    features: [
      { icon: '♦', title: 'Island-Weight Jersey', desc: 'Light enough for Atlanta heat' },
      { icon: '◈', title: 'Multi-Wear', desc: 'Wears 3+ ways — top, wrap, skirt' },
      { icon: '✦', title: 'JT Monogram', desc: 'Subtle woven label at the hem' },
    ],
    heroBg: 'bg-gradient-to-br from-jt-teal to-jt-forest',
    thumbBg: ['bg-jt-teal', 'bg-jt-forest', 'bg-jt-charcoal', 'bg-jt-teal-lt'],
  },
];
