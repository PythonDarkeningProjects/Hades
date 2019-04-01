/*Create a connection for mongoDB*/

import { connect } from "net";
import { disconnect } from "cluster";

// Import node modules
let MongoClient = require("mongodb").MongoClient;
let user = "hiperezr";
let password = "Focus.12";
let cluster = "cluster0-shard-00-00-mexzx.mongodb.net"
let clusterPort = "27017"
let externalDB = "auth";
let clusterOptions = "ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
let uri = `mongodb://${user}:${password}@${cluster}:${clusterPort}/${externalDB}?${clusterOptions}`;

let _db;

module.exports = {

  connectToServer: function( callback: any ) {
    MongoClient.connect( uri, function( err: object, db: object ) {
      _db = db;
      console.log(`(info) Connected to: ${externalDB}`);
      return callback( err );
    } );
  },

  getConnection: function() {
    return _db;
  },

  disconnect: function() {
    _db.close();
    console.log(`(info) Disconnected from: ${externalDB}`);
  }

};