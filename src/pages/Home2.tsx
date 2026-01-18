import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CourseDetails from '../components/CourseDetails';
import Features from '../components/Features';
import Languages from '../components/Languages';
import Languages2 from '../components/Languages2';
import Workflow from '../components/Workflow';
import Instructors from '../components/Instructors';
import Community from '../components/Community';
import Certificate from '../components/Certificate';
import Bonuses from '../components/Bonuses';
import Pricing from '../components/Pricing';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FloatingMenu from '../components/FloatingMenu';
import LanguageSelector from '../components/LanguageSelector';
import FeaturesBento from '../components/FeaturesBento';
import AIToolsBento from '../components/AIToolsBento';

const Home2 = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 relative overflow-hidden home-v2-container">
            {/* Background Effects - Admin Panel Style */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Grid Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                {/* Aurora Blobs */}
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute top-[40%] right-[-20%] w-[40%] h-[40%] bg-pink-900/10 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            {/* Style Override to force transparency on sections */}
            <style>{`
                .home-v2-container section, 
                .home-v2-container section > div.bg-human-bg,
                .home-v2-container .bg-human-bg {
                    background-color: transparent !important;
                    background-image: none !important;
                }
                
                /* Ensure Hero video background still works or decide if we want to keep it? 
                   User said "apply this background", usually implying replacing the current solid/video bg. 
                   However, Hero has a video. Let's make the Hero background transparent to show our new background?
                   Or keeps Hero video but blends it?
                   
                   Let's remove the Hero heavy solid bg but keep the video if possible, 
                   UT Hero.tsx has absolute positioning for video.
                   
                   Let's try to make the "bg-human-bg" transparent globally.
                */
            `}</style>

            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Features />
                <FeaturesBento />
                <CourseDetails />
                <AIToolsBento />
                <Languages />
                <Workflow />
                <Instructors />
                <Community />
                <Certificate />
                <Languages2 />
                <Bonuses />
                <Pricing />
                <Reviews />
                <FAQ />
                <CTA />
                <Footer />
                <FloatingMenu />
                <LanguageSelector />
            </div>
        </div>
    );
};

export default Home2;
