import { Request, Response } from "express";
import upload from "../routes/upload";
const { dirname } = require('path');
const appDir = dirname(require.main.filename);
const pharmacyModel = require('../models/Features');
const mongoose = require('mongoose');

export default(req:Request,res:Response)=>{
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {

            const fileData = req.files.json;

            if ('mv' in fileData) {
                var fileName=fileData.name;
                const pathString = appDir + '/json/' + fileName;

                fileData.mv(pathString, (err) => {

                    if (err) {

                        return res.status(500).send({
                            ok: false,
                            error: err
                        });
                    }
                });
            }
            uploadDB(fileData);
            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                filename: fileName,
            });
        }
    } catch (err) {
        res.status(500).send({ error123: err });
    }
}

function uploadDB(data){
    pharmacyModel.save(data);
}