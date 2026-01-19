
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
        "features.subtitle": "Visuals that position your brand at the top",
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
        "bonuses.card1.title": "Social Media Automation",
        "bonuses.card1.desc": "Automatically publish posts across multiple networks and recycle content.",
        "bonuses.card2.title": "Email Marketing Automation",
        "bonuses.card2.desc": "Send nurturing sequences based on forms, purchase events, or CRM tags.",
        "bonuses.card3.title": "Lead Capture for CRM",
        "bonuses.card3.desc": "Centralize leads from forms, landing pages, chat, and social media into your CRM.",
        "bonuses.card4.title": "AI Customer Support",
        "bonuses.card4.desc": "Read incoming emails/messages, generate responses with LLMs, and handle tickets.",
        "bonuses.card5.title": "Data Sync between Apps",
        "bonuses.card5.desc": "Keep data in sync between CRM, spreadsheets, databases, and internal tools.",
        "bonuses.card6.title": "Scraping + Data Enrichment",
        "bonuses.card6.desc": "Collect web data and enrich it with APIs or AI before saving.",
        "bonuses.card7.title": "Automated Reports",
        "bonuses.card7.desc": "Consolidate metrics from various sources into daily/weekly reports.",
        "bonuses.card8.title": "E-commerce Workflows",
        "bonuses.card8.desc": "Update inventory, send order notifications, and trigger transactional emails.",
        "bonuses.card9.title": "Internal IT/Ops Automation",
        "bonuses.card9.desc": "Open/update tickets, restart services, and orchestrate DevOps tasks.",
        "bonuses.card10.title": "AI Workflows",
        "bonuses.card10.desc": "Content generation, document summarization, and sentiment analysis using AI.",
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
        "features.title": "A Revolução da IA\nna sua Empresa",
        "features.subtitle": "Visual que posiciona sua marca no topo",
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
        "bonuses.card1.title": "Automação de redes sociais",
        "bonuses.card1.desc": "Publicar posts automaticamente em várias redes e reciclar conteúdo.",
        "bonuses.card2.title": "Automação de e‑mail marketing",
        "bonuses.card2.desc": "Enviar sequências de nutrição a partir de formulários, eventos de compra ou tags de CRM.",
        "bonuses.card3.title": "Captura de leads para CRM",
        "bonuses.card3.desc": "Centralizar leads vindos de formulários, landing pages, chat e redes sociais em um CRM.",
        "bonuses.card4.title": "Atendimento ao cliente com IA",
        "bonuses.card4.desc": "Ler mensagens, gerar resposta com ChatGPT/LLM e registrar no help desk.",
        "bonuses.card5.title": "Sincronização de dados",
        "bonuses.card5.desc": "Manter dados em sincronia entre CRM, planilhas e banco de dados.",
        "bonuses.card6.title": "Scraping + Enriquecimento",
        "bonuses.card6.desc": "Coletar dados da web e enriquecer com APIs de dados ou IA.",
        "bonuses.card7.title": "Relatórios automáticos",
        "bonuses.card7.desc": "Consolidar métricas de várias fontes e montar relatórios automáticos.",
        "bonuses.card8.title": "Workflows de e‑commerce",
        "bonuses.card8.desc": "Atualizar estoque, enviar notificações e registrar eventos de compra.",
        "bonuses.card9.title": "Automação interna de TI/Ops",
        "bonuses.card9.desc": "Abrir tickets, criar usuários e orquestrar tarefas de DevOps automaticamente.",
        "bonuses.card10.title": "Workflows com IA",
        "bonuses.card10.desc": "Geração de conteúdos, sumarização e análise de sentimento usando IA.",
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
        "features.title": "Cuatro Cursos\nCompletos Que Te Llevarán\nAl Siguiente Nivel",
        "features.subtitle": "Visuales que posicionan tu marca en la cima",
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
        "bonuses.card1.title": "Automatización de Redes Sociales",
        "bonuses.card1.desc": "Publica posts automáticamente en varias redes y recicla contenido.",
        "bonuses.card2.title": "Automatización de Email Marketing",
        "bonuses.card2.desc": "Envía secuencias de nutrición basadas en formularios o etiquetas de CRM.",
        "bonuses.card3.title": "Captura de Leads para CRM",
        "bonuses.card3.desc": "Centraliza leads de formularios, chat y redes sociales en tu CRM.",
        "bonuses.card4.title": "Atención al Cliente con IA",
        "bonuses.card4.desc": "Lee mensajes, genera respuestas con LLMs y gestiona tickets.",
        "bonuses.card5.title": "Sincronización de Datos",
        "bonuses.card5.desc": "Mantén datos sincronizados entre CRM, hojas de cálculo y bases de datos.",
        "bonuses.card6.title": "Scraping + Enriquecimiento",
        "bonuses.card6.desc": "Recopila datos web y enriquécelos con APIs o IA antes de guardar.",
        "bonuses.card7.title": "Informes Automáticos",
        "bonuses.card7.desc": "Consolida métricas de varias fuentes en informes diarios/semanales.",
        "bonuses.card8.title": "Flujos de E-commerce",
        "bonuses.card8.desc": "Actualiza inventario, envía notificaciones y registra eventos de compra.",
        "bonuses.card9.title": "Automatización TI/Ops",
        "bonuses.card9.desc": "Abre tickets, crea usuarios y orquesta tareas de DevOps automáticamente.",
        "bonuses.card10.title": "Flujos de Trabajo con IA",
        "bonuses.card10.desc": "Generación de contenido, resúmenes y análisis de sentimiento usando IA.",
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
