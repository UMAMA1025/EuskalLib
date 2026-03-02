import React from 'react';
import { ArrowLeft, Share2, Heart, BookOpen, MapPin, Clock, Info, ChevronRight, Star, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { BookType } from '../types';

interface BookDetailProps {
  book: BookType;
  onBack: () => void;
}

export const BookDetail: React.FC<BookDetailProps> = ({ book, onBack }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Volver al catálogo
      </button>

      <div className="grid md:grid-cols-12 gap-12">
        {/* Left: Book Image and Actions */}
        <div className="md:col-span-4 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
          >
            <img 
              src={book.image} 
              alt={book.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="flex gap-4">
            <button className="flex-1 btn-primary py-4 flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
              <BookOpen className="w-5 h-5" /> Reservar ahora
            </button>
            <button className="p-4 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-rose-500 hover:border-rose-200 transition-all">
              <Heart className="w-6 h-6" />
            </button>
            <button className="p-4 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-primary hover:border-primary/20 transition-all">
              <Share2 className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-slate-100 p-6 rounded-3xl border border-slate-200">
            <h4 className="font-bold mb-4 flex items-center gap-2"><Info className="w-5 h-5 text-primary" /> Información Técnica</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-bottom border-slate-200 pb-2">
                <span className="text-slate-500">ISBN</span>
                <span className="font-medium text-slate-900">{book.isbn || '978-84-12345-67-8'}</span>
              </div>
              <div className="flex justify-between border-bottom border-slate-200 pb-2">
                <span className="text-slate-500">Año edición</span>
                <span className="font-medium text-slate-900">{book.year || '2021'}</span>
              </div>
              <div className="flex justify-between border-bottom border-slate-200 pb-2">
                <span className="text-slate-500">Idioma</span>
                <span className="font-medium text-slate-900">{book.language || 'Castellano'}</span>
              </div>
              <div className="flex justify-between border-bottom border-slate-200 pb-2">
                <span className="text-slate-500">Editorial</span>
                <span className="font-medium text-slate-900">Euskal Argitaletxea</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Páginas</span>
                <span className="font-medium text-slate-900">352</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Details and Availability */}
        <div className="md:col-span-8 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {book.category}
              </span>
              <div className="flex items-center gap-1 text-amber-500 ml-4">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 text-slate-300" />
                <span className="text-slate-400 text-xs ml-1 font-medium">(4.2 / 5)</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">{book.title}</h2>
            <p className="text-2xl text-slate-500 font-medium mb-8">por <span className="text-primary hover:underline cursor-pointer">{book.author}</span></p>
            
            <div className="prose prose-slate max-w-none">
              <h3 className="text-xl font-bold mb-4">Sinopsis</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {book.description || "Una obra maestra de la literatura contemporánea que explora los límites de la identidad y la memoria en el contexto de la sociedad vasca actual. A través de una narrativa envolvente y personajes profundamente humanos, el autor nos sumerge en un viaje emocional que cuestiona nuestras raíces y el legado que dejamos a las futuras generaciones."}
              </p>
            </div>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 px-8 py-4 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-bold flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> Disponibilidad en Bibliotecas</h3>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Red de Euskadi</span>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { name: 'Bilbao - Biblioteca Central', status: 'Disponible', count: 2 },
                { name: 'Donostia - Koldo Mitxelena', status: 'Prestado', count: 0, date: '15/05/2024' },
                { name: 'Vitoria-Gasteiz - Ignacio Aldecoa', status: 'Disponible', count: 1 },
                { name: 'Barakaldo - Biblioteca Municipal', status: 'Disponible', count: 3 },
              ].map((lib, i) => (
                <div key={i} className="px-8 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div>
                    <h4 className="font-bold text-slate-900">{lib.name}</h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" /> {lib.status === 'Disponible' ? `${lib.count} ejemplares disponibles` : `Disponible el ${lib.date}`}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${lib.status === 'Disponible' ? 'bg-secondary/10 text-secondary' : 'bg-rose-100 text-rose-500'}`}>
                      {lib.status}
                    </span>
                    <button className={`p-2 rounded-lg transition-all ${lib.status === 'Disponible' ? 'text-primary hover:bg-primary/10' : 'text-slate-300 cursor-not-allowed'}`}>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-200">
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold">
                  +12
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium">Lectores han reservado este libro recientemente</p>
            </div>
            <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              <MessageSquare className="w-5 h-5" /> Ver 24 opiniones
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
