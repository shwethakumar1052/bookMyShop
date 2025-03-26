import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../contexts/BookingContext';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { setSelectedMovie } = useBooking();

  const handleBooking = () => {
    setSelectedMovie(movie);
    navigate(`/theaters?movieId=${movie.id}`);
  };

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <div className="movie-card-content">
        <div>
          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>
        </div>
        <button onClick={handleBooking}>Book Tickets</button>
      </div>
    </div>
  );
};

export default MovieCard;
