import React from "react";
import "../styles/WeatherCard.css";
import { IoLocationOutline } from "react-icons/io5";

function WeatherCard({ data }) {
  const {
    name,
    weather,
    main: { temp, feels_like, humidity, pressure },
    wind: { speed },
  } = data;

  return (
    <div className="weather-card">
      <div className="card-top">
        <div className="temp-section">
          <h2>
            {Math.round(temp)}
            &deg;C
          </h2>
        </div>
        <div className="weather-info">
          <h3>
            <IoLocationOutline />
            {name}
          </h3>
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="icon"
          />
          <p>{weather[0].description}</p>
        </div>
      </div>

      <div className="card-bottom">
        <div className="stat">
          <p>Feels like</p>
          <h4>
            {Math.round(feels_like)}
            &deg;C
          </h4>
        </div>
        <div className="stat">
          <p>Humidity</p>
          <h4>{humidity}%</h4>
        </div>
        <div className="stat">
          <p>Wind Speed</p>
          <h4>{speed} m/s</h4>
        </div>
        <div className="stat">
          <p>Pressure</p>
          <h4>{pressure} hPa</h4>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
