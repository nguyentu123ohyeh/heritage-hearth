import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ProductCard';
import CollectionCard from '@/components/CollectionCard';
import { products, collections } from '@/data/products';

const Index = () => {
  // Willis: Tôi đã tăng số lượng lên 8 để tạo giao diện trù phú, chuyên nghiệp hơn
  const featuredProducts = products.slice(0, 4);

  return (
    <Layout>
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image with subtle zoom effect */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
            alt="Johnson's Culinary Atelier - Pomona Park Kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <p className="text-accent font-bold tracking-[0.3em] uppercase mb-4 text-xs">
              Pomona Park, Florida
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold text-primary-foreground leading-tight mb-8 tracking-tight">
              Johnson’s <br />
              <span className="italic font-light">Culinary Atelier</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-light">
              Elevating your everyday ritual with handcrafted kitchenware. 
              Each tool is personally curated by Willis Merle Johnson.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                to="/shop" 
                className="inline-block bg-accent text-primary px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-all shadow-xl"
              >
                Shop the Archive
              </Link>
              <Link 
                to="/about" 
                className="inline-block border border-primary-foreground/30 text-primary-foreground px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-primary-foreground hover:text-primary transition-all backdrop-blur-sm"
              >
                Our Heritage
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- COLLECTIONS SECTION --- */}
      <section className="py-24 bg-background border-b border-border/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-bold tracking-widest uppercase mb-3 text-[10px]">
              Discover
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground">
              The Essentials Archive
            </h2>
            <div className="h-px w-20 bg-accent/30 mx-auto mt-8" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {collections.map((collection) => (
              <CollectionCard
                key={collection.id}
                {...collection}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED PRODUCTS SECTION (8 ITEMS) --- */}
      <section className="py-24 bg-cream-warm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <p className="text-accent font-bold tracking-widest uppercase mb-3 text-[10px]">
                Handpicked selection
              </p>
              <h2 className="font-serif text-4xl font-semibold text-foreground">
                Featured Pieces
              </h2>
              <p className="text-muted-foreground mt-4 italic font-light">
                "Every piece in this collection has a place in my own kitchen in Pomona Park."
              </p>
            </div>
            <Link 
              to="/shop" 
              className="text-[11px] uppercase tracking-widest font-bold border-b border-accent pb-1 hover:text-accent transition-all"
            >
              View Full Collection
            </Link>
          </motion.div>

          {/* Grid hiển thị 2 hàng trên Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* --- QUOTE SECTION --- */}
      <section className="py-28 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <svg className="w-16 h-16 mx-auto text-accent mb-10 opacity-40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-serif text-3xl md:text-5xl text-primary-foreground leading-snug mb-10 italic font-light">
              "The right tool doesn't just make cooking easier—it makes it joyful. 
              That's what I look for in every piece I curate."
            </blockquote>
            <div className="flex flex-col items-center gap-4">
              <cite className="text-accent font-bold uppercase tracking-[0.3em] text-sm not-italic">
                 Willis Merle Johnson
              </cite>
              <p className="text-primary-foreground/50 text-xs uppercase tracking-widest">
                County Road 308B, Pomona Park
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;