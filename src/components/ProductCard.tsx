import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="product-card group bg-card rounded-xl overflow-hidden border border-border/50 hover:shadow-elegant transition-all duration-500"
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container - FULL IMAGE VIEW */}
        <div className="relative aspect-square overflow-hidden bg-secondary/20 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-6 transition-all duration-700 group-hover:scale-110" // Không cắt ảnh
          />
          
          {/* Subtle Price Label for quick view */}
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs font-semibold text-foreground">${product.price}</span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-foreground text-background px-6 py-2 text-xs uppercase tracking-widest font-bold">
              View Details
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2 font-bold">
            {product.material}
          </p>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors leading-tight min-h-[3rem] line-clamp-2">
            {product.name}
          </h3>
          <div className="flex justify-between items-center border-t border-border/50 pt-4">
            <p className="text-accent font-serif text-xl font-bold">
              ${product.price.toLocaleString()}
            </p>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground italic">
              Artisan Crafted
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;