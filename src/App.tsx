import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Catalog } from './components/Catalog';
import { BookDetail } from './components/BookDetail';
import { Login } from './components/Login';
import { Profile } from './components/Profile';
import { AdminDashboard } from './components/AdminDashboard';
import { Screen, BookType } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedBook, setSelectedBook] = useState<BookType | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigateTo = (screen: Screen) => {
    if ((screen === 'profile' || screen === 'admin') && !isLoggedIn) {
      setCurrentScreen('login');
      return;
    }
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const handleBookClick = (book: BookType) => {
    setSelectedBook(book);
    setCurrentScreen('detail');
    window.scrollTo(0, 0);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentScreen('catalog');
    window.scrollTo(0, 0);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('profile');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home onSearch={handleSearch} onBookClick={handleBookClick} />;
      case 'catalog':
        return <Catalog onBookClick={handleBookClick} initialQuery={searchQuery} />;
      case 'detail':
        return selectedBook ? (
          <BookDetail book={selectedBook} onBack={() => setCurrentScreen('catalog')} />
        ) : (
          <Home onSearch={handleSearch} onBookClick={handleBookClick} />
        );
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'profile':
        return <Profile />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <Home onSearch={handleSearch} onBookClick={handleBookClick} />;
    }
  };

  return (
    <Layout 
      currentScreen={currentScreen} 
      onNavigate={navigateTo} 
      isAdmin={isLoggedIn} // For demo, if logged in, show admin access
    >
      {renderScreen()}
    </Layout>
  );
};

export default App;
