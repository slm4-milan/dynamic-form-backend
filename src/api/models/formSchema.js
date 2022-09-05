const mongoose = require("mongoose");
const dbConnection = require("../repository/index");
const { Schema } = mongoose;

const formSchema = Schema({
  form_heading: { type: String, required: true },
  fields: [
    {
      id: { type: String, required: true },
      type: { type: String, required: true },
      name: { type: String, required: true },
      label: { type: String, required: false },
      placeholder: { type: String, required: false },
      value: { type: Schema.Types.Mixed, required: true },
      required: { type: Boolean, required: false },
    },
  ],
});

const FormSchema = mongoose.model("Form", formSchema);

module.exports = {
  FormSchema,
};
