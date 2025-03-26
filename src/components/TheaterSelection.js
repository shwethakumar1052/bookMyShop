import React from 'react';
import { useBooking } from '../contexts/BookingContext';

const theaters = [
  { 
    id: 1, 
    name: 'PVR Cinemas', 
    location: 'City Center',
    showtimes: ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM', '10:00 PM']
  },
  { 
    id: 2, 
    name: 'INOX', 
    location: 'Downtown',
    showtimes: ['11:00 AM', '2:00 PM', '5:00 PM', '8:00 PM', '11:00 PM']
  }
];

const TheaterSelection = () => {
  const { 
    selectedMovie, 
    selectedTheater, 
    selectedShowtime, 
    setSelectedTheater,
    setSelectedShowtime,
    resetSeats 
  } = useBooking();

  // Ensure a movie is selected before proceeding
  if (!selectedMovie) {
    return <div>Please select a movie first.</div>;
  }

  const handleTheaterAndShowtimeSelect = (theater, showtime) => {
    // Reset seats when changing theater/showtime
    if (selectedTheater?.id !== theater.id || selectedShowtime !== showtime) {
      resetSeats();
    }

    setSelectedTheater(theater);
    setSelectedShowtime(showtime);
  };

  return (
    <div className="theater-selection">
      <h2>Select Theater for {selectedMovie.title}</h2>
      
      {theaters.map(theater => (
        <div key={theater.id} className="theater-card">
          <h3>{theater.name}</h3>
          <p>{theater.location}</p>
          <div className="showtimes">
            {theater.showtimes.map(showtime => (
              <button 
                key={showtime}
                className={selectedTheater?.id === theater.id && selectedShowtime === showtime ? "selected" : ""}
                onClick={() => handleTheaterAndShowtimeSelect(theater, showtime)}
              >
                {showtime}
              </button>
            ))}
          </div>
        </div>
      ))}

      {selectedTheater && selectedShowtime && (
        <div className="selection-info">
          <p><strong>Selected Theater:</strong> {selectedTheater.name}</p>
          <p><strong>Showtime:</strong> {selectedShowtime}</p>
        </div>
      )}
    </div>
  );
};

export default TheaterSelection;
