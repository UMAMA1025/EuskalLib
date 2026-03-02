import React from 'react';
import { 
  User, 
  Book, 
  Clock, 
  History, 
  Heart, 
  Settings, 
  LogOut, 
  ChevronRight, 
  CreditCard, 
  Bell, 
  MapPin,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Star
} from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_BOOKS } from '../types';

export const Profile: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-3 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                U
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md border border-slate-100 text-slate-400 hover:text-primary transition-colors">
                <Settings className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Usuario Demo</h3>
            <p className="text-slate-500 text-sm mb-6">Socio desde 2021</p>
            
            <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10 text-left">
              <div className="flex items-center gap-3 mb-2">
                <CreditCard className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Carné Digital</span>
              </div>
              <p className="text-sm font-mono font-bold text-slate-700">ES-8472-9103-X</p>
            </div>
          </div>

          <nav className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            {[
              { icon: User, label: 'Mis Datos', active: true },
              { icon: Book, label: 'Préstamos Activos', count: 2 },
              { icon: Clock, label: 'Reservas', count: 1 },
              { icon: History, label: 'Historial' },
              { icon: Heart, label: 'Favoritos', count: 12 },
              { icon: Bell, label: 'Notificaciones' },
              { icon: LogOut, label: 'Cerrar Sesión', danger: true },
            ].map((item, i) => (
              <button 
                key={i}
                className={`w-full flex items-center justify-between px-6 py-4 transition-colors ${item.active ? 'bg-primary/5 text-primary border-r-4 border-primary' : 'text-slate-600 hover:bg-slate-50'} ${item.danger ? 'text-rose-500 hover:bg-rose-50' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-bold">{item.label}</span>
                </div>
                {item.count && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.active ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="md:col-span-9 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Libros Leídos', value: '48', icon: CheckCircle2, color: 'text-emerald-500' },
              { label: 'Días de Préstamo', value: '12', icon: Clock, color: 'text-blue-500' },
              { label: 'Puntos Cultura', value: '1,250', icon: Star, color: 'text-amber-500' },
              { label: 'Sanciones', value: '0', icon: AlertCircle, color: 'text-slate-400' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <stat.icon className={`w-6 h-6 ${stat.color} mb-3`} />
                <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Active Loans */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Préstamos Activos</h3>
              <button className="text-primary text-sm font-bold hover:underline">Gestionar todos</button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {MOCK_BOOKS.slice(0, 2).map((book, i) => (
                <motion.div 
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex gap-4 group"
                >
                  <div className="w-20 h-28 flex-shrink-0 rounded-xl overflow-hidden shadow-sm">
                    <img src={book.image} alt={book.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h4 className="font-bold text-slate-900 line-clamp-1">{book.title}</h4>
                      <p className="text-xs text-slate-500 mb-2">{book.author}</p>
                      <div className="flex items-center gap-2 text-[10px] font-bold">
                        <span className="text-slate-400 uppercase">Devolución:</span>
                        <span className="text-rose-500">12 Mayo (5 días)</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button className="flex-1 bg-primary/10 text-primary text-[10px] font-bold py-2 rounded-lg hover:bg-primary/20 transition-colors">Renovar</button>
                      <button className="flex-1 bg-slate-100 text-slate-600 text-[10px] font-bold py-2 rounded-lg hover:bg-slate-200 transition-colors">Detalles</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Recommended for you */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Recomendado para ti</h3>
              <p className="text-slate-500 text-sm">Basado en tus lecturas de Narrativa</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {MOCK_BOOKS.slice(2, 6).map((book, i) => (
                <div key={book.id} className="group cursor-pointer">
                  <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-all">
                    <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                    <div className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur rounded-full text-rose-500 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 line-clamp-1">{book.title}</h4>
                  <p className="text-xs text-slate-500">{book.author}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
