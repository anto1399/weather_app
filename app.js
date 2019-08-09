const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Geocode chaining with the forcast info. return if error and don't proceed
geocode.getGeocodeInfo("Kumasi Ghana", (error, geocodeData) => {
  if (error) {
    return console.log(error);
  }
  forecast.getForecastInfo(
    geocodeData.latitude,
    geocodeData.longitude,
    (error, forcastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(geocodeData.location);
      console.log(forcastData.info);
    }
  );
});
