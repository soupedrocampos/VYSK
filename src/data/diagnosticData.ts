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
    }
];
