import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';
import Weather from './Weather';

function App() {
  const [query, setQuery] = useState('');
  const [forecast, setForecast] = useState({"list" : []});

  const search = async (e) => {
    if (e.key === 'Enter'){
      const data = await fetchWeather(query);
      setForecast(data);
      setQuery('');
      document.activeElement.blur();
    }
  }
  return (
    <div className="main-container">
      <h1>5 days Weather Forecast</h1>
      <input
        type="text"
        className="search" 
        placeholder="Search for a Town..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {forecast.list.map(weather => {
        return <Weather key={weather.dt} weather={weather} city={forecast.city} />
      })}
    </div>
  );
}

export default App;
