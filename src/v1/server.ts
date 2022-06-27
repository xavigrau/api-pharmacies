import express, { Request, Response} from 'express';

// * Import
import middlewareSetup from "./services/middlewareSetup";
import routesSetup from "./services/routesSetup";

export const app = express();

// * Connection file
import { initDatabase } from "./connection";

// * Import config file
import { config } from "./config/config";

// * Middlewares setup
middlewareSetup();

// * Routes setup
routesSetup();

// * Testing endpoint
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("I'm working!");
});

// * Database and start server
initDatabase(config.PORT, config.URI, app);