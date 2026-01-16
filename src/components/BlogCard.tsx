import { ArrowUpRight } from 'lucide-react';
import type { IBlogPost } from '../data/blogData';
import { Link } from 'react-router-dom';

interface BlogCardProps {
    post: IBlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
    return (
        <Link to={`/blog/${post.slug}`} className="group block h-full">
            <div className="relative h-full bg-neutral-900/50 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col">

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-4 left-4 bg-purple-600/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                        {post.category}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-3 font-mono">
                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                        <span>•</span>
                        <span>{post.readTime} leitura</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-purple-400 transition-colors">
                        {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                        {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                        <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="text-[10px] text-gray-500 border border-white/10 px-2 py-0.5 rounded-md">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        <span className="inline-flex items-center gap-1 text-purple-400 text-xs font-bold tracking-widest uppercase opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            Ler Post <ArrowUpRight className="w-3 h-3" />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
