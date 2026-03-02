import React from 'react';
import { 
  Search, 
  Menu, 
  User, 
  Book, 
  Home as HomeIcon, 
  HelpCircle, 
  Library, 
  Users, 
  Calendar, 
  ChevronRight, 
  Filter, 
  ArrowLeft, 
  Share2, 
  Heart, 
  Clock, 
  MapPin, 
  Bell, 
  Settings, 
  LogOut, 
  CreditCard, 
  History, 
  Plus,
  Mic,
  LayoutDashboard,
  BookOpen
} from 'lucide-react';
import { motion } from 'motion/react';
import { Screen, BookType } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  isAdmin?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentScreen, onNavigate, isAdmin = false }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-white p-1.5 rounded-lg">
              <Library className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight leading-none">EuskalLib</h1>
              <p className="text-[10px] opacity-80 uppercase tracking-widest">Red de Bibliotecas</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <button 
                onClick={() => onNavigate('home')}
                className={`text-sm font-medium transition-colors hover:text-accent ${currentScreen === 'home' ? 'text-accent' : 'text-white/80'}`}
              >
                Inicio
              </button>
              <button 
                onClick={() => onNavigate('catalog')}
                className={`text-sm font-medium transition-colors hover:text-accent ${currentScreen === 'catalog' ? 'text-accent' : 'text-white/80'}`}
              >
                Catálogo
              </button>
              <button className="text-sm font-medium text-white/80 hover:text-accent transition-colors">Actividades</button>
              <button className="text-sm font-medium text-white/80 hover:text-accent transition-colors">Ayuda</button>
            </nav>
            
            <div className="flex items-center gap-4 border-l border-white/20 pl-6">
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button 
                onClick={() => onNavigate('profile')}
                className={`flex items-center gap-2 p-1.5 pr-3 rounded-full transition-colors hover:bg-white/10 ${currentScreen === 'profile' ? 'bg-white/20' : ''}`}
              >
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                  U
                </div>
                <span className="text-sm font-medium">Mi Cuenta</span>
              </button>
              {isAdmin && (
                <button 
                  onClick={() => onNavigate('admin')}
                  className="p-2 bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-colors"
                >
                  <LayoutDashboard className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-3 flex justify-between items-center z-50">
        <button onClick={() => onNavigate('home')} className={`flex flex-col items-center gap-1 ${currentScreen === 'home' ? 'text-primary' : 'text-slate-400'}`}>
          <HomeIcon className="w-6 h-6" />
          <span className="text-[10px] font-medium">Inicio</span>
        </button>
        <button onClick={() => onNavigate('catalog')} className={`flex flex-col items-center gap-1 ${currentScreen === 'catalog' ? 'text-primary' : 'text-slate-400'}`}>
          <Search className="w-6 h-6" />
          <span className="text-[10px] font-medium">Buscar</span>
        </button>
        <button onClick={() => onNavigate('profile')} className={`flex flex-col items-center gap-1 ${currentScreen === 'profile' ? 'text-primary' : 'text-slate-400'}`}>
          <User className="w-6 h-6" />
          <span className="text-[10px] font-medium">Perfil</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <HelpCircle className="w-6 h-6" />
          <span className="text-[10px] font-medium">Ayuda</span>
        </button>
      </nav>

      {/* Footer (Desktop) */}
      <footer className="hidden md:block bg-slate-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-1.5 rounded-lg">
                <Library className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold">EuskalLib</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              La Red Unificada de Bibliotecas de Euskadi ofrece acceso a millones de libros, recursos digitales y actividades culturales para toda la ciudadanía.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-6">Servicios</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Préstamo Interbibliotecario</a></li>
              <li><a href="#" className="hover:text-white transition-colors">eLiburutegia (Digital)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reserva de Salas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Actividades Culturales</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6">Información</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre EuskalLib</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mapa de Bibliotecas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6">Contacto</h3>
            <p className="text-slate-400 text-sm mb-4">
              ¿Tienes alguna duda? Estamos aquí para ayudarte.
            </p>
            <button className="btn-primary w-full bg-accent hover:bg-accent/90">
              Enviar Consulta
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-slate-500 text-xs">
          <p>© 2024 Eusko Jaurlaritza - Gobierno Vasco. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Aviso Legal</a>
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
