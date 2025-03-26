export const fetchMovies = async () => {
  return [
    { 
      id: 1, 
      title: 'Avengers: Endgame', 
      genre: 'Action/Sci-Fi', 
      poster: '/images/avengers.jpg' 
    },
    { 
      id: 2, 
      title: 'Inception', 
      genre: 'Sci-Fi/Thriller', 
      poster: '/images/inception.jpg' 
    },
    { 
      id: 3, 
      title: 'The Dark Knight', 
      genre: 'Action/Crime', 
      poster: '/images/dark knight.jpeg' 
    },
    { 
      id: 4, 
      title: 'Interstellar', 
      genre: 'Sci-Fi/Drama', 
      poster: '/images/interstellar.jpg' 
    }
  ];
};

export const fetchTheaters = async () => {
  return [
    { 
      id: 1, 
      name: 'IMAX Theater', 
      location: 'Downtown', 
      screens: 10 
    },
    { 
      id: 2, 
      name: 'Cineplex', 
      location: 'Uptown', 
      screens: 8 
    },
    { 
      id: 3, 
      name: 'Regal Cinemas', 
      location: 'City Center', 
      screens: 12 
    },
    { 
      id: 4, 
      name: 'PVR Cinemas', 
      location: 'Mall Road', 
      screens: 6 
    }
  ];
};
