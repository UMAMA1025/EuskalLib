import React from 'react';
import { Filter, Search, ChevronDown, BookOpen, Clock, MapPin, Grid, List as ListIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_BOOKS, BookType } from '../types';

interface CatalogProps {
  onBookClick: (book: BookType) => void;
  initialQuery?: string;
}

export const Catalog: React.FC<CatalogProps> = ({ onBookClick, initialQuery = '' }) => {
  const [view, setView] = React.useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = React.useState(initialQuery);

  const filteredBooks = MOCK_BOOKS.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" /> Filtros
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">Disponibilidad</label>
                  <div className="space-y-2">
                    {['Disponible ahora', 'Próximamente', 'En sala'].map(opt => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                        <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">Idioma</label>
                  <div className="space-y-2">
                    {['Euskera', 'Castellano', 'Inglés', 'Francés'].map(opt => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                        <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">Categoría</label>
                  <div className="space-y-2">
                    {['Narrativa', 'Ensayo', 'Infantil', 'Cómic', 'Poesía'].map(opt => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                        <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h4 className="font-bold text-primary mb-2">¿No encuentras lo que buscas?</h4>
              <p className="text-xs text-slate-600 mb-4">Puedes solicitar una compra o un préstamo interbibliotecario.</p>
              <button className="text-xs font-bold text-primary underline">Solicitar recurso</button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search and Sort Bar */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Filtrar resultados..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-slate-50 rounded-lg p-1 border border-slate-200">
                <button 
                  onClick={() => setView('grid')}
                  className={`p-1.5 rounded-md transition-all ${view === 'grid' ? 'bg-white shadow-sm text-primary' : 'text-slate-400'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setView('list')}
                  className={`p-1.5 rounded-md transition-all ${view === 'list' ? 'bg-white shadow-sm text-primary' : 'text-slate-400'}`}
                >
                  <ListIcon className="w-5 h-5" />
                </button>
              </div>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors">
                Ordenar por: Relevancia <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Results Info */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-slate-500 text-sm">Mostrando <span className="font-bold text-slate-900">{filteredBooks.length}</span> resultados</p>
          </div>

          {/* Books Grid/List */}
          {view === 'grid' ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredBooks.map((book, i) => (
                <motion.div 
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <button className="w-full btn-secondary py-2 text-xs rounded-lg">Ver detalles</button>
                    </div>
                    {book.status === 'disponible' ? (
                      <div className="absolute top-3 right-3 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        Disponible
                      </div>
                    ) : (
                      <div className="absolute top-3 right-3 bg-slate-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        Prestado
                      </div>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 line-clamp-1 group-hover:text-primary transition-colors">{book.title}</h4>
                  <p className="text-sm text-slate-500 mb-2">{book.author}</p>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 font-medium uppercase tracking-tighter">
                    <MapPin className="w-3 h-3" /> {book.library.split('-')[0]}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredBooks.map((book, i) => (
                <motion.div 
                  key={book.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => onBookClick(book)}
                  className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-6 cursor-pointer hover:border-primary/30 transition-all group"
                >
                  <div className="w-24 h-36 flex-shrink-0 rounded-lg overflow-hidden shadow-sm">
                    <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{book.title}</h4>
                          <p className="text-slate-500 font-medium">{book.author}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${book.status === 'disponible' ? 'bg-secondary/10 text-secondary' : 'bg-slate-100 text-slate-500'}`}>
                          {book.status}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500 mt-4">
                        <div className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> {book.category}</div>
                        <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {book.library}</div>
                        <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {book.year || '2020'}</div>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <button className="btn-primary py-2 px-6 text-sm">Reservar</button>
                      <button className="btn-outline py-2 px-6 text-sm">Añadir a lista</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
