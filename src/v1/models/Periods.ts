import mongoose, { Schema } from 'mongoose'

const periodsSchema = new Schema( {
    open: {
        day: Number,
        time: String
    },
    close: {
        day: Number,
        time: String
    }
});

// * Export the model and return the interface
export default mongoose.model('Periods', periodsSchema);