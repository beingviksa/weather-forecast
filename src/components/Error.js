import { useNavigate } from "react-router-dom";
const Error = ({ error }) => {
  const navigate = useNavigate();
  return (
    <div className="container error">
      <h1>Something went wrong :(</h1>
      <p>{error}</p>
      <button onClick={() => navigate("/")}>Back to home</button>
    </div>
  );
};

export default Error;
