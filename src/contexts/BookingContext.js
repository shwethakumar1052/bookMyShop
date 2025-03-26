import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Reset theater, showtime, and seats when a new movie is selected
  const resetBooking = () => {
    setSelectedTheater(null);
    setSelectedShowtime(null);
    setSelectedSeats([]);
  };

  // Reset seats when changing theater/showtime
  const resetSeats = () => {
    setSelectedSeats([]);
  };

  return (
    <BookingContext.Provider value={{
      selectedMovie, setSelectedMovie,
      selectedTheater, setSelectedTheater,
      selectedShowtime, setSelectedShowtime,
      selectedSeats, setSelectedSeats,
      resetBooking, resetSeats
    }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);

