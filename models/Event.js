const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  duration: {
    type: String,
    require: true,
  },
  eventDate: {
    type: Date,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Event", EventSchema);
