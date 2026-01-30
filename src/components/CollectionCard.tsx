import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CollectionCardProps {
  id: string;
  name: string;
  description: string;
}

// 1. MAPPING SẢN PHẨM TIÊU BIỂU: Tôi chọn ra 3 món "đắt giá" nhất từ danh sách của bạn
const categoryPreviews: Record<string, string[]> = {
  utensils: [
    "https://m.media-amazon.com/images/I/61URry+SHQL._AC_SL1500_.jpg", // Pizza Wheel
    "https://m.media-amazon.com/images/I/710zhMfyVQL._AC_SL1500_.jpg", // Teak Spatula
    "https://m.media-amazon.com/images/I/61BcOkCp2YL._AC_SL1500_.jpg", // Bamboo Tongs
  ],
  copper: [
    "https://m.media-amazon.com/images/I/71FnRlSAEvL._AC_SX679_.jpg", // Souffle Mold
    "https://m.media-amazon.com/images/I/71Zx+ZYEmaL._AC_SL1500_.jpg", // Canele Mold
    "https://m.media-amazon.com/images/I/61Rcqn0+q9L._AC_SL1281_.jpg", // Fry Pan Set
  ],
  serving: [
    "https://m.media-amazon.com/images/I/7129Yq8i73L._AC_SL1500_.jpg", // Palm Wood Tongs
    "https://m.media-amazon.com/images/I/61ydEI1QlEL._AC_SL1500_.jpg", // Rose Gold Chiller
    "https://m.media-amazon.com/images/I/81iNQ5qTDAL._AC_SL1500_.jpg", // Acacia Dinnerware
  ],
};

const CollectionCard = ({ id, name, description }: CollectionCardProps) => {
  const previews = categoryPreviews[id] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="h-full"
    >
      <Link 
        to={`/shop?category=${id}`} 
        className="group block bg-white rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 h-full"
      >
        {/* Title & Description Area */}
        <div className="mb-8">
          <h3 className="font-serif text-3xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 italic">
            {description}
          </p>
        </div>

        {/* --- GRID HIỂN THỊ 3 SẢN PHẨM TIÊU BIỂU --- */}
        <div className="grid grid-cols-3 gap-3">
          {previews.map((img, idx) => (
            <div 
              key={idx} 
              className={`aspect-square rounded-lg overflow-hidden bg-secondary/20 flex items-center justify-center border border-border/30 transition-all duration-500 ${
                idx === 0 ? "scale-100 shadow-sm" : "scale-95 group-hover:scale-100"
              }`}
            >
              <img 
                src={img} 
                alt="Product preview" 
                className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:rotate-2"
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 pt-6 border-t border-border/30 flex justify-between items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 group-hover:text-accent transition-colors">
            Explore Archive
          </span>
          <div className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CollectionCard;