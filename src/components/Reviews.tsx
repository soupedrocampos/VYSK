import { motion } from 'framer-motion';
import { Twitter, Instagram } from 'lucide-react';

const reviews = [
    {
        handle: "@leandralambert",
        text: "Opening paths to truly understand how to create using AI as a tool. It demystifies the process, tells it like it is — no fluff.",
        platform: "instagram"
    },
    {
        handle: "@lara_magatag",
        text: "So good! The content was really complete, they showed all the tools used in the market and tons of examples.",
        platform: "instagram"
    },
    {
        handle: "@thamiresabino",
        text: "What stood out to me the most was how direct and clear everything was. I’m a beginner, and I left with my mind buzzing with ideas. #IAmHuman ❤️🤖",
        platform: "instagram"
    },
    {
        handle: "@recarinhato",
        text: "You know when you find a course that doesn’t just teach the tool, but unlocks a whole new way of thinking?",
        platform: "instagram"
    },
    {
        handle: "@asaph.guedes",
        text: "You guys are Humans 🔥🔥 Top-quality content 🔥",
        platform: "twitter"
    },
    {
        handle: "@alinemessias_dev",
        text: "So good!! 🔥 The tools they introduced completely blew my mind 👏🤯",
        platform: "instagram"
    },
    {
        handle: "@ricardo__galego",
        text: "Even for someone who wasn’t born with a mouse in hand or doesn’t have a social media profile, this course went beyond expectations.",
        platform: "instagram"
    },
    {
        handle: "@lopesdia",
        text: "Every minute was worth it. I’m amazed by how capable AI is at generating videos and by the paths shown by the Human team.",
        platform: "twitter"
    }
];

const Reviews = () => {
    // Split reviews into two rows
    const row1 = reviews.slice(0, 4);
    const row2 = reviews.slice(4, 8);

    return (
        <section id="reviews" className="py-24 bg-human-bg relative overflow-hidden font-satoshi">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-r from-purple-900/10 to-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 mb-16 max-w-[85vw] 2xl:max-w-[80vw]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center space-x-2 bg-white/[0.02] border border-white/10 rounded-full px-4 py-1.5 mb-8">
                        <span className="text-xs font-bold tracking-widest uppercase text-white/80">GLOBAL</span>
                        <span className="w-px h-3 bg-white/20" />
                        <span className="text-xs font-bold tracking-widest uppercase text-white/80">REVIEWS</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold font-cabinet text-white tracking-tight">
                        STUDENTS REVIEWS
                    </h2>
                </motion.div>
            </div>

            {/* Marquee Rows */}
            <div className="flex flex-col gap-8 relative mask-image-gradient-sides">
                {/* Row 1: Right to Left */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-6 pl-6 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    >
                        {[...row1, ...row1, ...row1].map((review, index) => (
                            <ReviewCard key={`r1-${index}`} review={review} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Left to Right */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-6 pl-6 w-max"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                    >
                        {[...row2, ...row2, ...row2].map((review, index) => (
                            <ReviewCard key={`r2-${index}`} review={review} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="w-[400px] bg-white/[0.02] backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05] flex flex-col justify-between shrink-0 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="relative z-10">
            <p className="text-white text-base leading-relaxed font-medium mb-6">
                "{review.text}"
            </p>
        </div>

        <div className="flex items-center justify-between border-t border-white/5 pt-4">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-xs ring-1 ring-white/20">
                    {review.handle[1].toUpperCase()}
                </div>
                <div className="flex flex-col">
                    <span className="text-white/80 font-bold text-xs tracking-wide">{review.handle}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Student</span>
                </div>
            </div>
            {review.platform === 'twitter' ? (
                <Twitter className="w-4 h-4 text-gray-500 group-hover:text-[#1DA1F2] transition-colors" />
            ) : (
                <Instagram className="w-4 h-4 text-gray-500 group-hover:text-[#E1306C] transition-colors" />
            )}
        </div>
    </div>
);

export default Reviews;
