import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ProductCard';
import CollectionCard from '@/components/CollectionCard';
import { getFeaturedProducts, collections } from '@/data/products';
import heroKitchen from '@/assets/hero-kitchen.jpg';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroKitchen}
            alt="Sun-filled Florida kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <p className="text-accent font-medium tracking-widest uppercase mb-4">
              Curated by Willis Merle Johnson
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-6">
              Elevate Your
              <br />
              <span className="italic">Everyday Cooking</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-lg">
              Handpicked kitchenware that transforms every meal into an experience. 
              From Pomona Park, Florida to your kitchen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="btn-hero">
                Shop Collection
              </Link>
              <Link to="/about" className="btn-hero-outline text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-accent font-medium tracking-widest uppercase mb-3">
              Explore
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Top Collections
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {collections.map((collection, index) => (
              <CollectionCard
                key={collection.id}
                {...collection}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 md:py-28 bg-cream-warm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-accent font-medium tracking-widest uppercase mb-3">
              Handpicked
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Featured Pieces
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each piece is personally selected by Willis for its exceptional quality, 
              timeless design, and ability to elevate your cooking experience.
            </p>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/shop" className="btn-hero">
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <svg className="w-12 h-12 mx-auto text-accent mb-8 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary-foreground leading-relaxed mb-8 italic">
              "The right tool doesn't just make cooking easier—it makes it joyful. 
              That's what I look for in every piece I curate."
            </blockquote>
            <cite className="text-accent font-medium not-italic">
              — Willis Merle Johnson, Founder
            </cite>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
