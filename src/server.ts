import express, { Request, Response} from 'express';
export const app = express();
const server = express();

// * Connection file
import { initDatabase } from "./connection";

// * Import config file
import { config } from "./config/config";

// * Import routes file
import locations from './routes/locations';

// * Testing endpoint
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("I'm working!");
});
// * Routes
app.use("/city", locations);

// * Database and start server
initDatabase(config.PORT, config.URI, app);