import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CourseDetails from '../components/CourseDetails';
import Features from '../components/Features';
import Languages2 from '../components/Languages2';
import TechStack from '../components/TechStack';
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

import LanguageSelector from '../components/LanguageSelector';
import FeaturesBento from '../components/FeaturesBento';
import PageSEO from '../components/PageSEO';

const Home = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <PageSEO path="/" />
            <Navbar />
            <Hero />
            <Features />
            <Languages2 />
            <FeaturesBento />
            <CourseDetails />

            <TechStack />
            <Workflow />
            <Instructors image="/assets/pedro-profile-new.png" />
            <Community />
            <Certificate />
            <Bonuses />
            <Pricing />
            <Reviews />
            <FAQ />
            <CTA />
            <Footer />

            <LanguageSelector />
        </div>
    );
};

export default Home;
