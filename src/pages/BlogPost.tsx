import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { blogPosts } from '../data/blogData';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="bg-black min-h-screen font-satoshi selection:bg-purple-500/30">
            <SEOHead
                title={post.title}
                description={post.excerpt}
                image={post.coverImage}
                type="article"
                author={post.author}
                publishedTime={post.date}
                url={`https://pedrovysk.com/blog/${post.slug}`}
                keywords={post.tags}
            />

            <Navbar />

            <main className="pt-32 pb-20 px-4 md:px-8">
                <article className="max-w-4xl mx-auto">

                    {/* Back Link */}
                    <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Voltar para o Blog
                    </Link>

                    {/* Header */}
                    <header className="mb-12 text-center md:text-left">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-purple-400 font-bold mb-6 justify-center md:justify-start">
                            <span className="bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                                {post.category.toUpperCase()}
                            </span>
                            {post.tags.map(tag => (
                                <span key={tag} className="text-gray-500 font-normal">#{tag}</span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-cabinet font-bold text-white mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-gray-400 text-sm border-y border-white/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-purple-500" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-purple-500" />
                                <span>{new Date(post.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-purple-500" />
                                <span>{post.readTime} de leitura</span>
                            </div>
                            <button className="ml-auto hover:text-white transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </header>

                    {/* Cover Image */}
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-16 shadow-[0_0_40px_rgba(168,85,247,0.1)] border border-white/10">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div
                        className="prose prose-lg prose-invert max-w-none 
                        prose-headings:font-cabinet prose-headings:font-bold prose-h2:text-3xl prose-h2:text-purple-100 prose-h3:text-2xl prose-h3:text-gray-200
                        prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-12
                        prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300
                        prose-strong:text-white
                        prose-ul:text-gray-300 prose-li:marker:text-purple-500"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* CTA Footer */}
                    <div className="mt-20 p-8 md:p-12 bg-neutral-900/50 rounded-3xl border border-white/10 text-center">
                        <h3 className="text-2xl font-cabinet font-bold text-white mb-4">Gostou deste artigo?</h3>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Transforme esses insights em resultados para o seu negócio. Vamos conversar sobre como aplicar essas estratégias na sua empresa.
                        </p>
                        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                            Agendar Consultoria Gratuita
                        </a>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPost;
