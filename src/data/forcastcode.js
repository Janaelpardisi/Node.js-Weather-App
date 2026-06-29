const request = require('request');

const forcast = (latitude, longitude, callback) => {
    const forcasturl = "https://api.weatherstack.com/current?access_key=" + process.env.WEATHERSTACK_KEY + "&query=" + latitude + "," + longitude;
    
    console.log('Forecast URL:', forcasturl);
    console.log('Latitude:', latitude, 'Longitude:', longitude);
    
    request({ url: forcasturl, json: true }, (error, response) => {
        if (error) {
            console.log('Forecast Error:', error);
            callback("unable to connect weather api service", undefined);
        } else if (response.body.error) {
            console.log('Weather API Error:', response.body.error);
            callback(response.body.error.info, undefined);
        } else {
            console.log('Weather Data:', response.body.current);
            callback(undefined, {
                location: response.body.location.name,
                description: response.body.current.weather_descriptions[0],
                temperature: response.body.current.temperature
            });
        }
    });
};

module.exports = forcast;