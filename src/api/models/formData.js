const mongoose = require("mongoose");
const dbConnection = require("../repository/index");
const { Schema } = mongoose;

const formDataSchema = Schema({
  fields: Schema.Types.Mixed,
});

const FormDataSchema = mongoose.model("FormData", formDataSchema);

module.exports = {
  FormDataSchema,
};
