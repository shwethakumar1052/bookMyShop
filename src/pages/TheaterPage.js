import React, { useEffect, useState } from 'react';
import TheaterSelection from '../components/TheaterSelection';
import { fetchTheaters } from '../utils/api';

const TheaterPage = () => {
  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    const loadTheaters = async () => {
      const theaterData = await fetchTheaters();
      setTheaters(theaterData);
    };
    loadTheaters();
  }, []);

  return (
    <div className="theater-page">
      <h2>Select a Theater</h2>
      <TheaterSelection theaters={theaters} />
    </div>
  );
};

export default TheaterPage;
