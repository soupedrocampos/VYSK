// Imports removed due to being unused

const courses = [
    {
        title: "Criação de Imagem PRO",
        subtitle: "Domine a criação comercial de imagens",
        modules: [
            "15 módulos completos e mais de 100 horas de aula",
            "Workflows reais utilizados por Pedrovysk",
            "Aprenda Midjourney, Recraft, Krea, Magnific, Flux",
            "Construa sua própria biblioteca de prompts e estilos",
            "Domine iluminação, direção e storytelling",
            "Pratique com estudos de caso de marcas reais",
            "Entregue visuais consistentes e de alta qualidade"
        ],
        image: "/assets/card-image-creator.png",
        year: "2025",
        status: "Incluso"
    },
    {
        title: "Criação de Vídeo PRO",
        subtitle: "Dirija e produza vídeos com IA",
        modules: [
            "10 módulos completos do pré ao pós",
            "Aprenda Kling, Luma, Sora, Higgsfield, LTX Studio",
            "Construa storyboards e cenários virtuais",
            "Domine iluminação, atuação e motion design",
            "Projetos reais: Volkswagen, BYD, Vogue",
            "Aulas de VFX, correção de cor e edição",
            "Inclui workshops, LUTs e prompts"
        ],
        image: "/assets/card-video-creator.png",
        year: "2025",
        status: "Incluso"
    },
    {
        title: "Upscale PRO",
        subtitle: "Melhore, refine e finalize seus visuais",
        modules: [
            "Transforme imagens de 1K para 10K+ em 300dpi",
            "Preserve textura, nitidez e fidelidade",
            "Corrija artefatos e erros comuns da IA",
            "Aprenda Supir, Gigapixel, Magnific, Photoshop",
            "Use o workflow de upscale do Pedrovysk",
            "Retoque e exporte para impressão ou digital",
            "Alcance qualidade de produção de agência"
        ],
        image: "/assets/card-other.png",
        year: "2025",
        status: "Incluso"
    },
    {
        title: "Criação de Clones PRO",
        subtitle: "Crie réplicas humanas e personagens realistas",
        modules: [
            "Construa rostos autênticos, avatares e clones",
            "Aprenda Freepik, Krea, Higgsfield",
            "Siga o workflow completo de clonagem",
            "Mantenha consistência de personagem nas cenas",
            "Crie histórias e identidades de marca",
            "Adicione movimento, expressão e realismo",
            "Use o método criativo do Pedrovysk"
        ],
        image: "/assets/card-gpt-pro.png",
        year: "2025",
        status: "Incluso"
    }
];

const CourseDetails = () => {
    return (
        <section className="py-24 bg-human-bg font-satoshi">
            <div className="container mx-auto px-4 max-w-[85vw] 2xl:max-w-[80vw]">

                <div className="mb-16">
                    <h2 className="font-cabinet font-bold text-5xl md:text-7xl lg:text-8xl leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] tracking-tighter text-white mb-4 uppercase">
                        O DIFERENCIAL <br /> QUE MUDA O JOGO
                    </h2>
                    <div className="w-full h-px bg-white/10 mt-8" />
                </div>

                <div className="space-y-8">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center group hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Interactive Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            {/* Left: Content */}
                            <div className="order-2 md:order-1 relative z-10">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{course.title}</h3>
                                <p className="text-gray-400 mb-8">{course.subtitle}</p>

                                <ul className="space-y-4 mb-10">
                                    {course.modules.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300">
                                            <div className="mt-1 w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                            </div>
                                            <span className="text-sm font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                    <span>View course details</span>
                                </button>
                            </div>

                            {/* Right: Image Card */}
                            <div className="order-1 md:order-2">
                                <div className="aspect-[4/5] md:aspect-square relative rounded-2xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Overlay Info */}
                                    <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end border-t border-white/20 pt-4">
                                        <span className="text-[10px] text-gray-400 font-bold tracking-widest">{course.year}</span>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-human-green shadow-[0_0_10px_rgba(0,255,178,0.5)]" />
                                            <span className="text-[10px] text-gray-400 font-bold tracking-widest">Included</span>
                                        </div>
                                    </div>

                                    {/* Rotated Title Overlay - stylistic touch matching reference */}
                                    <h4 className="absolute top-8 left-8 text-3xl font-bold text-white/5 origin-top-left rotate-90 translate-x-4 whitespace-nowrap z-0 pointer-events-none select-none">
                                        {course.title.split(' ')[0]} <span className="font-light">{course.title.split(' ').slice(1).join(' ')}</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;
