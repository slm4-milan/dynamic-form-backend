// make bluebird default Promise
const bluebird = require("bluebird");
const { port, mongo } = require("./config/vars");
const app = require("./config/express");
const mongoose = require("./config/mongoose");

// open mongoose connection
mongoose.connect();

// listen to requests
app.listen(port, () => console.info(`server started on port ${port}`));

module.exports = app;
