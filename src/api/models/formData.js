const mongoose = require("mongoose");
const dbConnection = require("../repository/index");
const { Schema } = mongoose;

const formDataSchema = Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: String, required: true },
  married: { type: Schema.Types.Mixed, required: true },
  gender: { type: String, required: true },
});

const FormDataSchema = mongoose.model("FormData", formDataSchema);

module.exports = {
  FormDataSchema,
};
