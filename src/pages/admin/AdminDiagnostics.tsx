import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash, ClipboardList, Save, X, Video, FileText, Link as LinkIcon, Eye } from 'lucide-react';
import { diagnosticService } from '../../utils/diagnosticService';
import type { IDiagnosticData } from '../../data/diagnosticData';

const AdminDiagnostics = () => {
    const [users, setUsers] = useState<IDiagnosticData[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<IDiagnosticData | null>(null);

    // Form State
    const [formData, setFormData] = useState<Partial<IDiagnosticData>>({
        username: '',
        password: '',
        name: '',
        company: '',
        score: 0,
        summary: '',
        recommendations: [],
        videoUrl: '',
        price: { value: '', label: 'INVESTIMENTO', originalValue: '' },
        analysisSections: []
    });

    const [newSection, setNewSection] = useState({ title: '', content: '' });

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = () => {
        setUsers(diagnosticService.getAll());
    };

    const handleOpenModal = (user?: IDiagnosticData) => {
        if (user) {
            setEditingUser(user);
            setFormData(user);
        } else {
            setEditingUser(null);
            setFormData({
                username: '',
                password: '',
                name: '',
                company: '',
                score: 50,
                summary: '',
                recommendations: [],
                videoUrl: '',
                price: { value: '', label: 'INVESTIMENTO' },
                metrics: [],
                analysisSections: []
            });
        }
        setIsModalOpen(true);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.username || !formData.password || !formData.name) return;

        diagnosticService.save(formData as IDiagnosticData);
        loadUsers();
        setIsModalOpen(false);
    };

    const handleDelete = (username: string) => {
        if (window.confirm('Tem certeza que deseja excluir este diagnóstico?')) {
            diagnosticService.delete(username);
            loadUsers();
        }
    };

    const handleAddSection = () => {
        if (newSection.title && newSection.content) {
            setFormData({
                ...formData,
                analysisSections: [...(formData.analysisSections || []), newSection]
            });
            setNewSection({ title: '', content: '' });
        }
    };

    const handleRemoveSection = (index: number) => {
        const updated = [...(formData.analysisSections || [])];
        updated.splice(index, 1);
        setFormData({ ...formData, analysisSections: updated });
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="font-cabinet font-bold text-4xl text-white">Diagnósticos</h2>
                    <p className="text-gray-400 text-sm">Gerencie clientes, vídeos e análises personalizadas.</p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                >
                    <Plus size={18} />
                    <span>Novo Diagnóstico</span>
                </button>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.length === 0 ? (
                    <div className="col-span-full text-center py-20 bg-white/[0.02] border border-dashed border-white/10 rounded-3xl">
                        <p className="text-gray-500">Nenhum diagnóstico criado.</p>
                    </div>
                ) : (
                    users.map((user) => (
                        <motion.div
                            key={user.username}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/[0.02] border border-white/5 hover:border-white/20 p-6 rounded-2xl group flex flex-col justify-between relative overflow-hidden"
                        >
                            <div className="relative z-10 mb-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 rounded-lg border border-white/10 bg-purple-500/10 text-purple-400">
                                            <ClipboardList size={20} />
                                        </div>
                                        <button
                                            onClick={() => {
                                                const url = `${window.location.origin}/diagnostico?u=${encodeURIComponent(user.username)}`;
                                                window.open(url, '_blank');
                                            }}
                                            className="p-2 rounded-lg border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                            title="Visualizar Diagnóstico"
                                        >
                                            <Eye size={20} />
                                        </button>
                                        <button
                                            onClick={() => {
                                                const url = `${window.location.origin}/diagnostico?u=${encodeURIComponent(user.username)}`;
                                                navigator.clipboard.writeText(url);
                                                alert('Link copiado: ' + url);
                                            }}
                                            className="p-2 rounded-lg border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                            title="Copiar Link da Proposta"
                                        >
                                            <LinkIcon size={20} />
                                        </button>
                                    </div>
                                    <span className="px-2 py-1 rounded text-xs font-bold bg-white/5 text-gray-400 border border-white/5">
                                        Score: {user.score}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{user.name}</h3>
                                <p className="text-xs text-gray-500 font-mono mb-2">{user.company}</p>
                                <p className="text-xs text-gray-600">User: {user.username} | Pass: {user.password}</p>
                            </div>

                            <div className="relative z-10 pt-4 mt-auto border-t border-white/5 flex gap-2">
                                <button
                                    onClick={() => handleOpenModal(user)}
                                    className="flex-1 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold uppercase text-gray-300 hover:text-white transition-colors"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDelete(user.username)}
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
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-[#111] border border-white/10 rounded-3xl p-8 w-full max-w-2xl relative my-10"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-white"
                            >
                                <X size={24} />
                            </button>

                            <h3 className="font-cabinet font-bold text-2xl text-white mb-6">
                                {editingUser ? 'Editar Diagnóstico' : 'Novo Diagnóstico'}
                            </h3>

                            <form onSubmit={handleSave} className="space-y-6">
                                {/* Basic Info */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs text-gray-500 uppercase font-bold ml-1">Usuário</label>
                                        <input
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500"
                                            value={formData.username}
                                            onChange={e => setFormData({ ...formData, username: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-500 uppercase font-bold ml-1">Senha</label>
                                        <input
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500"
                                            value={formData.password}
                                            onChange={e => setFormData({ ...formData, password: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-500 uppercase font-bold ml-1">Nome Cliente</label>
                                        <input
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-500 uppercase font-bold ml-1">Empresa</label>
                                        <input
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500"
                                            value={formData.company}
                                            onChange={e => setFormData({ ...formData, company: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Score & Summary */}
                                <div className="space-y-4 pt-4 border-t border-white/5">
                                    <h4 className="text-sm font-bold text-gray-400">Pontuação & Resumo</h4>
                                    <div className="grid grid-cols-4 gap-4">
                                        <div className="col-span-1">
                                            <label className="text-xs text-gray-500 uppercase font-bold ml-1">Score (0-100)</label>
                                            <input
                                                type="number"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500"
                                                value={formData.score}
                                                onChange={e => setFormData({ ...formData, score: Number(e.target.value) })}
                                            />
                                        </div>
                                        <div className="col-span-3">
                                            <label className="text-xs text-gray-500 uppercase font-bold ml-1">Resumo da Análise</label>
                                            <textarea
                                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500 h-[52px] resize-none"
                                                value={formData.summary}
                                                onChange={e => setFormData({ ...formData, summary: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {/* Metrics */}
                                    <div>
                                        <label className="text-xs text-gray-500 uppercase font-bold ml-1 mb-2 block">KPIs / Métricas</label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                            {formData.metrics?.map((metric, idx) => (
                                                <div key={idx} className="bg-white/5 p-2 rounded-lg border border-white/10 flex flex-col gap-2">
                                                    <input
                                                        className="bg-transparent text-xs font-bold text-white border-b border-white/10 pb-1"
                                                        value={metric.label}
                                                        onChange={e => {
                                                            const newMetrics = [...(formData.metrics || [])];
                                                            newMetrics[idx].label = e.target.value;
                                                            setFormData({ ...formData, metrics: newMetrics });
                                                        }}
                                                        placeholder="Label"
                                                    />
                                                    <div className="flex gap-2">
                                                        <input
                                                            type="number"
                                                            className="w-16 bg-transparent text-lg font-bold text-white"
                                                            value={metric.value}
                                                            onChange={e => {
                                                                const newMetrics = [...(formData.metrics || [])];
                                                                newMetrics[idx].value = Number(e.target.value);
                                                                setFormData({ ...formData, metrics: newMetrics });
                                                            }}
                                                        />
                                                        <select
                                                            className="w-full bg-black/20 text-xs rounded text-gray-400 border border-white/5"
                                                            value={metric.status}
                                                            onChange={e => {
                                                                const newMetrics = [...(formData.metrics || [])];
                                                                newMetrics[idx].status = e.target.value as any;
                                                                setFormData({ ...formData, metrics: newMetrics });
                                                            }}
                                                        >
                                                            <option value="good">Bom</option>
                                                            <option value="warning">Atenção</option>
                                                            <option value="critical">Crítico</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={() => setFormData({
                                                    ...formData,
                                                    metrics: [...(formData.metrics || []), { label: 'Nova Métrica', value: 0, status: 'warning' }]
                                                })}
                                                className="h-full min-h-[80px] border border-dashed border-white/20 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:border-white/40 transition-colors"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Video & Price */}
                                <div className="space-y-4 pt-4 border-t border-white/5">
                                    <h4 className="text-sm font-bold text-gray-400 flex items-center gap-2"><Video size={16} /> Vídeo & Oferta</h4>
                                    <div>
                                        <label className="text-xs text-gray-500 uppercase font-bold ml-1">URL do Vídeo (Youtube)</label>
                                        <input
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500"
                                            value={formData.videoUrl || ''}
                                            onChange={e => setFormData({ ...formData, videoUrl: e.target.value })}
                                            placeholder="https://www.youtube.com/watch?v=..."
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs text-gray-500 uppercase font-bold ml-1">Preço (Ex: R$ 5.000)</label>
                                            <input
                                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500"
                                                value={formData.price?.value || ''}
                                                onChange={e => setFormData({ ...formData, price: { ...formData.price!, value: e.target.value } })}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs text-gray-500 uppercase font-bold ml-1">Label (Ex: INVESTIMENTO)</label>
                                            <input
                                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500"
                                                value={formData.price?.label || ''}
                                                onChange={e => setFormData({ ...formData, price: { ...formData.price!, label: e.target.value } })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Analysis Sections */}
                                <div className="space-y-4 pt-4 border-t border-white/5">
                                    <h4 className="text-sm font-bold text-gray-400 flex items-center gap-2"><FileText size={16} /> Seções de Análise</h4>

                                    {formData.analysisSections?.map((section, idx) => (
                                        <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 relative">
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveSection(idx)}
                                                className="absolute top-2 right-2 text-red-400 hover:text-red-300"
                                            >
                                                <Trash size={14} />
                                            </button>
                                            <h5 className="font-bold text-sm mb-1">{section.title}</h5>
                                            <p className="text-xs text-gray-400 line-clamp-2">{section.content}</p>
                                        </div>
                                    ))}

                                    <div className="bg-black/20 p-4 rounded-xl border border-white/5 space-y-3">
                                        <input
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-sm text-white"
                                            placeholder="Título da Seção (ex: Oportunidade Oculta)"
                                            value={newSection.title}
                                            onChange={e => setNewSection({ ...newSection, title: e.target.value })}
                                        />
                                        <textarea
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-sm text-white h-24"
                                            placeholder="Conteúdo persuasivo..."
                                            value={newSection.content}
                                            onChange={e => setNewSection({ ...newSection, content: e.target.value })}
                                        />
                                        <button
                                            type="button"
                                            onClick={handleAddSection}
                                            className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold uppercase transition-colors"
                                        >
                                            Adicionar Seção
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl mt-4 flex items-center justify-center gap-2"
                                >
                                    <Save size={20} />
                                    Salvar Diagnóstico
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdminDiagnostics;
