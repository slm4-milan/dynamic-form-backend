const mongoose = require('mongoose');
const { mongo, env } = require('./vars');

//set mongoose Promise to Bluebird
mongoose.Promise = Promise;

//Exit application on error
mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error: ', err);
  process.exit(-1);
});

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
exports.connect = () => {
  mongoose.connect(mongo.uri, {
    keepAlive: true,
  });
  return mongoose.connection;
};
