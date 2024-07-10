const express = require("express");
const {
  getToken,
  postQuots,
  buildTransact,
} = require("../controllers/mainController");
const router = express.Router();

router.get("/token", getToken);
router.post("/quotes", postQuots);
router.get("/transaction", buildTransact);

module.exports = router;
