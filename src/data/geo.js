const request = require('request');

const geo = (address , callback) => {
    const geourl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=" + process.env.MAPBOX_TOKEN
    
    console.log('Mapbox URL:', geourl);
    console.log('Mapbox Token:', process.env.MAPBOX_TOKEN);

    request ({url : geourl , json : true} , (error , response) => {
        if (error){
            console.log('Geo Error:', error);
            callback ("unable to connect geocode service" , undefined)
        }else if (response.body.message)  {
            console.log('Mapbox Message:', response.body.message);
            callback (response.body.message , undefined )
        } else if (response.body.features.length == 0) {
             callback("Unable to find location" , undefined)
        } else {
            console.log('Geo Data:', response.body.features[0]);

            callback(undefined , {
                 longitude : response.body.features[0].center[0],
                 latitude : response.body.features[0].center[1],
                 location : response.body.features[0].place_name
            })
        }
    })
}

module.exports = geo