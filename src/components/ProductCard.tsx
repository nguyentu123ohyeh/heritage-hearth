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
      className="product-card group"
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="btn-hero text-sm">View Details</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            {product.material}
          </p>
          <h3 className="font-serif text-lg font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <p className="price-tag">
            ${product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
