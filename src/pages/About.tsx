import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import willisPortrait from '@/assets/willis-portrait.jpg';
import heroKitchen from '@/assets/hero-kitchen.jpg';

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-cream-warm overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-medium tracking-widest uppercase mb-4">
                Our Story
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                The Pomona Park
                <br />
                <span className="italic">Story</span>
              </h1>
              <div className="section-divider mb-8 mx-0" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                From the heart of Florida's natural beauty comes a passion for 
                authentic craftsmanship and the joy of cooking.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lift">
                <img
                  src={heroKitchen}
                  alt="Kitchen in Florida"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            >


              {/* Story Content */}
              <div className="md:col-span-3 space-y-6">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                  A Lifetime of Culinary Passion
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Growing up in Pomona Park, Florida, I learned early that the best meals 
                  come from the simplest ingredients prepared with care. My grandmother's 
                  cast iron skillet, passed down through three generations, taught me that 
                  the right tools are an investment in joy.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  After decades of collecting and testing kitchenware from around the world, 
                  I founded Willis Merle Johnson with a simple mission: to share the pieces that 
                  have transformed my own cooking journey. Every knife, pan, and board in our 
                  collection has been personally selected for its craftsmanship, durability, 
                  and ability to make cooking more enjoyable.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From my home on County Road 308B, I continue to search for artisans who 
                  share my belief that kitchen tools should be built to last a lifetime—and 
                  beautiful enough to pass down to the next generation.
                </p>
                <div className="pt-4">
                  <p className="font-serif text-xl italic text-accent">
                    "The right tool transforms cooking from a chore into a celebration."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
              What We Stand For
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Artisan Craftsmanship',
                description: 'Every piece is made by skilled craftspeople who take pride in their work. We only partner with makers who share our commitment to excellence.',
              },
              {
                title: 'Built to Last',
                description: 'We believe in buying once and buying well. Our products are chosen for their durability and timeless design—pieces you\'ll use for decades.',
              },
              {
                title: 'Personal Curation',
                description: 'I personally test every product before it joins our collection. If I wouldn\'t use it in my own kitchen, I won\'t offer it in ours.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Ready to Elevate Your Kitchen?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Browse our curated collection and find the pieces that will transform 
              your cooking experience.
            </p>
            <Link to="/shop" className="btn-hero inline-block">
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
