import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { Bot, Workflow, Cpu, Zap } from 'lucide-react';

const AutomationPage = () => {
    return (
        <div className="bg-black min-h-screen font-satoshi selection:bg-purple-500/30">
            <SEOHead
                title="Automação com IA & N8N"
                description="Automatize seus processos de negócio com N8N e Inteligência Artificial. Reduza custos operacionais e aumente a produtividade da sua agência."
                keywords={['Automação', 'N8N', 'IA', 'ChatGPT', 'Processos', 'Agência']}
            />

            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <p className="text-purple-400 font-bold tracking-widest uppercase mb-6 flex justify-center items-center gap-2">
                        <Bot className="w-5 h-5" /> AI & AUTOMATION AGENT
                    </p>
                    <h1 className="text-6xl md:text-8xl font-cabinet font-bold text-white mb-8 leading-none tracking-tighter">
                        A MÁQUINA <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">INVISÍVEL</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                        Substitua tarefas manuais por fluxos de trabalho inteligentes.
                        Do atendimento ao cliente à geração de relatórios, sua empresa rodando no piloto automático.
                    </p>
                    <a href="#contact" className="inline-flex items-center gap-2 bg-emerald-500 text-black px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                        <Zap className="w-5 h-5" /> Automatizar Agora
                    </a>
                </div>
            </section>

            {/* Workflow Visualization */}
            <section className="py-20 px-4 md:px-8 overflow-hidden">
                <div className="max-w-6xl mx-auto relative bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-16">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.1),transparent)] pointer-events-none" />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        {/* Trigger */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                                <img src="https://cdn.worldvectorlogo.com/logos/google-forms.svg" className="w-10 h-10" alt="Trigger" />
                            </div>
                            <span className="text-gray-400 text-sm font-mono">Lead Capturado</span>
                        </div>

                        {/* Arrow 1 */}
                        <div className="hidden md:flex flex-1 h-0.5 bg-gradient-to-r from-gray-700 via-emerald-500 to-gray-700 relative">
                            <motion.div
                                animate={{ x: [-100, 100], opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/2 -translate-y-1/2 w-20 h-1 bg-emerald-400 blur-sm"
                            />
                        </div>

                        {/* N8N Core */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                                <Cpu className="w-12 h-12 text-white" />
                            </div>
                            <span className="text-white font-bold tracking-widest">N8N BRAIN</span>
                        </div>

                        {/* Arrow 2 */}
                        <div className="hidden md:flex flex-1 h-0.5 bg-gradient-to-r from-gray-700 via-emerald-500 to-gray-700 relative">
                            <motion.div
                                animate={{ x: [-100, 100], opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                                className="absolute top-1/2 -translate-y-1/2 w-20 h-1 bg-emerald-400 blur-sm"
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                                <img src="https://cdn.worldvectorlogo.com/logos/openai-2.svg" className="w-5 h-5 bg-white rounded-full p-0.5" alt="AI" />
                                <span className="text-gray-300 text-xs">Enriquecimento c/ IA</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                                <img src="https://cdn.worldvectorlogo.com/logos/notion-2.svg" className="w-5 h-5" alt="CRM" />
                                <span className="text-gray-300 text-xs">Salvar no CRM</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                                <img src="https://cdn.worldvectorlogo.com/logos/whatsapp-icon.svg" className="w-5 h-5" alt="Wpp" />
                                <span className="text-gray-300 text-xs">Msg Personalizada</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-cabinet font-bold text-white mb-12 text-center">O Que Podemos Automatizar?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Atendimento ao Cliente', desc: 'Chatbots com IA que respondem dúvidas técnicas, agendam calls e qualificam leads 24/7.', icon: <Workflow /> },
                            { title: 'Gestão Financeira', desc: 'Emissão automática de notas fiscais, cobrança de inadimplentes e conciliação bancária.', icon: <Zap /> },
                            { title: 'Criação de Conteúdo', desc: 'Geração de posts para redes sociais à partir de notícias do setor e agendamento automático.', icon: <Bot /> }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-neutral-900 border border-white/10 p-8 rounded-2xl hover:bg-neutral-800 transition-colors">
                                <div className="text-emerald-400 mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 md:px-8 bg-neutral-900/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-cabinet font-bold text-white mb-12 text-center">FAQ de Automação Inteligente</h2>
                    <div className="space-y-6">
                        {[
                            { q: "N8N vs Zapier: Por que usar N8N?", a: "Zapier cobra por 'tarefa', o que torna automações complexas inviáveis financeiramente em escala. O N8N pode ser hospedado em servidor próprio (Self-Hosted), oferecendo execuções ilimitadas por um custo fixo de servidor, além de permitir fluxos muito mais complexos e customizados." },
                            { q: "É seguro integrar meus dados e CRM?", a: "Sim. Trabalhamos com servidores criptografados e chaves de API seguras. Diferente de plataformas públicas, no N8N self-hosted seus dados não passam por terceiros desnecessários, garantindo conformidade com LGPD e GDPR." },
                            { q: "Preciso de um servidor dedicado?", a: "Recomendamos um VPS simples (como DigitalOcean ou Hetzner) que custa cerca de $5-10/mês. Nós configuramos tudo para você. É infinitamente mais barato que os planos Enterprise de outras ferramentas." },
                            { q: "E se a API de uma ferramenta mudar?", a: "APIs mudam, e scripts quebram. Por isso oferecemos monitoramento ativo. Nossos workflows incluem tratamento de erro automático que nos notifica imediatamente se algo falhar, permitindo correção rápida antes que afete sua operação." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-black border border-white/10 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors">
                                <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-3">
                                    <span className="text-emerald-500">?</span> {item.q}
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

export default AutomationPage;
