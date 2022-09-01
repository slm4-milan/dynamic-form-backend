const express = require("express");
const formData = require("../controllers/formData");

const router = express.Router();

router.post("/", formData.insertFormData);

module.exports = router;
