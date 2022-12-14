/**
 * @group component
 */
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const request = require("supertest");
const app = require("../server");

const db = process.env.MONGODB_URI;
const PORT = process.env.TEST_PORT || 3003;
const User = require("../schemas/userSchema");

const random = Math.floor(Math.random() * 1000) + 1;
const testEmail = `jiji${random}@gmail.se`;
const newUser = {
  firstName: "Cristian",
  lastName: "kino",
  email: testEmail,
  password: "string1",
};
console.log("hello");

describe("Testing API with supertest ", () => {
  let server;
  beforeAll(() => {
    mongoose.connect(db);
    server = app.listen(PORT);
  });

  afterAll(async () => {
    await User.deleteOne({ firstName: "Cristian" });
    await mongoose.disconnect();
    await server.close();
  });

  it("should add newUser", async () => {
    await request(app)
      .post("/v0/register")
      .expect("Content-Type", /json/)
      .send(newUser)
      .expect(201)
      .then(function (err, responses) {
        if (err) return err;
      });
  });

  const login = {
    email: testEmail,
    password: "string1",
  };

  it("should login User", async () => {
    await request(app)
      .post("/v0/signin")
      .send(login)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .then(function (err, responses) {
        if (err) return err;
      });
  });

  it("to update a user should have an id", async () => {
    await request(app)
      .patch("/update/id")
      .set("Content-Type", "application/json")
      .send({
        firstName: "updated firstName",
        lastName: " updated lastName",
      })

      .expect(401)
      .then(function (err, responses) {
        if (err) return err;
      });
  });

  it("should delete a user", async () => {
    await request(app)
      .delete("/delete/id")
      .expect(401)
      .then(function (err, responses) {
        if (err) return err;
      });
  });
});
