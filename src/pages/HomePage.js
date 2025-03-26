import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import TheaterSelection from '../components/TheaterSelection';
import { useBooking } from '../contexts/BookingContext';
import { fetchMovies } from '../utils/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const { selectedMovie } = useBooking();

  useEffect(() => {
    const loadMovies = async () => {
      const movieData = await fetchMovies();
      setMovies(movieData);
      setFilteredMovies(movieData);
    };
    loadMovies();
  }, []);

  const handleSearch = (query) => {
    const filtered = movies.filter(movie => 
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="home-page">
      <SearchBar onSearch={handleSearch} />
      
      {!selectedMovie ? (
        <div className="movies-grid">
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <TheaterSelection />
      )}
    </div>
  );
};

export default HomePage;