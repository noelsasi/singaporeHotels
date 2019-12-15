// Example model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelsSchema = new Schema({
  name: String,
  host_name: String,
  neighbourhood_group: String,
  neighbourhood: String,
  latitude: String,
  longitude: String,
  room_type: String,
  price: String
});

// hotelsSchema.virtual("date").get(() => this._id.getTimestamp());

mongoose.model("hotels", hotelsSchema);
