const express = require("express");
const formSchema = require("../controllers/formSchema");

const router = express.Router();

router.get("/", formSchema.fetchFormSchema);

module.exports = router;
