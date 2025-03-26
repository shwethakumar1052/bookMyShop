import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-logo">BookMyShow</Link>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/theaters">Theaters</Link>
      </nav>
    </header>
  );
};

export default Header;

