import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './contexts/BookingContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import TheaterPage from './pages/TheaterPage';
import BookingPage from './pages/BookingPage';
import SeatSelection from './components/SeatSelection';
import './styles/global.css';

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/theaters" element={<TheaterPage />} />
            <Route path="/booking/:movieId" element={<BookingPage />} />
            <Route path="/booking/:movieId/seats" element={<SeatSelection />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;