import { useState, useEffect } from "react";
import {
  fetchWeatherByCity,
  fetchForecastByCity,
  fetchWeatherByCoords,
} from "../api/weather";

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  const getWeatherByCity = async (city) => {
    try {
      const w = await fetchWeatherByCity(city);
      const f = await fetchForecastByCity(city);
      setWeather(w);
      setForecast(groupForecastByDay(f.list));

      setError("");
    } catch (e) {
      setError("City not found");
      setWeather(null);
      setForecast([]);
    }
  };

  const getWeatherByCoords = async (lat, lon) => {
    try {
      const w = await fetchWeatherByCoords(lat, lon);
      const f = await fetchForecastByCity(w.name);
      setWeather(w);
      setForecast(groupForecastByDay(f.list));
      setError("");
    } catch (e) {
      setError("Unable to fetch location weather");
      setWeather(null);
      setForecast([]);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => getWeatherByCoords(coords.latitude, coords.longitude),
      () => setError("Location permission denied")
    );
  }, []);

  return { weather, forecast, error, getWeatherByCity };
};

const groupForecastByDay = (data) => {
  const daily = {};
  data.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!daily[date]) daily[date] = [];
    daily[date].push(item);
  });
  return Object.entries(daily)
    .slice(0, 5)
    .map(([date, items]) => {
      const { main, weather } = items[0];
      return {
        date,
        temp: main.temp,
        icon: weather[0].icon,
        desc: weather[0].main,
      };
    });
};

export default useWeather;
