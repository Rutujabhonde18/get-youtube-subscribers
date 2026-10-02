const app = require("../src/app");
const Subscriber = require("../src/models/subscribers");
const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require("mongoose");

chai.use(chaiHttp);
chai.should();

// Connect to MongoDB
before(async () => {
  await mongoose.connect("mongodb://localhost/subscribers");
});

// Disconnect from MongoDB
after(async () => {
  await mongoose.disconnect();
});

// Test GET /subscribers
describe("GET /subscribers", () => {
  it("should return all subscribers", (done) => {
    chai
      .request(app)
      .get("/subscribers")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
});

// Test GET /subscribers/names
describe("GET /subscribers/names", () => {
  it("should return subscriber names and channels", (done) => {
    chai
      .request(app)
      .get("/subscribers/names")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
});

// Test GET /subscribers/:id
describe("GET /subscribers/:id", () => {
  // Valid ID
  it("should return a specific subscriber", (done) => {
    Subscriber.findOne().then((subscriber) => {
      if (!subscriber) {
        throw new Error("No subscriber found in the database");
      }

      chai
        .request(app)
        .get(`/subscribers/${subscriber._id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("name");
          res.body.should.have.property("subscribedChannel");

          done();
        });
    });
  });

  // Invalid ID
  it("should return 400 for an invalid subscriber ID", (done) => {
    chai
      .request(app)
      .get("/subscribers/abc")
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property("message");
        done();
      });
  });
});

// Test invalid routes
describe("Invalid routes", () => {
  it("should return 404 for an invalid route", (done) => {
    chai
      .request(app)
      .get("/invalidroute")
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property("message");
        done();
      });
  });
});
