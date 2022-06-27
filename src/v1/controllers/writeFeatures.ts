import {Request, Response} from "express";
import Feature from "../models/Feature";

export async function postFeature(req: Request, res: Response) {

    const newFeature = new Feature(req.body);

    await newFeature.save((err, document, [isSaveSuccessful]) => {

        if (err) {
            return res.status(500).send({ message: `Error saving feature ${err.message}` });
        }

        if (isSaveSuccessful === 1) {
            return res.status(200).send({ message: 'Successfully saved', document: document });
        }

        res.status(500).send({ message: `Unexpected error` });

    });

}