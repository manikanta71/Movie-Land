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