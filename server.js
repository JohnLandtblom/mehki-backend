const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());

// app.get("/", (req, res) => {
//   headers = { "cache-control": "no-cache" };
//   body = { status: "available" };
//   res.status(200).json(body);
// });

app.use(express.static(path.join(__dirname, "frontend")));

mongoose
  .connect(
    "mongodb+srv://db:swed123@cluster0.kbbyqnx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((con) => {
    console.log("Connected to DB");
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Im inside now!${PORT}`));
