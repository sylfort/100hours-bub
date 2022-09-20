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
});

module.exports = mongoose.model("Event", EventSchema);
