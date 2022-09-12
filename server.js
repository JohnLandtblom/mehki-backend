const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dotEnv = require("dotEnv");
dotEnv.config();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerDocument = require("./swagger.json");
const app = express();
app.use(cors());
app.use(express.json());

const routes = require("./routes/user");
app.use("/", routes);

//Heroku Open app display testing backend
app.get("/", function (req, res) {
  res.status(200).send({ message: "This is backend hello Heroku!" });
});

const swaggerDocs = swaggerJsDoc(swaggerDocument);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const database = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");
  } catch (e) {
    console.log(e);
  }
};
database();

const port = process.env.PORT || 3001;
app.listen(port, console.log(`Im inside now!${port}`));
