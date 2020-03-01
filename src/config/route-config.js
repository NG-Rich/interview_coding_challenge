module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const wallRoutes = require("../routes/wall");

    app.use(staticRoutes);
    app.use(wallRoutes);
  }
}
