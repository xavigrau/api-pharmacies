import mongoose, { Schema } from 'mongoose'

const featureSchema = new Schema( {
    type: { type: String, required: true },
    geometry: {
        type: { type: String, required: true },
        coordinates: Array<number>
    },
    properties: {
        cnn: String,
        caac: String,
        country: String,
        comAut: String,
        province: String,
        town: String,
        name: String,
        pharmacy_name: String,
        address: String,
        postalCode: String,
        schedule: {
            periods: [{
                open: {
                    day: Number,
                    time: String
                },
                close: {
                    day: Number,
                    time: String
                }
            }],
            weekday_text: Array<string>
        },
        formatted_phone_number: String,
        place_id: String,
        international_phone_number: String
    }
})

// * Export the model and return the interface
export default mongoose.model('Feature', featureSchema);