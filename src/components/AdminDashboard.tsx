import React from 'react';
import { 
  LayoutDashboard, 
  Book, 
  Users, 
  Calendar, 
  TrendingUp, 
  AlertCircle, 
  Plus, 
  Search, 
  MoreVertical, 
  ChevronRight, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock,
  CheckCircle2,
  FileText,
  Settings
} from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_BOOKS } from '../types';

export const AdminDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-black text-slate-900">Panel de Gestión</h2>
          <p className="text-slate-500">Bienvenido, Administrador de Bilbao Central</p>
        </div>
        <div className="flex gap-4">
          <button className="btn-outline py-3 px-6 rounded-xl flex items-center gap-2">
            <FileText className="w-5 h-5" /> Exportar Informe
          </button>
          <button className="btn-primary py-3 px-6 rounded-xl flex items-center gap-2 shadow-lg shadow-primary/20">
            <Plus className="w-5 h-5" /> Añadir Recurso
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Total Libros', value: '124,502', change: '+12%', up: true, icon: Book, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Usuarios Activos', value: '12,840', change: '+5%', up: true, icon: Users, color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { label: 'Préstamos Hoy', value: '452', change: '-2%', up: false, icon: TrendingUp, color: 'text-amber-500', bg: 'bg-amber-50' },
          { label: 'Alertas', value: '12', change: 'Urgente', up: false, icon: AlertCircle, color: 'text-rose-500', bg: 'bg-rose-50' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.up ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            <p className="text-3xl font-black text-slate-900 mb-1">{stat.value}</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        {/* Recent Activity Table */}
        <div className="md:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Últimos Préstamos</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Buscar..." 
                  className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <th className="px-8 py-4">Usuario</th>
                    <th className="px-8 py-4">Libro</th>
                    <th className="px-8 py-4">Fecha</th>
                    <th className="px-8 py-4">Estado</th>
                    <th className="px-8 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { user: 'Ane G.', book: 'Patria', date: 'Hace 5 min', status: 'Entregado', img: '12' },
                    { user: 'Mikel L.', book: 'Obabakoak', date: 'Hace 12 min', status: 'Pendiente', img: '24' },
                    { user: 'Sara O.', book: 'Martutene', date: 'Hace 45 min', status: 'Entregado', img: '32' },
                    { user: 'Jon T.', book: 'El Guardián Invisible', date: 'Hace 1h', status: 'Retraso', img: '45' },
                    { user: 'Elena R.', book: 'El hijo del acordeonista', date: 'Hace 2h', status: 'Entregado', img: '52' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-3">
                          <img src={`https://i.pravatar.cc/100?img=${row.img}`} alt="User" className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
                          <span className="text-sm font-bold text-slate-700">{row.user}</span>
                        </div>
                      </td>
                      <td className="px-8 py-4">
                        <span className="text-sm text-slate-600 font-medium">{row.book}</span>
                      </td>
                      <td className="px-8 py-4">
                        <span className="text-xs text-slate-400">{row.date}</span>
                      </td>
                      <td className="px-8 py-4">
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                          row.status === 'Entregado' ? 'bg-emerald-100 text-emerald-600' : 
                          row.status === 'Pendiente' ? 'bg-amber-100 text-amber-600' : 'bg-rose-100 text-rose-600'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-8 py-4 text-right">
                        <button className="p-2 text-slate-300 hover:text-primary transition-colors">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 text-center">
              <button className="text-sm font-bold text-primary hover:underline">Ver todo el historial</button>
            </div>
          </div>
        </div>

        {/* Sidebar: Upcoming Activities */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" /> Próximas Actividades
            </h3>
            <div className="space-y-6">
              {[
                { title: 'Taller de Escritura Creativa', date: 'Mañana, 18:00', type: 'Presencial', color: 'bg-blue-500' },
                { title: 'Club de Lectura: Atxaga', date: '15 May, 19:30', type: 'Online', color: 'bg-emerald-500' },
                { title: 'Cuentacuentos Infantil', date: '18 May, 11:00', type: 'Presencial', color: 'bg-amber-500' },
              ].map((act, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className={`w-12 h-12 flex-shrink-0 ${act.color} rounded-2xl flex flex-col items-center justify-center text-white shadow-lg shadow-${act.color.split('-')[1]}-200`}>
                    <span className="text-xs font-bold leading-none">{act.date.split(' ')[0]}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">{act.title}</h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" /> {act.date} • <span className="font-bold text-primary">{act.type}</span>
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
            <button className="w-full btn-outline mt-8 py-3 rounded-xl text-sm">Gestionar Calendario</button>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-3xl text-white shadow-xl shadow-primary/20 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-lg font-bold mb-2">Soporte Técnico</h4>
              <p className="text-white/70 text-sm mb-6">¿Tienes problemas con el sistema? Nuestro equipo está disponible 24/7.</p>
              <button className="bg-white text-primary px-6 py-2 rounded-xl text-sm font-bold hover:bg-white/90 transition-colors">Contactar IT</button>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10">
              <Settings className="w-32 h-32 rotate-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
