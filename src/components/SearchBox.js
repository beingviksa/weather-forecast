import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import cities from "../lib/city.list.json";
import { useWeatherContext } from "../weatherContext";

const SearchBox = ({ showBackButton = false }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { searchResults, setSearchResults } = useWeatherContext();

  const onChange = (e) => {
    const { value } = e.target;
    setQuery(value);

    let matchingCities = [];

    if (value.length > 3) {
      for (let city of cities) {
        if (matchingCities.length >= 5) {
          break;
        }
        const match = city.name.toLowerCase().startsWith(value.toLowerCase());
        if (match) {
          const cityData = {
            ...city,
            slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}`,
          };
          matchingCities.push(cityData);
        }
      }
    }
    setSearchResults(matchingCities);
  };

  const handleClick = (city) => {
    setQuery("");
    navigate(`/location/${city.slug}`);
  };

  return (
    <div className="search">
      {showBackButton && (
        <Link to="/" className="back-link">
          ← Home
        </Link>
      )}

      <input
        type="text"
        value={query}
        onChange={onChange}
        placeholder="Seach for a city..."
        data-testid="search-box"
      />

      {query.length > 3 && (
        <ul>
          {searchResults.length > 0 ? (
            searchResults.map((city, index) => (
              <li key={index}>
                <a onClick={() => handleClick(city)}>
                  {city.name}
                  {city.state ? `, ${city.state}` : ""}
                  <span>({city.country})</span>
                </a>
              </li>
            ))
          ) : (
            <li className="search__no-results">No results</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
