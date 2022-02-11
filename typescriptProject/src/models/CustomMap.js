"use strict";
exports.__esModule = true;
exports.CustomMap = void 0;
var CustomMap = /** @class */ (function () {
    function CustomMap(DivId) {
        this.map = new google.maps.Map(document.getElementById(DivId), {
            zoom: 1,
            center: { lat: 0, lng: 0 }
        });
    }
    CustomMap.prototype.addMarker = function (mark) {
        var _this = this;
        var markerInfo = new google.maps.InfoWindow({
            content: "<div>".concat(mark.markerContent(), "</div>")
        });
        var marker = new google.maps.Marker({
            position: mark.location,
            map: this.map,
            title: mark.markerContent()
        });
        marker.addListener('click', function (event) {
            markerInfo.open(_this.map, marker);
        });
    };
    return CustomMap;
}());
exports.CustomMap = CustomMap;
