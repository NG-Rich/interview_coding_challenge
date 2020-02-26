const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {

  describe("GET /", () => {
    it("should return status code 200 and body contain 'Welcome to Wallchat!'", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Welcome to Wallchat!");
        done();
      })
    });
  }); // End of GET /

}); // End of routes:static
