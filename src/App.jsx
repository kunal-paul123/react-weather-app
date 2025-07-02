import "./App.css";
import ForecastCard from "./components/ForecastCard";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import useWeather from "./hooks/useWeather";

function App() {
  const { weather, forecast, error, getWeatherByCity } = useWeather();

  return (
    <>
      <Header />
      <SearchBar onSearch={getWeatherByCity} />
      {error && <p style={{ color: "white", textAlign: "center" }}>{error}</p>}
      {weather && <WeatherCard data={weather} />}
      {forecast.length > 0 && <ForecastCard forecast={forecast} />}
    </>
  );
}

export default App;
