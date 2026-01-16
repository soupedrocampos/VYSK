import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import CategoryFilter from '../components/CategoryFilter';
import SEOHead from '../components/SEOHead';
import { blogPosts, allCategories } from '../data/blogData';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPosts = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <div className="bg-black min-h-screen font-satoshi selection:bg-purple-500/30">
            <SEOHead
                title="Blog"
                description="Artigos sobre SEO, Automação, SaaS e Inovação Digital. Insights profundos para escalar seu negócio."
                keywords={['Blog', 'SEO', 'N8N', 'Automação', 'SaaS', 'Marketing Digital']}
                url="https://pedrovysk.com/blog"
            />

            <Navbar />

            <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-purple-400 font-bold tracking-widest uppercase mb-4"
                    >
                        Conhecimento que Escala
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-cabinet font-bold text-white mb-6"
                    >
                        INSIGHTS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">DIGITAIS</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Estratégias de SEO, tutoriais de N8N e bastidores de construção de SaaS.
                        Tudo o que você precisa para dominar o digital.
                    </motion.p>
                </div>

                {/* Filters */}
                <CategoryFilter
                    categories={allCategories}
                    activeCategory={activeCategory}
                    onSelectCategory={setActiveCategory}
                />

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <BlogCard post={post} />
                        </motion.div>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-xl">Nenhum artigo encontrado nesta categoria.</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Blog;
