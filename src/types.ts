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

export type Screen = 'home' | 'catalog' | 'detail' | 'login' | 'profile' | 'admin';

export interface BookType {
  id: string;
  title: string;
  author: string;
  image: string;
  status: 'disponible' | 'prestado' | 'reservado';
  library: string;
  category: string;
  isbn?: string;
  year?: string;
  language?: string;
  description?: string;
}

export const MOCK_BOOKS: BookType[] = [
  {
    id: '1',
    title: 'El hijo del acordeonista',
    author: 'Bernardo Atxaga',
    image: 'https://picsum.photos/seed/book1/400/600',
    status: 'disponible',
    library: 'Bilbao - Biblioteca Central',
    category: 'Ficción Contemporánea',
    isbn: '978-8420466651',
    year: '2003',
    language: 'Euskera / Castellano',
    description: 'David y Mary Ann se encuentran en California para rememorar su pasado común en Obaba, el mítico pueblo vasco...'
  },
  {
    id: '2',
    title: 'Patria',
    author: 'Fernando Aramburu',
    image: 'https://picsum.photos/seed/book2/400/600',
    status: 'prestado',
    library: 'Donostia - Koldo Mitxelena',
    category: 'Narrativa',
    isbn: '978-8490663196',
    year: '2016',
    language: 'Castellano'
  },
  {
    id: '3',
    title: 'Obabakoak',
    author: 'Bernardo Atxaga',
    image: 'https://picsum.photos/seed/book3/400/600',
    status: 'disponible',
    library: 'Vitoria-Gasteiz - Ignacio Aldecoa',
    category: 'Ficción',
    isbn: '978-8420422558',
    year: '1988',
    language: 'Euskera'
  },
  {
    id: '4',
    title: 'El Guardián Invisible',
    author: 'Dolores Redondo',
    image: 'https://picsum.photos/seed/book4/400/600',
    status: 'disponible',
    library: 'Biblioteca Central de San Sebastián',
    category: 'Narrativa Policiaca',
    isbn: '978-8423346141',
    year: '2013',
    language: 'Castellano'
  },
  {
    id: '5',
    title: 'Martutene',
    author: 'Ramón Saizarbitoria',
    image: 'https://picsum.photos/seed/book5/400/600',
    status: 'disponible',
    library: 'Donostia - Central',
    category: 'Ficción',
    isbn: '978-8490270103',
    year: '2012',
    language: 'Euskera'
  }
];
