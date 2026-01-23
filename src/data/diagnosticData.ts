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
            { label: 'Tráfego', value: 92, status: 'good' },
            { label: 'Conversão', value: 28, status: 'critical' },
            { label: 'Autoridade SEO', value: 15, status: 'critical' },
            { label: 'Oportunidade', value: 98, status: 'good' }
        ],
        summary: `Caio, o mercado de "Gestão de Milhas" ainda é um Nível 17 de dificuldade (Fácil), mas a janela está fechando. Hoje, o Google confunde "milhas" com "milho" por falta de conteúdo de qualidade. Enquanto seus concorrentes compram links falsos e deixam páginas quebradas no ar, nós vamos dominar as respostas da I.A. e criar autoridade técnica à prova de falhas.`,
        recommendations: [
            'Criar Cluster de Conteúdo "Gestão de Milhas"',
            'Otimizar Artigos para SGE (Google I.A.)',
            'Implementar Schema Markup de Autoridade',
            'Blindagem de Marca (Domínios)'
        ],
        videoUrl: 'https://www.youtube.com/watch?v=Q0jredtJEdg',
        mockups: [
            { title: '', image: '/assets/caio-option-1.png' }
        ],
        price: {
            value: 'R$ 8.000,00',
            label: 'INVESTIMENTO',
            originalValue: 'R$ 15.000,00'
        },
        analysisSections: [
            {
                title: '1. O Cenário de Oportunidade (Dados de Mercado)',
                content: `<div class="space-y-4">
                    <p class="text-gray-300">Estes números provam que o mercado é rentável e acessível agora, mas está difícil.</p> 
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10">
                            <h4 class="text-green-400 font-bold mb-1">Dificuldade KD: 17% (Fácil)</h4>
                            <p class="text-sm text-gray-400">Para "Gestão de Milhas". Já para "Gestor de Milhas" é 29% com 90 buscas/mês.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10">
                            <h4 class="text-blue-400 font-bold mb-1">CPC Estimado: R$ 1,21</h4>
                            <p class="text-sm text-gray-400">Barato, mas o SEO trará esse tráfego de graça para sempre.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10">
                            <h4 class="text-purple-400 font-bold mb-1">Intenção: Informacional</h4>
                            <p class="text-sm text-gray-400">O público quer aprender. Isso valida a necessidade de artigos educativos, não apenas vendas.</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10">
                            <h4 class="text-yellow-400 font-bold mb-1">Janela de Tempo</h4>
                            <p class="text-sm text-gray-400">Concorrência crescendo semanalmente. A hora de entrar é agora.</p>
                        </div>
                    </div>
                </div>`
            },
            {
                title: '2. A Prova Social (Números dos Concorrentes)',
                content: `<div class="space-y-4">
                    <p class="text-gray-300 mb-4">Veja o tráfego que está sendo perdido para sites "amadores".</p>
                    
                    <div class="space-y-3">
                        <div class="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                            <div class="bg-red-500/20 p-2 rounded-lg text-red-400 font-bold">10k</div>
                            <div>
                                <h4 class="text-white font-bold">First Class Milhas</h4>
                                <p class="text-sm text-gray-400">10.000 visitas/mês mesmo com um site esteticamente "feio" e básico.</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                            <div class="bg-green-500/20 p-2 rounded-lg text-green-400 font-bold">16k</div>
                            <div>
                                <h4 class="text-white font-bold">Cash Milhas (Orgânico)</h4>
                                <p class="text-sm text-gray-400">16.000 acessos, sendo <strong>60% totalmente orgânico (gratuito)</strong>. Focado apenas em capturar leads.</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                            <div class="bg-blue-500/20 p-2 rounded-lg text-blue-400 font-bold">51%</div>
                            <div>
                                <h4 class="text-white font-bold">Milhas Lucrativas</h4>
                                <p class="text-sm text-gray-400">Tráfego orgânico apenas com uma Landing Page simples. Palavras-chave geram dinheiro.</p>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            {
                title: '3. A Estratégia "Matadora": Falhas da Concorrência',
                content: `<ul class="space-y-4">
                    <li class="bg-red-900/10 border border-red-500/20 p-4 rounded-xl">
                        <h4 class="text-red-300 font-bold flex items-center gap-2 mb-2"><XCircle size={18} /> Amadorismo Técnico</h4>
                        <p class="text-gray-400 text-sm">O domínio <em>gestormilhas.com.br</em> tem páginas quebradas, erros de código e textos em inglês ("Lorem Ipsum") esquecidos.</p>
                    </li>
                    <li class="bg-red-900/10 border border-red-500/20 p-4 rounded-xl">
                        <h4 class="text-red-300 font-bold flex items-center gap-2 mb-2"><AlertTriangle size={18} /> Risco de "Black Hat"</h4>
                        <p class="text-gray-400 text-sm">Concorrentes comprando backlinks de "lixo". É uma bomba-relógio para penalização do Google. Nossa proposta oferece crescimento seguro.</p>
                    </li>
                    <li class="bg-purple-900/10 border border-purple-500/20 p-4 rounded-xl">
                        <h4 class="text-purple-300 font-bold flex items-center gap-2 mb-2"><User size={18} /> Confusão do Algoritmo</h4>
                        <p class="text-gray-400 text-sm">O Google confunde "Gestão de Milhas" com "Gestão de Milho". Vamos educar o robô com conteúdo semântico.</p>
                    </li>
                </ul>`
            },
            {
                title: '4. Otimização para IA (O Diferencial Moderno)',
                content: `<div class="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 p-6 rounded-2xl relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none"></div>
                    
                    <h4 class="text-white font-cabinet font-bold text-lg mb-4 relative z-10">Visibilidade na IA (SGE)</h4>
                    <p class="text-gray-300 mb-4 text-sm relative z-10">As IAs já respondem citando fontes. Seu site deve responder perguntas como:</p>
                    
                    <ul class="space-y-2 mb-6 relative z-10">
                        <li class="flex items-center gap-2 text-purple-200 text-sm bg-purple-500/10 px-3 py-2 rounded-lg">
                            <span>🤖</span> "Onde contratar gestor de milhas custo-benefício?"
                        </li>
                        <li class="flex items-center gap-2 text-purple-200 text-sm bg-purple-500/10 px-3 py-2 rounded-lg">
                            <span>🤖</span> "Quanto custa 10.000 ou 30.000 milhas?"
                        </li>
                    </ul>

                    <div class="border-t border-white/10 pt-4 relative z-10">
                        <h5 class="text-white font-bold text-sm mb-1">Integração Multimídia</h5>
                        <p class="text-gray-400 text-xs">Uso de transcrições de seus vídeos do YouTube e legendas do Instagram para fortalecer o texto (Google indexa isso agora).</p>
                    </div>
                </div>`
            },
            {
                title: '5. Sugestão de Domínios (Ação Imediata)',
                content: `<div class="bg-green-900/10 border border-green-500/20 p-5 rounded-xl flex items-start gap-4">
                    <div class="bg-green-500/20 p-3 rounded-full text-green-400 shrink-0">
                        <CheckCircle size={24} />
                    </div>
                    <div>
                        <h4 class="text-white font-bold text-lg mb-2">Estratégia de Defesa</h4>
                        <p class="text-gray-400 text-sm mb-3">O domínio <em>gestaodemilhas.com.br</em> parece inativo. Recomendação táctica:</p>
                        <ul class="list-disc list-inside text-gray-300 text-sm space-y-1">
                            <li>Comprar <strong>caiogestordemilhas.com.br</strong></li>
                            <li>Ou <strong>sougestordemilhas.com.br</strong></li>
                        </ul>
                        <p class="text-green-400 text-xs mt-3 font-bold">Custo: ~R$ 40,00 (Proteção de Marca)</p>
                    </div>
                </div>`
            }
        ]
    }
];
