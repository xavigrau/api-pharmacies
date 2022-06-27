import { Request, Response } from "express";
import Feature from "../models/Feature";
import { arrayToGeoJSON } from "../services/featuresService";

export async function getFeatureById(req: Request, res: Response) {

    await Feature.findById(req.params.id, (err, results) => {

        if (err) {
            return res.status(500).send({message: `Error getting features ${err.message}`});
        }
        if (results.length === 0) {
            return res.status(404).send({message: 'No results found'});
        }
        res.status(200).send(results);
    });
}

export async function getFeatureNearPoint(req: Request, res: Response) {

    const query = Feature.find({"geometry.type": "Point"})
        .where("geometry.coordinates")
        .near({
            center: {
                type: 'Point',
                coordinates: [req.params.lat, req.params.long]
            },
            // Converting meters to miles
            maxDistance: parseFloat(req.params.meters) * 1609.34,
            spherical: true
        });

    await query.exec((err, results) => {
        if (err) {
            return res.status(500).send({message: `Error getting features ${err.message}`});
        }
        if (results.length === 0) {
            return res.status(404).send({message: 'No results found'});
        }
        res.status(200).send(arrayToGeoJSON(results));
    });
}

export async function getFeaturesByTown(req: Request, res: Response) {

    await Feature.find({"properties.town": req.params.town}, (err, results) => {
        if (err) {
            return res.status(500).send({message: `Error getting features ${err.message}`});
        }
        if (results.length === 0) {
            return res.status(404).send({message: 'No results found'});
        }
        res.status(200).send(arrayToGeoJSON(results));
    });
}

export async function getFeaturesByPostalCode(req: Request, res: Response) {

    await Feature.find({"properties.postal_code": req.params.postal_code}, (err, results) => {
        if (err) {
            return res.status(500).send({message: `Error getting features ${err.message}`});
        }
        if (results.length === 0) {
            return res.status(404).send({message: 'No results found'});
        }
        res.status(200).send(arrayToGeoJSON(results));
    });
}

export async function getFeaturesByProvince(req: Request, res: Response) {

    await Feature.find({"properties.province": req.params.province}, (err, results) => {

        if (err) {
            return res.status(500).send({message: `Error getting features ${err.message}`});
        }
        if (results.length === 0) {
            return res.status(404).send({message: 'No results found'});
        }
        res.status(200).send(arrayToGeoJSON(results));
    });
}

export async function getFeaturesByComAut(req: Request, res: Response) {

    await Feature.find({"properties.comAut": req.params.region}, (err, results) => {

        if (err) {
            return res.status(500).send({message: `Error getting features ${err.message}`});
        }
        if (results.length === 0) {
            return res.status(404).send({message: 'No results found'});
        }
        res.status(200).send(arrayToGeoJSON(results));
    });
}

export async function getFeaturesByCountry(req: Request, res: Response) {

    await Feature.find({"properties.country": req.params.country}, (err, results) => {

        if (err) {
            return res.status(500).send({message: `Error getting features ${err.message}`});
        }
        if (results.length === 0) {
            return res.status(404).send({message: 'No results found'});
        }
        res.status(200).send(arrayToGeoJSON(results));
    });
}

export async function getAllFeatures(req: Request, res: Response) {

    await Feature.find({}, (err, results) => {
        if (err) {
            return res.status(500).send({message: `Error getting features ${err.message}`});
        }
        if (results.length === 0) {
            return res.status(404).send({message: 'No results found'});
        }
        res.status(200).send(arrayToGeoJSON(results));
    });
}