/*
import './App.css';
import SearchIcon from './search.svg';

import MovieCard from './MovieCard';

import React, { useState, useEffect } from 'react';


const API_URL = 'https://www.omdbapi.com/?apikey=51972809&';
const App = () => {
  const [movies,setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('spiderman');
  
  },[]);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className = "search">
       < input placeholder = "search for movies"
        value = {searchTerm}
        onChange = {(e) => setSearchTerm(e.target.value)}
        />
        <img src = {SearchIcon}
         alt = "search" 
         onClick = { () => searchMovies(searchTerm)}
         />
    </div>
    {
      movies?.length > 0
      ?(
        <div className="container">
          {movies.map((movie) => 
         (< MovieCard movie ={movie} />
          ))}
        
        </div>
      ) : (
    <div calssName = "empty">
      <h2>No movies found</h2>

    </div>
      )
    }
    </div>
  );
}

export default App;

*/

import './App.css';
import MovieCard from './MovieCard';
import React, { useState, useEffect } from 'react';

const API_URL = 'https://www.omdbapi.com/?apikey=51972809&';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  // Perform initial search when the component mounts
  useEffect(() => {
    searchMovies('spiderman');
  }, []);

  // Handle Enter key press to trigger search
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchMovies(searchTerm);  // Trigger search when Enter key is pressed
    }
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}  // Added this to trigger search on Enter
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
