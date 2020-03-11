const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/wall";
const sequelize = require("../../src/db/models/index").sequelize;
const Post = require("../../src/db/models").Post;

describe("routes : wall/post ", () => {

  beforeEach((done) => {
    sequelize.sync({force: true})
    .then((res) => {
      done();
    });
  }); // End of beforeEach

  describe("POST wall/post/create", () => {
    const options = {
      url: `${base}/post/create`,
      form: {
        name: "Anonymous 123456789",
        title: "Doggos",
        body: "I like dogs!"
      }
    };

    it("should create a new post and redirect", (done) => {
      request.post(options, (err, res, body) => {
        Post.findOne({where: {title: "Doggos"}})
        .then((post) => {
          expect(res.statusCode).toBe(303);
          expect(post.title).toBe("Doggos");
          expect(post.body).toBe("I like dogs!");
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
      });
    });
  }); // End of POST wall/post/create



}); // End of routes:wall/posts
