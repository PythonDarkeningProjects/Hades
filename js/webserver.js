"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
var restFullApi_1 = require("@services/restFullApi");
var restFullApi_2 = require("@services/restFullApi");
var WebServer = (function () {
    function WebServer(port) {
        this.port = port;
        this.addEndPoints();
        this.start();
    }
    WebServer.prototype.addEndPoints = function () {
        var endPoint = new restFullApi_1.addEndPoint();
        endPoint.index();
        endPoint.dashboard_main();
        endPoint.auth();
    };
    WebServer.prototype.start = function () {
        var start = new restFullApi_2.StartAPI(this.port);
        start;
    };
    return WebServer;
}());
var port = 3000;
new WebServer(port);
