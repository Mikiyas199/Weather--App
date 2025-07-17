import React from 'react';

function Forecast({ data }) {
  if (!data) return null;
  // Show forecast every 8 steps (every 24h)
  const daily = data.list.filter((_, i) => i % 8 === 0);

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-list">
        {daily.map((item, idx) => (
          <div className="forecast-item" key={idx}>
            <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
            />
            <p>{item.weather[0].main}</p>
            <p>{Math.round(item.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
