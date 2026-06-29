const express = require("express")
const path = require("path")
require('dotenv').config({ path: path.join(__dirname, '../.env') })
const app = express()

const PORT = process.env.PORT || 3000


const geo = require("./data/geo")
const forecast = require("./data/forcastcode")

// Serve static files from 'puplic' folder
app.use(express.static(path.join(__dirname, '../puplic')))



app.get("/weather", (req, res) => {

    console.log('Address:', req.query.address)
    
    if (!req.query.address){
        return res.send({
            error: "You must provide an address"
        })
    }

    geo(req.query.address , (error , data) => {
        if (error){
            console.log('Geo callback error:', error)
            return res.send({error})
        }

        console.log('Geo callback data:', data)

    forecast(data.latitude , data.longitude , (error , forecastData) => {
        if (error){
            console.log('Forecast callback error:', error)
            return res.send({error})
        }

        console.log('Forecast callback data:', forecastData)

        res.send({
            longitude: data.longitude,
            latitude: data.latitude,
            location: data.location,
            temperature: forecastData.temperature
        })
    
        })

    })
})






app.listen(PORT , () => {
    console.log(`Server is up on port ${PORT}`)
})


