import React from "react";
import { Link } from "react-router-dom";

import LondonImage from "../images/london.jpg";
import ParisImage from "../images/paris.jpg";
import TokyoImage from "../images/tokyo.jpg";
import NewYorkImage from "../images/new-york.jpg";

const places = [
  {
    name: "London",
    image: LondonImage,
    url: "/location/london-2643743",
  },
  {
    name: "Paris",
    image: ParisImage,
    url: "/location/paris-2968815",
  },
  {
    name: "Tokyo",
    image: TokyoImage,
    url: "/location/tokyo-1850147",
  },
  {
    name: "New York",
    image: NewYorkImage,
    url: "/location/new-york-city-5128581",
  },
];

const FamousPlaces = () => {
  return (
    <div className="places" data-testid="famous-places">
      <div className="places__row">
        {places.length > 0 &&
          places.map((place, index) => (
            <div className="places__box" key={index}>
              <Link to={place.url}>
                <div className="places__image-wrapper">
                  <img src={place.image} alt={`${place.name}`} />
                </div>
                <span>{place.name}</span>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FamousPlaces;
