import { useState, useEffect } from "react";
import axios from "axios";
import { useWeatherContext } from "../../weatherContext";
import TodaysWeather from "../TodaysWeather";
import HourlyWeather from "../HourlyWeather";
import SearchBox from "../SearchBox";
import Error from "../Error";
import Loading from "../Loading";
import {
  getTodaysMinMaxTemp,
  getConsolidatedTempData,
} from "../../utills/helper";

const Weather = ({ city }) => {
  const { setConsolidatedData, isLoading, setIsLoading, error, setError } =
    useWeatherContext();
  const [minMaxTemp, setMinMaxTemp] = useState({ min: "", max: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${city.coord.lat}&longitude=${city.coord.lon}&hourly=temperature_2m,relativehumidity_2m,rain`
        );
        setIsLoading(false);
        const weatherData = res.data;
        if (weatherData) {
          getHourlyWeather(weatherData?.hourly);
        }
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    fetchData();
  }, [city]);

  const getHourlyWeather = (hourlyData) => {
    // filterd 24 hours data
    const timeData = hourlyData?.time.slice(0, 24);
    const temperatureData = hourlyData?.temperature_2m.slice(0, 24);
    const humidityData = hourlyData?.relativehumidity_2m.slice(0, 24);
    const rainData = hourlyData?.rain.slice(0, 24);

    const hourlyWeatherInfo = {
      timeData,
      temperatureData,
      humidityData,
      rainData,
    };

    const todaysTemp = getTodaysMinMaxTemp(temperatureData);
    if (todaysTemp) {
      setMinMaxTemp({
        min: todaysTemp.minTemp.toFixed(),
        max: todaysTemp.maxTemp.toFixed(),
      });
    }

    if (!!hourlyWeatherInfo.timeData) {
      const data = getConsolidatedTempData(hourlyWeatherInfo);
      setConsolidatedData(data);
    }
  };

  if (!!error) {
    return <Error error={error} />;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <SearchBox showBackButton />
      <TodaysWeather city={city} minMaxTemp={minMaxTemp} />
      <HourlyWeather />
    </div>
  );
};

export default Weather;
