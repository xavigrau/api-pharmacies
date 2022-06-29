import {Request, Response} from "express";
import Feature from "../models/Feature";

export async function postFeature(req: Request, res: Response) {

    const newFeature = new Feature(req.body);

    const exist = await Feature.find({ "properties.cnn": newFeature.properties.cnn });

    if (exist.length > 0) {
        return res.status(500).send({message: `This feature is already in the databases`});
    }

    await newFeature.save((err, document) => {

        if (err) {
            console.log(err);
            return res.status(500).send({ message: `Error saving feature ${err.message}` });
        }

        return res.status(200).send({ message: 'Successfully saved', document: document });
    });

}