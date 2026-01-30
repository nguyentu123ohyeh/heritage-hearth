import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { getProductById, products } from '@/data/products';
import { ArrowLeft, Check, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const [quantity, setQuantity] = useState(1);
  
  // Logic xử lý hiển thị ảnh
  const allImages = product ? [product.image, ...(product.gallery || [])] : [];
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-3xl font-semibold mb-4 text-foreground">Product Not Found</h1>
          <Link to="/shop" className="text-accent hover:underline">
            ← Back to Shop
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-cream-warm py-4 border-b border-border/50">
        <div className="container mx-auto px-4">
          <Link
            to="/shop"
            className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors text-sm uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Link>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* --- IMAGE GALLERY SECTION --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Main Display - FULL IMAGE */}
              <div className="aspect-square bg-secondary/30 rounded-xl overflow-hidden border border-border flex items-center justify-center relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    src={allImages[selectedImage]}
                    alt={product.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-full object-contain p-4" // Hiển thị full ảnh
                  />
                </AnimatePresence>
              </div>

              {/* Thumbnails Strip - SHOW ALL IMAGES */}
              {allImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {allImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative min-w-[80px] w-20 aspect-square rounded-md overflow-hidden border-2 transition-all flex items-center justify-center bg-secondary/20 ${
                        selectedImage === index ? 'border-accent opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-contain p-1" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-accent font-medium tracking-widest uppercase mb-2 text-xs">
                {product.material}
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-serif font-semibold text-accent mb-6">
                ${product.price.toLocaleString()}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                {product.description}
              </p>

              {/* Quantity & Add to Cart */}
{/* --- THAY ĐỔI TẠI ĐÂY: NÚT CONTACT THAY CHO ADD TO CART --- */}
              <div className="flex flex-col gap-4 mb-10">
                <Link 
                  to="/contact" 
                  className="w-full bg-foreground text-background flex items-center justify-center gap-3 py-6 rounded-md text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-accent hover:text-white transition-all shadow-lg active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Inquire to Purchase
                </Link>
                <p className="text-[10px] text-center text-muted-foreground italic">
                  * All items are artisan-crafted. Please contact Willis for custom shipping and availability.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 border-y border-border py-6">
                {['Artisan Crafted', 'Secure Florida Shipping', 'Material Guarantee', 'Bespoke Consultation'].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-foreground text-sm">
                    <Check className="w-4 h-4 text-accent" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Professional Set CTA */}
              <div className="p-6 bg-cream-warm rounded-lg border border-border shadow-sm">
                <p className="text-foreground font-semibold mb-2">
                  Professional Consultation
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  Need a custom configuration for your professional kitchen? Willis is here to help.
                </p>
                <Link to="/contact" className="text-accent font-medium hover:underline inline-flex items-center">
                  Inquire for Professional Sets <span className="ml-2">→</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Technical Specs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pt-16 border-t border-border"
          >
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-10 text-center md:text-left">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl border border-border/50">
                <h3 className="text-accent font-medium uppercase tracking-widest text-xs mb-3">
                  Heat Resistance
                </h3>
                <p className="text-foreground font-medium">
                  {product.heatResistance || 'Not applicable'}
                </p>
              </div>
              <div className="bg-card p-8 rounded-xl border border-border/50">
                <h3 className="text-accent font-medium uppercase tracking-widest text-xs mb-3">
                  Material Composition
                </h3>
                <p className="text-foreground font-medium italic">
                  {product.materialComposition}
                </p>
              </div>
              <div className="bg-card p-8 rounded-xl border border-border/50">
                <h3 className="text-accent font-medium uppercase tracking-widest text-xs mb-3">
                  Care Instructions
                </h3>
                <p className="text-foreground leading-relaxed">
                  {product.careInstructions}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Owner's Note Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-8 md:p-16 bg-primary rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10 max-w-4xl">
              <p className="text-accent font-medium tracking-[0.3em] uppercase mb-6 text-xs">
                A Note from Willis
              </p>
              <blockquote className="font-serif text-2xl md:text-3xl text-primary-foreground leading-relaxed italic mb-8">
                "{product.ownerNote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-accent" />
                <cite className="text-primary-foreground/80 not-italic font-medium uppercase tracking-widest text-sm">
                   Willis Merle Johnson, Pomona Park
                </cite>
              </div>
            </div>
          </motion.div>
          
          {/* Related Products: Giữ nguyên logic hiển thị full ảnh */}
          {relatedProducts.length > 0 && (
             <div className="mt-24">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-10">You May Also Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedProducts.map(p => (
                    <Link key={p.id} to={`/product/${p.id}`} className="group block">
                      <div className="aspect-square bg-secondary/20 rounded-lg overflow-hidden border border-border flex items-center justify-center">
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          className="w-full h-full object-contain p-4 transition-transform group-hover:scale-105" 
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="font-serif text-lg font-medium group-hover:text-accent transition-colors">{p.name}</h3>
                        <p className="text-accent mt-1">${p.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
             </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;