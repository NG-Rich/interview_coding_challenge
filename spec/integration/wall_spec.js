const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/wall";
const sequelize = require("../../src/db/models/index").sequelize;
const Post = require("../../src/db/models").Post;

describe("routes : wall", () => {

  beforeEach((done) => {
    this.post;

    sequelize.sync({force: true}).then((res) => {
      Post.create({
        title: "My First Post",
        body: "This post is awesome!"
      })
      .then((post) => {
        this.post = post;
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });
  }); // End of beforeEach

  describe("GET /wall", () => {
    it("should return status code 200 and have body contain 'Wallchat'", (done) => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Wallchat");
        done();
      });
    });

    it("should return a list with all posts", (done) => {
      request.get(base, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("My First Post");
        done();
      });
    });
  }); // End of GET /wall

}); // End of routes:wall
