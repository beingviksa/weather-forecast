import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import Weather from "../components/Location/Weather";
import { WeatherContext } from "../weatherContext";

afterEach(() => {
  axios.get.mockClear();
});

describe("<Weather/>", () => {
  const props = {
    city: {
      name: "Paris",
      country: "FR",
      id: 2968815,
      coord: {
        lat: 48.853401,
        lon: 2.3486,
      },
    },
  };
  const contextData = {
    setSearchResults: jest.fn(),
    isLoading: false,
    setIsLoading: jest.fn(),
    error: "",
    setError: jest.fn(),
  };
  axios.get.mockResolvedValueOnce({
    data: {
      latitude: 48.86,
      longitude: 2.3399997,
      generationtime_ms: 0.6700754165649414,
      utc_offset_seconds: 0,
      timezone: "GMT",
      timezone_abbreviation: "GMT",
      elevation: 43,
      hourly_units: {
        time: "iso8601",
        temperature_2m: "°C",
        relativehumidity_2m: "%",
        rain: "mm",
      },
      hourly: {
        time: [
          "2022-10-12T00:00",
          "2022-10-12T01:00",
          "2022-10-12T02:00",
          "2022-10-12T03:00",
          "2022-10-12T04:00",
          "2022-10-12T05:00",
          "2022-10-12T06:00",
        ],
        temperature_2m: [9, 8.7, 8.4, 7.4, 7, 6.6, 6.4],
        relativehumidity_2m: [85, 85, 85, 88, 89, 91, 93],
        rain: [0, 0, 0, 0, 0, 0, 0],
      },
    },
  });
  it("render the Weather Componenent", async () => {
    const { container } = render(
      <WeatherContext.Provider value={contextData}>
        <Router>
          <Weather {...props} />
        </Router>
      </WeatherContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("show loading spinner when it is fetching data", () => {
    render(
      <WeatherContext.Provider value={contextData}>
        <Router>
          <Weather {...props} />
        </Router>
      </WeatherContext.Provider>
    );

    expect(contextData.setIsLoading).toHaveBeenCalledWith(true);
  });

  it("fetch the weather data as per the selected city", async () => {
    const { lat, lon } = props.city.coord;

    render(
      <WeatherContext.Provider value={contextData}>
        <Router>
          <Weather {...props} />
        </Router>
      </WeatherContext.Provider>
    );

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,rain`;

    expect(axios.get).toHaveBeenCalledWith(url);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
