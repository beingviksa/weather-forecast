import spinner from "../images/spinner.gif";

const Loading = () => {
  return (
    <div data-testid="loding-spinner">
      <img
        src={spinner}
        style={{ width: "100px", margin: "100px auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};

export default Loading;
