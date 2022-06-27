import express, { Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export const app = express();

// * Connection file
import { initDatabase } from "./connection";

// * Import config file
import { config } from "./v1/config/config";


// * EJS
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:8080'
}))

// * Testing endpoint
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("I'm working!");
});

// * Import routes file
import locations from './v1/routes/locations';

// * Routes
app.use("/city", locations);
app.use("/all",locations);


// * Database and start server
initDatabase(config.PORT, config.URI, app);