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
exports.postFeature = void 0;
const Feature_1 = __importDefault(require("../models/Feature"));
function postFeature(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newFeature = new Feature_1.default(req.body);
        const exist = yield Feature_1.default.findOne({ "properties.cnn": newFeature.properties.cnn }, (err, result) => {
            if (err) {
                return res.status(500).send({ message: `Error getting feature ${err.message}` });
            }
            return result;
        });
        if (exist) {
            return res.status(500).send({ message: `This feature is already in the databases` });
        }
        yield newFeature.save((err, document, [isSaveSuccessful]) => {
            if (err) {
                return res.status(500).send({ message: `Error saving feature ${err.message}` });
            }
            if (isSaveSuccessful === 1) {
                return res.status(200).send({ message: 'Successfully saved', document: document });
            }
            res.status(500).send({ message: `Unexpected error` });
        });
    });
}
exports.postFeature = postFeature;
//# sourceMappingURL=writeFeatures.js.map