const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());

app.use(
  express.static(path.resolve(__dirname, "./frontend/public", "index.html"))
);

mongoose
  .connect(
    "mongodb+srv://db:swed123@cluster0.kbbyqnx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((con) => {
    console.log("Connected to DB");
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Im inside now!${PORT}`));
