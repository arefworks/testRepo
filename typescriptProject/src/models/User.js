"use strict";
exports.__esModule = true;
exports.User = void 0;
var faker = require("faker");
var location_1 = require("./location");
var User = /** @class */ (function () {
    /**
     * User constructor
     */
    function User() {
        this.name = faker.name.firstName();
        this.location = new location_1.location();
        this.title = this.name;
    }
    User.prototype.markerContent = function () {
        return "\n          <div>\n            <h5>User Name :".concat(this.name, "</h5>\n          </div>\n    ");
    };
    return User;
}());
exports.User = User;
