import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { getProductById, products } from '@/data/products';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-3xl font-semibold mb-4">Product Not Found</h1>
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
      <div className="bg-cream-warm py-4">
        <div className="container mx-auto px-4">
          <Link
            to="/shop"
            className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square bg-card rounded-xl overflow-hidden shadow-soft">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-accent font-medium tracking-widest uppercase mb-2">
                {product.material}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-serif font-semibold text-accent mb-6">
                ${product.price.toLocaleString()}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center border border-border rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-foreground hover:bg-muted transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-3 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-foreground hover:bg-muted transition-colors"
                  >
                    +
                  </button>
                </div>
                <Button className="btn-hero flex-1">
                  Add to Cart
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {['Handcrafted with care', 'Free shipping over $200', 'Lifetime warranty'].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-accent" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Inquire for Professional Sets */}
              <div className="p-6 bg-cream-warm rounded-lg border border-border">
                <p className="text-foreground font-medium mb-2">
                  Looking for a professional set?
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  Contact us for custom configurations and volume pricing.
                </p>
                <Link to="/contact" className="text-accent font-medium hover:underline">
                  Inquire for Professional Sets →
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Technical Specs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 pt-16 border-t border-border"
          >
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-8">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-accent font-medium uppercase tracking-wide text-sm mb-2">
                  Heat Resistance
                </h3>
                <p className="text-foreground">
                  {product.heatResistance || 'N/A'}
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-accent font-medium uppercase tracking-wide text-sm mb-2">
                  Material Composition
                </h3>
                <p className="text-foreground">
                  {product.materialComposition}
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-accent font-medium uppercase tracking-wide text-sm mb-2">
                  Care Instructions
                </h3>
                <p className="text-foreground">
                  {product.careInstructions}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Owner's Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-8 md:p-12 bg-primary rounded-xl"
          >
            <div className="max-w-3xl">
              <p className="text-accent font-medium tracking-widest uppercase mb-4">
                Owner's Note
              </p>
              <blockquote className="font-serif text-xl md:text-2xl text-primary-foreground leading-relaxed italic mb-6">
                "{product.ownerNote}"
              </blockquote>
              <cite className="text-primary-foreground/70 not-italic">
                — Willis Merle Johnson
              </cite>
            </div>
          </motion.div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 pt-16 border-t border-border"
            >
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-8">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    className="product-card group"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                        {p.name}
                      </h3>
                      <p className="price-tag mt-2">${p.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
