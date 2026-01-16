export interface IBlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    coverImage: string;
    date: string;
    author: string;
    category: string;
    tags: string[];
    readTime: string;
}

export const blogPosts: IBlogPost[] = [
    {
        id: '1',
        slug: 'como-otimizar-seo-2025',
        title: 'Guia Definitivo de SEO para 2025: O Que Mudou?',
        excerpt: 'Descubra as novas estratégias de SEO focadas em IA, busca por voz e experiência do usuário que dominarão o mercado em 2025.',
        content: `
            <h2>O Futuro do SEO Chegou</h2>
            <p>Com a ascensão da Inteligência Artificial Generativa (SGE), o SEO tradicional está passando por uma revolução silenciosa. Não basta mais apenas usar palavras-chave; é preciso responder à intenção do usuário com profundidade e autoridade.</p>
            
            <h3>1. Conteúdo Focado em Experiência (E-E-A-T)</h3>
            <p>O Google prioriza cada vez mais a experiência real. Se você escreve sobre "melhores ferramentas de automação", precisa demonstrar que realmente as testou.</p>

            <h3>2. Otimização para "Answer Engines"</h3>
            <p>Ferramentas como Perplexity e SearchGPT buscam respostas diretas. Estruture seu conteúdo com perguntas e respostas claras, listas e dados estruturados.</p>

            <h3>3. Velocidade e Core Web Vitals</h3>
            <p>Um site lento não ranqueia. Ponto. A otimização técnica (Technical SEO) deve ser a base da sua estratégia. Imagens WebP, código limpo e carregamento assíncrono são obrigatórios.</p>
        `,
        coverImage: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3380a3?q=80&w=2070&auto=format&fit=crop', // SEO Image
        date: '2025-01-15',
        author: 'Pedro Campos',
        category: 'SEO',
        tags: ['SEO', 'Marketing Digital', 'Tráfego Orgânico'],
        readTime: '5 min'
    },
    {
        id: '2',
        slug: 'automacao-n8n-para-agencias',
        title: 'Como Escalar sua Agência com Automação N8N',
        excerpt: 'Pare de perder tempo com tarefas repetitivas. Aprenda a usar o N8N para automatizar relatórios, onboarding de clientes e prospecção.',
        content: `
            <h2>Por que N8N?</h2>
            <p>Diferente do Zapier ou Make, o N8N oferece flexibilidade total e pode ser hospedado em seu próprio servidor, reduzindo custos drasticamente e garantindo privacidade dos dados.</p>

            <h3>Automações Essenciais para Agências:</h3>
            <ul>
                <li><strong>Relatórios Automáticos:</strong> Coleta dados do GA4, Meta Ads e Search Console e envia um PDF no Slack toda segunda-feira.</li>
                <li><strong>Onboarding de Clientes:</strong> Cria pastas no Drive, canais no Slack e tarefas no Trello automaticamente após a assinatura do contrato.</li>
                <li><strong>Prospecção Outbound:</strong> Enriquece leads do LinkedIn e envia e-mails personalizados via sequência fria.</li>
            </ul>
        `,
        coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', // Automation Image
        date: '2025-01-10',
        author: 'Pedro Campos',
        category: 'Automação',
        tags: ['N8N', 'Produtividade', 'SaaS'],
        readTime: '7 min'
    },
    {
        id: '3',
        slug: 'saas-micro-services',
        title: 'A Era dos Micro-SaaS: Como Criar Produtos de Nicho',
        excerpt: 'Não tente criar o próximo Facebook. Descubra como resolver problemas específicos de nichos inexplorados pode ser a chave para um SaaS lucrativo.',
        content: `
            <h2>Menos é Mais</h2>
            <p>O mercado de SaaS está saturado de soluções generalistas. O dinheiro agora está nos "Micro-SaaS": ferramentas que fazem UMA coisa, mas fazem excepcionalmente bem.</p>

            <h3>Exemplos de Sucesso:</h3>
            <ul>
                <li>API exclusiva para validação de documentos brasileiros.</li>
                <li>Plugin de WhatsApp focado apenas em imobiliárias.</li>
                <li>Dashboard de métricas simplificado para criadores de conteúdo.</li>
            </ul>
        `,
        coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', // SaaS Image
        date: '2025-01-05',
        author: 'Pedro Campos',
        category: 'SaaS',
        tags: ['Startup', 'Desenvolvimento', 'Negócios'],
        readTime: '6 min'
    },
    // EXTRA MODEL 1 - Technical/Dev
    {
        id: '4',
        slug: 'react-19-novidades',
        title: 'React 19: O Fim do useEffect?',
        excerpt: 'Explorando as novas Server Actions, o hook "use" e como o compilador do React vai mudar a forma como escrevemos componentes.',
        content: `
            <h2>React Compiler (React Forget)</h2>
            <p>A promessa é grande: nunca mais precisar usar <code>useMemo</code> ou <code>useCallback</code> manualmente. O compilador otimiza as re-renderizações automaticamente.</p>
            
            <h3>Server Actions Estáveis</h3>
            <p>Agora podemos executar mutações no servidor diretamente de componentes do cliente, simplificando drasticamente a camada de API e gerenciamento de formulários.</p>
        `,
        coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop', // React Code Image
        date: '2025-01-12',
        author: 'Pedro Campos',
        category: 'Desenvolvimento',
        tags: ['React', 'Frontend', 'Tech'],
        readTime: '8 min'
    },
    // EXTRA MODEL 2 - Strategy/Business
    {
        id: '5',
        slug: 'nomade-digital-worldpackers',
        title: 'Viajando o Mundo Trocando Habilidades: Minha Experiência',
        excerpt: 'Como usei a Worldpackers para morar em 5 países diferentes em um ano, economizando 80% dos custos de viagem e fazendo networking global.',
        content: `
            <h2>Mais que Viagem, Uma Troca de Vida</h2>
            <p>Ser um nômade digital não é apenas trabalhar de um café em Bali. É sobre imersão cultural. Através da Worldpackers, troquei meus serviços de web design e SEO por hospedagem em lugares incríveis.</p>

            <h3>Benefícios Reais:</h3>
            <ul>
                <li><strong>Custo Zero de Aluguel:</strong> A maior despesa da viagem eliminada.</li>
                <li><strong>Networking Internacional:</strong> Conheci empreendedores de todo o mundo nos hostels onde fiquei.</li>
                <li><strong>Crescimento Pessoal:</strong> Aprender a se adaptar é a habilidade #1 do século XXI.</li>
            </ul>
        `,
        coverImage: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1974&auto=format&fit=crop', // Travel Image
        date: '2024-12-20',
        author: 'Pedro Campos',
        category: 'Lifestyle',
        tags: ['Viagem', 'Nômade Digital', 'Worldpackers'],
        readTime: '10 min'
    },
    // EXTRA MODEL 3 - AI/Innovation
    {
        id: '6',
        slug: 'ia-generativa-alem-do-chatgpt',
        title: 'IA Generativa Além do Texto: Vídeo e 3D',
        excerpt: 'Sora, Runway Gen-2 e Midjourney v6. Como a geração de vídeo e assets 3D via IA vai transformar a indústria de design e cinema em 2025.',
        content: `
            <h2>O Fim da Produção de Vídeo Convencional?</h2>
            <p>Ferramentas como o Sora da OpenAI demonstraram que é possível criar cenas cinematográficas complexas apenas com texto. O que isso significa para videomakers e agências?</p>
            
            <p>Não é o fim, mas uma evolução. A "curadoria" e a "direção" de IA serão as novas habilidades essenciais. Quem souber dirigir a IA terá o poder de um estúdio de Hollywood no laptop.</p>
        `,
        coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop', // AI Image
        date: '2025-01-14',
        author: 'Pedro Campos',
        category: 'Inovação',
        tags: ['IA', 'Design', 'Futuro'],
        readTime: '4 min'
    }
];

export const allCategories = Array.from(new Set(blogPosts.map(post => post.category)));
export const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
