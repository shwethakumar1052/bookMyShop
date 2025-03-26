import React, { useState } from 'react';
import { useBooking } from '../contexts/BookingContext';
import { motion } from 'framer-motion';

const SeatSelection = () => {
  const { state, dispatch } = useBooking();
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Access context values from state
  const { selectedMovie, selectedTheater, selectedShowtime } = state;

  if (!selectedMovie || !selectedTheater || !selectedShowtime) {
    return <div>Please select a movie, theater, and showtime first.</div>;
  }

  // Generate seat map
  const seats = Array.from({ length: 8 }, (_, rowIndex) => 
    Array.from({ length: 10 }, (_, seatIndex) => ({
      id: `${String.fromCharCode(65 + rowIndex)}${seatIndex + 1}`,
      occupied: Math.random() < 0.2 // 20% chance of being occupied
    }))
  );

  const handleSeatSelect = (seat) => {
    const newSelectedSeats = selectedSeats.includes(seat.id)
      ? selectedSeats.filter(s => s !== seat.id)
      : [...selectedSeats, seat.id];
    
    setSelectedSeats(newSelectedSeats);
  };

  const handleConfirmSeats = () => {
    dispatch({ type: 'SELECT_SEATS', payload: selectedSeats });
  };

  return (
    <div className="seat-selection">
      <h2>Select Seats - {selectedMovie.title}</h2>
      <p>Theater: {selectedTheater.name} | Showtime: {selectedShowtime}</p>
      
      <div className="seat-map">
        {seats.map((row, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {row.map(seat => (
              <motion.button
                key={seat.id}
                className={`seat ${
                  seat.occupied ? 'occupied' : 
                  selectedSeats.includes(seat.id) ? 'selected' : ''
                }`}
                disabled={seat.occupied}
                whileHover={{ scale: seat.occupied ? 1 : 1.1 }}
                onClick={() => handleSeatSelect(seat)}
              >
                {seat.id}
              </motion.button>
            ))}
          </div>
        ))}
      </div>

      <div className="seat-info">
        <div>Selected Seats: {selectedSeats.join(', ')}</div>
        <button 
          onClick={handleConfirmSeats}
          disabled={selectedSeats.length === 0}
        >
          Confirm Seats
        </button>
      </div>
    </div>
  );
};

export default SeatSelection;