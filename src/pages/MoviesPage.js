import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { fetchMovies } from '../utils/api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const movieData = await fetchMovies();
      setMovies(movieData);
    };
    loadMovies();
  }, []);

  return (
    <div className="movies-page">
      <h2>Available Movies</h2>
      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
