const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://db:swed123@cluster0.kbbyqnx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((con) => {
    console.log("Connected to DB");
  });

const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === " production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.listen(port, console.log(`Im inside now!${port}`));
