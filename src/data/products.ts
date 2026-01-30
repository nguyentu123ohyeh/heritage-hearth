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
    id: 'bamboo-toaster-tongs-2pack',
    name: 'Premium Bamboo Toaster Tongs (2 Pack)',
    category: 'utensils',
    price: 4.79,
    material: 'Natural Bamboo',
    image: 'https://m.media-amazon.com/images/I/61BcOkCp2YL._AC_SL1500_.jpg',
    description: '10-inch natural wooden tongs with serrated tips designed for a secure grip on hot toast, bagels, and pastries without scratching surfaces.',
    heatResistance: 'Up to 300°F / 148°C',
    materialComposition: '100% Sustainable Natural Bamboo',
    careInstructions: 'Hand wash with mild soap and dry immediately. Do not soak in water or place in dishwasher.',
    ownerNote: "These are a simple staple in my Pomona Park kitchen. They make handling hot bagels effortless and safe for your toaster's heating elements.",
    gallery: [
      'https://m.media-amazon.com/images/I/61BcOkCp2YL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71uHOrWzKAL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71eIvrjrXOL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71kE1ZfcK9L._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'palm-wood-scissor-tongs',
    name: 'Hand Carved Palm Wood Scissor Tongs',
    category: 'serving',
    price: 19.99,
    material: 'Palm Wood',
    image: 'https://m.media-amazon.com/images/I/7129Yq8i73L._AC_SL1500_.jpg',
    description: 'Artisan-crafted scissor-style tongs made from palm wood. Perfect for elegant salad service or bread distribution at formal dinners.',
    materialComposition: 'Solid Hand-Carved Palm Wood',
    careInstructions: 'Wipe clean or hand wash. Periodically apply food-grade mineral oil to preserve the unique wood grain.',
    ownerNote: "The grip on these is incredibly ergonomic. The palm wood grain is distinctive and serves as a conversation piece during dinner parties.",
    featured: true,
    gallery: [
      'https://m.media-amazon.com/images/I/7129Yq8i73L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61jsJrvWUbL._AC_SL1200_.jpg',
      'https://m.media-amazon.com/images/I/614tKnkmr7L._AC_SL1200_.jpg',
      'https://m.media-amazon.com/images/I/61Nvc-8YkhL._AC_SL1200_.jpg'
    ],
  },
  {
    id: 'banneton-proofing-basket-set',
    name: 'Artisan Bread Proofing Basket Set (2 Pack)',
    category: 'utensils',
    price: 19.99,
    material: 'Natural Rattan',
    image: 'https://m.media-amazon.com/images/I/81F7oIqiX2L._AC_SL1500_.jpg',
    description: '10-inch oval natural rattan baskets with linen liners. Ideal for professional and home sourdough bread baking to create beautiful crust patterns.',
    materialComposition: 'Natural Indonesian Rattan with Washable Linen Liners',
    careInstructions: 'Brush out excess flour after use. Hand wash linen liners. Store in a well-ventilated dry place.',
    ownerNote: "Essential for that classic sourdough look. I've used these for years to get the perfect rise and spiral pattern on my loaves.",
    gallery: [
      'https://m.media-amazon.com/images/I/81F7oIqiX2L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81TmxA+AWqL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81LXWNAFYIL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81tXqxhDndL._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'artisan-pizza-wheel',
    name: 'Pro-Series Artisan Pizza Wheel',
    category: 'utensils',
    price: 21.00,
    material: 'Stainless Steel & Zinc',
    image: 'https://m.media-amazon.com/images/I/61URry+SHQL._AC_SL1500_.jpg',
    description: 'Precision cutting wheel with a heavy-duty cast zinc frame. Features an integrated hook for easy oven rack adjustments.',
    materialComposition: 'High-Carbon Stainless Steel blade, Cast Zinc frame',
    careInstructions: 'Dishwasher safe, but hand washing is recommended to maintain blade sharpness over time.',
    ownerNote: "This isn't your standard pizza cutter. The weight in the handle allows for a clean slice through the thickest crusts with a single pass.",
    gallery: [
      'https://m.media-amazon.com/images/I/61URry+SHQL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61UD781jNjL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/91vTrq2I41L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81BM3zrK7LL._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'mini-metal-serving-tongs',
    name: 'Miniature Precision Serving Tongs',
    category: 'serving',
    price: 7.95,
    material: 'Stainless Steel',
    image: 'https://m.media-amazon.com/images/I/61gFPqqMKfL._AC_SL1500_.jpg',
    description: '5.1-inch mini metal tongs perfect for appetizers, snacks, and ice cubes. A sophisticated tool for buffets and dessert tables.',
    materialComposition: 'Food-Grade Stainless Steel',
    careInstructions: 'Dishwasher safe. Dry immediately to prevent water spots.',
    ownerNote: "In Florida, we love our outdoor hosting. These are perfect for serving delicate appetizers without the bulk of standard kitchen tongs.",
    gallery: [
      'https://m.media-amazon.com/images/I/61gFPqqMKfL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71jPw6wqUjL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71GGhd45lcL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/718DuPQ3hyL._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'teak-wooden-spatula',
    name: 'Handcrafted Teak Cooking Spatula',
    category: 'utensils',
    price: 18.00,
    material: 'Hand-Carved Teak',
    image: 'https://m.media-amazon.com/images/I/710zhMfyVQL._AC_SL1500_.jpg',
    description: 'A premium teak wood spatula with an ergonomic comfort grip. Naturally non-stick and gentle on all types of cookware.',
    heatResistance: 'Up to 450°F / 232°C',
    materialComposition: '100% Thai Teak Wood',
    careInstructions: 'Hand wash only. Apply a light coat of mineral oil every few months to maintain the wood\'s integrity.',
    ownerNote: "Teak is nearly indestructible. This spatula feels balanced in the hand and won't leach chemicals into your food like plastic does.",
    gallery: [
      'https://m.media-amazon.com/images/I/710zhMfyVQL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/91v6mQE44XL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81J+++PHx7L._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'provisions-slotted-spoon',
    name: "Chef's Deep Slotted Spoon (13-inch)",
    category: 'utensils',
    price: 59.00,
    material: 'Polished Stainless Steel',
    image: 'https://m.media-amazon.com/images/I/61+B3ZvQRUL._AC_SL1500_.jpg',
    description: 'Professional grade 13-inch deep slotted spoon with an artisan-polished finish. Designed for heavy daily use in high-volume kitchens.',
    materialComposition: '18/10 Mirror-Polished Stainless Steel',
    careInstructions: 'Dishwasher safe. Polish with a soft cloth for a mirror finish.',
    ownerNote: "This is a piece of 'heritage' hardware. The depth of the spoon is perfect for blanching vegetables or skimming stocks.",
    gallery: [
      'https://m.media-amazon.com/images/I/61+B3ZvQRUL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81nfXGOZF4L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71fqVwStFsL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71o-4+PePKL._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'bamboo-bread-slicer-board',
    name: 'Adjustable Bamboo Bread Slicer with Crumb Tray',
    category: 'utensils',
    price: 29.99,
    material: 'Natural Bamboo',
    image: 'https://m.media-amazon.com/images/I/81fEvYhGuBL._AC_SL1500_.jpg',
    description: 'Foldable bread slicing guide with an integrated crumb tray. Adjustable settings for thick or thin slices of sourdough and artisan loaves.',
    materialComposition: '100% Solid Bamboo',
    careInstructions: 'Wipe crumbs out after use. Occasionally wipe with a damp cloth and dry immediately.',
    ownerNote: "For those of us in the artisan bread community, getting even slices is always the challenge. This solves it while keeping your counters clean.",
    gallery: [
      'https://m.media-amazon.com/images/I/81fEvYhGuBL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81LYmvKXjML._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81htz4fTHoL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81OxPxSOcZL._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'm-passion-souffle-mold-set',
    name: "M'Passion Copper Soufflé Mold Set",
    category: 'copper',
    price: 109.95,
    material: 'Copper & Stainless Steel',
    image: 'https://m.media-amazon.com/images/I/71FnRlSAEvL._AC_SX679_.jpg',
    description: 'Set of two professional soufflé molds made in France. Copper exterior ensures even heat rise for delicate desserts.',
    heatResistance: 'Up to 500°F / 260°C',
    materialComposition: 'Professional gauge copper exterior, stainless steel interior',
    careInstructions: 'Hand wash only. Polish copper exterior with specialized cleaner to maintain brilliance.',
    ownerNote: "These are the gold standard. French copper provides the consistent temperature rise that a soufflé demands to prevent collapsing.",
    featured: true,
  },
  {
    id: 'wine-chiller-bucket-6pack',
    name: 'Double-Wall Insulated Wine Chiller (6 Pack)',
    category: 'serving',
    price: 69.99,
    material: 'Stainless Steel',
    image: 'https://m.media-amazon.com/images/I/719Dgeb7A6L._AC_SL1500_.jpg',
    description: 'A bulk set of double-walled insulated wine chillers. Keeps 750ml bottles cold for hours without condensation.',
    materialComposition: 'Dual-layer 18/8 Stainless Steel',
    careInstructions: 'Hand wash recommended. Wipe exterior with a dry cloth to prevent water marks.',
    ownerNote: "If you're hosting a large event in the Florida heat, these are mandatory. No ice mess, just perfectly chilled wine.",
    gallery: [
      'https://m.media-amazon.com/images/I/719Dgeb7A6L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71mdIA9O-SL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71VOHS6qwYL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81tCOc+DT-L._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'hammered-rose-gold-wine-chiller',
    name: 'Hammered Rose Gold Single Bottle Chiller',
    category: 'serving',
    price: 36.99,
    material: 'Copper-Plated Steel',
    image: 'https://m.media-amazon.com/images/I/61ydEI1QlEL._AC_SL1500_.jpg',
    description: 'Stylish hammered rose gold wine bucket with double-walled insulation. Adds a metallic accent to any bar cart.',
    materialComposition: 'Copper-plated stainless steel body',
    careInstructions: 'Hand wash with a soft sponge. Do not use abrasive cleaners to protect the rose gold finish.',
    ownerNote: "The hammered texture catches the light beautifully at dusk. It's as much a piece of decor as it is a cooler.",
    gallery: [
      'https://m.media-amazon.com/images/I/61ydEI1QlEL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81XjsEg9xoL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71ewtB-XJ3L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81cytYb3ISL._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'metal-ice-bucket-galvanized',
    name: 'Galvanized Metal Beverage Tub',
    category: 'serving',
    price: 40.99,
    material: 'Galvanized Steel',
    image: 'https://m.media-amazon.com/images/I/71Mueb0dnyL._AC_SL1500_.jpg',
    description: 'Large galvanized cooler for wine, beer, and champagne. Perfect for rustic outdoor events and catering.',
    materialComposition: 'Heavy-duty galvanized steel with reinforced handles',
    careInstructions: 'Wipe dry after each use to prevent rust. Hand wash only.',
    ownerNote: "This tub brings that authentic Florida farmhouse vibe to any party. It's built to hold a massive amount of ice and drinks.",
    gallery: [
      'https://m.media-amazon.com/images/I/71Mueb0dnyL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/811KaN5ReUL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/716aPQG8NnL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71JuuVKxvXL._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'copper-canele-mold-single',
    name: 'Traditional French Copper Canelé Mold',
    category: 'copper',
    price: 29.90,
    material: 'Pure Copper & Tin',
    image: 'https://m.media-amazon.com/images/I/71Zx+ZYEmaL._AC_SL1500_.jpg',
    description: 'Authentic 2.1-inch French canelé cup. Pure copper with tin lining for the perfect caramelized custard dessert.',
    heatResistance: 'Up to 450°F / 232°C',
    materialComposition: 'Pure copper exterior, hand-wiped tin interior',
    careInstructions: 'Never use metal utensils inside. Clean with warm water and a soft cloth.',
    ownerNote: "You cannot achieve a proper canelé crust without real copper. This is a precision tool for serious bakers.",
    gallery: [
      'https://m.media-amazon.com/images/I/71Zx+ZYEmaL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81j2lBwwuvL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/718cL0rOIkL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/91VKnHbR0L._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'copper-fluted-cake-pan',
    name: 'Copper 10" Fluted Cake Pan',
    category: 'copper',
    price: 24.09,
    material: 'Copper Coated Aluminum',
    image: 'https://m.media-amazon.com/images/I/61F4j1XxIcL._AC_SL1168_.jpg',
    description: '10-inch fluted cake pan with a copper finish. Designed for superior heat distribution and easy release.',
    heatResistance: 'Up to 425°F / 218°C',
    materialComposition: 'Aluminum core with a high-heat copper non-stick coating',
    careInstructions: 'Hand wash recommended. Use only silicone or wooden utensils to avoid scratching the coating.',
    ownerNote: "The fluted design creates stunning cakes. The copper finish isn't just for looks—it helps brown the exterior perfectly.",
    gallery: [
      'https://m.media-amazon.com/images/I/61F4j1XxIcL._AC_SL1168_.jpg',
      'https://m.media-amazon.com/images/I/71jEHTWV5lL._AC_SL1168_.jpg'
    ],
  },
  {
    id: 'copper-frying-pan-set-3pc',
    name: 'Nonstick Copper Skillet Set (3 Piece)',
    category: 'copper',
    price: 139.95,
    material: 'Copper-Ceramic',
    image: 'https://m.media-amazon.com/images/I/61Rcqn0+q9L._AC_SL1281_.jpg',
    description: 'Set of 8”, 10” & 12” copper fry pans with non-stick ceramic coating. PFOA-free with cool-touch ergonomic handles.',
    heatResistance: 'Up to 500°F / 260°C',
    materialComposition: 'Aluminum body, Copper-ceramic coating, Stainless steel handles',
    careInstructions: 'Dishwasher safe, but hand washing preserves the non-stick coating for years longer.',
    ownerNote: "My everyday pans. From searing fish to perfecting an omelet, the slide-off performance is unmatched.",
    gallery: [
      'https://m.media-amazon.com/images/I/61Rcqn0+q9L._AC_SL1281_.jpg',
      'https://m.media-amazon.com/images/I/91oIpz6AWUL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/91koLVLHEzL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/91DfM+ZoY0L._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'ceramic-cookware-set-15pc',
    name: '15 Pc Professional Ceramic Cookware Set',
    category: 'utensils',
    price: 149.95,
    material: 'Ceramic & Titanium',
    image: 'https://m.media-amazon.com/images/I/61gsGZvcqFL._AC_SL1125_.jpg',
    description: 'Complete kitchen set including induction-safe pots, pans, and tools. Non-toxic ceramic coating with titanium reinforcement.',
    heatResistance: 'Up to 500°F / 260°C',
    materialComposition: 'Titanium-reinforced ceramic, Induction-base aluminum',
    careInstructions: 'Dishwasher safe. Safe for all stovetops including induction.',
    ownerNote: "This is the ultimate starter set for a healthy kitchen. Non-toxic, beautiful, and incredibly durable.",
    gallery: [
      'https://m.media-amazon.com/images/I/61gsGZvcqFL._AC_SL1125_.jpg',
      'https://m.media-amazon.com/images/I/81Uo1r-QbdL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/815A+pHjD-L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/91m1lZa8R5L._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'bamboo-utensil-spurtle-set',
    name: 'Bamboo Utensil & Spurtle 11pc Gift Pack',
    category: 'utensils',
    price: 21.99,
    material: 'Natural Bamboo',
    image: 'https://m.media-amazon.com/images/I/813M-b1IHlL._AC_SL1500_.jpg',
    description: 'An 11-piece set featuring bamboo spurtles, utensils, and a 15x10" large cutting board. Ideal for all non-stick cookware.',
    materialComposition: '100% High-Grade Bamboo',
    careInstructions: 'Hand wash only. Do not leave submerged in water.',
    ownerNote: "The spurtle is the most underrated tool in the kitchen. It stirs, flips, and scrapes better than any round spoon.",
    gallery: [
      'https://m.media-amazon.com/images/I/813M-b1IHlL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81n7aoIx5KL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81Fo2-zAUZL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81QvzGoJnlL._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'acacia-cooking-utensil-set-5pc',
    name: 'Acacia Wood 5 Piece Cooking Set',
    category: 'utensils',
    price: 25.00,
    material: 'Acacia Wood',
    image: 'https://m.media-amazon.com/images/I/717xJ4IgKGL._AC_SL1500_.jpg',
    description: 'Five essential acacia wood tools paired with a bamboo cutting board. A perfect housewarming or wedding gift.',
    materialComposition: 'Natural Acacia Wood, Bamboo base',
    careInstructions: 'Wipe clean or hand wash. Re-oil the acacia monthly to maintain its deep luster.',
    ownerNote: "Acacia has a beautiful variation in color that adds warmth to your kitchen countertop.",
    gallery: [
      'https://m.media-amazon.com/images/I/717xJ4IgKGL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81uzjOzXCNL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/818SXTaR1JL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/7158G-gNOmL._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'acacia-dinnerware-set-16pc',
    name: '16 Pcs Acacia Wood Dinnerware Set',
    category: 'serving',
    price: 85.99,
    material: 'Solid Acacia Wood',
    image: 'https://m.media-amazon.com/images/I/81iNQ5qTDAL._AC_SL1500_.jpg',
    description: 'A complete set for four including wooden plates, bowls, and tea cups. Lightweight, durable, and naturally beautiful.',
    materialComposition: '100% Solid Acacia Wood',
    careInstructions: 'Hand wash with mild soap. Never place in the microwave or dishwasher.',
    ownerNote: "Serving on wood creates a tactile experience that ceramic can't match. It's the perfect way to enjoy a meal in Pomona Park.",
    gallery: [
      'https://m.media-amazon.com/images/I/81iNQ5qTDAL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/91F62HS7JRL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81Or20d0wfL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81pKaaBy5yL._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'disposable-bamboo-plates-set',
    name: 'Biodegradable Bamboo Plate & Cutlery Set',
    category: 'serving',
    price: 34.99,
    material: 'Palm Leaf & Bamboo',
    image: 'https://m.media-amazon.com/images/I/81NOymnWV1L._AC_SL1500_.jpg',
    description: 'Set of 50 plates and cutlery. Eco-friendly, biodegradable palm leaf dinnerware for high-end rustic events.',
    materialComposition: 'Pressed Palm Leaf plates, Bamboo cutlery',
    careInstructions: 'Disposable. Compostable after use.',
    ownerNote: "When hosting larger events, these are my go-to. They are much sturdier than paper and look stunning on a rustic table.",
    gallery: [
      'https://m.media-amazon.com/images/I/81NOymnWV1L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71OZkr1mvuL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81qmsuRX1tL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81FiMlzIhTL._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'acacia-utensil-set-8pc',
    name: 'Professional Acacia Wood 8-Piece Set',
    category: 'utensils',
    price: 49.99,
    material: 'Acacia Wood',
    image: 'https://m.media-amazon.com/images/I/71hJ-YNfyWL._AC_SL1500_.jpg',
    description: 'Long-lasting wooden spoons, spatulas, and turners. Designed specifically for use with high-end non-stick cookware.',
    materialComposition: 'Solid Acacia Wood',
    careInstructions: 'Hand wash only. Periodic seasoning with mineral oil recommended.',
    ownerNote: "The 8-piece set covers every possible task in the kitchen. The wood won't conduct heat, so the handles stay cool during long cook times.",
    gallery: [
      'https://m.media-amazon.com/images/I/71hJ-YNfyWL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71e6iCmZ9nL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81L3c8m+UYL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/813VpaM2yUL._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'rotating-acacia-utensil-holder',
    name: '360° Rotating Acacia Utensil Holder',
    category: 'utensils',
    price: 23.98,
    material: 'Acacia Wood',
    image: 'https://m.media-amazon.com/images/I/71hrtENxQVL._AC_SL1500_.jpg',
    description: '7.2" x 6" large rotating kitchen crock. Keeps your most-used tools organized and accessible with a farmhouse touch.',
    materialComposition: 'Acacia Wood with a ball-bearing rotating base',
    careInstructions: 'Wipe with a damp cloth. Do not submerge the base in water.',
    ownerNote: "This saves so much space. The rotation is smooth, allowing you to grab the tool you need without searching through a cluttered drawer.",
    gallery: [
      'https://m.media-amazon.com/images/I/71hrtENxQVL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71Vsi7i17CL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71WQAHM6+KL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81oHzjPCdWL._AC_SL1500_.jpg'
    ],
  },
  {
    id: 'japanese-wood-cutlery-set',
    name: 'Japanese Style Bamboo Eating Utensils',
    category: 'serving',
    price: 9.85,
    material: 'Bamboo',
    image: 'https://m.media-amazon.com/images/I/61iI3sWaHrL._AC_SL1000_.jpg',
    description: 'Reusable bamboo fork and spoon set for lunches and light dining. Minimalist aesthetic inspired by Japanese design.',
    materialComposition: '100% Natural Bamboo',
    careInstructions: 'Hand wash only. Lightweight and perfect for travel or office use.',
    ownerNote: "Using bamboo cutlery changes the rhythm of a meal. It's quieter, lighter, and much more intentional.",
    gallery: [
      'https://m.media-amazon.com/images/I/61iI3sWaHrL._AC_SL1000_.jpg',
      'https://m.media-amazon.com/images/I/71nXEvh5zKL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/6129zC3HPaL._AC_SL1000_.jpg',
      'https://m.media-amazon.com/images/I/617SVKP9RwL._AC_SL1000_.jpg'
    ],
  },
  {
    id: 'bamboo-spoon-7piece-set',
    name: 'Bamboo Cooking Spoons (7-Piece Set)',
    category: 'utensils',
    price: 6.99,
    material: 'Natural Bamboo',
    image: 'https://m.media-amazon.com/images/I/71hb7K-Kf2L._AC_SL1500_.jpg',
    description: 'Healthy and sustainable bamboo spatula and spoon set. Non-stick friendly and high-durability for daily cooking.',
    materialComposition: '100% Sustainable Bamboo',
    careInstructions: 'Hand wash only. Do not put in dishwasher.',
    ownerNote: "These are the workhorses of the Atelier. Reliable, lightweight, and they won't damage even your most delicate pans.",
    gallery: [
      'https://m.media-amazon.com/images/I/71hb7K-Kf2L._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/712M9ZQKDJL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61SieyFwSCL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71rzkee1kuL._AC_SL1500_.jpg'
    ],
  },
];

export const collections = [
  {
    id: 'utensils',
    name: 'Precision Utensils',
    description: 'Handcrafted tools from bamboo, acacia, and stainless steel',
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=1470&auto=format&fit=crop',
  },
  {
    id: 'copper',
    name: 'Copper Collection',
    description: 'Thermal precision through professional French copper and non-stick finishes',
    image: 'https://images.unsplash.com/photo-1584990344667-51bca884351c?q=80&w=1374&auto=format&fit=crop',
  },
  {
    id: 'serving',
    name: 'Artisan Serving',
    description: 'Solid wood dinnerware and elegant insulation for social gatherings',
    image: 'https://images.unsplash.com/photo-1541007011242-2Fa9173b2651?q=80&w=1470&auto=format&fit=crop',
  },
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (category: string) => products.filter(p => p.category === category);
export const getProductById = (id: string) => products.find(p => p.id === id);