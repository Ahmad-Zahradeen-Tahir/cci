import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Users, Award, History, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Comprehensive Cancer Initiative</title>
        <meta name="description" content="Learn about the history, team, and goals of CCI Nigeria." />
      </Helmet>

      {/* Page Header */}
      <div className="bg-slate-50 pt-32 pb-16">
        <div className="container-custom">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display mb-6">About CCI</h1>
            <p className="text-xl text-slate-600">
              Driven by compassion, guided by science, and united for a cause.
            </p>
          </motion.div>
        </div>
      </div>

      {/* History Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80" 
                alt="Medical meeting" 
                className="rounded-2xl shadow-2xl relative z-10 w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full z-0" />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary font-bold">
                <History className="w-5 h-5" />
                <span>OUR HISTORY</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display">A Decade of Dedication</h2>
              <p className="text-slate-600 leading-relaxed">
                Founded in 2014, the Comprehensive Cancer Initiative (CCI) began as a small group of 
                medical professionals concerned about the rising cancer mortality rates in Nigeria. 
                What started as community sensitization talks has grown into a nationwide movement.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Over the years, we have partnered with local hospitals, international NGOs, and government 
                bodies to bring screening services to underserved rural communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide every action we take.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Integrity",
                desc: "We maintain the highest standards of transparency and ethics in all our operations."
              },
              {
                icon: Users,
                title: "Empathy",
                desc: "We approach every patient and community with compassion and deep understanding."
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "We strive for the best outcomes through evidence-based practices and continuous learning."
              }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display mb-4">Meet Our Team</h2>
            <p className="text-slate-600">The passionate individuals leading the fight.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "Dr. Adebayo Ogunlesi", 
                role: "Executive Director", 
                img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" 
              },
              { 
                name: "Sarah Nwosu", 
                role: "Head of Operations", 
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" 
              },
              { 
                name: "Michael Okon", 
                role: "Community Outreach", 
                img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&q=80" 
              },
              { 
                name: "Dr. Zainab Ahmed", 
                role: "Chief Oncologist", 
                img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80" 
              },
            ].map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4]">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link href="/staff">
              <Button size="lg" className="gap-2">
                View All Staff <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
