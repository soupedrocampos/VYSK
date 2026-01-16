import { motion } from 'framer-motion';
import SalesStrategy from '../components/SalesStrategy';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SalesStrategyDemo = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Navbar />

            {/* Demo Section */}
            <SalesStrategy
                title="Estratégia de Vendas"
                subtitle="Não é só código, é negócio"
                features={[
                    "Copywriting persuasiva (Vendas)",
                    "Funis de conversão validados",
                    "Otimização para ROI máximo",
                    "Integração com CRM e Gateways",
                    "Rastreamento de leads avançado",
                    "Testes A/B contínuos",
                    "Foco total em resultados financeiros"
                ]}
                buttonText="VER DETALHES"
                imageUrl="https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800&h=1000&fit=crop"
                imageAlt="AI Upscale Pro"
                year="2025"
                badge="Included"
            />

            {/* Second Example with Different Content */}
            <SalesStrategy
                title="Design Premium"
                subtitle="Experiência que converte"
                features={[
                    "UI/UX moderno e responsivo",
                    "Animações suaves e fluidas",
                    "Design system completo",
                    "Mobile-first approach",
                    "Performance otimizada",
                    "Acessibilidade WCAG 2.1"
                ]}
                buttonText="EXPLORAR"
                imageUrl="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=1000&fit=crop"
                imageAlt="Premium Design"
                year="2025"
                badge="Featured"
            />

            <Footer />
        </motion.div>
    );
};

export default SalesStrategyDemo;
