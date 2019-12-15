var controllers = require("./app/controllers/");

module.exports = function(app) {
  // matches Routes
  app.get("/hotels", controllers.home.view);
  app.get("/hotels/:id", controllers.home.one);
};
