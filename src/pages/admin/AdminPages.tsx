import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, Globe, Image as ImageIcon, X, ExternalLink } from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';
import type { PageMetadata } from '../../context/AdminContext';

const AdminPages = () => {
    const { pages, updatePageMetadata } = useAdmin();
    const [selectedPage, setSelectedPage] = useState<PageMetadata | null>(null);
    const [editForm, setEditForm] = useState<Partial<PageMetadata>>({});

    const handleEdit = (page: PageMetadata) => {
        setSelectedPage(page);
        setEditForm(page);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedPage && editForm) {
            updatePageMetadata(selectedPage.id, editForm);
            setSelectedPage(null);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="font-cabinet font-bold text-4xl text-white">Páginas & SEO</h2>
                    <p className="text-gray-400 text-sm">Gerencie o título, descrição e imagem de compartilhamento (OG Image) de cada página.</p>
                </div>
            </div>

            {/* Pages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pages.map((page) => (
                    <motion.div
                        key={page.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/[0.02] border border-white/5 hover:border-white/20 p-6 rounded-2xl group flex flex-col justify-between relative overflow-hidden transition-all hover:bg-white/[0.04]"
                    >
                        <div className="mb-4">
                            <div className="flex justify-between items-start mb-3">
                                <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-500/20">
                                    {page.path}
                                </span>
                                <ExternalLink size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{page.name}</h3>
                            <p className="text-gray-400 text-sm line-clamp-2">{page.description}</p>
                        </div>

                        {/* Mini Preview */}
                        <div className="bg-black/40 rounded-lg p-2 border border-white/5 mb-4">
                            <p className="text-[10px] text-gray-500 mb-1 uppercase tracking-widest">OG Preview</p>
                            <div className="aspect-[1.91/1] rounded-md overflow-hidden bg-gray-900 relative">
                                <img
                                    src={page.ogImage}
                                    alt="OG Preview"
                                    className="w-full h-full object-cover opacity-80"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x630?text=No+Image';
                                    }}
                                />
                            </div>
                        </div>

                        <button
                            onClick={() => handleEdit(page)}
                            className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-xl text-sm font-bold uppercase text-gray-300 hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                            <Globe size={16} />
                            Editar Metadados
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Edit Modal */}
            <AnimatePresence>
                {selectedPage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-[#111] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row"
                        >
                            <button
                                onClick={() => setSelectedPage(null)}
                                className="absolute top-4 right-4 z-50 p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Left: Form */}
                            <div className="flex-1 p-8 border-r border-white/5">
                                <h3 className="font-cabinet font-bold text-2xl text-white mb-6">Editar: {selectedPage.name}</h3>

                                <form onSubmit={handleSave} className="space-y-5">
                                    <div>
                                        <label className="text-xs text-gray-500 uppercase font-bold ml-1 mb-1 block">Título da Página (Meta Title)</label>
                                        <input
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                            value={editForm.title || ''}
                                            onChange={e => setEditForm({ ...editForm, title: e.target.value })}
                                        />
                                        <p className="text-right text-[10px] text-gray-500 mt-1">Recomendado: 50-60 caracteres</p>
                                    </div>

                                    <div>
                                        <label className="text-xs text-gray-500 uppercase font-bold ml-1 mb-1 block">Descrição (Meta Description)</label>
                                        <textarea
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500 transition-colors h-24 resize-none"
                                            value={editForm.description || ''}
                                            onChange={e => setEditForm({ ...editForm, description: e.target.value })}
                                        />
                                        <p className="text-right text-[10px] text-gray-500 mt-1">Recomendado: 150-160 caracteres</p>
                                    </div>

                                    <div>
                                        <label className="text-xs text-gray-500 uppercase font-bold ml-1 mb-1 block">URL da Imagem de Compartilhamento (OG Image)</label>
                                        <div className="relative">
                                            <input
                                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 pl-10 text-white focus:outline-none focus:border-blue-500 transition-colors font-mono text-xs"
                                                value={editForm.ogImage || ''}
                                                onChange={e => setEditForm({ ...editForm, ogImage: e.target.value })}
                                            />
                                            <ImageIcon className="absolute left-3 top-3 text-gray-500" size={16} />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all mt-4 flex items-center justify-center gap-2"
                                    >
                                        <Save size={18} />
                                        Salvar Alterações
                                    </button>
                                </form>
                            </div>

                            {/* Right: Preview */}
                            <div className="w-full md:w-[450px] bg-[#050505] p-8 flex flex-col justify-center items-center">
                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 w-full text-center">Visualização (Social Share)</h4>

                                {/* Social Card Preview */}
                                <div className="w-full bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#333] shadow-2xl max-w-[400px]">
                                    <div className="aspect-[1.91/1] w-full bg-gray-800 relative overflow-hidden group">
                                        <img
                                            src={editForm.ogImage || 'https://via.placeholder.com/1200x630?text=No+Image'}
                                            alt="OG Preview"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x630?text=No+Image';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest">
                                            1200 x 630 px
                                        </div>
                                    </div>
                                    <div className="p-4 bg-[#222]">
                                        <p className="text-[10px] text-gray-400 uppercase mb-1">VYSK.COM.BR</p>
                                        <h3 className="text-white font-bold text-base leading-tight mb-2 line-clamp-2">
                                            {editForm.title || 'Título da Página'}
                                        </h3>
                                        <p className="text-gray-400 text-xs line-clamp-2">
                                            {editForm.description || 'Descrição da página que aparecerá no Google e redes sociais...'}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-center text-gray-600 text-[10px] mt-6 max-w-[300px]">
                                    Esta é uma prévia de como sua página aparecerá quando compartilhada no LinkedIn, Facebook, WhatsApp e Twitter.
                                </p>
                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdminPages;
