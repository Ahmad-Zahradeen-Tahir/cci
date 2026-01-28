import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Activity, Users, Calendar, Heart } from "lucide-react";

// Fade in animation variant
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Comprehensive Cancer Initiative</title>
        <meta name="description" content="Dedicated to reducing the cancer burden in Nigeria through awareness, screening, and patient support." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent" />

        <div className="container-custom relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeIn}>
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
                  Together We Can Beat Cancer
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight text-slate-900 font-display">
                  Hope for a <span className="text-primary">Healthier</span> Future
                </h1>
              </motion.div>
              
              <motion.p variants={fadeIn} className="text-xl text-slate-600 leading-relaxed max-w-lg">
                We are dedicated to reducing the cancer burden in Nigeria through early detection, 
                comprehensive awareness, and compassionate patient support.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full shadow-xl shadow-primary/20">
                    Get Involved
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="rounded-full group">
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image Grid */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-12">
                  {/* Doctor/Patient Interaction */}
                  <div className="h-64 rounded-2xl overflow-hidden shadow-2xl relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" 
                      alt="Doctor holding patient hand" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  {/* Community Awareness */}
                  <div className="h-48 rounded-2xl overflow-hidden shadow-xl relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80" 
                      alt="Community health awareness" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  {/* Medical Screening */}
                  <div className="h-48 rounded-2xl overflow-hidden shadow-xl relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80" 
                      alt="Medical screening" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Happy survivor/positive imagery */}
                  <div className="h-64 rounded-2xl overflow-hidden shadow-2xl relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&q=80" 
                      alt="Smiling woman" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: "5000+", label: "People Screened" },
              { icon: Calendar, number: "50+", label: "Outreach Events" },
              { icon: Heart, number: "1200+", label: "Patients Supported" },
              { icon: Activity, number: "15+", label: "Medical Partners" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-accent" />
                <div className="text-4xl font-bold font-display mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Our Mission & Vision</h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-blue-50 border border-blue-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-transform group-hover:scale-110" />
              <h3 className="text-2xl mb-4 text-primary">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To create a comprehensive ecosystem for cancer control in Nigeria by promoting awareness,
                facilitating early detection, and advocating for affordable treatment and palliative care.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-pink-50 border border-pink-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full transition-transform group-hover:scale-110" />
              <h3 className="text-2xl mb-4 text-accent">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                A Nigeria where cancer is no longer a death sentence, but a manageable condition 
                with high survival rates through equitable access to quality healthcare.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1600&q=80" 
            alt="Team holding hands" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>

        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display">Join the Fight Against Cancer</h2>
            <p className="text-xl text-slate-300">
              Your support can save lives. Whether through donation, volunteering, or partnership,
              you can make a difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="rounded-full min-w-[160px]">
                  Donate Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white/10 min-w-[160px]">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
