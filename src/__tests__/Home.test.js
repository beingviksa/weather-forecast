import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home";
import { WeatherContext } from "../weatherContext";

describe("<Home/>", () => {
  const contextData = {
    searchResults: [
      [
        {
          id: 2643734,
          name: "Londonderry County Borough",
          state: "",
          country: "GB",
          coord: {
            lon: -7.30917,
            lat: 54.997211,
          },
          slug: "londonderry-county-borough-2643734",
        },
        {
          id: 2643743,
          name: "London",
          state: "",
          country: "GB",
          coord: {
            lon: -0.12574,
            lat: 51.50853,
          },
          slug: "london-2643743",
        },
      ],
    ],
    setSearchResults: jest.fn(),
  };
  it("render the Home Page", async () => {
    const { container } = render(
      <WeatherContext.Provider value={contextData}>
        <Router>
          <Home />
        </Router>
      </WeatherContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("render search box and famous places on home page", async () => {
    const { getByTestId } = render(
      <WeatherContext.Provider value={contextData}>
        <Router>
          <Home />
        </Router>
      </WeatherContext.Provider>
    );

    const searchBox = getByTestId("search-box");
    expect(searchBox).toBeInTheDocument();

    const famousPlaces = getByTestId("famous-places");
    expect(famousPlaces).toBeInTheDocument();
  });
});
