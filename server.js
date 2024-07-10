const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/mainRoute");
app.use(bodyParser.json());

app.use(cors());
app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`);
});

module.exports = app;
