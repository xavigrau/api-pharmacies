"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFeatures = exports.getFeaturesByCountry = exports.getFeaturesByComAut = exports.getFeaturesByProvince = exports.getFeaturesByPostalCode = exports.getFeaturesByTown = exports.getFeatureNearPoint = exports.getFeatureById = void 0;
const Feature_1 = __importDefault(require("../models/Feature"));
const featuresService_1 = require("../services/featuresService");
function getFeatureById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Feature_1.default.findById(req.params.id, (err, results) => {
            if (err) {
                return res.status(500).send({ message: `Error getting features ${err.message}` });
            }
            if (results.length === 0) {
                return res.status(404).send({ message: 'No results found' });
            }
            res.status(200).send(results);
        });
    });
}
exports.getFeatureById = getFeatureById;
function getFeatureNearPoint(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = Feature_1.default.find({ "geometry.type": "Point" })
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
        yield query.exec((err, results) => {
            if (err) {
                return res.status(500).send({ message: `Error getting features ${err.message}` });
            }
            if (results.length === 0) {
                return res.status(404).send({ message: 'No results found' });
            }
            res.status(200).send((0, featuresService_1.arrayToGeoJSON)(results));
        });
    });
}
exports.getFeatureNearPoint = getFeatureNearPoint;
function getFeaturesByTown(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Feature_1.default.find({ "properties.town": req.params.town }, (err, results) => {
            if (err) {
                return res.status(500).send({ message: `Error getting features ${err.message}` });
            }
            if (results.length === 0) {
                return res.status(404).send({ message: 'No results found' });
            }
            res.status(200).send((0, featuresService_1.arrayToGeoJSON)(results));
        });
    });
}
exports.getFeaturesByTown = getFeaturesByTown;
function getFeaturesByPostalCode(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Feature_1.default.find({ "properties.postal_code": req.params.postal_code }, (err, results) => {
            if (err) {
                return res.status(500).send({ message: `Error getting features ${err.message}` });
            }
            if (results.length === 0) {
                return res.status(404).send({ message: 'No results found' });
            }
            res.status(200).send((0, featuresService_1.arrayToGeoJSON)(results));
        });
    });
}
exports.getFeaturesByPostalCode = getFeaturesByPostalCode;
function getFeaturesByProvince(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Feature_1.default.find({ "properties.province": req.params.province }, (err, results) => {
            if (err) {
                return res.status(500).send({ message: `Error getting features ${err.message}` });
            }
            if (results.length === 0) {
                return res.status(404).send({ message: 'No results found' });
            }
            res.status(200).send((0, featuresService_1.arrayToGeoJSON)(results));
        });
    });
}
exports.getFeaturesByProvince = getFeaturesByProvince;
function getFeaturesByComAut(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Feature_1.default.find({ "properties.comAut": req.params.region }, (err, results) => {
            if (err) {
                return res.status(500).send({ message: `Error getting features ${err.message}` });
            }
            if (results.length === 0) {
                return res.status(404).send({ message: 'No results found' });
            }
            res.status(200).send((0, featuresService_1.arrayToGeoJSON)(results));
        });
    });
}
exports.getFeaturesByComAut = getFeaturesByComAut;
function getFeaturesByCountry(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Feature_1.default.find({ "properties.country": req.params.country }, (err, results) => {
            if (err) {
                return res.status(500).send({ message: `Error getting features ${err.message}` });
            }
            if (results.length === 0) {
                return res.status(404).send({ message: 'No results found' });
            }
            res.status(200).send((0, featuresService_1.arrayToGeoJSON)(results));
        });
    });
}
exports.getFeaturesByCountry = getFeaturesByCountry;
function getAllFeatures(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Feature_1.default.find({}, (err, results) => {
            if (err) {
                return res.status(500).send({ message: `Error getting features ${err.message}` });
            }
            if (results.length === 0) {
                return res.status(404).send({ message: 'No results found' });
            }
            res.status(200).send((0, featuresService_1.arrayToGeoJSON)(results));
        });
    });
}
exports.getAllFeatures = getAllFeatures;
//# sourceMappingURL=readFeatures.js.map