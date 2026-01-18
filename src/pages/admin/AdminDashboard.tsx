import { motion } from 'framer-motion';
import { Users, FileText, TrendingUp, Activity, ArrowUpRight } from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';

const AdminDashboard = () => {
    const { clients, articles } = useAdmin();

    const stats = [
        {
            title: 'Total de Clientes',
            value: clients.length,
            icon: Users,
            color: 'from-purple-500/20 to-blue-500/20',
            textColor: 'text-purple-400',
            borderColor: 'border-purple-500/30'
        },
        {
            title: 'Artigos Publicados',
            value: articles.filter(a => a.status === 'Published').length,
            icon: FileText,
            color: 'from-green-500/20 to-emerald-500/20',
            textColor: 'text-green-400',
            borderColor: 'border-green-500/30'
        },
        {
            title: 'Prospecções Ativas',
            value: clients.filter(c => c.status === 'Prospect').length,
            icon: TrendingUp,
            color: 'from-orange-500/20 to-red-500/20',
            textColor: 'text-orange-400',
            borderColor: 'border-orange-500/30'
        },
        {
            title: 'Taxa de Conversão',
            value: '0%', // Placeholder logic
            icon: Activity,
            color: 'from-blue-500/20 to-cyan-500/20',
            textColor: 'text-blue-400',
            borderColor: 'border-blue-500/30'
        }
    ];

    return (
        <div className="space-y-12">
            {/* Header */}
            <div>
                <h2 className="font-cabinet font-bold text-4xl md:text-5xl text-white mb-2">DASHBOARD</h2>
                <p className="text-gray-400">Visão geral do sistema e métricas principais.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`bg-white/[0.03] backdrop-blur-md border ${stat.borderColor} p-6 rounded-3xl relative overflow-hidden group`}
                    >
                        <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                            <stat.icon size={80} />
                        </div>

                        <div className="relative z-10">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 border border-white/5`}>
                                <stat.icon className={`w-6 h-6 ${stat.textColor} text-white`} />
                            </div>
                            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">{stat.title}</h3>
                            <p className="text-4xl font-cabinet font-bold text-white">{stat.value}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Quick Actions / Recent Activity Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Clients */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/[0.02] border border-white/10 rounded-3xl p-8"
                >
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-xl text-white">Clientes Recentes</h3>
                        <button className="text-xs text-purple-400 font-bold uppercase tracking-widest hover:text-purple-300 flex items-center gap-1">
                            Ver Todos <ArrowUpRight size={12} />
                        </button>
                    </div>
                    {clients.length === 0 ? (
                        <div className="text-center py-12 text-gray-500 text-sm border border-dashed border-white/10 rounded-2xl">
                            Nenhum cliente registrado ainda.
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {clients.slice(0, 5).map(client => (
                                <div key={client.id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                                    <div>
                                        <p className="font-bold text-white text-sm">{client.name}</p>
                                        <p className="text-xs text-gray-500 uppercase">{client.status}</p>
                                    </div>
                                    <div className="text-xs text-gray-400 font-mono">
                                        {client.lastContact}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* System Status / Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white/[0.02] border border-white/10 rounded-3xl p-8"
                >
                    <h3 className="font-bold text-xl text-white mb-6">Ações Rápidas</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-2xl text-left transition-colors group">
                            <Users className="w-6 h-6 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                            <p className="text-sm font-bold text-white">Novo Cliente</p>
                            <p className="text-xs text-gray-500 mt-1">Registrar prospecção</p>
                        </button>
                        <button className="p-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded-2xl text-left transition-colors group">
                            <FileText className="w-6 h-6 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                            <p className="text-sm font-bold text-white">Novo Artigo</p>
                            <p className="text-xs text-gray-500 mt-1">Criar conteúdo</p>
                        </button>
                        <div className="col-span-2 p-4 bg-green-500/5 border border-green-500/10 rounded-2xl flex items-center justify-between">
                            <div>
                                <p className="text-sm font-bold text-green-400">Sistema Operacional</p>
                                <p className="text-xs text-gray-500">v2.4.0 (Stable)</p>
                            </div>
                            <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminDashboard;
