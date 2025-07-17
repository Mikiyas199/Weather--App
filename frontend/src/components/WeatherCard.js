import React from 'react';

function WeatherCard({ data }) {
  if (!data) return null;
  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <p>{data.weather[0].main} - {data.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
      />
      <p>Temperature: {Math.round(data.main.temp)}°C</p>
      <p>Feels Like: {Math.round(data.main.feels_like)}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
