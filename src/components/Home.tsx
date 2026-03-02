import React from 'react';
import { Search, Mic, Library, BookOpen, Users, Calendar, ChevronRight, Book, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_BOOKS, BookType } from '../types';

interface HomeProps {
  onSearch: (query: string) => void;
  onBookClick: (book: BookType) => void;
}

export const Home: React.FC<HomeProps> = ({ onSearch, onBookClick }) => {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000" 
            alt="Library" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl w-full px-4 text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Tu puerta al conocimiento
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Explora el catálogo unificado de la Red de Bibliotecas de Euskadi. Libros, música, cine y mucho más a tu alcance.
          </motion.p>

          <motion.form 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="relative max-w-2xl mx-auto"
          >
            <div className="flex items-center bg-white rounded-2xl shadow-2xl overflow-hidden p-1.5">
              <div className="pl-4 text-slate-400">
                <Search className="w-6 h-6" />
              </div>
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Busca por título, autor o materia..." 
                className="flex-1 px-4 py-3 text-slate-800 focus:outline-none text-lg"
              />
              <button className="p-3 text-slate-400 hover:text-primary transition-colors">
                <Mic className="w-6 h-6" />
              </button>
              <button type="submit" className="btn-secondary px-8 py-3 rounded-xl">
                Buscar
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Library, label: 'Bibliotecas', value: '250+', color: 'bg-blue-500' },
            { icon: BookOpen, label: 'Libros', value: '2.5M+', color: 'bg-emerald-500' },
            { icon: Users, label: 'Usuarios', value: '800K+', color: 'bg-amber-500' },
            { icon: Calendar, label: 'Actividades', value: '1.2K', color: 'bg-rose-500' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center card-hover"
            >
              <div className={`${stat.color} p-3 rounded-xl text-white mb-4 shadow-lg shadow-${stat.color.split('-')[1]}-200`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
              <span className="text-sm text-slate-500 font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Books */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Novedades Destacadas</h3>
            <p className="text-slate-500">Los títulos más buscados de este mes</p>
          </div>
          <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Ver todo el catálogo <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {MOCK_BOOKS.map((book, i) => (
            <motion.div 
              key={book.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => onBookClick(book)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                {book.status === 'disponible' && (
                  <div className="absolute top-3 right-3 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Disponible
                  </div>
                )}
              </div>
              <h4 className="font-bold text-slate-900 line-clamp-1 group-hover:text-primary transition-colors">{book.title}</h4>
              <p className="text-sm text-slate-500">{book.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Servicios Digitales</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Accede a miles de recursos sin moverte de casa con tu carné de biblioteca.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 card-hover">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Book className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">eLiburutegia</h4>
              <p className="text-slate-600 mb-6">Préstamo de libros electrónicos, audiolibros y películas en streaming de forma gratuita.</p>
              <button className="text-primary font-bold flex items-center gap-2">Explorar digital <ChevronRight className="w-4 h-4" /></button>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 card-hover">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Clubes de Lectura</h4>
              <p className="text-slate-600 mb-6">Únete a grupos de lectura presenciales y virtuales para compartir tu pasión por los libros.</p>
              <button className="text-accent font-bold flex items-center gap-2">Ver grupos <ChevronRight className="w-4 h-4" /></button>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 card-hover">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Préstamo Inter</h4>
              <p className="text-slate-600 mb-6">Solicita libros de cualquier biblioteca de la red y recíbelos en tu biblioteca más cercana.</p>
              <button className="text-secondary font-bold flex items-center gap-2">Cómo funciona <ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
