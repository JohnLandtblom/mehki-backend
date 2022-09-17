/**
 * @group unit
 */

const request = require("supertest");
const HOST = process.env.HOST || "http://localhost:3001/api-docs/";

const newUser = {
  firstName: "me",
  lastName: "doe",
  email: "jojo@gmail.com",
  password: "string1",
};

describe("Testing API with supertest ", () => {
  describe("given POST /v0/register", () => {
    it("should add newUser", () => {
      request(HOST)
        .post("/v0/register")
        .send(newUser)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(201)
        .expect(function (err, responses) {
          if (err) return done(err);
          done();
        });
    });
  });

  describe("given PUT /update/6321abefe0c26ab3457d02c4", () => {
    it("should update a user", () => {
      request(HOST)
        .put("/update/6321abefe0c26ab3457d02c4")
        .send({
          firstname: "jojo",
          lastname: "doe",
          email: "try@gmail.com",
          password: "string1",
        })
        .set("Content-Type", "application/json")
        .expect("Content-Type", "application/json")
        .expect(200)
        .expect(function (err, responses) {
          if (err) return done(err);
          done();
        });
    });
  });

  describe("given DELETE /delete/6322dbad52a92f13159c2644", () => {
    it("should delete a user", () => {
      request(HOST)
        .delete("/delete/6322dbad52a92f13159c2644")
        .expect(function (err, responses) {
          if (err) return done(err);
          done();
        });
    });
  });
});
