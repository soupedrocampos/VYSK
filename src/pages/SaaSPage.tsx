import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { Cloud, Code, Shield, Layers } from 'lucide-react';

const SaaSPage = () => {
    return (
        <div className="bg-black min-h-screen font-satoshi selection:bg-purple-500/30">
            <SEOHead
                title="Desenvolvimento de SaaS & Micro-SaaS"
                description="Transforme sua ideia em um produto digital escalável. Desenvolvimento de SaaS high-end com arquitetura robusta e design premium."
                keywords={['SaaS', 'Desenvolvimento Web', 'React', 'Micro-SaaS', 'Startup']}
            />

            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 md:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <p className="text-purple-400 font-bold tracking-widest uppercase mb-6 flex justify-center items-center gap-2">
                        <Cloud className="w-5 h-5" /> SOFTWARE AS A SERVICE
                    </p>
                    <h1 className="text-6xl md:text-8xl font-cabinet font-bold text-white mb-8 leading-none tracking-tighter">
                        ESCALABILIDADE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">INFINITA</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                        Construímos a infraestrutura tecnológica para sua próxima rodada de investimento.
                        Arquitetura moderna, limpa e pronta para milhões de usuários.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <a href="#contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-gray-200 transition-all">
                            Orçar Projeto
                        </a>
                        <a href="/portfolio" className="inline-block border border-white/20 text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-white/10 transition-all">
                            Ver Portfolio
                        </a>
                    </div>
                </div>
            </section>

            {/* Stack Grid */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { title: 'React / Next.js', icon: <Code />, desc: 'Frontend rápido e responsivo.' },
                            { title: 'Node / Supabase', icon: <Layers />, desc: 'Backend escalável e seguro.' },
                            { title: 'Stripe Connect', icon: <Shield />, desc: 'Pagamentos globais integrados.' },
                            { title: 'AWS / Vercel', icon: <Cloud />, desc: 'Infraestrutura serverless.' }
                        ].map((stack, idx) => (
                            <div key={idx} className="bg-neutral-900/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm text-center">
                                <div className="text-purple-400 mx-auto mb-4 w-8 h-8 flex items-center justify-center">{stack.icon}</div>
                                <h3 className="text-white font-bold mb-2">{stack.title}</h3>
                                <p className="text-gray-500 text-xs">{stack.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Prop */}
            <section className="py-32 bg-white text-black px-4 md:px-8 rounded-3xl mx-2 md:mx-6 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-5xl md:text-6xl font-cabinet font-bold mb-8 leading-tight">
                            Do MVP ao <br /> IPO.
                        </h2>
                        <p className="text-gray-600 text-xl leading-relaxed mb-8">
                            Não entregamos apenas código. Entregamos um produto de mercado. Ajudamos a definir o roadmap, priorizar features e validar hipóteses com rapidez.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 text-lg font-bold">
                                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">1</span>
                                Design System Customizado
                            </li>
                            <li className="flex items-center gap-4 text-lg font-bold">
                                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">2</span>
                                Painéis Administrativos
                            </li>
                            <li className="flex items-center gap-4 text-lg font-bold">
                                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">3</span>
                                Integrações via API
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 h-[400px] bg-gray-100 rounded-3xl border border-gray-200 shadow-xl flex items-center justify-center overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Dashboard SaaS" />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-cabinet font-bold text-white mb-12 text-center">Dúvidas Sobre Desenvolvimento</h2>
                    <div className="space-y-6">
                        {[
                            { q: "O código fonte é meu após o término do projeto?", a: "Sim, 100%. Você detém a propriedade intelectual total. Entregamos o repositório Git completo com documentação, e você não fica 'preso' à nossa agência. Prezamos pela liberdade do cliente." },
                            { q: "Vocês desenvolvem o aplicativo mobile também?", a: "Focamos em PWA (Progressive Web Apps) e Web Apps responsivos que funcionam como aplicativos nativos. Para apps nativos (iOS/Android) específicos, utilizamos React Native, permitindo reaproveitar grande parte da lógica do sistema web." },
                            { q: "Qual a stack tecnológica utilizada?", a: "Nossa stack padrão é a 'T3' ou similar: Next.js (React) front-end, Node.js ou Serverless backend, banco de dados PostgreSQL (via Supabase) e TailwindCSS para estilização. É o padrão da indústria para startups modernas e escaláveis." },
                            { q: "Como funciona a manutenção pós-lançamento?", a: "Oferecemos pacotes de manutenção mensal (SLA) para garantir segurança, updates de dependências e suporte a bugs. Também podemos treinar sua equipe interna para assumir o projeto após o hand-off." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-neutral-900/40 border border-white/5 p-6 rounded-2xl">
                                <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-3">
                                    <span className="text-blue-400">?</span> {item.q}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm pl-6 border-l border-white/10">
                                    {item.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default SaaSPage;
