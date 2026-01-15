import { motion } from 'framer-motion';

// Imports of all sections
import Hero from '../components/Hero';
import Features from '../components/Features';
import Bonuses from '../components/Bonuses';
import CourseDetails from '../components/CourseDetails';
import Community from '../components/Community';
import Languages from '../components/Languages'; // Current Flag
import Workflow from '../components/Workflow';
import Certificate from '../components/Certificate';
import Instructors from '../components/Instructors';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FloatingMenu from '../components/FloatingMenu';
import LogoMarquee from '../components/LogoMarquee';
import LanguageSelector from '../components/LanguageSelector';

// Mock Data for "Old" Features (Courses Version) - approximating previous state
const oldCourses = [
    {
        category: "01",
        titleKey: "features.card1.title",
        descKey: "features.card1.desc",
        image: "/assets/card-image-creator.png",
        gradient: "from-blue-200/20 to-blue-900/20", // Different color
        border: "group-hover:border-blue-200/30"
    },
    {
        category: "02",
        titleKey: "features.card2.title",
        descKey: "features.card2.desc",
        image: "/assets/card-video-creator.png",
        gradient: "from-purple-200/20 to-purple-900/20",
        border: "group-hover:border-purple-200/30"
    },
    {
        category: "03",
        titleKey: "features.card3.title",
        descKey: "features.card3.desc",
        image: "/assets/card-gpt-pro.png",
        gradient: "from-green-200/20 to-green-900/20",
        border: "group-hover:border-green-200/30"
    },
    {
        category: "04",
        titleKey: "features.card4.title",
        descKey: "features.card4.desc",
        image: "/assets/card-other.png",
        gradient: "from-pink-200/20 to-pink-900/20",
        border: "group-hover:border-pink-200/30"
    }
];

// Mock Data for "Old" Bonuses (Benefits V1)
const oldBonuses = [
    { colSpan: 2, rowSpan: 2, title: "Acesso Vitalício", icon: <BadgeCheck className="w-6 h-6 text-green-400" />, desc: "Garanta acesso para sempre a todo o conteúdo e futuras atualizações." },
    { colSpan: 1, rowSpan: 1, title: "Suporte 24/7", icon: <MessageCircle className="w-5 h-5 text-blue-400" /> },
    { colSpan: 1, rowSpan: 1, title: "Certificado", icon: <FileText className="w-5 h-5 text-yellow-400" /> },
    { colSpan: 1, rowSpan: 1, title: "Comunidade", icon: <Users className="w-5 h-5 text-purple-400" /> },
    { colSpan: 1, rowSpan: 1, title: "Mentoria", icon: <Zap className="w-5 h-5 text-orange-400" /> },
    { colSpan: 1, rowSpan: 1, title: "Downloads", icon: <Download className="w-5 h-5 text-cyan-400" /> },
    { colSpan: 2, rowSpan: 1, title: "Templates Prontos", icon: <Layout className="w-5 h-5 text-pink-400" />, desc: "Copie e cole estratégias validadas." },
    { colSpan: 2, rowSpan: 1, title: "Garantia 7 Dias", icon: <Shield className="w-5 h-5 text-white" />, desc: "Risco zero para você testar." }
];

import { BadgeCheck, MessageCircle, FileText, Users, Zap, Download, Layout, Shield } from 'lucide-react';

// Recreated V1: Full Circle (Standard Rotation) - Kept from Bandeiras
const flags = [
    { country: 'br', label: 'Portuguese' },
    { country: 'us', label: 'English' },
    { country: 'es', label: 'Spanish' },
    { country: 'fr', label: 'French' },
    { country: 'it', label: 'Italian' },
    { country: 'cn', label: 'Chinese' },
    { country: 'in', label: 'Hindi' },
    { country: 'sa', label: 'Arabic' },
    { country: 'ru', label: 'Russian' },
    { country: 'jp', label: 'Japanese' },
    { country: 'de', label: 'German' },
    { country: 'pt', label: 'Portuguese (PT)' },
    { country: 'gb', label: 'English (UK)' },
    { country: 'tr', label: 'Turkish' },
    { country: 'kr', label: 'Korean' },
];

const LanguagesOriginal = () => {
    return (
        <div className="relative w-full h-[800px] flex justify-center items-center overflow-hidden bg-human-bg border border-white/10 rounded-3xl my-8">
            <h3 className="absolute top-10 text-white/50 uppercase tracking-widest z-50">Flags V1: Círculo Completo</h3>
            <div className="relative w-[600px] h-[600px] flex justify-center items-center">
                <div className="absolute w-full h-full">
                    {flags.map((flag, index) => {
                        const totalFlags = flags.length;
                        const angleStep = 360 / totalFlags;
                        const angle = index * angleStep;
                        const radius = 280;

                        return (
                            <div
                                key={flag.country}
                                className="absolute left-1/2 top-1/2"
                                style={{
                                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                                }}
                            >
                                <div className="p-0 hover:scale-125 transition-all duration-300 cursor-pointer">
                                    <img
                                        src={`https://flagcdn.com/w160/${flag.country}.png`}
                                        alt={flag.label}
                                        className="w-16 h-10 object-cover rounded shadow-lg border border-white/20"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center z-10">
                    <h2 className="text-6xl font-bold font-sans text-white tracking-tighter">SEO</h2>
                    <p className="text-sm text-white/60 tracking-widest mt-2">GLOBAL REACH</p>
                </div>
            </div>
        </div>
    );
};

const SectionGroup = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-32">
        <h2 className="text-3xl font-bold font-sans text-human-green mb-8 px-8 border-l-4 border-human-green ml-8">{title}</h2>
        <div className="space-y-12">
            {children}
        </div>
    </div>
);

const Sessions = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 pb-32">
            <div className="py-24 px-8 text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 font-sans">Galeria de Sessões</h1>
                <p className="text-xl text-white/60">
                    Todas as seções e componentes visuais do projeto, agrupados por estilo.
                </p>
            </div>

            {/* NAVIGATIONS */}
            <SectionGroup title="Navigations">
                <div className="border-y border-white/10 relative h-24 bg-black/50">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Navbar (Static Demo)</div>
                    <div className="pointer-events-none transform scale-90 origin-top">
                        <Navbar />
                    </div>
                </div>
                <div className="border-y border-white/10 relative h-32 bg-black/50 overflow-visible flex justify-center items-center">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Floating Menu</div>
                    <FloatingMenu />
                </div>
                <div className="border-y border-white/10 relative h-32 bg-black/50 overflow-visible flex justify-center items-center">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Language Selector</div>
                    <div className="relative z-50">
                        <LanguageSelector />
                    </div>
                </div>
            </SectionGroup>

            {/* HERO STYLES */}
            <SectionGroup title="Hero & Intros">
                {/* Option B - Current */}
                <div className="border-y border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Hero Option B: Service Focus (Current)</div>
                    <Hero
                        title="ESCALANDO\n<b>NEGÓCIOS</b> COM IA"
                        description="Transforme sua operação com soluções de Inteligência Artificial, automação avançada e estratégias de crescimento validadas."
                        cta="NOSSAS SOLUÇÕES"
                        badge="PEDROVYSK"
                    />
                </div>

                {/* Option A - Authority */}
                <div className="border-y border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Hero Option A: Authority & Result</div>
                    <Hero
                        title="ESCALE SEU NEGÓCIO\nCOM <b>IA</b> E <b>MARKETING</b>"
                        description="Transforme sua operação com soluções de Inteligência Artificial e estratégias validadas por mais de 8 anos de experiência."
                        cta="AGENDAR CONSULTORIA"
                        badge="AUTORIDADE"
                    />
                </div>

                {/* Option C - Short & Direct */}
                <div className="border-y border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Hero Option C: Strategic & Direct</div>
                    <Hero
                        title="MARKETING <b>ESTRATÉGICO</b>\n+ <b>IA</b> AVANÇADA"
                        description="A combinação exata para maximizar lucros e otimizar tempo. Soluções personalizadas para sua empresa."
                        cta="INICIAR AGORA"
                        badge="ESTRATÉGIA"
                    />
                </div>
            </SectionGroup>

            {/* GRIDS & BENTO */}
            <SectionGroup title="Grids, Cards & Bento Layouts">
                <div className="border-y border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Features V2: Services (Current)</div>
                    <Features />
                </div>
                <div className="border-y border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Features V1: Courses (Variation)</div>
                    <Features cards={oldCourses} />
                </div>
                <div className="border-y border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Bonuses V2: N8N Automations (Current)</div>
                    <Bonuses />
                </div>
                <div className="border-y border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Bonuses V1: Benefits/Vantagens (Legado)</div>
                    <Bonuses
                        title="VANTAGENS EXCLUSIVAS"
                        subtitle="Tudo o que você ganha ao entrar para a comunidade."
                        badge="BENEFÍCIOS"
                        items={oldBonuses}
                    />
                </div>
                <div className="border-y border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Community (Social Grid)</div>
                    <Community />
                </div>
                <div className="border-y border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Course Details (Info Grid)</div>
                    <CourseDetails />
                </div>
            </SectionGroup>

            {/* MARQUEES & VISUALS */}
            <SectionGroup title="Marquees & Visual Elements">
                <div className="border-y border-white/10 relative overflow-hidden">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Languages (Arc Style - Static)</div>
                    <Languages isStatic={true} />
                </div>
                <div className="border-y border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Logo Marquee (Clients)</div>
                    <LogoMarquee />
                </div>
                <div className="border-y border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Workflow (Tech Stack Marquee)</div>
                    <Workflow />
                </div>
                <div className="border-y border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Certificate (Visual)</div>
                    <Certificate />
                </div>
                <div className="border-y border-white/10 relative p-8">
                    <LanguagesOriginal />
                </div>
            </SectionGroup>

            {/* CONTENT & BIO */}
            <SectionGroup title="Content, Bio & Trust">
                <div className="border-y border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Instructors V2: Pedrovysk (Current)</div>
                    <Instructors />
                </div>
                <div className="border-y border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Instructors V1: Human Academy (Legado)</div>
                    <Instructors
                        title="HUMAN <b>ACADEMY</b>\nGLOBAL"
                        badge="INSTITUIÇÃO"
                        badgeSub="ENSINO"
                        bio="A Human Academy Global é líder em ensino de tecnologia criativa. Nossa missão é democratizar o acesso a ferramentas de ponta para criadores de todo o mundo."
                        image="/assets/image.png"
                    />
                </div>
                <div className="border-y border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Reviews (Testimonials)</div>
                    <Reviews />
                </div>
                <div className="border-y border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">Pricing</div>
                    <Pricing />
                </div>
                <div className="border-y border-white/10 relative">
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs text-white/50 border border-white/10 z-50">FAQ</div>
                    <FAQ />
                </div>
            </SectionGroup>

            {/* ACTION */}
            <SectionGroup title="Call to Action & Footer">
                <div className="border-y border-white/10 relative">
                    <CTA />
                </div>
                <div className="border-y border-white/10 relative">
                    <Footer />
                </div>
            </SectionGroup>

        </div>
    );
};

export default Sessions;
