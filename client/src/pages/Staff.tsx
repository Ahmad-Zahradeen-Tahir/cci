import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Staff() {
  const staff = [
    { name: "Blessing Udoh", role: "Medical Coordinator", img: "https://images.unsplash.com/photo-1559839734-2b71f183ef0e?w=400&q=80" },
    { name: "John Bello", role: "Logistics Manager", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
    { name: "Chidi Okafor", role: "Public Relations", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
    { name: "Esther Williams", role: "Patient Advocate", img: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?w=400&q=80" },
    { name: "Dr. Ibrahim Musa", role: "Clinical Researcher", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80" },
    { name: "Linda Azikiwe", role: "Fundraising Officer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
    { name: "Samuel Tunde", role: "IT Specialist", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
    { name: "Grace Opara", role: "Volunteer Coordinator", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" },
  ];

  return (
    <>
      <Helmet>
        <title>Our Staff | Comprehensive Cancer Initiative</title>
        <meta name="description" content="Meet the dedicated staff members of CCI Nigeria." />
      </Helmet>

      <div className="bg-slate-50 pt-32 pb-16">
        <div className="container-custom">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display mb-6">Our Dedicated Staff</h1>
            <p className="text-xl text-slate-600">
              The heartbeat of our organization, working tirelessly behind the scenes.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
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
        </div>
      </section>
    </>
  );
}
