const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerDocument = require("./swagger.json");
const app = express();
app.use(cors());
app.use(express.json());

const swaggerDocs = swaggerJsDoc(swaggerDocument);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const routes = require("./routes/user");

app.use("/", routes);

mongoose
  .connect(
    "mongodb+srv://db:swed123@cluster0.kbbyqnx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((con) => {
    console.log("Connected to DB");
  });

if (
  process.env.NODE_ENV === "staging" ||
  process.env.NODE_ENV === "production"
) {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "frontend/build/index.html"));
  });
}

const port = process.env.PORT || 3001;
app.listen(port, console.log(`Im inside now!${port}`));
