export interface IDiagnosticData {
    username: string;
    password: string;
    name: string;
    company: string;
    score: number;
    metrics: {
        label: string;
        value: number;
        status: 'good' | 'warning' | 'critical';
    }[];
    summary: string;
    recommendations: string[];
    videoUrl?: string;
    mockups?: {
        title: string;
        image: string;
    }[];
    price?: {
        value: string;
        label: string;
        originalValue?: string;
    };
    bgImage?: string;
    hero?: {
        title: string;
        subtitle: string;
        cta: string;
    };
    analysisSections?: {
        title: string;
        type?: 'text' | 'stats_grid' | 'competitors' | 'ai_showcase' | 'domain_action' | 'warning_list';
        content?: string;
        items?: any[]; // Flexible payload for different section types
    }[];
}

export const diagnosticUsers: IDiagnosticData[] = [
    {
        username: 'admin',
        password: '123',
        name: 'Usuário Exemplo',
        company: 'Empresa Teste',
        score: 75,
        metrics: [
            { label: 'SEO Técnico', value: 85, status: 'good' },
            { label: 'Conteúdo', value: 60, status: 'warning' },
            { label: 'Autoridade', value: 40, status: 'critical' },
            { label: 'UX/UI', value: 90, status: 'good' }
        ],
        summary: 'Sua empresa tem uma base técnica sólida.',
        recommendations: ['Melhorar blog'],
        analysisSections: [
            { title: 'Análise Geral', type: 'text', content: '<p>Texto genérico.</p>' }
        ]
    },
    {
        username: 'CAIOMILHAS',
        password: '01182026',
        name: 'Caio',
        company: 'Milhas Aéreas',
        score: 82,
        metrics: [
            { label: 'Tráfego Orgânico', value: 60, status: 'good' },
            { label: 'Conversão', value: 28, status: 'critical' },
            { label: 'Autoridade SEO', value: 15, status: 'critical' },
            { label: 'Oportunidade', value: 98, status: 'good' }
        ],
        hero: {
            title: 'De Diagnóstico a Lucro Real: Maximize seu Portfólio de Milhas com Caio',
            subtitle: 'Especialista em Air Miles Performance',
            cta: 'Quero minha Consultoria'
        },
        summary: `🚀 Caio, o mercado de "Gestão de Milhas" é uma mina de ouro, mas está cheia de piratas! ⚠️ O Google confunde "milhas" com "milho" 🌽, e seus concorrentes usam técnicas amadoras. Vamos profissionalizar sua presença digital e dominar esse Oceano Azul antes que ele vire vermelho. 🏆`,
        recommendations: [
            '💻 Landing Page & Site Completo (Desktop/Mobile)',
            '📝 Blog: 100 Artigos Otimizados para I.A.',
            '🚀 Setup Completo de SEO Técnico & Robots',
            '⚡ Otimização de Velocidade e Performance',
            '🔗 Estratégia de Backlinks de Autoridade',
            '📊 Relatórios de Crescimento Mensal',
            '🛡️ Blindagem de Marca e Segurança',
            '💎 3 Meses de Acompanhamento Estratégico'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=Q0jredtJEdg',
        mockups: [
            { title: '', image: '/assets/caio-option-1.png' }
        ],
        price: {
            value: 'R$ 7.997,00',
            label: '💎 3 MESES DE ACOMPANHAMENTO',
            originalValue: 'R$ 15.000,00'
        },
        analysisSections: [
            {
                title: '📉 1. O Cenário de Oportunidade: O Problema',
                type: 'stats_grid',
                items: [
                    {
                        label: 'Dificuldade KD: 17%',
                        value: 'FÁCIL',
                        desc: 'Para "Gestão de Milhas". A janela de oportunidade é agora.',
                        color: 'green'
                    },
                    {
                        label: 'CPC Estimado',
                        value: 'R$ 1,21',
                        desc: 'Custo por clique baixo, mas o SEO trará isso de graça.',
                        color: 'blue'
                    }
                ]
            },
            {
                title: '🏆 2. Prova Social (Números dos Concorrentes)',
                type: 'competitors',
                items: [
                    { name: 'First Class Milhas', stat: '10k Visitas', desc: 'Site básico', color: 'red' },
                    { name: 'Cash Milhas', stat: '16k (60% Orgânico)', desc: 'Líder atual', color: 'green' },
                    { name: 'Milhas Lucrativas', stat: '51% Orgânico', desc: 'Apenas LP simples', color: 'blue' }
                ]
            },
            {
                title: '💣 3. As Falhas da Concorrência',
                type: 'warning_list',
                items: [
                    { title: 'Ausência de Infraestrutura', desc: 'Concorrentes sem site profissional ou Landing Page de alta conversão.' },
                    { title: 'Conteúdo Raso', desc: 'Falta de artigos profundos e otimizados para SEO e novas IAs.' },
                    { title: 'Oportunidade de Ouro', desc: 'Você precisa urgente de um ecossistema digital (Site + Blog + SEO) para dominar o Google.' }
                ]
            },
            {
                title: '🧠 4. Otimização para IA (O Diferencial)',
                type: 'ai_showcase',
                items: [
                    { title: 'Dominar o SGE', desc: 'Responder perguntas que a IA faz: "Onde contratar gestor de milhas?"', icon: 'robot' },
                    { title: 'Integração Multi-modal', desc: 'Usar seus vídeos do YouTube para gerar autoridade semântica.', icon: 'video' }
                ]
            },
            {
                title: '🛡️ 5. Ação Imediata (Domínios)',
                type: 'domain_action',
                items: [
                    { domain: 'caiogestordemilhas.com.br', status: 'available' },
                    { domain: 'sougestordemilhas.com.br', status: 'available' }
                ]
            }
        ]
    }
];
