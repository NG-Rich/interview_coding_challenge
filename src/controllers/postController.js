const postQueries = require("../db/queries.posts.js");

module.exports = {
  index(req, res, next) {
    postQueries.getAllPosts((err, posts) => {

      if(err) {
        res.redirect(500, "static/index");
      }else {
        // FIX THIS
        res.render("wall/index", {posts});
      }
    })
  },
  create(req, res, next) {
    let newPost = {
      title: req.body.title,
      body: req.body.body
    };

    postQueries.addPost(newPost, (err, post) => {
      if(err) {
        res.redirect(500, "/");
      }else {
        res.redirect(303, "/wall");
      }
    });
  }
}
