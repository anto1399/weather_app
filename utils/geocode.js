const request = require("request");

// Get Geocode inforamtion for a given address and use callbacks to interact
const getGeocodeInfo = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoia3R1dHUiLCJhIjoiY2p6M2F2Y2hxMDFqeTNvbTJqdGR6YjczMSJ9.4dqbKgBHW4ds78gLFAZOuQ";
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback(
        "Unable to connect to location service, Check network connection!",
        undefined
      );
    } else if (body.features.length === 0) {
      callback("Sorry, unable to find the specified location!", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = {
  getGeocodeInfo
};
