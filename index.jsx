import React, { useState, useEffect } from 'react';
import { 
  Linkedin, 
  Mail, 
  ExternalLink, 
  BookOpen, 
  Code, 
  Activity, 
  Award,
  Briefcase,
  GraduationCap,
  Cpu,
  Dna,
  Scale,
  Zap,
  Image as ImageIcon,
  FileText,
  User,
  Star,
  MapPin
} from 'lucide-react';

// --- Assets Configuration ---
const ASSETS = {
  profile: "aman.jpg",
  threadminds: "threadminds.png",
  // Product Logos
  entropy: "Entropy.png",
  esquir: "Esquir.png",
  arbor: "arbor.png",
  evoke: "evoke.png",
  evokeTheme: "evoke_theme.png",
  // Certificates
  certNMA_CompNeuro: "NMA 1.jpg",
  certNMA_DL: "NMA 2.jpg",
  certSPSS: "SPSS certificate.jpeg",
  certIISc: "IISc Banglore Certificate.jpeg",
  certIITK: "IIT-K certificate.jpeg",
  // Gallery Images
  picAAN: "AAN presentation.jpeg",
  picIISc1: "IISc 1.jpeg",
  picIISc2: "IISc 2.jpeg",
  picIITK1: "IIT-K 1.jpg",
  picIITK2: "IIT-K 2.jpg",
  picNMA_DL1: "NMA-DL1.jpg", 
  picNMA_DL2: "NMA-DL2.jpg"
};

// --- Data ---
const PROFILE = {
  name: "Dr. Aman Bhonsale",
  titles: [
    "Research Scientist at JIPMER",
    "Co-founder & CTO at Threadminds Pvt. Ltd."
  ],
  location: "Akola, India",
  email: "dr.aman.bhonsale@gmail.com", 
  linkedin: "https://www.linkedin.com/in/dr-aman-bhonsale",
  scholar: "https://scholar.google.com/citations?user=ymH_K1IAAAAJ&hl=en",
  about: "I am a physician-scientist bridging the gap between Clinical Medicine and Artificial Intelligence. With a strong foundation in deep learning, computational neuroscience, and big data, I develop accessible solutions for neurological disorders. My work spans from longitudinal clinical studies at IISc to founding a tech startup focused on AI-driven tools."
};

const EXPERIENCE = [
  {
    role: "Research Scientist",
    org: "JIPMER",
    period: "Present",
    desc: "Leading research initiatives bridging clinical data and advanced analytics."
  },
  {
    role: "Co-founder & CTO",
    org: "Threadminds Pvt. Ltd.",
    period: "Present",
    desc: "Spearheading product development for Entro.py, Esqui.R, Arbo.R, and Evo.ke."
  },
  {
    role: "Founder",
    org: "Vitalis Nexus Research Group",
    period: "2023 - Present",
    desc: "Mentored 80+ students, initiating projects in neurology and bioinformatics at AIIMS Nagpur."
  },
  {
    role: "Research Collaborator",
    org: "Global Burden of Disease, IHME",
    period: "Jan 2025 - Present",
    desc: "Contributing to global health metrics and evaluation."
  },
  {
    role: "Intern (MBBS-MPH)",
    org: "Centre for Brain Research, IISc Bengaluru",
    period: "2023",
    desc: "Involved in major longitudinal studies (SANSCOG, TLSA)."
  },
  {
    role: "Subject Matter Expert",
    org: "Tutorbin",
    period: "2023 - Present",
    desc: "Expert in medicine and data science."
  },
  {
    role: "Research Mentor",
    org: "The Good Research Project",
    period: "Past",
    desc: "Mentoring students in writing and publishing quality research literature."
  }
];

const EDUCATION = [
  {
    degree: "MBBS",
    inst: "AIIMS Nagpur",
    year: "Batch 2019",
    desc: "Active researcher with multiple publications."
  },
  {
    degree: "Certificate in Python for AI/ML/DL",
    inst: "IIT Kanpur",
    year: "June 2025",
    desc: "Intensive course on Neural Networks, Regression, and Clustering."
  },
  {
    degree: "Deep Learning & Computational Neuroscience",
    inst: "Neuromatch Academy",
    year: "2024 - 2025",
    desc: "Focus on CNNs, tumor identification, and brain modeling."
  }
];

const PRODUCTS = [
  {
    name: "Entro.py",
    desc: "Statistical requirements.",
    link: "https://threadminds.org/entro.py/",
    logo: ASSETS.entropy,
    theme: "from-violet-600 to-indigo-600",
    bg: "bg-violet-950/30",
    border: "border-violet-500/30",
    text: "text-violet-300",
    icon: Cpu
  },
  {
    name: "Esqui.R",
    desc: "Evidence synthesis requirements.",
    link: "https://threadminds.org/Esqui.R/",
    logo: ASSETS.esquir,
    theme: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-950/30",
    border: "border-cyan-500/30",
    text: "text-cyan-300",
    icon: Scale
  },
  {
    name: "Arbo.R",
    desc: "Decision tree needed for statistical decision making.",
    link: "https://threadminds.org/index/akinator/",
    logo: ASSETS.arbor,
    theme: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-950/30",
    border: "border-emerald-500/30",
    text: "text-emerald-300",
    icon: Dna
  },
  {
    name: "Evo.ke",
    desc: "Non-invasive neuro imaging analysis.",
    link: "https://threadminds.org/Evo.ke/",
    logo: ASSETS.evoke,
    theme: "from-rose-500 to-pink-600",
    bg: "bg-rose-950/30",
    border: "border-rose-500/30",
    text: "text-rose-300",
    icon: Zap
  }
];

const SKILLS = {
  "AI & Data Science": ["Python", "TensorFlow/PyTorch", "R Programming", "CNNs", "NLP", "Bibliometrics", "Meta-analysis", "SPSS"],
  "Development": ["React.js", "Next.js", "Node.js", "JavaScript", "HTML/CSS", "Prompt Engineering"],
  "Medical Research": ["Neuroscience", "Bioinformatics", "Clinical Trials", "Systematic Reviews", "Statistical Analysis"]
};

const PUBLICATIONS_LIST = [
  {
    title: "COVID-19 pandemic and potential of artificial intelligence",
    journal: "Horm Mol Biol Clin Investig (2021)",
    link: "https://doi.org/10.1515/hmbci-2021-0041"
  },
  {
    title: "CAR-T Cell Therapy in India: Challenges and Opportunities",
    journal: "Transfusion Clinique et Biologique (2023)",
    link: "https://www.sciencedirect.com/science/article/pii/S1246782023000654"
  },
  {
    title: "Zavegepant for Acute Treatment of Migraine: Systematic Review",
    journal: "Clin Neuropharmacol (2024)",
    link: "https://doi.org/10.1097/wnf.0000000000000588"
  },
  {
    title: "Efficacy of Pharmacological Interventions in Lewy Body Dementia",
    journal: "AAN 2025",
    link: "https://doi.org/10.1212/WNL0000000000212191"
  },
  {
    title: "Efficacy of Non Invasive Brain Stimulation Techniques in Depression",
    journal: "AAN 2025",
    link: "https://doi.org/10.1212/WNL.0000000000212726"
  },
  {
    title: "Pharmacological Interventions for Symptomatic Management of NMOSD",
    journal: "AAN 2025",
    link: "https://doi.org/10.1212/WNL.0000000000212728"
  },
  {
    title: "CSF Biomarkers in Hereditary Spastic Paraplegia: A Systematic Review",
    journal: "AAN 2025",
    link: "https://doi.org/10.1212/WNL.0000000000212714"
  },
  {
    title: "Mapping the Efficiency Landscape in Huntington's Disease",
    journal: "MDS 2024",
    link: "https://www.mdsabstracts.org/abstract/mapping-the-efficacy-landscape-a-network-meta-analysis-of-pharmacological-interventions-in-huntingtons-disease/"
  },
  {
    title: "Evaluating Pharmacological Interventions for Friedreich Ataxia",
    journal: "MDS 2024",
    link: "https://www.mdsabstracts.org/abstract/evaluating-pharmacological-interventions-for-friedreich-ataxia-a-network-meta-analysis-of-randomised-trials/"
  },
  {
    title: "Deciphering Huntington's Disease Research Landscape",
    journal: "MDS 2024",
    link: "https://www.mdsabstracts.org/abstract/deciphering-the-huntingtons-disease-research-landscape-a-comprehensive-bibliometric-and-trend-analysis/"
  },
  {
    title: "Mapping the Landscape of Tourette Syndrome Research",
    journal: "MDS 2024",
    link: "https://www.mdsabstracts.org/abstract/mapping-the-landscape-of-tourette-syndrome-research-a-bibliometric-analysis/"
  },
  {
    title: "Efficacy of CGRP Inhibitors in Preventive Pharmacotherapy for Migraine",
    journal: "AAN 2024",
    link: "https://doi.org/10.1212/WNL.0000000000206369"
  },
  {
    title: "Zavegepant Intranasal Spray for the Acute Treatment of Migraine",
    journal: "AAN 2024",
    link: "https://doi.org/10.1212/WNL.0000000000206456"
  },
  {
    title: "Efficacy of CGRP inhibitors in preventive pharmacotherapy for migraine",
    journal: "Royal College of Physicians (Top 50 Abstracts)",
    link: "https://doi.org/10.1016/j.clinme.2024.100173"
  },
  {
    title: "Efficacy of pharmacological and non-pharmacological interventions in sleep Bruxism",
    journal: "ESRS 2024",
    link: "https://onlinelibrary.wiley.com/doi/epdf/10.1111/jsr.14291"
  },
  {
    title: "Neuropeptide Alterations in Alzheimer's Disease",
    journal: "AAIC 2024",
    link: "https://doi.org/10.1002/alz.090117"
  },
  {
    title: "Analysing the Genetic Mosaic of Relapsing Remitting vs Clinically isolated syndrome MS",
    journal: "AAIC 2024",
    link: "https://doi.org/10.1002/alz.093046"
  },
  {
    title: "Bibliometric analysis regarding Neurofeedback in neurology",
    journal: "AAIC Neuroscience Next 2024",
    link: "#"
  }
];

const CERTIFICATES = [
  {
    title: "Computational Neuroscience",
    issuer: "Neuromatch Academy",
    img: ASSETS.certNMA_CompNeuro,
    desc: "Intensive training in computational modeling of neural systems."
  },
  {
    title: "Deep Learning",
    issuer: "Neuromatch Academy",
    img: ASSETS.certNMA_DL,
    desc: "Advanced course on CNNs, RNNs, and Transformers."
  },
  {
    title: "SPSS Statistical Analysis",
    issuer: "SPSS Training Program",
    img: ASSETS.certSPSS,
    desc: "Professional certification in statistical analysis using SPSS."
  },
  {
    title: "MBBS-MPH Internship",
    issuer: "Centre for Brain Research, IISc Bengaluru",
    img: ASSETS.certIISc,
    desc: "Internship on longitudinal studies (SANSCOG, TLSA)."
  },
  {
    title: "Python for AI/ML/DL",
    issuer: "IIT Kanpur",
    img: ASSETS.certIITK,
    desc: "Certificate Program on Python for Artificial Intelligence, Machine Learning, and Deep Learning."
  }
];

const GALLERY_IMAGES = [
  { src: ASSETS.picAAN, title: "AAN Presentation 2024", location: "USA" },
  { src: ASSETS.picIISc1, title: "Research Internship", location: "IISc Bengaluru" },
  { src: ASSETS.picIISc2, title: "Lab Work", location: "IISc Bengaluru" },
  { src: ASSETS.picIITK1, title: "AI/ML Course", location: "IIT Kanpur" },
  { src: ASSETS.picIITK2, title: "Campus Life", location: "IIT Kanpur" },
  { src: ASSETS.picNMA_DL1, title: "Deep Learning Cohort", location: "Neuromatch" },
  { src: ASSETS.picNMA_DL2, title: "Project Presentation", location: "Neuromatch" },
];

// --- Custom Components ---

const PatternBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Dark Base */}
    <div className="absolute inset-0 bg-[#0a0a0c] dark:bg-[#050507]" />
    
    {/* Product Colors Mesh Gradient - Strategically placed */}
    {/* Entro.py Purple - Top Left */}
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-900/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" />
    
    {/* Esqui.R Blue/Cyan - Top Right */}
    <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow delay-1000" />
    
    {/* Arbo.R Green - Bottom Left */}
    <div className="absolute bottom-[-10%] left-[10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow delay-2000" />
    
    {/* Evo.ke Pink/Rose - Bottom Right */}
    <div className="absolute bottom-[0%] right-[0%] w-[45%] h-[45%] bg-rose-900/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow delay-3000" />

    {/* Tech Grid Overlay */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="tech-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-500"/>
          <circle cx="0" cy="0" r="1" fill="currentColor" className="text-gray-400" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#tech-grid)" />
    </svg>
  </div>
);

const NavButton = ({ active, onClick, icon: Icon, label, color }) => (
  <button
    onClick={onClick}
    className={`relative group flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 overflow-hidden ${
      active 
        ? 'bg-white/10 text-white shadow-lg border border-white/10' 
        : 'text-gray-400 hover:text-white hover:bg-white/5'
    }`}
  >
    {/* Glow effect on hover/active */}
    {active && <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-20`} />}
    
    <Icon className={`w-4 h-4 relative z-10 transition-colors ${active ? 'text-white' : ''}`} />
    <span className="relative z-10 text-sm font-medium tracking-wide">{label}</span>
  </button>
);

const GlassCard = ({ children, className = "", borderGlow = "hover:border-white/20" }) => (
  <div className={`relative backdrop-blur-xl bg-black/40 border border-white/5 rounded-2xl p-6 transition-all duration-300 ${borderGlow} ${className}`}>
    {children}
  </div>
);

// --- Main Application ---

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);

  // Auto-detect system preference
  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(matchMedia.matches);
    const handleChange = (e) => setDarkMode(e.matches);
    matchMedia.addEventListener('change', handleChange);
    return () => matchMedia.removeEventListener('change', handleChange);
  }, []);

  // Theme definition for Nav
  const navItems = [
    { id: 'profile', label: 'Profile', icon: User, color: 'from-violet-500 to-indigo-500' }, // Entro.py theme
    { id: 'publications', label: 'Research', icon: FileText, color: 'from-cyan-500 to-blue-500' }, // Esqui.R theme
    { id: 'certificates', label: 'Credentials', icon: Award, color: 'from-emerald-500 to-teal-500' }, // Arbo.R theme
    { id: 'gallery', label: 'Gallery', icon: ImageIcon, color: 'from-rose-500 to-pink-500' }, // Evo.ke theme
  ];

  return (
    <div className={`min-h-screen text-gray-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 ${darkMode ? 'dark' : ''}`}>
      
      <PatternBackground />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="flex items-center gap-4">
             {/* Abstract Logo Representation */}
             <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 via-cyan-600 to-emerald-600 p-[1px]">
               <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                 <div className="w-4 h-4 rounded-full bg-gradient-to-br from-rose-500 to-violet-500 animate-pulse" />
               </div>
             </div>
             <div>
               <h1 className="font-serif font-bold text-2xl tracking-tight text-white">
                 Dr. Aman Bhonsale
               </h1>
               <p className="text-xs text-gray-400 uppercase tracking-widest">Physician Scientist & CTO</p>
             </div>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-2 bg-black/40 backdrop-blur-md p-1.5 rounded-2xl border border-white/5 shadow-2xl">
            {navItems.map((item) => (
              <NavButton 
                key={item.id}
                {...item}
                active={activeTab === item.id}
                onClick={() => setActiveTab(item.id)}
              />
            ))}
          </nav>
        </header>

        {/* --- PROFILE TAB --- */}
        {activeTab === 'profile' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            {/* Hero */}
            <section className="relative mb-24 grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"/>
                  Available for Research Collaboration
                </div>
                
                <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1]">
                  Decoding <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">Biological Intelligence</span>
                </h2>
                
                <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                  {PROFILE.about}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" 
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                    <Linkedin className="w-4 h-4" /> Connect
                  </a>
                  <a href={PROFILE.scholar} target="_blank" rel="noreferrer" 
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors">
                    <GraduationCap className="w-4 h-4" /> Publications
                  </a>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                {/* Image Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 to-cyan-600/30 rounded-full blur-[80px]" />
                <div className="relative p-2 bg-gradient-to-b from-white/10 to-transparent rounded-full backdrop-blur-sm">
                   <img 
                    src={ASSETS.profile} 
                    alt="Dr. Aman Bhonsale"
                    className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-black/50 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </section>

            {/* Threadminds Products */}
            <section className="mb-24">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-white/10 pb-6">
                <div>
                   <h3 className="text-3xl font-serif font-bold text-white mb-2">Threadminds Ecosystem</h3>
                   <p className="text-gray-400">Architecting the future of cognitive interfaces.</p>
                </div>
                <img src={ASSETS.threadminds} alt="Threadminds" className="h-12 opacity-80 invert" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {PRODUCTS.map((prod, idx) => (
                  <a 
                    key={idx} 
                    href={prod.link}
                    target="_blank"
                    rel="noreferrer" 
                    className={`group relative overflow-hidden rounded-2xl border border-white/5 p-8 transition-all duration-500 hover:-translate-y-1 ${prod.bg}`}
                  >
                    {/* Gradient Border Overlay on Hover */}
                    <div className={`absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-2xl transition-all duration-500`} />
                    
                    {/* Glowing Product Theme Gradient */}
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${prod.theme} opacity-10 blur-[80px] group-hover:opacity-20 transition-opacity`} />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="flex justify-between items-start mb-8">
                        <div className="p-3 bg-black/40 rounded-xl border border-white/10">
                          <img src={prod.logo} alt={prod.name} className="w-10 h-10 object-contain invert" />
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                      </div>
                      
                      <div>
                        <h4 className={`text-2xl font-bold mb-2 ${prod.text}`}>{prod.name}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{prod.desc}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Info Grid */}
            <div className="grid lg:grid-cols-12 gap-8 mb-12">
              <div className="lg:col-span-7 space-y-6">
                 <div className="flex items-center gap-3 mb-6">
                   <Briefcase className="w-5 h-5 text-cyan-400" />
                   <h3 className="text-xl font-bold text-white">Experience</h3>
                 </div>
                 <div className="space-y-4">
                   {EXPERIENCE.map((exp, idx) => (
                     <GlassCard key={idx} className="group hover:bg-white/5">
                       <div className="flex justify-between items-start mb-2">
                         <h4 className="text-lg font-bold text-gray-100">{exp.role}</h4>
                         <span className="text-xs font-mono text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900/50">{exp.period}</span>
                       </div>
                       <p className="text-sm text-gray-400 mb-2">{exp.org}</p>
                       <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">{exp.desc}</p>
                     </GlassCard>
                   ))}
                 </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                   <Code className="w-5 h-5 text-violet-400" />
                   <h3 className="text-xl font-bold text-white">Tech Stack</h3>
                 </div>
                 {Object.entries(SKILLS).map(([category, items], idx) => (
                   <GlassCard key={idx} borderGlow={category.includes("AI") ? "border-violet-500/20" : "border-white/5"}>
                     <h4 className="text-sm font-bold text-gray-300 mb-4 uppercase tracking-wider">{category}</h4>
                     <div className="flex flex-wrap gap-2">
                       {items.map((skill, sIdx) => (
                         <span key={sIdx} className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-gray-400 hover:text-white hover:border-white/20 transition-all cursor-default">
                           {skill}
                         </span>
                       ))}
                     </div>
                   </GlassCard>
                 ))}
                 
                 <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 p-6">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
                   <div className="relative z-10">
                     <h4 className="text-lg font-bold text-white mb-6">Impact Metrics</h4>
                     <div className="grid grid-cols-2 gap-4">
                       <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                         <div className="text-2xl font-bold text-cyan-400">80+</div>
                         <div className="text-[10px] uppercase text-gray-500 tracking-wider">Mentees</div>
                       </div>
                       <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                         <div className="text-2xl font-bold text-violet-400">18+</div>
                         <div className="text-[10px] uppercase text-gray-500 tracking-wider">Papers</div>
                       </div>
                       <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                         <div className="text-2xl font-bold text-emerald-400">4</div>
                         <div className="text-[10px] uppercase text-gray-500 tracking-wider">Products</div>
                       </div>
                       <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                         <div className="text-2xl font-bold text-rose-400">3</div>
                         <div className="text-[10px] uppercase text-gray-500 tracking-wider">Awards</div>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        )}

        {/* --- PUBLICATIONS TAB --- */}
        {activeTab === 'publications' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
             <div className="mb-12 border-b border-white/10 pb-6">
                <h2 className="text-3xl font-serif font-bold text-white mb-2">Research Output</h2>
                <p className="text-gray-400">Peer-reviewed articles, conference abstracts, and systematic reviews.</p>
             </div>
             
             <div className="grid gap-4">
               {PUBLICATIONS_LIST.map((pub, idx) => (
                  <a 
                    key={idx} 
                    href={pub.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col md:flex-row gap-6 p-6 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="flex-1">
                      <h4 className="font-serif font-semibold text-lg text-gray-200 group-hover:text-cyan-400 transition-colors">
                        {pub.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                        {pub.journal}
                      </div>
                    </div>
                    <div className="self-start md:self-center">
                      <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </a>
               ))}
             </div>
          </div>
        )}

        {/* --- CERTIFICATES TAB --- */}
        {activeTab === 'certificates' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
             <div className="mb-12 border-b border-white/10 pb-6">
                <h2 className="text-3xl font-serif font-bold text-white mb-2">Credentials</h2>
                <p className="text-gray-400">Specialized training in AI, Neuroscience, and Statistics.</p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {CERTIFICATES.map((cert, idx) => (
                 <div key={idx} className="group relative bg-black rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                    <div className="aspect-video overflow-hidden bg-gray-900 relative">
                      <img 
                        src={cert.img} 
                        alt={cert.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    </div>
                    <div className="p-6 relative">
                      <div className="absolute -top-10 left-6">
                        <div className="p-2 bg-emerald-950/90 backdrop-blur rounded-lg border border-emerald-500/30 shadow-xl">
                          <Award className="w-6 h-6 text-emerald-400" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1 mt-2">{cert.title}</h3>
                      <p className="text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">{cert.issuer}</p>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {cert.desc}
                      </p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        )}

        {/* --- GALLERY TAB --- */}
        {activeTab === 'gallery' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
             <div className="mb-12 border-b border-white/10 pb-6">
                <h2 className="text-3xl font-serif font-bold text-white mb-2">Visual Diary</h2>
                <p className="text-gray-400">Snapshots from the field.</p>
             </div>

             <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
               {GALLERY_IMAGES.map((img, idx) => (
                 <div key={idx} className="break-inside-avoid relative group rounded-2xl overflow-hidden border border-white/5">
                    <img 
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-auto filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h3>
                      <p className="text-rose-400 text-sm flex items-center gap-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        <MapPin className="w-3 h-3" /> {img.location}
                      </p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center py-12 mt-12 border-t border-white/5">
          <p className="font-serif text-gray-500 text-sm">
            © {new Date().getFullYear()} Dr. Aman Bhonsale.
          </p>
        </footer>

      </div>
      
      {/* Animation Styles */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}