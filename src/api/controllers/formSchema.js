const { FormSchema } = require("../models/formSchema");

const fetchFormSchema = async (req, res) => {
  const result = await FormSchema.find({}, "-_id");
  res.send(result[0]);
};
module.exports = {
  fetchFormSchema,
};
