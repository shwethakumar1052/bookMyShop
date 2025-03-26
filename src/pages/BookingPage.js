import React from 'react';
import SeatSelection from '../components/SeatSelection';
import { useBooking } from '../contexts/BookingContext';

const BookingPage = () => {
  const { selectedMovie, selectedTheater } = useBooking();

  return (
    <div className="booking-page">
      <h2>Booking Page</h2>
      {selectedMovie && selectedTheater ? (
        <SeatSelection />
      ) : (
        <p>Please select a movie and theater first.</p>
      )}
    </div>
  );
};

export default BookingPage;