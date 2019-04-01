"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MongoClient = require("mongodb").MongoClient;
var user = "hiperezr";
var password = "Focus.12";
var cluster = "cluster0-shard-00-00-mexzx.mongodb.net";
var clusterPort = "27017";
var externalDB = "auth";
var clusterOptions = "ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
var uri = "mongodb://" + user + ":" + password + "@" + cluster + ":" + clusterPort + "/" + externalDB + "?" + clusterOptions;
var _db;
module.exports = {
    connectToServer: function (callback) {
        MongoClient.connect(uri, function (err, db) {
            _db = db;
            console.log("(info) Connected to: " + externalDB);
            return callback(err);
        });
    },
    getConnection: function () {
        return _db;
    },
    disconnect: function () {
        _db.close();
        console.log("(info) Disconnected from: " + externalDB);
    }
};
