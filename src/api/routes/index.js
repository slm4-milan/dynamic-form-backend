const express = require("express");
const form = require("./formSchema");
const formData = require("./formData");

const router = express.Router();

router.use("/form", form);
router.use("/form-data", formData);

module.exports = router;
