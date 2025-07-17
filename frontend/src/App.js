import React, { useState } from 'react';
import { fetchWeather } from './api';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';
import Loader from './components/Loader';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (searchCity) => {
    setCity(searchCity);
    setLoading(true);
    setError('');
    try {
      const data = await fetchWeather(searchCity);
      setWeatherData(data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch data');
      setWeatherData(null);
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1>Advanced Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <>
          <WeatherCard data={weatherData.current} />
          <Forecast data={weatherData.forecast} />
        </>
      )}
    </div>
  );
}

export default App;
