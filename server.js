const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dotEnv = require("dotenv");
dotEnv.config();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerDocument = require("./swagger.json");
const app = express();
app.use(cors());
app.use(express.json());
// Test
const http = require("http");
const { Server } = require("socket.io");
const { application } = require("express");

const database = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
  } catch (e) {
    console.log(e);
  }
};
database();
// porthhg
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Connected to db!${PORT}`);
});

const routes = require("./routes/user");
app.use("/", routes);

//Heroku Open app display testing backend
app.get("/", function (req, res) {
  res.status(200).send({ message: "This is backend hello Heroku!" });
});

// new socket

// const server = http.createServer(app);

// const io = new Server(server, {
//   //vilken server den ska lyssna på och vilka metoder som får användas
//   cors: {
//     origin: "http://localhost:3000", //
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   // lyssnar ifall det är någon connection på server

//   console.log(`User connected ${socket.id}`);
//   socket.on("join_room", (data) => {
//     socket.join(data);
//     console.log(`User with ID: ${socket.id} joined room: ${data}`);
//   });

//   socket.on("send_message", (data) => {
//     socket.to(data.room).emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     // lyssnar ifall någon disconnectat
//     console.log("User Disconnected", socket.id);
//   });
// });

// server.listen(3002, () => {
//   console.log("Server running");
// });

// end of socket

// const swaggerDocs = swaggerJsDoc(swaggerDocument);
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports = app;
