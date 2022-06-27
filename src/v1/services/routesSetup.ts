import { app } from "../server";

// * Import routes file
import feature from '../routes/features';

export default () => {

    // * Routes
    app.use("/v1/city/", feature);
    app.use("/v1/all/", feature);


}