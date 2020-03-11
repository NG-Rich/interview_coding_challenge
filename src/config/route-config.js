module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const wallRoutes = require("../routes/wall");
    const postRoutes = require("../routes/posts");

    app.use(staticRoutes);
    app.use(wallRoutes);
    app.use(postRoutes);
  }
}
