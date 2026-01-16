import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'EN' | 'PT' | 'ES';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

// Basic translations dictionary
const translations: Record<Language, Record<string, string>> = {
    EN: {
        // Nav
        "nav.products": "PRODUCTS",
        "nav.research": "RESEARCH",
        "nav.careers": "CAREERS",

        // Hero
        "hero.badge": "PEDROVYSK",
        "hero.title": "MASTER THE\nCREATIVE FUTURE",
        "hero.description": "Master the art of AI creation with our comprehensive suite of tools and courses.",
        "hero.cta": "Start Learning",

        // Languages Section
        "languages.title": "SEO",
        "languages.available": "LANGUAGES AVAILABLE",
        "languages.desc": "Complete optimization including high-authority backlinks, RankMath integration, and advanced keyword strategy for global reach.",
        "languages.enroll": "Enroll Now",

        // Features (Services)
        "features.badge": "Global",
        "features.badge_sub": "Courses",
        "features.title": "FOUR COMPLETE\nCOURSES THAT'LL TAKE\nYOU TO THE NEXT LEVEL",
        "features.included": "Included",

        // Languages2 Section
        "languages2.title": "SEO",
        "languages2.subtitle": "IN MULTIPLE LANGUAGES",
        "languages2.description": "Bringing cutting-edge technology and growth hacking strategies to multiple markets. Innovation has no borders.",
        "languages2.cta": "TALK TO ME",

        // Instructors
        "instructors.badge": "GLOBAL",
        "instructors.badge_sub": "INSTRUCTORS",
        "instructors.title": "PEOPLE I\nLEARNED FROM",
        "instructors.desc": "Award-winning instructors in the creative industry who have worked with major brands and now harness the power of AI to transform the future of audiovisual production.",
        "instructors.cta": "OBTAIN CREATIVE PACK ↗",

        // Bonuses (n8n)
        "bonuses.badge": "PEDROVYSK",
        "bonuses.badge_sub": "GLOBAL",
        "bonuses.title": "WHAT YOU CAN BUILD",
        "bonuses.desc": "Automate boring tasks and scale your creativity with n8n.",
        "bonuses.card1.title": "AI Lead Scoring",
        "bonuses.card1.desc": "Automatically qualify leads using AI analysis before they pass to your sales team.",
        "bonuses.card2.title": "Social Bot",
        "bonuses.card3.title": "CRM Sync",
        "bonuses.card4.title": "Auto-Reply",
        "bonuses.card5.title": "Sentiment Analysis",
        "bonuses.card6.title": "Auto Invoicing",
        "bonuses.card7.title": "Web Scraper",
        "bonuses.card7.desc": "Extract data from any website to Google Sheets.",
        "bonuses.card8.title": "Custom Webhooks",
        "bonuses.card8.desc": "Connect any API to your internal tools instantly.",
        "bonuses.footer.title": "Included Tools & Platforms",

        // Community
        "community.badge": "GLOBAL",
        "community.badge_sub": "COMMUNITY",
        "community.title": "JOIN THE\nREVOLUTION",
        "community.desc": "Connect with thousands of creators, share your work, and get feedback from the best in the industry.",
        "community.card1.title": "Networking",
        "community.card1.desc": "Connect with creators worldwide.",
        "community.card2.title": "Daily Challenges",
        "community.card2.desc": "Sharpen your skills every day.",
        "community.card3.title": "Conversations",
        "community.card3.desc": "Real discussions about tools, creative processes, and trends.",
        "community.card4.title": "Resources",
        "community.card4.desc": "Exclusive assets shared by the community.",

        // Reviews
        "reviews.badge": "GLOBAL",
        "reviews.badge_sub": "REVIEWS",
        "reviews.title": "WHAT OUR\nSTUDENTS SAY",

        // CTA (Global Package)
        "cta.badge": "GLOBAL",
        "cta.badge_sub": "PACKAGE",
        "cta.title": "HERE'S WHAT\nYOU'LL GET",
        "cta.button": "OBTAIN CREATIVE PACK",

        // Footer
        "footer.rights": "All rights reserved.",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service"
    },
    PT: {
        // Nav
        "nav.products": "SOLUÇÕES",
        "nav.research": "CASES",
        "nav.careers": "CONTATO",

        // Hero
        "hero.badge": "PEDROVYSK",
        "hero.title": "MASTER THE\nCREATIVE FUTURE",
        "hero.description": "Domine a arte da criação com IA com nosso conjunto completo de ferramentas e cursos.",
        "hero.cta": "Começar Agora",

        // Languages Section
        "languages.title": "SEO",
        "languages.available": "ATUAÇÃO GLOBAL",
        "languages.desc": "Estratégias de posicionamento internacional, SEO técnico e adaptação cultural para expandir sua marca para novos mercados.",
        "languages.enroll": "Expandir Agora",

        // Features (Services)
        "features.badge": "Pedrovysk",
        "features.badge_sub": "Serviços",
        "features.title": "SERVIÇOS QUE\nVOCÊ PRECISA",
        "features.included": "Disponível",

        // Languages2 Section
        "languages2.title": "SEO",
        "languages2.subtitle": "EM MULTI IDIOMAS",
        "languages2.description": "Levando tecnologia de ponta e estratégias de growth hacking para múltiplos mercados. A inovação não tem fronteiras.",
        "languages2.cta": "FALE COMIGO",
        "features.card1.title": "Automação Inteligente",
        "features.card1.desc": "Sistemas autônomos que trabalham por você 24/7.",
        "features.card2.title": "Marketing de Performance",
        "features.card2.desc": "Estratégias baseadas em dados para maximizar ROI.",
        "features.card3.title": "Consultoria Estratégica",
        "features.card3.desc": "Análise profunda para desbloquear crescimento.",
        "features.card4.title": "Produtos Digitais",
        "features.card4.desc": "Criação e lançamento de infoprodutos de alto valor.",

        // Instructors (Profile)
        "instructors.badge": "PEDROVYSK",
        "instructors.badge_sub": "O EXPERT",
        "instructors.title": "LIDERANÇA\nCRIATIVA E TÉCNICA",
        "instructors.desc": "Com mais de 8 anos de experiência, Pedrovysk lidera projetos de alta performance, unindo design, tecnologia e inteligência artificial para entregar resultados excepcionais para grandes marcas.",
        "instructors.cta": "FALAR COM O EXPERT ↗",

        // Bonuses (Deliverables)
        "bonuses.badge": "PEDROVYSK",
        "bonuses.badge_sub": "ENTREGÁVEIS",
        "bonuses.title": "ECOSSISTEMA DE AUTOMAÇÃO",
        "bonuses.desc": "Implementamos infraestrutura completa para otimizar seus processos.",
        "bonuses.card1.title": "Qualificação de Leads",
        "bonuses.card1.desc": "Sistemas de IA que filtram e qualificam leads automaticamente 24/7.",
        "bonuses.card2.title": "Bots Customizados",
        "bonuses.card3.title": "Integração CRM",
        "bonuses.card4.title": "Atendimento Automático",
        "bonuses.card5.title": "Análise de Dados",
        "bonuses.card6.title": "Faturamento Auto",
        "bonuses.card7.title": "Web Scraping",
        "bonuses.card7.desc": "Extração inteligente de dados para inteligência de mercado.",
        "bonuses.card8.title": "APIs Customizadas",
        "bonuses.card8.desc": "Conectamos todas as suas ferramentas em um fluxo único.",
        "bonuses.footer.title": "Tecnologias Utilizadas",

        // Community -> Network/Partners
        "community.badge": "NETWORK",
        "community.badge_sub": "PARCEIROS",
        "community.title": "CONEXÕES QUE\nGERAM VALOR",
        "community.desc": "Acesso a uma rede exclusiva de parceiros, fornecedores e especialistas para potencializar seu projeto.",
        "community.card1.title": "Networking",
        "community.card1.desc": "Conexão com líderes de mercado.",
        "community.card2.title": "Mentoria",
        "community.card2.desc": "Acompanhamento estratégico.",
        "community.card3.title": "Benchmarking",
        "community.card3.desc": "Análise de tendências globais.",
        "community.card4.title": "Recursos",
        "community.card4.desc": "Ferramentas exclusivas.",

        // Reviews (Clients)
        "reviews.badge": "PEDROVYSK",
        "reviews.badge_sub": "CLIENTES",
        "reviews.title": "RESULTADOS DE\nQUEM CONFIA",

        // CTA
        "cta.badge": "AGÊNCIA",
        "cta.badge_sub": "CONTATO",
        "cta.title": "PRONTO PARA\nESCALAR?",
        "cta.button": "AGENDAR REUNIÃO",

        // Footer
        "footer.rights": "Todos os direitos reservados.",
        "footer.privacy": "Política de Privacidade",
        "footer.terms": "Termos de Serviço"
    },
    ES: {
        // Nav
        "nav.products": "PRODUCTOS",
        "nav.research": "INVESTIGACIÓN",
        "nav.careers": "CARRERAS",

        // Hero
        "hero.badge": "PEDROVYSK",
        "hero.title": "DOMINA EL\nFUTURO CREATIVO",
        "hero.description": "Domina el arte de la creación con IA con nuestro conjunto completo de herramientas y cursos.",
        "hero.cta": "Empieza a Aprender",

        // Languages Section
        "languages.title": "SEO",
        "languages.available": "IDIOMAS DISPONIBLES",
        "languages.desc": "Optimización completa incluyendo backlinks de alta autoridad, integración RankMath y estrategia avanzada de palabras clave para alcance global.",
        "languages.enroll": "Inscríbete Ahora",

        // Features (Courses)
        "features.badge": "Global",
        "features.badge_sub": "Cursos",
        "features.title": "CUATRO CURSOS\nCOMPLETOS QUE TE LLEVARÁN\nAL SIGUIENTE NIVEL",
        "features.included": "Incluido",

        // Languages2 Section
        "languages2.title": "SEO",
        "languages2.subtitle": "EN MÚLTIPLES IDIOMAS",
        "languages2.description": "Llevando tecnología de punta y estrategias de growth hacking a múltiples mercados. La innovación no tiene fronteras.",
        "languages2.cta": "HABLA CONMIGO",

        // Instructors
        "instructors.badge": "GLOBAL",
        "instructors.badge_sub": "INSTRUCTORES",
        "instructors.title": "PERSONAS DE\nLAS QUE APRENDÍ",
        "instructors.desc": "Instructores galardonados en la industria creativa que han trabajado con grandes marcas y ahora aprovechan el poder de la IA para transformar el futuro de la producción audiovisual.",
        "instructors.cta": "OBTENER PAQUETE CREATIVO ↗",

        // Bonuses (n8n)
        "bonuses.badge": "PEDROVYSK",
        "bonuses.badge_sub": "GLOBAL",
        "bonuses.title": "LO QUE PUEDES CONSTRUIR",
        "bonuses.desc": "Automatiza tareas aburridas y escala tu creatividad con n8n.",
        "bonuses.card1.title": "Calificación de Leads con IA",
        "bonuses.card1.desc": "Califica leads automáticamente usando análisis de IA antes de pasarlos a tu equipo de ventas.",
        "bonuses.card2.title": "Bot Social",
        "bonuses.card3.title": "Sincronización CRM",
        "bonuses.card4.title": "Respuesta Automática",
        "bonuses.card5.title": "Análisis de Sentimiento",
        "bonuses.card6.title": "Facturación Automática",
        "bonuses.card7.title": "Web Scraper",
        "bonuses.card7.desc": "Extrae datos de cualquier sitio web a Google Sheets.",
        "bonuses.card8.title": "Webhooks Personalizados",
        "bonuses.card8.desc": "Conecta cualquier API a tus herramientas internas al instante.",
        "bonuses.footer.title": "Herramientas y Plataformas Incluidas",

        // Community
        "community.badge": "GLOBAL",
        "community.badge_sub": "COMUNIDAD",
        "community.title": "ÚNETE A LA\nREVOLUCIÓN",
        "community.desc": "Conéctate con miles de creadores, comparte tu trabajo y recibe feedback de los mejores de la industria.",
        "community.card1.title": "Networking",
        "community.card1.desc": "Conéctate con creadores de todo el mundo.",
        "community.card2.title": "Desafíos Diarios",
        "community.card2.desc": "Perfecciona tus habilidades cada día.",
        "community.card3.title": "Conversaciones",
        "community.card3.desc": "Discusiones reales sobre herramientas, procesos creativos y tendencias.",
        "community.card4.title": "Recursos",
        "community.card4.desc": "Activos exclusivos compartidos por la comunidad.",

        // Reviews
        "reviews.badge": "GLOBAL",
        "reviews.badge_sub": "TESTIMONIOS",
        "reviews.title": "LO QUE DICEN\nNUESTROS ALUMNOS",

        // CTA
        "cta.badge": "GLOBAL",
        "cta.badge_sub": "PAQUETE",
        "cta.title": "AQUÍ ESTÁ LO QUE\nOBTENDRÁS",
        "cta.button": "OBTENER PAQUETE CREATIVO",

        // Footer
        "footer.rights": "Todos los derechos reservados.",
        "footer.privacy": "Política de Privacidad",
        "footer.terms": "Términos de Servicio"
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('PT');

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
