import React from 'react';
import { 
  ShieldCheck, 
  QrCode, 
  BarChart3, 
  Zap, 
  ArrowRight, 
  FileText, 
  LogIn,
  Lock,
  PlusCircle,
  Search,
  Smartphone,
  Eye,
  RefreshCw,
  History,
  ChevronRight,
  ChevronDown,
  Maximize2,
  Database,
  X as CloseIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useAuth } from '../hooks/useAuth';
import SEO from '../components/SEO';

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [selectedDiagram, setSelectedDiagram] = React.useState<string | null>(null);

  const diagrams = [
    {
      id: 'detailed',
      title: "Detailed ER Diagram",
      desc: "Complete entity relationship mapping with primary and foreign keys.",
      image: "/input_file_0.png",
    },
    {
      id: 'crows-foot',
      title: "Crow's Foot Notation",
      desc: "Standardized relational structure showing cardinality and constraints.",
      image: "/input_file_1.png",
    },
    {
      id: 'simplified',
      title: "Simplified Overview",
      desc: "High-level conceptual flow of the file tracking lifecycle.",
      image: "/input_file_2.png",
    }
  ];

  const workflowSteps = [
    {
      icon: Lock,
      title: "Admin Login",
      desc: "Secure login to access the tracking system",
      color: "bg-black text-white",
      image: "/input_file_1.png"
    },
    {
      icon: PlusCircle,
      title: "Add New File",
      desc: "Add file details and create record",
      color: "bg-yellow-400 text-black",
      image: "/input_file_0.png"
    },
    {
      icon: QrCode,
      title: "QR Code Generation",
      desc: "Automatic unique QR code generation",
      color: "bg-black text-white",
      image: "/input_file_4.png"
    },
    {
      icon: Search,
      title: "Track File",
      desc: "Search and track file status live",
      color: "bg-yellow-400 text-black",
      image: "/input_file_6.png"
    },
    {
      icon: Smartphone,
      title: "Scan QR",
      desc: "Scan QR code using device camera",
      color: "bg-black text-white",
      image: "/input_file_5.png"
    },
    {
      icon: Eye,
      title: "View File Details",
      desc: "View complete file history instantly",
      color: "bg-yellow-400 text-black",
      image: "/input_file_2.png"
    },
    {
      icon: RefreshCw,
      title: "Update Status",
      desc: "Modify current file stage and remarks",
      color: "bg-black text-white",
      image: "/input_file_7.png"
    },
    {
      icon: History,
      title: "File History & Reports",
      desc: "View movement logs and export data",
      color: "bg-yellow-400 text-black",
      image: "/input_file_3.png"
    }
  ];
  
  const features = [
    {
      icon: FileText,
      title: "Digital Records",
      desc: "Maintain a centralized digital repository of all physical files."
    },
    {
      icon: Zap,
      title: "QR Tracking",
      desc: "Scan QR codes to instantly update file locations and statuses."
    },
    {
      icon: ShieldCheck,
      title: "Secure History",
      desc: "Keep an immutable log of all file movements and officer handoffs."
    },
    {
      icon: BarChart3,
      title: "Analytics",
      desc: "Monitor department efficiency and identify bottlenecks."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF6] relative overflow-hidden">
      <SEO 
        title="Home"
        description="Smart File Movement Tracking System for engineering departments. Track physical files in real-time using QR codes."
        keywords="file tracking, QR tracking, engineering management, document tracking"
      />
      
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=2000" 
          alt="Thematic Background" 
          className="w-full h-full object-cover opacity-[0.25]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF6]/40 via-[#FFFDF6]/10 to-[#FFFDF6]" />
      </div>

      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-12">
        {/* Hero Section */}
        <section className="text-center space-y-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-1.5 rounded-full text-xs font-bold border border-yellow-100"
          >
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            System Online & Ready
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#0F172A] tracking-tight leading-[0.9] max-w-4xl mx-auto"
          >
            Smart File <span className="text-yellow-500">Movement</span> Tracking
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
          >
            A professional admin dashboard for tracking file movements across departments using QR codes and real-time status updates.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            {isAuthenticated ? (
              <Link 
                to="/dashboard" 
                className="bg-yellow-400 text-black px-10 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20 group"
              >
                Go to Dashboard <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <Link 
                to="/login" 
                className="bg-yellow-400 text-black px-10 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20 group"
              >
                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-50 transition-colors">
                <feature.icon className="w-8 h-8 text-gray-400 group-hover:text-yellow-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-[#0F172A] mb-4">{feature.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* How It Works Section */}
        <section className="mt-40 space-y-20">
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-yellow-400/20"
            >
              Interactive Guide
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl font-black text-[#0F172A] tracking-tighter"
            >
              How It <span className="text-yellow-500">Works</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Our automated 8-step tracking process ensures absolute transparency and data integrity for every physical file handoff.
            </motion.p>
          </div>

          <div className="relative">
            {/* Horizontal Timeline Connector (Desktop) */}
            <div className="hidden lg:block absolute top-[120px] left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-gray-200 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-y-24 relative z-10 px-4">
              {workflowSteps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.05, duration: 0.6, ease: "easeOut" }}
                  className="group relative"
                >
                  {/* Step Connector Indicator (Desktop) */}
                  {idx % 4 !== 3 && idx < workflowSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-[110px] -right-4 translate-x-1/2 z-20 items-center justify-center">
                      <motion.div 
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-white p-2 rounded-full shadow-md border border-gray-100 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-colors duration-300"
                      >
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
                      </motion.div>
                    </div>
                  )}

                  <div className="bg-white rounded-[2.5rem] border border-gray-100 group-hover:border-yellow-400 shadow-sm hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)] transition-all duration-700 h-full relative overflow-hidden group-hover:-translate-y-3">
                    {/* Step Number Badge */}
                    <div className="absolute top-6 left-6 z-30 bg-black text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shadow-xl group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-500">
                      {idx + 1}
                    </div>

                    {/* Step Image */}
                    <div className="w-full h-56 overflow-hidden relative bg-gray-50">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                    </div>

                    <div className="p-8 pt-0 flex flex-col items-center text-center relative">
                      <div className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-2xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 -mt-8 relative z-20 border-4 border-white",
                        step.color
                      )}>
                        <step.icon className="w-8 h-8" />
                      </div>

                      <h3 className="text-xl font-black text-[#0F172A] leading-tight mb-3 group-hover:text-yellow-600 transition-colors">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-500 font-medium text-sm leading-relaxed mb-4">
                        {step.desc}
                      </p>

                      <div className="w-12 h-1 bg-gray-100 rounded-full group-hover:w-20 group-hover:bg-yellow-400 transition-all duration-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Department Coverage */}
        <section className="mt-40 bg-white rounded-[3rem] p-12 lg:p-20 border border-gray-100 shadow-sm text-center">
          <h2 className="text-4xl font-black text-[#0F172A] mb-6">Departmental Coverage</h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto mb-12 text-lg text-balance">
            Seamlessly integrated across all major engineering and technical departments for universal file tracking.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Electrical", "Mechanical", "Civil", "CSE", "AI & DS", "IOT", "Robotics"
            ].map((dept) => (
              <div key={dept} className="bg-gray-50 text-gray-700 px-8 py-4 rounded-2xl font-bold text-sm border border-gray-100 hover:border-yellow-200 hover:bg-yellow-50 transition-all cursor-default">
                {dept}
              </div>
            ))}
          </div>
        </section>

        {/* System Architecture / ER Diagrams Section */}
        <section className="mt-40 space-y-16 pb-20">
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-yellow-400 text-[10px] font-black uppercase tracking-widest border border-white/10"
            >
              <Database className="w-3 h-3" /> Technical Architecture
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight"
            >
              System <span className="text-yellow-500">ER Diagrams</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 font-medium max-w-2xl mx-auto text-lg"
            >
              Engineered for scalability and data integrity. Explore the underlying database structure.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diagrams.map((diagram, idx) => (
              <motion.div
                key={diagram.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-zoom-in"
                onClick={() => setSelectedDiagram(diagram.image)}
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-50">
                  <img 
                    src={diagram.image} 
                    alt={diagram.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                    <div className="bg-yellow-400 p-4 rounded-2xl text-black shadow-xl scale-0 group-hover:scale-100 transition-all duration-500 rotate-12 group-hover:rotate-0">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black text-[#0F172A] mb-2">{diagram.title}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    {diagram.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedDiagram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedDiagram(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-7xl aspect-video rounded-3xl overflow-hidden bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedDiagram} 
                alt="Diagram Preview"
                className="w-full h-full object-contain p-4 lg:p-8"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setSelectedDiagram(null)}
                className="absolute top-6 right-6 p-3 bg-black/10 hover:bg-black/20 rounded-2xl text-black transition-colors"
                aria-label="Close Preview"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/5 rounded-full text-black/40 text-xs font-bold pointer-events-none">
                Click background to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
  );
}
