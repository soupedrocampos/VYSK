import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { MapPin, Backpack, Heart, Star } from 'lucide-react';

const WorldpackersPage = () => {
    return (
        <div className="bg-black min-h-screen font-satoshi selection:bg-cyan-500/30">
            <SEOHead
                title="Worldpackers: Viaje Trocando Habilidades"
                description="Minha jornada como nômade digital usando a Worldpackers. Troque suas habilidades por hospedagem e viva experiências únicas pelo mundo."
                keywords={['Worldpackers', 'Viagem', 'Nômade Digital', 'Voluntariado', 'Hospedagem Grátis']}
            />

            <Navbar />

            {/* Travel Hero */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                        className="w-full h-full object-cover opacity-50 filters grayscale hover:grayscale-0 transition-all duration-[2s]"
                        alt="Travel Background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/20"
                    >
                        <Backpack className="w-5 h-5 text-cyan-400" />
                        <span className="text-white font-bold tracking-widest uppercase text-sm">Viajante Global</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-9xl font-cabinet font-bold text-white mb-6 leading-none tracking-tighter">
                        O MUNDO É <br />
                        <span className="text-cyan-400">SUA CASA.</span>
                    </h1>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl text-white font-cabinet font-bold mb-8">Por que Worldpackers?</h2>
                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                        Mais do que economizar dinheiro, é sobre viver a cultura local.
                        Troco minhas habilidades em <span className="text-purple-400 font-bold">Web Design</span> e <span className="text-purple-400 font-bold">SEO</span> por estadias em hostels, ecovilas e projetos sociais incríveis.
                    </p>
                </div>
            </section>

            {/* Experience Grid */}
            <section className="py-20 px-4 md:px-8 bg-neutral-900/30">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Conexão Real', icon: <Heart className="w-6 h-6 text-red-400" />, desc: 'Faça amigos de todo o mundo e viva como um local, não como turista.' },
                        { title: 'Custo Zero', icon: <Star className="w-6 h-6 text-yellow-400" />, desc: 'Elimine o maior custo da viagem: a hospedagem. Invista em experiências.' },
                        { title: 'Networking', icon: <MapPin className="w-6 h-6 text-cyan-400" />, desc: 'Conheça outros nômades digitais e expanda sua rede profissional.' }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-black p-8 rounded-3xl border border-white/5 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-white/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Discount CTA */}
            <section className="py-32 px-4 md:px-8">
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-cyan-900 to-blue-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full blur-[100px] opacity-30" />

                    <h2 className="relative z-10 text-4xl md:text-6xl font-cabinet font-bold text-white mb-8">
                        Comece Sua Jornada Hoje
                    </h2>
                    <p className="relative z-10 text-cyan-100 text-xl max-w-2xl mx-auto mb-12">
                        Use meu código de parceiro e ganhe <span className="font-bold text-white bg-white/20 px-2 rounded">$10 USD de desconto</span> na sua anuidade Worldpackers.
                    </p>

                    <div className="relative z-10 flex flex-col md:flex-row justify-center gap-6">
                        <div className="bg-black/30 backdrop-blur px-8 py-4 rounded-full border border-white/20 text-white font-mono text-xl tracking-widest flex items-center gap-4">
                            PEDROVYSK
                            <button className="text-xs bg-white text-black px-2 py-1 rounded font-bold hover:bg-gray-200" onClick={() => navigator.clipboard.writeText('PEDROVYSK')}>COPIAR</button>
                        </div>
                        <a href="https://www.worldpackers.com/code/PEDROVYSK" target="_blank" rel="noopener noreferrer" className="bg-white text-cyan-900 px-8 py-4 rounded-full font-bold hover:bg-cyan-50 transition-colors shadow-lg">
                            Ativar Desconto
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-cabinet font-bold text-white mb-12 text-center">Viaje Sem Dúvidas</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Preciso ter experiência prévia para voluntariar?", a: "Não necessariamente. Muitos anfitriões buscam apenas atitude proativa e vontade de aprender. Claro, habilidades específicas (como as que ensino: web design, social media) abrem portas para as melhores vagas e acomodações mais premium." },
                            { q: "É seguro viajar sozinho(a)?", a: "A Worldpackers verifica todos os anfitriões e oferece um seguro exclusivo. Se algo não sair como combinado com o anfitrião, a plataforma paga hospedagem de emergência para você. É a forma mais segura de começar a viajar solo." },
                            { q: "Quantas horas por dia preciso trabalhar?", a: "Varia de vaga para vaga, mas geralmente são entre 20 a 25 horas semanais. Isso deixa muito tempo livre para explorar a cidade, trabalhar nos seus projetos digitais ou simplesmente descansar." },
                            { q: "Vale a pena pagar a anuidade?", a: "A anuidade custa menos que 2 dias de hostel em uma cidade turística. Em uma única viagem de uma semana, você já recupera o investimento multiplicado. Com meu código de desconto, o retorno é ainda mais imediato." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-neutral-900 border border-white/10 p-6 rounded-2xl hover:border-cyan-500/30 transition-colors">
                                <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-3">
                                    <span className="text-cyan-400">?</span> {item.q}
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

export default WorldpackersPage;
