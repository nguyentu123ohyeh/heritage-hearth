import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Mail, Phone, MapPin, Clock, User } from 'lucide-react'; // Thêm User icon
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! Willis will respond within 24-48 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-cream-warm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-accent font-medium tracking-[0.3em] uppercase mb-4">
              Private Concierge
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
              Willis Merle Johnson
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg italic">
              "Bringing timeless craftsmanship and personal service to the heart of your home."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-10 border-b border-accent/20 pb-4">
                Atelier Information
              </h2>

              <div className="space-y-10 mb-12">
                {/* PERSONAL IDENTITY - Mục nổi bật nhất */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 border border-accent/20">
                    <User className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-accent font-bold mb-1">
                      Lead Craftsman
                    </h3>
                    <p className="text-foreground font-serif text-3xl">
                      Willis Merle Johnson
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-accent/5 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent/70" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Our Location</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      County Road 308B 691<br />
                      Pomona Park, Florida 32181
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-accent/5 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent/70" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Direct Line</h3>
                    <a 
                      href="tel:+12792265729" 
                      className="text-muted-foreground hover:text-accent transition-colors text-lg"
                    >
                      +1 (279) 226-5729
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-accent/5 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent/70" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Personal Email</h3>
                    <a 
                      href="mailto:diamondhorelick4pg@hotmail.com" 
                      className="text-muted-foreground hover:text-accent transition-colors break-all"
                    >
                      diamondhorelick4pg@hotmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-video rounded-2xl overflow-hidden bg-muted shadow-inner border border-cream-dark grayscale hover:grayscale-0 transition-all duration-1000">
                <iframe
                  src="http://googleusercontent.com/maps.google.com/7"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'sepia(30%)' }}
                  allowFullScreen
                  loading="lazy"
                  title="Pomona Park, Florida Map"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-cream-warm/30 p-8 md:p-12 rounded-3xl border border-accent/10"
            >
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-8">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest font-semibold text-accent">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white/80 border-accent/20 focus:border-accent h-12"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest font-semibold text-accent">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white/80 border-accent/20 focus:border-accent h-12"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-xs uppercase tracking-widest font-semibold text-accent">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-white/80 border-accent/20 focus:border-accent h-12"
                    placeholder="How can I help you today?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest font-semibold text-accent">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-white/80 border-accent/20 focus:border-accent resize-none"
                    placeholder="Tell me about your kitchen needs..."
                  />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent-dark text-white h-14 text-lg font-serif">
                  Send to Willis Merle Johnson
                </Button>

                <p className="text-muted-foreground text-sm text-center italic">
                  I personally read and respond to every message.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;