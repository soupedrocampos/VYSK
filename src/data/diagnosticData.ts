export interface IDiagnosticData {
    username: string;
    password: string; // Simple local auth
    name: string;
    company: string;
    score: number;
    metrics: {
        label: string;
        value: number; // 0-100
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
        value: string; // e.g. "R$ 5.000,00"
        label: string; // e.g. "INVESTIMENTO"
        originalValue?: string; // e.g. "R$ 10.000,00"
    };
    bgImage?: string; // Optional background override
    analysisSections?: {
        title: string;
        content: string; // HTML allowed or Markdown
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
        summary: 'Sua empresa tem uma base técnica sólida, mas precisa investir mais em produção de conteúdo e link building para aumentar a autoridade do domínio.',
        recommendations: [
            'Criar um blog com frequência semanal',
            'Otimizar meta descriptions das páginas de serviço',
            'Iniciar estratégia de guest posting',
            'Melhorar tempo de carregamento mobile'
        ]
    },
    {
        username: 'CAIOMILHAS',
        password: '01182026',
        name: 'Caio Milhas',
        company: 'Milhas Aéreas',
        score: 82,
        metrics: [
            { label: 'Conversão', value: 65, status: 'warning' },
            { label: 'Tráfego', value: 92, status: 'good' },
            { label: 'Retenção', value: 78, status: 'good' },
            { label: 'LTV', value: 50, status: 'critical' }
        ],
        summary: 'O projeto tem um tráfego excelente, mas a conversão no checkout está abaixo da média do mercado. identificamos oportunidades claras de otimização na página de vendas.',
        recommendations: [
            'Implementar checkout transparente',
            'Adicionar prova social na hero section',
            'Otimizar velocidade de carregamento',
            'Criar upsell pós-compra'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
        mockups: [
            { title: 'Opção 1', image: '/assets/caio-option-1.png' },
            { title: 'Opção 2', image: '/assets/caio-option-2.jpg' }
        ],
        price: {
            value: 'R$ 8.000,00',
            label: 'INVESTIMENTO',
            originalValue: 'R$ 15.000,00'
        },
        analysisSections: [
            {
                title: 'O Problema Atual',
                content: `<p class="mb-4">Identificamos que <strong class="text-white">80% dos visitantes</strong> saem do site sem realizar nenhuma ação. Isso ocorre principalmente devido à falta de clareza na proposta de valor inicial.</p>
                <div class="bg-red-500/10 border border-red-500/20 p-4 rounded-xl mb-4">
                    <h4 class="text-red-400 font-bold mb-2 flex items-center gap-2">⚠️ Pontos Críticos:</h4>
                    <ul class="list-disc list-inside text-gray-300 space-y-1">
                        <li>Checkout com muitos campos (fricção alta)</li>
                        <li>Carregamento acima de 3s no 4G</li>
                        <li>Ausência de depoimentos na dobra principal</li>
                    </ul>
                </div>`
            },
            {
                title: 'A Solução Proposta',
                content: `<p class="mb-4">Implementar um <strong class="text-purple-400">funil de alta conversão</strong> focado em captura de leads qualificados antes da oferta principal.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div class="bg-white/5 p-4 rounded-xl border border-white/10">
                        <h5 class="font-bold text-white mb-2">🎁 Isca Digital</h5>
                        <p class="text-sm text-gray-400">E-book gratuito sobre milhas para capturar e-mail e WhatsApp.</p>
                    </div>
                    <div class="bg-white/5 p-4 rounded-xl border border-white/10">
                        <h5 class="font-bold text-white mb-2">⚡ Oferta One-Time</h5>
                        <p class="text-sm text-gray-400">Produto de entrada (tripwire) na página de obrigado.</p>
                    </div>
                </div>
                <p>Com essa estrutura, projetamos um aumento de <span class="bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-bold">35% no LTV</span> nos primeiros 3 meses.</p>`
            }
        ]
    }
];
