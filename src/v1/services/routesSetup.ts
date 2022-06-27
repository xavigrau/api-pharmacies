import { app } from "../server";

// * Import routes file
import locations from '../routes/features';

export default () => {

    // * Routes
    app.use("/city", locations);
    app.use("/all",locations);


}