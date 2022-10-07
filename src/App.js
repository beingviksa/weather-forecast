import { Routes, Route } from "react-router-dom";
import "./App.css";
import City from "./components/Location/City";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="location/:city" element={<City />} />
    </Routes>
  );
}

export default App;
