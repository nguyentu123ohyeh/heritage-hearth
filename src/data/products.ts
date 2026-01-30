export interface Product {
  id: string;
  name: string;
  category: 'utensils' | 'copper' | 'serving';
  price: number;
  material: string;
  image: string;
  description: string;
  heatResistance?: string;
  materialComposition: string;
  careInstructions: string;
  ownerNote: string;
  featured?: boolean;
  gallery?: string[];
}

export const products: Product[] = [
  {
    id: 'olive-wood-spoon-set',
    name: 'Olive Wood Spoon Set',
    category: 'utensils',
    price: 89,
    material: 'Mediterranean Olive Wood',
    image: '/src/assets/product-spoon-set.jpg',
    description: 'A beautiful set of three handcrafted olive wood spoons in graduated sizes. Each spoon features unique grain patterns and is finished with food-safe oil.',
    heatResistance: 'Up to 350°F / 175°C',
    materialComposition: '100% Mediterranean olive wood, food-safe mineral oil finish',
    careInstructions: 'Hand wash only with mild soap. Never soak or put in dishwasher. Re-oil monthly with food-safe mineral oil to maintain luster.',
    ownerNote: "These spoons feel like an extension of your hand. The olive wood is naturally antimicrobial and won't scratch your cookware - I use mine every single day.",
    featured: true,
  },
  {
    id: 'walnut-spatula-set',
    name: 'Walnut Spatula & Turner Set',
    category: 'utensils',
    price: 75,
    material: 'American Black Walnut',
    image: '/src/assets/product-spatula-set.jpg',
    description: 'Handcrafted walnut spatulas perfect for sautéing, flipping, and serving. The thin, flexible edges are gentle on all cookware surfaces.',
    heatResistance: 'Up to 350°F / 175°C',
    materialComposition: 'Solid American black walnut, hand-sanded to silky smooth finish',
    careInstructions: 'Wipe clean after use. Hand wash when needed. Oil occasionally with walnut or mineral oil.',
    ownerNote: "Walnut is my favorite wood to work with - it's strong, beautiful, and the grain only gets richer with time. These spatulas will outlast any plastic alternative.",
    featured: true,
  },
  {
    id: 'copper-saucepan-3qt',
    name: 'Hammered Copper Saucepan 3qt',
    category: 'copper',
    price: 425,
    material: 'Hammered Copper & Brass',
    image: '/src/assets/product-copper-pan.jpg',
    description: 'Traditional hammered copper saucepan with stainless steel lining. The brass handles are riveted for lifetime durability.',
    heatResistance: 'Up to 450°F / 232°C',
    materialComposition: '2.5mm copper exterior, 18/10 stainless steel lining, solid brass handles',
    careInstructions: 'Hand wash with mild soap. Polish copper exterior with lemon and salt or copper cleaner. Avoid high heat without contents.',
    ownerNote: "There's a reason French chefs have used copper for centuries. The heat conductivity is unmatched - you can feel the difference in your sauces immediately.",
    featured: true,
  },
  {
    id: 'copper-skillet-10',
    name: 'Copper Skillet 10"',
    category: 'copper',
    price: 375,
    material: 'Copper & Stainless Steel',
    image: '/src/assets/product-copper-skillet.jpg',
    description: 'Professional-grade copper skillet with stainless interior. Perfect heat distribution for searing, sautéing, and pan sauces.',
    heatResistance: 'Up to 500°F / 260°C',
    materialComposition: '2mm copper body, 18/10 stainless steel cooking surface, cast brass handle',
    careInstructions: 'Hand wash recommended. Safe for oven use. Never use on empty pan over high heat.',
    ownerNote: "This skillet is where the magic happens. From perfect sears to delicate crepes, the responsive heat control lets you cook with precision.",
  },
  {
    id: 'olive-wood-board',
    name: 'Olive Wood Cutting Board',
    category: 'serving',
    price: 165,
    material: 'Mediterranean Olive Wood',
    image: '/src/assets/product-board-1.jpg',
    description: 'Each board is unique, crafted from a single piece of Mediterranean olive wood. Natural live edge preserved for authentic character.',
    heatResistance: 'Not heat resistant - avoid hot pans',
    materialComposition: '100% Mediterranean olive wood, food-safe mineral oil finish',
    careInstructions: 'Wipe clean with damp cloth. Never soak or put in dishwasher. Oil monthly with food-safe mineral oil.',
    ownerNote: "Olive wood has been used in kitchens for thousands of years, and there's good reason - it's naturally antimicrobial and incredibly beautiful.",
    featured: true,
  },
  {
    id: 'walnut-cheese-board',
    name: 'Walnut Cheese Board Set',
    category: 'serving',
    price: 195,
    material: 'American Black Walnut',
    image: '/src/assets/product-cheese-board.jpg',
    description: 'Handcrafted from American black walnut with integrated knife set. Perfect for entertaining and everyday cheese service.',
    heatResistance: 'Not heat resistant',
    materialComposition: 'Solid American black walnut, stainless steel knife set with walnut handles',
    careInstructions: 'Hand wash knives. Wipe board with damp cloth. Oil board seasonally.',
    ownerNote: "When friends come over, this is always the centerpiece. There's something about walnut that makes every cheese taste better.",
  },
];

export const collections = [
  {
    id: 'utensils',
    name: 'Wooden Utensils',
    description: 'Handcrafted spoons, spatulas, and tools from premium woods',
    image: '/src/assets/collection-utensils.jpg',
  },
  {
    id: 'copper',
    name: 'Copper Cookware',
    description: 'Professional-grade copper for perfect heat control',
    image: '/src/assets/collection-copper.jpg',
  },
  {
    id: 'serving',
    name: 'Artisan Serving Tools',
    description: 'Beautiful boards and platters for every occasion',
    image: '/src/assets/collection-serving.jpg',
  },
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (category: string) => products.filter(p => p.category === category);
export const getProductById = (id: string) => products.find(p => p.id === id);
