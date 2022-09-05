const express = require("express");
const router = express.Router();
const { register, login } = require("./controller");

router.post("/v0/register", register);
router.post("/v0/signin", login);

module.exports = router;
