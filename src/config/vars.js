const path = require('path');

//import .env variables
require('dotenv-safe').config({
  path: path.join(__dirname, '../.env'),
  sample: path.join(__dirname, '../.env'),
});

module.exports = {
  port: process.env.PORT,
  mongo: {
    uri: process.env.MONGO_URI,
  },
};
