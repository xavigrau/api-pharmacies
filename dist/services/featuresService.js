"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToGeoJSON = void 0;
function arrayToGeoJSON(features) {
    return {
        type: "FeatureCollection",
        features: features
    };
}
exports.arrayToGeoJSON = arrayToGeoJSON;
//# sourceMappingURL=featuresService.js.map