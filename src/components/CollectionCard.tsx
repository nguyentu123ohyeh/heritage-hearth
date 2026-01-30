import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CollectionCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

const CollectionCard = ({ id, name, description, image }: CollectionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link to={`/shop?category=${id}`} className="collection-card block aspect-[3/4]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-primary-foreground mb-2">
            {name}
          </h3>
          <p className="text-primary-foreground/80 text-sm md:text-base mb-4">
            {description}
          </p>
          <span className="inline-flex items-center text-accent font-medium text-sm tracking-wide uppercase">
            Explore Collection
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default CollectionCard;
