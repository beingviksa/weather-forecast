import FamousPlaces from "./FamousPlaces";
import SearchBox from "./SearchBox";

const Home = () => {
  return (
    <div className="container">
      <SearchBox />
      <FamousPlaces />
    </div>
  );
};

export default Home;
