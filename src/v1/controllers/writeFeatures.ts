import {Request, Response} from "express";

export function postFeature(req: Request, res: Response) {

    // Add one feature
    res.status(200).send('Add one feature');

}

export function postMultipleFeatures(req: Request, res: Response) {

    // Add multiple feature
    res.status(200).send('Add multiple features');

}