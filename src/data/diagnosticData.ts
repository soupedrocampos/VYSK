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
        videoUrl: 'https://drive.google.com/file/d/1fY0wElUjo_2cYjho_xorbFxdfrqDVvj9/preview',
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
                title: 'A Grande Oportunidade: Oceano Azul',
                content: `<p class="mb-4 text-lg">O mercado de "Gestão de Milhas" é um oceano azul prestes a ficar vermelho. Hoje é fácil ranquear; amanhã será caro.</p>
                <div class="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 p-6 rounded-2xl mb-6 relative overflow-hidden group">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full pointer-events-none"></div>
                    <blockquote class="italic text-xl text-white font-cabinet mb-4 relative z-10">
                        "Seus concorrentes têm sites 'feios', compram links falsos e ignoram a Inteligência Artificial. Vamos dominar o Google antes que eles aprendam a fazer o certo."
                    </blockquote>
                    <div class="flex items-center gap-2 text-yellow-400 font-bold bg-yellow-400/10 px-3 py-1 rounded-full w-fit">
                        <span class="animate-pulse">⚠️</span> Senso de Urgência: Crítico
                    </div>
                </div>
                <p class="text-gray-300">A dificuldade da palavra-chave (KD) para "Gestão de Milhas" está no nível <strong class="text-green-400">17 (Fácil)</strong>, mas o volume de competidores cresce semanalmente. A hora de entrar é agora.</p>`
            },
            {
                title: 'Dados Reais: Quebrando Objeções',
                content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div class="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
                        <h4 class="text-purple-400 font-bold mb-1">O Poder do Orgânico</h4>
                        <p class="text-3xl font-bold text-white mb-2">60%</p>
                        <p class="text-sm text-gray-400">do tráfego do concorrente <em>Cash Milhas</em> é orgânico. Você não precisa ser refém de anúncios.</p>
                    </div>
                    <div class="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
                        <h4 class="text-purple-400 font-bold mb-1">Volume Qualificado</h4>
                        <p class="text-3xl font-bold text-white mb-2">90/mês</p>
                        <p class="text-sm text-gray-400">Buscas exatas por "Gestor de Milhas". Intenção informacional = Leads de alta qualidade.</p>
                    </div>
                    <div class="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
                        <h4 class="text-purple-400 font-bold mb-1">Custo x Oportunidade</h4>
                        <p class="text-3xl font-bold text-white mb-2">R$ 1,21</p>
                        <p class="text-sm text-gray-400">CPC médio. O SEO trará esses cliques de graça a longo prazo.</p>
                    </div>
                    <div class="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
                        <h4 class="text-purple-400 font-bold mb-1">Potencial de Tráfego</h4>
                        <p class="text-3xl font-bold text-white mb-2">10k+</p>
                        <p class="text-sm text-gray-400">Visitas/mês do líder (First Class Milhas). Totalmente alcançável com técnica superior.</p>
                    </div>
                </div>`
            },
            {
                title: 'A Estratégia: Escrevendo para a I.A.',
                content: `<p class="mb-4">O SEO moderno não é apenas sobre palavras-chave, é sobre responder à Inteligência Artificial do Google (SGE).</p>
                
                <div class="bg-red-500/10 border border-red-500/20 p-4 rounded-xl mb-6">
                    <h4 class="text-red-300 font-bold mb-2 flex items-center gap-2">🚫 O Problema do "Milho"</h4>
                    <p class="text-gray-400 text-sm">O Google ainda confunde "Gestão de Milhas" com "Gestão de Milho" (agronegócio) por falta de conteúdo específico. Vamos criar a autoridade semântica que educará o algoritmo.</p>
                </div>

                <h4 class="text-white font-bold mb-3">Perguntas que seu site responderá para a I.A.:</h4>
                <ul class="space-y-3">
                    <li class="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                        <span class="text-purple-400 mt-1">🤖</span>
                        <span class="text-gray-300">"Onde posso contratar um gestor de milhas com bom custo-benefício?"</span>
                    </li>
                    <li class="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                        <span class="text-purple-400 mt-1">🤖</span>
                        <span class="text-gray-300">"Quanto custa 10.000 ou 30.000 milhas?"</span>
                    </li>
                    <li class="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                        <span class="text-purple-400 mt-1">🤖</span>
                        <span class="text-gray-300">"Qual o melhor aplicativo de gestão de milhas?" (Tendência em alta)</span>
                    </li>
                </ul>`
            },
            {
                title: 'Por Que Vamos Ganhar?',
                content: `<div class="space-y-4">
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30">
                            <span class="text-green-400 font-bold">1</span>
                        </div>
                        <div>
                            <h4 class="text-white font-bold">Concorrência Amadora</h4>
                            <p class="text-gray-400 text-sm">A maioria usa apenas Instagram ou sites quebrados. O concorrente direto pelo nome tem erros de código expostos.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30">
                            <span class="text-green-400 font-bold">2</span>
                        </div>
                        <div>
                            <h4 class="text-white font-bold">Sem "Black Hat"</h4>
                            <p class="text-gray-400 text-sm">Concorrentes compram backlinks tóxicos (bomba-relógio). Nós construiremos autoridade real e perene.</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30">
                            <span class="text-green-400 font-bold">3</span>
                        </div>
                        <div>
                            <h4 class="text-white font-bold">Proteção de Marca</h4>
                            <p class="text-gray-400 text-sm">Recomendação tática: Registrar <em>caiogestordemilhas.com.br</em> para blindar sua marca contra novos entrantes.</p>
                        </div>
                    </div>
                </div>`
            },
            {
                title: 'Seja a Resposta que o Google Procura',
                content: `<p class="text-lg text-gray-300 italic mb-6">
                    "Caio, o mercado ainda é nível 17 (Fácil), mas a janela está fechando. Hoje, a I.A. responde dúvidas usando fontes confiáveis. Se alguém pergunta 'Onde contratar um gestor de milhas?', seu site precisa ser a resposta."
                </p>
                <div class="bg-purple-600/20 border border-purple-500/40 p-6 rounded-2xl text-center">
                    <h3 class="text-white font-cabinet font-bold text-xl mb-2">Vamos construir sua autoridade digital</h3>
                    <p class="text-purple-200 text-sm mb-0">Antes que esse nicho fique saturado.</p>
                </div>`
            }
        ]
    }
];
