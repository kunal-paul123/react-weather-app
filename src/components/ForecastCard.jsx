import "../styles/ForecastCard.css";

const ForecastCard = ({ forecast }) => {
  return (
    <div className="forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {forecast.map((day, i) => (
          <div className="forecast-card" key={i}>
            <p>
              {new Date(day.date)
                .toDateString()
                .split(" ")
                .slice(0, 3)
                .join(" ")}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt={day.desc}
            />
            <h4>{Math.round(day.temp)}°C</h4>
            <p>{day.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;
