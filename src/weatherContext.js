import { createContext, useContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [consolidatedData, setConsolidatedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  return (
    <WeatherContext.Provider
      value={{
        searchResults,
        setSearchResults,
        consolidatedData,
        setConsolidatedData,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};
