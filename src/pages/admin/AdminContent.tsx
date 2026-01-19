import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Trash, FileText, Globe, Layout } from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';

const AdminContent = () => {
    const { articles, addArticle, deleteArticle } = useAdmin();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        type: 'Article' as 'Article' | 'Case Study' | 'SaaS',
        status: 'Draft' as 'Draft' | 'Published',
        date: new Date().toISOString().split('T')[0],
        content: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addArticle(formData);
        setIsModalOpen(false);
        setFormData({ title: '', type: 'Article', status: 'Draft', date: new Date().toISOString().split('T')[0], content: '' });
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="font-cabinet font-bold text-4xl text-white">Conteúdo</h2>
                    <p className="text-gray-400 text-sm">Gerencie artigos, cases e portfólio.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                >
                    <Plus size={18} />
                    <span>Novo Conteúdo</span>
                </button>
            </div>

            {/* Content List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.length === 0 ? (
                    <div className="col-span-full text-center py-20 bg-white/[0.02] border border-dashed border-white/10 rounded-3xl">
                        <p className="text-gray-500">Nenhum conteúdo criado.</p>
                    </div>
                ) : (
                    articles.map((article) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/[0.02] border border-white/5 hover:border-white/20 p-6 rounded-2xl group flex flex-col justify-between h-64 relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-2 rounded-lg border border-white/10 ${article.type === 'Article' ? 'bg-blue-500/10 text-blue-400' :
                                        article.type === 'Case Study' ? 'bg-purple-500/10 text-purple-400' : 'bg-green-500/10 text-green-400'
                                        }`}>
                                        {article.type === 'Article' ? <FileText size={20} /> :
                                            article.type === 'Case Study' ? <Layout size={20} /> : <Globe size={20} />}
                                    </div>
                                    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wide border ${article.status === 'Published' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-gray-500/10 text-gray-400 border-gray-500/20'
                                        }`}>
                                        {article.status}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white line-clamp-2 mb-2">{article.title}</h3>
                                <p className="text-xs text-gray-500 font-mono">{article.date}</p>
                            </div>

                            <div className="relative z-10 pt-4 mt-auto border-t border-white/5 flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold uppercase text-gray-300 hover:text-white transition-colors">
                                    Editar
                                </button>
                                <button
                                    onClick={() => deleteArticle(article.id)}
                                    className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg text-red-400"
                                >
                                    <Trash size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-[#111] border border-white/10 rounded-3xl p-8 w-full max-w-lg relative"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-white"
                            >
                                <Search className="rotate-45" size={24} />
                            </button>

                            <h3 className="font-cabinet font-bold text-2xl text-white mb-6">Novo Conteúdo</h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="text-xs text-gray-500 uppercase font-bold ml-1">Título</label>
                                    <input
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                                        value={formData.title}
                                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs text-gray-500 uppercase font-bold ml-1">Tipo</label>
                                        <select
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                                            value={formData.type}
                                            onChange={e => setFormData({ ...formData, type: e.target.value as any })}
                                        >
                                            <option value="Article">Artigo</option>
                                            <option value="Case Study">Case Study</option>
                                            <option value="SaaS">SaaS</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-500 uppercase font-bold ml-1">Status</label>
                                        <select
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                                            value={formData.status}
                                            onChange={e => setFormData({ ...formData, status: e.target.value as any })}
                                        >
                                            <option value="Draft">Rascunho</option>
                                            <option value="Published">Publicado</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl mt-4"
                                >
                                    Criar
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdminContent;
