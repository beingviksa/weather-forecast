import { formatAMPM } from "../utills/helper";
import { useWeatherContext } from "../weatherContext";
const HourlyWeather = () => {
  const { consolidatedData } = useWeatherContext();
  if (!consolidatedData) {
    return <h1>...Loading</h1>;
  }
  return (
    <div className="hourly-forecast-container">
      {consolidatedData.map((i, index) => {
        return (
          <div className="hourly-forecast-container__content" key={index}>
            <p className="temp">{i.temperatureData}&deg;C</p>
            <div className="temp-value">
              <span className="temp-label">Time</span>
              <span>{formatAMPM(i.timeData)}</span>
            </div>
            <div className="temp-value">
              <span className="temp-label">Humidity</span>
              <span>{i.humidityData}%</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HourlyWeather;
