import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Johnson's Kitchen
            </h3>
            <p className="text-primary-foreground/70 leading-relaxed">
              Curated kitchenware from Pomona Park, Florida. Every piece is selected 
              for its craftsmanship, durability, and beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>County Road 308B 691<br />Pomona Park, Florida 32181</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+12792265729" className="hover:text-accent transition-colors">
                  +1 (279) 226-5729
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:diamondhorelick4pg@hotmail.com" className="hover:text-accent transition-colors">
                  diamondhorelick4pg@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Johnson's Kitchen. Curated by Willis Merle Johnson.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
