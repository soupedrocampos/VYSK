/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Trash, Edit, Phone, Calendar } from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';

const AdminCRM = () => {
    const { clients, addClient, deleteClient } = useAdmin();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        status: 'Prospect' as 'Prospect' | 'Client' | 'Aborted',
        lastContact: new Date().toISOString().split('T')[0],
        notes: ''
    });

    const filteredClients = clients.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.contact.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addClient(formData);
        setIsModalOpen(false);
        setFormData({
            name: '',
            contact: '',
            status: 'Prospect',
            lastContact: new Date().toISOString().split('T')[0],
            notes: ''
        });
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="font-cabinet font-bold text-4xl text-white">CRM</h2>
                    <p className="text-gray-400 text-sm">Gerenciamento de clientes e prospecções.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                >
                    <Plus size={18} />
                    <span>Novo Cliente</span>
                </button>
            </div>

            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Buscar por nome, contato..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                />
            </div>

            {/* Clients List */}
            <div className="grid grid-cols-1 gap-4">
                {filteredClients.length === 0 ? (
                    <div className="text-center py-20 bg-white/[0.02] border border-dashed border-white/10 rounded-3xl">
                        <p className="text-gray-500">Nenhum cliente encontrado.</p>
                    </div>
                ) : (
                    filteredClients.map((client) => (
                        <motion.div
                            key={client.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/[0.02] border border-white/5 hover:border-white/10 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group"
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="text-lg font-bold text-white">{client.name}</h3>
                                    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wide border ${client.status === 'Client' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                        client.status === 'Prospect' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                                            'bg-red-500/10 text-red-400 border-red-500/20'
                                        }`}>
                                        {client.status}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                    <span className="flex items-center gap-1"><Phone size={14} /> {client.contact}</span>
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {client.lastContact}</span>
                                </div>
                                {client.notes && (
                                    <p className="text-xs text-gray-500 mt-2 line-clamp-1 italic">"{client.notes}"</p>
                                )}
                            </div>

                            <div className="flex items-center gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                                    <Edit size={18} />
                                </button>
                                <button
                                    onClick={() => deleteClient(client.id)}
                                    className="p-2 hover:bg-red-500/10 rounded-lg text-red-400 hover:text-red-300 transition-colors"
                                >
                                    <Trash size={18} />
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
                                <Search className="rotate-45" size={24} /> {/* X icon workaround or import X */}
                            </button>

                            <h3 className="font-cabinet font-bold text-2xl text-white mb-6">Novo Cliente</h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="text-xs text-gray-500 uppercase font-bold ml-1">Nome / Empresa</label>
                                    <input
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 uppercase font-bold ml-1">Contato (Email/Tel)</label>
                                    <input
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500"
                                        value={formData.contact}
                                        onChange={e => setFormData({ ...formData, contact: e.target.value })}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs text-gray-500 uppercase font-bold ml-1">Status</label>
                                        <select
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500"
                                            value={formData.status}
                                            onChange={e => setFormData({ ...formData, status: e.target.value as any })}
                                        >
                                            <option value="Prospect">Prospecção</option>
                                            <option value="Client">Cliente</option>
                                            <option value="Aborted">Abortado</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-500 uppercase font-bold ml-1">Último Contato</label>
                                        <input
                                            type="date"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500"
                                            value={formData.lastContact}
                                            onChange={e => setFormData({ ...formData, lastContact: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 uppercase font-bold ml-1">Notas</label>
                                    <textarea
                                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-purple-500 h-24 resize-none"
                                        value={formData.notes}
                                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl mt-4"
                                >
                                    Salvar Cliente
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdminCRM;
