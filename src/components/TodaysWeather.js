const TodaysWeather = ({ city, minMaxTemp }) => {
  const { name, country } = city;
  return (
    <div className="todays-forecast">
      <h1 data-testid="city-country">
        {name} {country ? `(${country})` : ""}
      </h1>
      <section>
        <div className="temp-details">
          <span className="temp-label">Min.</span>
          <span className="min-temp" data-testid="min-temp">
            {minMaxTemp.min}&deg;C
          </span>
        </div>
        <div className="temp-details">
          <span className="temp-label">Max.</span>
          <span className="max-temp" data-testid="max-temp">
            {minMaxTemp.max}&deg;C
          </span>
        </div>
      </section>
    </div>
  );
};

export default TodaysWeather;
