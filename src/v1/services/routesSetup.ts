import { app } from "../server";

// * Import routes file
import readFeatures from '../routes/readFeatures';
import writeFeatures from "../routes/writeFeatures";

export default () => {

    // * Routes
    app.use("/v1/", readFeatures);
    app.use("/v1/", writeFeatures);


}