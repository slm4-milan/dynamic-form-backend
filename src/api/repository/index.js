const { MongoClient } = require("mongodb");
const Config = require("../../config/vars");

let dbConnection;
MongoClient.connect(Config.mongo.uri, (err, db) => {
  if (err) {
    console.log(err);
  }
  console.log("mongo connected");
});

module.exports = dbConnection;
