const { FormDataSchema } = require("../models/formData");

const insertFormData = async (req, res) => {
  console.log(req.body);
  try {
    const data = await FormDataSchema.insertMany([
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        married: req.body.married,
        gender: req.body.gender,
      },
    ]);
    res.send(data);
  } catch (e) {
    res.status(400).send(e.message);
  }
};
module.exports = {
  insertFormData,
};
