const path = require("path");
const rootPath = path.normalize(__dirname + "/.");
const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    root: rootPath,
    app: {
      name: "singaporeHotels"
    },
    port: process.env.PORT || 5000,
    db: process.env.MONGODB_URI || "mongodb://localhost:27017/singaporeHotels"
  },

  test: {
    root: rootPath,
    app: {
      name: "singaporeHotels"
    },
    port: process.env.PORT || 3000,
    db: "mongodb://localhost/singaporeHotels"
  },

  production: {
    root: rootPath,
    app: {
      name: "singaporeHotels"
    },
    port: process.env.PORT || 3000,
    db: "mongodb://localhost/singaporeHotels"
  }
};

module.exports = config[env];
