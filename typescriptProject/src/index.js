"use strict";
/// <reference types="@types/google.maps" />
exports.__esModule = true;
var Company_1 = require("./models/Company");
var User_1 = require("./models/User");
var CustomMap_1 = require("./models/CustomMap");
var user = new User_1.User();
console.log(user);
var company = new Company_1.Company();
console.log(company);
var map = new CustomMap_1.CustomMap('map');
map.addMarker(user);
map.addMarker(company);
