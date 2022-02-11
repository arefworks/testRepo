"use strict";
exports.__esModule = true;
exports.Company = void 0;
var faker = require("faker");
var location_1 = require("./location");
var Company = /** @class */ (function () {
    /**
     * Company constructor
     */
    function Company() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = new location_1.location();
    }
    Company.prototype.markerContent = function () {
        return "\n          <div>\n            <h5> Company Name :".concat(this.name, "</h5>\n            <p> Catch Phrase: ").concat(this.catchPhrase, "</p>\n          </div>\n    ");
    };
    return Company;
}());
exports.Company = Company;
