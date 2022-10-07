import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import TodaysWeather from "../components/TodaysWeather";

describe("<TodaysWeather/>", () => {
  const props = {
    city: {
      id: 2643743,
      name: "London",
      state: "",
      country: "GB",
      coord: {
        lon: -0.12574,
        lat: 51.50853,
      },
    },
    minMaxTemp: {
      min: "5",
      max: "17",
    },
  };
  it("render the TodaysWeather Component", async () => {
    const { container } = render(
      <Router>
        <TodaysWeather {...props} />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it("render the city name with country", async () => {
    const { getByTestId } = render(
      <Router>
        <TodaysWeather {...props} />
      </Router>
    );

    const placeName = getByTestId("city-country");
    expect(placeName.textContent).toBe("London (GB)");
  });

  it("render the min and max temperature", async () => {
    const { getByTestId } = render(
      <Router>
        <TodaysWeather {...props} />
      </Router>
    );

    const minTemp = getByTestId("min-temp");
    expect(minTemp.textContent).toBe("5°C");

    const maxTemp = getByTestId("max-temp");
    expect(maxTemp.textContent).toBe("17°C");
  });
});
