const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const destinationSchema = new Schema({
    airport: { type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    arrival: { type: Date }
})


const flightSchema = new Schema({
    airline: { type: String, enum: ['American', 'Southwest', 'United'], required: true },
    airport: { type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN' },
    flightNo: { type: Number, min: 0, max: 9999 }, 
    departs: { type: Date, default: function (){
        const defaultYear = new Date();
        defaultYear.setFullYear(defaultYear.getFullYear() + 1)
        return defaultYear; 
    }},
    destinations: [destinationSchema]
})






module.exports = mongoose.model('Flight', flightSchema)