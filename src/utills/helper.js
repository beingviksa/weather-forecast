import cities from "../lib/city.list.json";

export const getCity = (param) => {
  const cityParams = param.trim();
  const splitCity = cityParams.split("-");
  const id = splitCity[splitCity.length - 1];

  if (!id) {
    return null;
  }

  const city = cities.find((city) => city.id.toString() === id);
  if (city) {
    return city;
  } else {
    return null;
  }
};

export const getTodaysMinMaxTemp = (weatherInfo) => {
  if (weatherInfo) {
    const minTemp = Math.min(...weatherInfo);
    const maxTemp = Math.max(...weatherInfo);
    return {
      minTemp: minTemp,
      maxTemp: maxTemp,
    };
  } else {
    return;
  }
};

export const getConsolidatedTempData = (data) => {
  const result = [];
  if (Object.keys(data).length > 0) {
    for (let i = 0; i < 24; i++) {
      const timeData = data["timeData"][i];
      const temperatureData = data["temperatureData"][i];
      const humidityData = data["humidityData"][i];
      const rainData = data["rainData"][i];

      result.push({
        timeData,
        temperatureData,
        humidityData,
        rainData,
      });
    }
  }

  return result;
};

export function formatAMPM(inputDate) {
  const date = new Date(inputDate);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
