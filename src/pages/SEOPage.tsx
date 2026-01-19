import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageSEO from '../components/PageSEO';
import { Search, BarChart, Zap, Globe } from 'lucide-react';

const SEOPage = () => {
    return (
        <div className="bg-black min-h-screen font-satoshi selection:bg-purple-500/30">
            <PageSEO path="/seo" />

            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 md:px-8 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <p className="text-purple-400 font-bold tracking-widest uppercase mb-6 animate-pulse">
                        SEARCH ENGINE OPTIMIZATION
                    </p>
                    <h1 className="text-6xl md:text-8xl font-cabinet font-bold text-white mb-8 leading-none tracking-tighter">
                        NÃO APENAS EXISTA. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">SEJA ENCONTRADO.</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                        SEO não é mais sobre palavras-chave. É sobre autoridade técnica, experiência do usuário e resposta à intenção.
                        Coloque sua marca no topo para quem realmente importa.
                    </p>
                    <a href="#contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-gray-200 transition-all transform hover:scale-105">
                        Iniciar Diagnóstico Gratuito
                    </a>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4 md:px-8 bg-neutral-900/30">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: <Search className="w-8 h-8 text-purple-400" />, title: "Pesquisa de Intenção", desc: "Mapeamento profundo do que seu cliente busca, não apenas volumes de busca." },
                        { icon: <Zap className="w-8 h-8 text-purple-400" />, title: "Technical SEO", desc: "Otimização de Core Web Vitals, estrutura de dados e renderização." },
                        { icon: <BarChart className="w-8 h-8 text-purple-400" />, title: "Análise de Data", desc: "Decisões baseadas em dados reais do Search Console e GA4." },
                        { icon: <Globe className="w-8 h-8 text-purple-400" />, title: "SEO Internacional", desc: "Estratégias hreflang para escalar sua marca globalmente." }
                    ].map((feature, idx) => (
                        <div key={idx} className="p-8 bg-black border border-white/5 rounded-2xl hover:border-purple-500/30 transition-colors">
                            <div className="mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center border border-white/10">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Content Strategy */}
            <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-cabinet font-bold text-white mb-6">
                        Conteúdo Que <span className="text-purple-400">Converte</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Esqueça textos robóticos. Criamos clusters de conteúdo semanticamente ricos que estabelecem sua marca como autoridade tópica no Google.
                    </p>
                    <div className="space-y-4">
                        {['Topic Clusters', 'E-E-A-T Framework', 'Otimização Semântica'].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                                <span className="text-white text-lg font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-[80px] opacity-20" />
                    <div className="relative bg-neutral-900 border border-white/10 p-8 rounded-2xl shadow-2xl">
                        <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex justify-between text-gray-400">
                                <span>Organic Traffic</span>
                                <span className="text-green-400">+142%</span>
                            </div>
                            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '75%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5 }}
                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                                />
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Keywords Top 3</span>
                                <span className="text-green-400">+85</span>
                            </div>
                            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '60%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.2 }}
                                    className="h-full bg-purple-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 md:px-8 bg-neutral-900/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-cabinet font-bold text-white mb-12 text-center">Perguntas Frequentes</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Quanto tempo demora para ver resultados com SEO?", a: "SEO é uma estratégia de médio a longo prazo. Geralmente, melhorias técnicas mostram impacto em 1-3 meses, enquanto autoridade e rankings competitivos levam de 6 a 12 meses. O diferencial da nossa abordagem é focar em 'quick wins' (ganhos rápidos) técnicos logo no primeiro mês." },
                            { q: "Vocês garantem a primeira posição no Google?", a: "Nenhuma agência séria pode garantir a #1 posição, pois o algoritmo do Google é propriedade privada e muda constantemente. O que garantimos é o aumento mensurável do tráfego qualificado e a implementação das melhores práticas técnicas e semânticas exigidas pelo buscador." },
                            { q: "O que é E-E-A-T e por que isso importa?", a: "E-E-A-T significa Experiência, Especialização, Autoridade e Confiabilidade. É o principal critério de qualidade do Google hoje. Nossa estratégia cria conteúdo que demonstra expertise real, essencial para ranquear em nichos competitivos e na era da IA." },
                            { q: "SEO funciona para negócios locais?", a: "Absolutamente. O SEO Local é uma das formas mais rápidas de retorno. Otimizamos seu Perfil da Empresa no Google (antigo GMB) para garantir que você domine as buscas na sua região geográfica específica." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-black border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-3">
                                    <span className="text-purple-500">?</span> {item.q}
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

export default SEOPage;
