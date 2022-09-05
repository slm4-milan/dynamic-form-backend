const { FormDataSchema } = require("../models/formData");

const insertFormData = async (req, res) => {
  console.log(req.body);
  try {
    const data = await FormDataSchema.insertMany({
      fields: req.body,
    });

    res.send(data);
  } catch (e) {
    res.status(400).send(e.message);
  }
};
module.exports = {
  insertFormData,
};
