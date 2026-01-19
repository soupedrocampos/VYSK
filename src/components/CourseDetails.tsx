// Imports removed due to being unused
import SalesStrategy from './SalesStrategy';

const courses = [
    {
        title: "Design Premium",
        subtitle: "Visual que posiciona sua marca no topo",
        modules: [
            "Interfaces modernas e minimalistas",
            "Identidade visual marcante",
            "Experiência de usuário (UX) fluida",
            "Animações e interações refinadas",
            "Adaptado para todos os dispositivos",
            "Foco em conversão e retenção",
            "Estética de alto padrão (High-End)"
        ],
        image: "/assets/card-image-creator.png",
        year: "2025",
        status: "Incluso"
    },
    {
        title: "Tecnologia de Ponta",
        subtitle: "Performance e segurança extremas",
        modules: [
            "Desenvolvimento em React / Next.js",
            "Carregamento instantâneo",
            "Código limpo e otimizado para SEO",
            "Integração com APIs modernas",
            "Infraestrutura escalável",
            "Segurança anti-ataques",
            "Painel administrativo intuitivo"
        ],
        image: "/assets/card-video-creator.png",
        year: "2025",
        status: "Incluso"
    },
    {
        title: "Inteligência Artificial",
        subtitle: "Automação que trabalha enquanto você dorme",
        modules: [
            "Chatbots de atendimento 24/7",
            "Agentes de vendas autônomos",
            "Geração de conteúdo automática",
            "Análise de dados preditiva",
            "Integração com OpenAI e n8n",
            "Redução de custos operacionais",
            "Personalização em escala"
        ],
        image: "/assets/card-gpt-pro.png",
        year: "2025",
        status: "Incluso"
    },
    {
        title: "Estratégia de Vendas",
        subtitle: "Não é só código, é negócio",
        modules: [
            "Copywriting persuasivo (Vendas)",
            "Funis de conversão validados",
            "Otimização para ROI máximo",
            "Integração com CRM e Gateways",
            "Rastreamento de leads avançado",
            "Testes A/B contínuos",
            "Foco total em resultados financeiros"
        ],
        image: "/assets/card-other.png",
        year: "2025",
        status: "Incluso"
    }
];

const CourseDetails = () => {
    return (
        <>
            <section className="py-24 bg-human-bg font-satoshi">
                <div className="container mx-auto px-4 w-full max-w-6xl">

                    <div className="mb-16">
                        <h2 className="font-cabinet font-bold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter text-white mb-4 uppercase">
                            DIFERENCIAL <br /> QUE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">MUDA O JOGO</span>
                        </h2>
                        <div className="w-full h-px bg-white/10 mt-8" />
                    </div>

                    <div className="space-y-0">
                        {courses.map((course, index) => (
                            <SalesStrategy
                                key={index}
                                title={course.title}
                                subtitle={course.subtitle}
                                features={course.modules}
                                buttonText="VER DETALHES"
                                imageUrl={course.image}
                                imageAlt={course.title}
                                year={course.year}
                                badge={course.status}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CourseDetails;
