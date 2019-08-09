const request = require("request");

const getForecastInfo = (latitude, longitude, callback) => {
  url =
    "https://api.darksky.net/forecast/428ba2f3114d94f61e1281b489a6ed3f/" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude) +
    "?units=si";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Sorry, there was problem connecting to weather!", undefined);
    } else if (response.body.error) {
      callback(
        "Sorry, unable to find the location, check the given lat & long values.",
        undefined
      );
    } else {
      callback(undefined, {
        info:
          response.body.daily.data[0].summary +
          " It is currently " +
          response.body.currently.temperature +
          " degrees out there." +
          " There is a " +
          response.body.currently.precipProbability +
          "% chance of rain in."
      });
    }
  });
};

module.exports = {
  getForecastInfo: getForecastInfo
};
