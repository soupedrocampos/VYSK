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

const Home = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Navbar />
            <Hero />
            <Features />
            <CourseDetails />
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
    );
};

export default Home;
