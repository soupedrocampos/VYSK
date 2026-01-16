
export type Language = 'EN' | 'PT' | 'ES';

export const translations: Record<Language, Record<string, string>> = {
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
        "nav.research": "PORTFÓLIO",
        "nav.careers": "CONTATO",

        // Hero
        "hero.badge": "PEDROVYSK DIGITAL",
        "hero.title": "SEU NEGÓCIO, POTENCIALIZADO <span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>PELA IA</span>",
        "hero.description": "Não entregamos apenas sites. Construímos ecossistemas digitais, lojas virtuais e agentes de IA que vendem por você. 8 anos de expertise em Marketing unindo Tecnologia e Design de Elite.",
        "hero.cta": "Quero Escalar Meu Negócio",

        // Languages Section -> Agora: "Serviços de Desenvolvimento"
        "languages.title": "WEB",
        "languages.available": "DESENVOLVIMENTO PREMIUM",
        "languages.desc": "Sites Institucionais, Landing Pages de Alta Conversão e Lojas Virtuais robustas. Performance extrema, SEO otimizado e Design que posiciona sua marca como líder de mercado.",
        "languages.enroll": "Ver Projetos Web",

        // Features (Services) -> Agora: "AI & Automação"
        "features.badge": "INOVAÇÃO",
        "features.badge_sub": "INTELIGÊNCIA ARTIFICIAL",
        "features.title": "A REVOLUÇÃO DA IA\nDENTRO DA SUA EMPRESA",
        "features.included": "Implementamos",

        // Languages2 Section -> Agora: "Marketing & Design"
        "languages2.title": "GROWTH",
        "languages2.subtitle": "SEO • MARKETING & DESIGN",
        "languages2.description": "Com 8 anos de experiência, uno estratégias de tráfego e copy persuasiva com um design visual impactante (Artes e Identidade Visual) para garantir que sua marca não seja apenas vista, mas desejada.",
        "languages2.cta": "CONSULTORIA DE MARKETING",

        // Cards de Features
        "features.card1.title": "IA para Atendimento",
        "features.card1.desc": "Chatbots inteligentes que atendem, tiram dúvidas e agendam reuniões 24/7.",
        "features.card2.title": "IA para Vendas",
        "features.card2.desc": "Agentes que qualificam leads e conduzem o cliente até o fechamento.",
        "features.card3.title": "Sistemas Internos",
        "features.card3.desc": "Dashboards e automações para organizar a operação da sua empresa.",
        "features.card4.title": "SEO & Tráfego",
        "features.card4.desc": "Posicionamento no Google e estratégias de anúncios que trazem ROI real.",

        // Instructors (Profile) -> Agora: "Sobre Mim"
        "instructors.badge": "EXPERTISE",
        "instructors.badge_sub": "O ESPECIALISTA",
        "instructors.title": "8 ANOS DE\nRESULTADOS REAIS",
        "instructors.desc": "Sou Pedrovysk. Desenvolvedor Full-Stack, Designer e Estrategista de Marketing. Unifico a técnica da programação, a estética da arte digital e a persuasão do marketing para criar máquinas de vendas para empresas. Não faço 'apenas sites', crio ativos digitais que colocam dinheiro no seu bolso.",
        "instructors.cta": "FALAR COM PEDROVYSK ↗",

        // Bonuses (Deliverables) -> Agora: "O Que Entregamos"
        "bonuses.badge": "ENTREGAS",
        "bonuses.badge_sub": "FULL-SERVICE",
        "bonuses.title": "SOLUÇÕES <span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>COMPLETAS</span>",
        "bonuses.desc": "Do design à implementação técnica, cobrimos todas as pontas do seu digital.",
        "bonuses.card1.title": "Sites & LPs",
        "bonuses.card1.desc": "Layouts exclusivos e velocidade extrema.",
        "bonuses.card2.title": "Lojas Virtuais",
        "bonuses.card2.desc": "E-commerce seguro e otimizado para vendas.",
        "bonuses.card3.title": "Sistemas Web",
        "bonuses.card3.desc": "Plataformas personalizadas para seu negócio.",
        "bonuses.card4.title": "Agentes de IA",
        "bonuses.card4.desc": "Funcionários digitais que não dormem.",
        "bonuses.card5.title": "Artes & Design",
        "bonuses.card5.desc": "Criativos que chamam atenção no feed.",
        "bonuses.card6.title": "Copywriting",
        "bonuses.card6.desc": "Textos que convencem e vendem.",
        "bonuses.card7.title": "SEO Técnico",
        "bonuses.card7.desc": "Otimização para motores de busca (Google/Bing).",
        "bonuses.card8.title": "GEO Marketing",
        "bonuses.card8.desc": "Domine as buscas locais na sua região.",
        "bonuses.footer.title": "Stack Tecnológico de Ponta",

        // Community -> Network/Partners -> Agora: "Clientes/Parceiros"
        "community.badge": "CONFIANÇA",
        "community.badge_sub": "CLIENTES",
        "community.title": "QUEM JÁ\nCONFIOU",
        "community.desc": "Junte-se a um grupo seleto de empresas que elevaram seu nível digital.",
        "community.card1.title": "Empresas",
        "community.card1.desc": "De diversos nichos atendidos.",
        "community.card2.title": "Resultados",
        "community.card2.desc": "Foco total em performance.",
        "community.card3.title": "Suporte",
        "community.card3.desc": "Acompanhamento próximo.",
        "community.card4.title": "Garantia",
        "community.card4.desc": "Entrega profissional e no prazo.",

        // Reviews (Clients)
        "reviews.badge": "FEEDBACK",
        "reviews.badge_sub": "DEPOIMENTOS",
        "reviews.title": "O QUE DIZEM\nNOSSOS PARCEIROS",

        // CTA
        "cta.badge": "VAMOS COMEÇAR?",
        "cta.badge_sub": "ORÇAMENTO",
        "cta.title": "TIRE SUA IDEIA\nDO PAPEL HOJE",
        "cta.button": "SOLICITAR PROPOSTA AGORA",

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
