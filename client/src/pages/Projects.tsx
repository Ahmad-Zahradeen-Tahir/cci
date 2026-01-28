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
import { ScrollArea } from "@/components/ui/scroll-area";

const projects = [
  {
    title: "Rural Screening Camps",
    category: "Outreach",
    description: "Bringing free cervical and breast cancer screening to remote villages in Northern Nigeria. Our medical teams travel to hard-to-reach areas, providing essential diagnostic services to women who otherwise have no access to oncology care. Each camp serves approximately 200-300 women, offering not just screenings but also critical education on self-examination and lifestyle changes to reduce risk. We provide immediate counseling and follow-up referrals for those with suspicious findings, ensuring no one is left behind in the diagnostic process.",
    image: "https://images.unsplash.com/photo-1576091160550-217358c7db81?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584362924004-23340393f3bd?w=400&q=80",
      "https://images.unsplash.com/photo-1579154234411-7801f0107583?w=400&q=80"
    ]
  },
  {
    title: "School Awareness Drives",
    category: "Education",
    description: "Educating high school students about lifestyle choices and early warning signs. Our youth-focused programs aim to instill healthy habits from an early age, debunking common myths about cancer in the local community. We use interactive workshops, peer-led discussions, and modern digital tools to engage students. The curriculum covers the importance of nutrition, physical activity, and the dangers of tobacco and alcohol consumption. By empowering the youth, we create ambassadors for health within their own families and neighborhoods.",
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?w=400&q=80"
    ]
  },
  {
    title: "Patient Support Fund",
    category: "Financial Aid",
    description: "Providing financial assistance for chemotherapy and radiotherapy for low-income patients. Cancer treatment costs are often prohibitive for families in Nigeria, leading to catastrophic health expenditures. CCI's support fund steps in to cover essential treatment costs, transport to oncology centers, and basic nutritional support during recovery. We work closely with hospitals to identify the most vulnerable patients, ensuring that financial status is never a barrier to life-saving treatment. Our fund has supported hundreds of patients through their full course of therapy.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80"
    ]
  },
  {
    title: "Pink October Walk",
    category: "Advocacy",
    description: "Annual walkathon to raise awareness and funds for breast cancer research. Every October, CCI organizes one of the largest advocacy events in the country, bringing together survivors, families, and supporters. The walk serves as a powerful symbol of solidarity and a platform to call for better cancer policies. Funds raised during the event are channeled directly into our community programs and research initiatives. It's a day of hope, celebration of life, and a renewal of our commitment to a cancer-free Nigeria.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&q=80",
      "https://images.unsplash.com/photo-1459183885447-553a41af6844?w=400&q=80"
    ]
  },
  {
    title: "Oncology Training",
    category: "Capacity Building",
    description: "Training nurses and local health workers in palliative care and patient management. Recognizing the shortage of specialized oncology staff, CCI provides professional development opportunities for frontline health workers. Our training modules include pain management, psychological support for patients and families, and early detection techniques. By strengthening the capacity of the local health workforce, we improve the quality of care available at the community level. Certified trainees become focal points for cancer care in their respective health centers.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80"
    ]
  },
  {
    title: "Research & Data",
    category: "Science",
    description: "Collecting data on cancer prevalence to inform national health policy. CCI's research arm focuses on understanding the specific challenges and trends of cancer in the Nigerian context. We conduct community surveys, collaborate with teaching hospitals for clinical data analysis, and publish findings to guide public health interventions. Our goal is to provide evidence-based recommendations to the Ministry of Health, advocating for more localized and effective cancer control strategies. Accurate data is the foundation of every successful health initiative.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532187875605-2fe358a3d46a?w=400&q=80",
      "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=400&q=80"
    ]
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
                      <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col p-0 overflow-hidden">
                        <DialogHeader className="p-6 pb-0">
                          <DialogTitle className="text-2xl font-display">{project.title}</DialogTitle>
                          <DialogDescription className="text-primary font-bold uppercase tracking-wider text-xs">
                            {project.category}
                          </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="flex-grow p-6">
                          <div className="space-y-6">
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
                              
                              <h4 className="text-lg font-bold pt-2 border-t border-slate-100">Project Highlights</h4>
                              <div className="grid grid-cols-2 gap-4">
                                {project.gallery.map((img, i) => (
                                  <div key={i} className="aspect-square rounded-lg overflow-hidden border border-slate-100 shadow-sm">
                                    <img src={img} alt={`${project.title} gallery ${i}`} className="w-full h-full object-cover" />
                                  </div>
                                ))}
                              </div>

                              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h4 className="font-bold mb-2">Impact Summary</h4>
                                <ul className="space-y-2 text-sm text-slate-600">
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                    Directly benefited over 5,000 community members.
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                    Supported by 50+ medical volunteers annually.
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                    Expanding to three new states in the coming year.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </ScrollArea>
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
