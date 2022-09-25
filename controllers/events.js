const Event = require("../models/Event");

module.exports = {
  getAllEvents: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  getEvent: async (req, res) => {
    try {
      const events = await Event.find().sort({ createdAt: "desc" }).lean();
      console.log(events);
      res.send({ events: events, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  postEvent: async (req, res) => {
    console.log(req.body);
    try {
      await Event.create({
        eventName: req.body.eventName,
        description: req.body.description,
        duration: req.body.duration,
        eventDate: req.body.eventDate,
        user: req.user.id,
      });
      console.log("Event has been added!");
      res.send("Event has been added!");
    } catch (err) {
      console.log(err);
    }
  },
};
