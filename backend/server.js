const express = require("express");
const config = require("./config");
const glob = require("glob");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const db = config.db;
mongoose
  .connect(db, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const models = glob.sync(config.root + "/app/models/*.js");
models.forEach(function(model) {
  require(model);
});
const app = express();
var session = require("express-session");
const flash = require("connect-flash");

app.use(bodyParser.json());
app.use(flash());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

require("./routes")(app);

app.listen(config.port, () => {
  console.log("Express server listening on port " + config.port);
});
