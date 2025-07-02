import React, { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city.trim());
      setCity("");
    }
  };

  return (
    <form className="search-bar" onSubmit={searchHandler}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
