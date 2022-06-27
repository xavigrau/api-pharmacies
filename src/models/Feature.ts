import mongoose, { Schema } from 'mongoose'

const featureSchema = new Schema( {
    type: String,
    geometry: {
        type: String,
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
        tel: String,
        place_id: String,
        schedule:String,
        weekday_text:Array<string>
    }
})

/*const FeatureSchema: Schema = new Schema({
    type: { type: String, required: true },
    geometry: {
        type: { type: String, required: true },
        coordinates: { type: Array, required: true }
    },
    properties: {
        cnn: { type: String, required: true },
        caac: { type: String, required: true },
        country: { type: String, required: true },
        comAut: { type: String, required: true },
        province: { type: String, required: true },
        town: { type: String, required: true },
        name: { type: String, required: true },
        pharmacy_name: { type: String, required: true },
        postalCode: { type: String, required: true },
        tel: { type: String, required: true },
        place_id: { type: String, required: true },
        address: { type: String, required: true },
        schedule: { type: Array, required: true },
        weekday_text: { type: String, required: true },
    }
})*/

// * Export the model and return the interface
export default mongoose.model('Feature', featureSchema);