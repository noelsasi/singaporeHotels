const mongoose = require("mongoose");
const hotels = mongoose.model("hotels");

module.exports = {
  // request to view all hotels
  view: function(req, res, next) {
    // eslint-disable-next-line array-callback-return
    hotels.find((err, list) => {
      if (err) return next(err);
      res.send({
        list: list
      });
    });
  },

  // request to view single hotel
  one: function(req, res, next) {
    let id = req.params.id;
    hotels.findById(id, (err, data) => {
      if (err) return next(err);
      res.json(data);
    });
  }
};
