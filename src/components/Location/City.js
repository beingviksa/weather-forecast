import { useParams } from "react-router-dom";
import Weather from "./Weather";

import { getCity } from "../../utills/helper";

const City = () => {
  const { city } = useParams();

  return <Weather city={getCity(city)} />;
};

export default City;
