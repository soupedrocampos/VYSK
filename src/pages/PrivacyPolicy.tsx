import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-black text-white font-satoshi selection:bg-purple-500/30">
            <Navbar />

            <main className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold font-cabinet mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                    Política de Privacidade
                </h1>

                <div className="space-y-8 text-gray-400 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introdução</h2>
                        <p>
                            A sua privacidade é importante para nós. É política do Pedrovysk respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Pedrovysk, e outros sites que possuímos e operamos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Coleta de Dados</h2>
                        <p>
                            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Retenção de Dados</h2>
                        <p>
                            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Compartilhamento</h2>
                        <p>
                            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Cookies</h2>
                        <p>
                            O nosso site pode utilizar cookies para melhorar a experiência do usuário. Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Compromisso do Usuário</h2>
                        <p>
                            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Pedrovysk oferece no site e com caráter enunciativo, mas não limitativo:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                            <li>Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                            <li>Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Pedrovysk, de seus fornecedores ou terceiros.</li>
                        </ul>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
