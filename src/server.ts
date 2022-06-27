import express, { Request, Response} from 'express';
export const app = express();
const fileUpload = require('express-fileupload');
const bodyParser = require("body-parser");
const cors = require('cors');

import expressLayouts from 'express-ejs-layouts';
// * Connection file
import { initDatabase } from "./connection";

// * Import config file
import { config } from "./config/config";

// * Import routes file
import locations from './routes/locations';
import uploads from './routes/upload';

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(fileUpload({
    createParentPath: true
}));
app.use(express.static(__dirname + '/public'));

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
// * Routes
app.use("/city", locations);
app.use("/all",locations);
app.use("/",uploads);


//Form
app.get("/submit",function (req, res){
    res.render('form.ejs')
});

// * Database and start server
initDatabase(config.PORT, config.URI, app);