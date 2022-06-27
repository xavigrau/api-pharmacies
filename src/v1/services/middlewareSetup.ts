import bodyParser from "body-parser";
import { app } from "../server";
import cors from 'cors';

export default () => {

    // * EJS
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(cors({
        origin: 'http://localhost:8080'
    }));

}