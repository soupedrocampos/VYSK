import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const courses = [
    {
        title: "AI Image Creator PRO",
        subtitle: "Master commercial image creation",
        modules: [
            "15 complete modules and 100+ hours of lessons",
            "Real workflows used by Pedrovysk",
            "Learn Midjourney, Recraft, Krea, Magnific, Flux",
            "Build your own prompt and style library",
            "Master lighting, direction, and storytelling",
            "Practice with real brand case studies",
            "Deliver consistent, top-quality visuals"
        ],
        image: "/assets/card-image-creator.png",
        year: "2025",
        status: "Included"
    },
    {
        title: "AI Video Creator PRO",
        subtitle: "Direct and produce videos with AI",
        modules: [
            "10 complete modules from pre to post",
            "Learn Kling, Luma, Sora, Higgsfield, LTX Studio",
            "Build storyboards, treatments, and virtual sets",
            "Master lighting, acting, and motion design",
            "Real projects: Volkswagen, BYD, Vogue, Olympics",
            "Lessons in VFX, color, and editing",
            "Includes workshops, LUTs, and prompts"
        ],
        image: "/assets/card-video-creator.png",
        year: "2025",
        status: "Included"
    },
    {
        title: "AI Upscale PRO",
        subtitle: "Enhance, refine and finalize your visuals",
        modules: [
            "Transform 1K images into 10K+ at 300dpi",
            "Preserve texture, sharpness, and fidelity",
            "Avoid common AI artifacts and errors",
            "Learn Supir, Gigapixel, Magnific, Photoshop",
            "Use Pedrovysk's upscale workflow",
            "Retouch and export for print or digital",
            "Achieve agency-level production quality"
        ],
        image: "/assets/card-other.png",
        year: "2025",
        status: "Included"
    },
    {
        title: "AI Clone Creator PRO",
        subtitle: "Build realistic human and character replicas",
        modules: [
            "Build authentic faces, avatars, and clones",
            "Learn Freepik, Nano-Banana, Krea, Higgsfield",
            "Follow the full cloning workflow",
            "Keep character consistency across scenes",
            "Craft stories and brand identities",
            "Add motion, expression, and realism",
            "Use Pedrovysk's creative method"
        ],
        image: "/assets/card-gpt-pro.png",
        year: "2025",
        status: "Included"
    }
];

const CourseDetails = () => {
    return (
        <section className="py-24 bg-human-bg font-satoshi">
            <div className="container mx-auto px-4 max-w-[85vw] 2xl:max-w-[80vw]">

                <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold font-cabinet text-white mb-4 uppercase">
                        Here's What <br /> You'll Get
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
                            <div className="order-2 md:order-1">
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
                                    <h4 className="absolute top-8 left-8 text-3xl font-bold text-white/20 origin-top-left rotate-90 translate-x-4 whitespace-nowrap z-20">
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
