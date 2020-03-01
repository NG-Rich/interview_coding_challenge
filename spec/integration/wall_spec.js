const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/wall";

describe("routes : wall", () => {

  describe("GET /wall", () => {
    it("should return status code 200 and have body contain 'Wallchat'", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Wallchat");
        done();
      });
    });
  }); // End of GET /wall

}); // End of routes:wall
