import { app } from "../server";

// * Import routes file
import locations from '../routes/features';

export default () => {

    // * Routes
    app.use("/v1/city/", locations);
    app.use("/v1/all/",locations);


}