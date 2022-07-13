import { Request, Response } from "express";
import Feature from "../models/Feature";
import { arrayToGeoJSON } from "../services/featuresService";

export async function getFeatureById(req: Request, res: Response) {

    try {
        const data=await Feature.findById(req.params.id);
        if(data === null) {
            return res.status(404).send({error: 'No results found'});
        }
        res.status(200).send(data);
    }catch (err) {
        return res.status(500).send({error: `Error getting features ${err.message}`})
    }

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
            return res.status(500).send({error: `Error getting features ${err.message}`});
        }
        if (results.length === 0) {
            return res.status(404).send({error: 'No results found'});
        }
        res.status(200).send(arrayToGeoJSON(results));
    });
}

export async function getFeaturesByTown(req: Request, res: Response) {

    try {

        const data = await Feature.find({"properties.town": req.params.town })
            .collation({ locale: "en", strength: 1 });

        if(data.length === 0) {
            return res.status(404).send({error: 'No results found'});
        }

        res.status(200).send(arrayToGeoJSON(data));

    }catch (err) {

        return res.status(500).send({error: `Error getting features ${err.message}`})
    }
}

export async function getFeaturesByPostalCode(req: Request, res: Response) {

    try {
        const data=await Feature.find({"properties.postal_code": req.params.postal_code});
        if(data.length === 0) {
            return res.status(404).send({error: 'No results found'});
        }
        res.status(200).send(arrayToGeoJSON(data));
    }catch (err) {
        return res.status(500).send({error: `Error getting features ${err.message}`})
    }
}

export async function getFeaturesByProvince(req: Request, res: Response) {

    try {
        const data=await Feature.find({"properties.province": req.params.province});
        if(data.length === 0) {
            return res.status(404).send({error: 'No results found'});
        }
        res.status(200).send(arrayToGeoJSON(data));
    }catch (err) {
        return res.status(500).send({error: `Error getting features ${err.message}`})
    }
}

export async function getFeaturesByComAut(req: Request, res: Response) {

    try {
        const data=await Feature.find({"properties.comAut": req.params.comAut});
        if(data.length === 0) {
            return res.status(404).send({error: 'No results found'});
        }
        res.status(200).send(arrayToGeoJSON(data));
    }catch (err) {
        return res.status(500).send({error: `Error getting features ${err.message}`})
    }
}

export async function getFeaturesByCountry(req: Request, res: Response) {

        try {
            const data=await Feature.find({"properties.country": req.params.country});
            if(data.length === 0) {
                return res.status(404).send({error: 'No results found'});
            }
            res.status(200).send(arrayToGeoJSON(data));
        }catch (err) {
            return res.status(500).send({error: `Error getting features ${err.message}`})
        }
}

export async function getAllFeatures(req: Request, res: Response) {

    try{
        const data =await Feature.find({});
        console.log(data);
        if (data.length===0){
            return res.status(404).send({error: 'No results found'});
        }
        res.status(200).send(arrayToGeoJSON(data))

    }catch (err){
        return res.status(500).send({error: `Error getting features ${err.message}`});
    }

}