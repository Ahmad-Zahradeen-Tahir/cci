import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Link } from "wouter";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Info } from "lucide-react";

const projects = [
  {
    title: "Rural Screening Camps",
    category: "Outreach",
    description: "Bringing free cervical and breast cancer screening to remote villages in Northern Nigeria.",
    image: "https://images.unsplash.com/photo-1576091160550-217358c7db81?w=800&q=80"
  },
  {
    title: "School Awareness Drives",
    category: "Education",
    description: "Educating high school students about lifestyle choices and early warning signs.",
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=800&q=80"
  },
  {
    title: "Patient Support Fund",
    category: "Financial Aid",
    description: "Providing financial assistance for chemotherapy and radiotherapy for low-income patients.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80"
  },
  {
    title: "Pink October Walk",
    category: "Advocacy",
    description: "Annual walkathon to raise awareness and funds for breast cancer research.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
  },
  {
    title: "Oncology Training",
    category: "Capacity Building",
    description: "Training nurses and local health workers in palliative care and patient management.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
  },
  {
    title: "Research & Data",
    category: "Science",
    description: "Collecting data on cancer prevalence to inform national health policy.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
  }
];

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Our Projects | Comprehensive Cancer Initiative</title>
        <meta name="description" content="Explore our initiatives in cancer screening, awareness, and patient support." />
      </Helmet>

      <div className="bg-slate-50 pt-32 pb-16">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display mb-6">Our Impact</h1>
            <p className="text-xl text-slate-600">
              Real initiatives making a real difference in communities across Nigeria.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Info className="w-4 h-4" />
                          Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-display">{project.title}</DialogTitle>
                          <DialogDescription className="text-primary font-bold uppercase tracking-wider text-xs">
                            {project.category}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6 pt-4">
                          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-4">
                            <p className="text-slate-600 leading-relaxed text-lg">
                              {project.description}
                            </p>
                            <p className="text-slate-500 italic">
                              Additional details about this project's implementation and specific milestones achieved in the region.
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Link href="/contact">
                      <Button variant="outline" size="sm" className="w-full justify-between group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                        Support
                        <span className="text-lg">→</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-l-full blur-3xl"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6">Help Us Do More</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Every donation goes directly towards funding screenings and treatment for those who need it most.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="accent" className="rounded-full shadow-lg shadow-accent/20 px-10">
              Donate to CCI
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
