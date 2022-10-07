import { render, act, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import { WeatherContext } from "../weatherContext";

describe("<SearchBox/>", () => {
  const props = {
    showBackButton: false,
  };

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
        {
          id: 4030939,
          name: "London Village",
          state: "",
          country: "KI",
          coord: {
            lon: -157.475021,
            lat: 1.98487,
          },
          slug: "london-village-4030939",
        },
        {
          id: 4119617,
          name: "London",
          state: "AR",
          country: "US",
          coord: {
            lon: -93.25296,
            lat: 35.328972,
          },
          slug: "london-4119617",
        },
        {
          id: 4298960,
          name: "London",
          state: "KY",
          country: "US",
          coord: {
            lon: -84.08326,
            lat: 37.128979,
          },
          slug: "london-4298960",
        },
      ],
    ],
    setSearchResults: jest.fn(),
  };
  it("render the SearchBox Component", async () => {
    const { container } = render(
      <WeatherContext.Provider value={contextData}>
        <Router>
          <SearchBox {...props} />
        </Router>
      </WeatherContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should set the results on change event", async () => {
    const { getByTestId } = render(
      <WeatherContext.Provider value={contextData}>
        <Router>
          <SearchBox {...props} />
        </Router>
      </WeatherContext.Provider>
    );

    const searchText = getByTestId("search-box");
    act(() => {
      fireEvent.change(searchText, { target: { value: "London" } });
    });

    expect(contextData.setSearchResults).toBeCalled();
  });
});
