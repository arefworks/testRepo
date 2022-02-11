"use strict";
exports.__esModule = true;
exports.location = void 0;
var faker = require("faker");
var location = /** @class */ (function () {
    /**
     *  location constructor
     */
    function location() {
        this.lat = parseFloat(faker.address.latitude());
        this.lng = parseFloat(faker.address.longitude());
    }
    return location;
}());
exports.location = location;
