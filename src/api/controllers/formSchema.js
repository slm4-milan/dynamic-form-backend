const { FormSchema } = require("../models/formSchema");

const fetchFormSchema = async (req, res) => {
  const result = await FormSchema.findOne(req.query, "-_id");
  res.send(result);
};
module.exports = {
  fetchFormSchema,
};
