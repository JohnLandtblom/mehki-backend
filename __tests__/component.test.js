/**
 * @group component
 */

const request = require("supertest");
// const express = require("express");
// const app = express();
// const app = require("../app");

const HOST = process.env.HOST || "http://localhost:3001";

const newUser = {
  firstName: "jiji",
  lastName: "kino",
  email: "hdfc@gmail.com",
  password: "string1",
};

describe("Testing API with supertest ", () => {
  // describe("given POST /v0/register", function () {
  //   it("should add newUser", async () => {
  //     await request(HOST)
  //       .post("/v0/register")
  //       .send(newUser)
  //       .set("Accept", "application/json")
  //       .expect("Content-Type", /json/)
  //       .expect(201)
  //       .then(function (err, responses) {
  //         if (err) return err;
  //       });
  //   });
  // });

  const login = {
    email: "hello@gmail.com",
    password: "string1",
  };

  describe("given POST /v0/signin", function () {
    it("should add newUser", async () => {
      await request(HOST)
        .post("/v0/signin")
        .send(login)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(201)
        .then(function (err, responses) {
          if (err) return err;
        });
    });
  });

  describe("given PATCH /update/63231fe3f7a81782f6d94f0e", () => {
    it("should update a user", async () => {
      await request(HOST)
        .patch("/update/63231fe3f7a81782f6d94f0e")
        .send({
          firstName: " updated name",
          lastName: "doe",
          email: "hello@gmail.com",
          password: "string1",
        })
        .set("Content-Type", "application/json")
        .expect("Content-Type", "application/json")
        .expect(200)
        .then(function (err, responses) {
          if (err) return err;
        });
    });
  });

  describe("given DELETE /delete/63245c908ad0a544bd0df035", () => {
    it("should delete a user", async () => {
      await request(HOST)
        .delete("/delete/63245c908ad0a544bd0df035")
        .then(function (err, responses) {
          if (err) return err;
        });
    });
  });
});
