import bodyParser from "body-parser";
import { app } from "../server";
import cors from 'cors';
import morgan from 'morgan';

export default () => {

    // * Body Parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    // * Cors
    app.use(cors({
        origin: 'https://finda-demo.herokuapp.com'
    }));

    // * Morgan
    app.use(morgan('dev'));

}