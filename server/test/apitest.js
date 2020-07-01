let chai = require("chai");
let chaiHttp = require("chai-http");
let expect = chai.expect;
chai.use(chaiHttp);
const server = require("../src/index");

describe(`Absence Api`, () => {
  it(`it should GET all the leaves details of all Users `, (done) => {
    chai
      .request(server)
      .get(`/getLeavesList`)
      .end((err, res) => {
        try {
          expect(res).to.have.status(200);
          expect(res.body).to.have.a(`array`);
          done();
        } catch (error) {
          done(error);
        }
      });
  });
  it(`it should GET all the leaves details of a particular User `, (done) => {
    chai
      .request(server)
      .get(`/`)
      .query({ userId: 2664 })
      .end((err, res) => {
        try {
          expect(res).to.have.status(200);
          expect(res.body).to.have.a(`array`);
          done();
        } catch (error) {
          done(error);
        }
      });
  });
  it(`it should GET all the leaves details between start Date and End Date`, (done) => {
    chai
      .request(server)
      .get(`/`)
      .query({ startDate: "2017-01-01", endDate: "2017-02-01" })
      .end((err, res) => {
        try {
          expect(res).to.have.status(200);
          expect(res.body).to.have.a(`array`);
          done();
        } catch (error) {
          done(error);
        }
      });
  });

  it(`it should generate ICS file of total absenties `, (done) => {
    chai
      .request(server)
      .get(`/`)
      .end((err, res) => {
        try {
          expect(res).to.have.status(200);
          expect(res.body).to.have.a(`object`);
          done();
        } catch (error) {
          done(error);
        }
      });
  });
});
