const Event = require("../models/Event");

module.exports = {
  // getAllEvents: async (req, res) => {
  //   try {
  //     const posts = await Post.find().sort({ createdAt: "desc" }).lean();
  //     res.render("feed.ejs", { posts: posts });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  // getEvent: async (req, res) => {
  //   try {
  //     const post = await Post.findById(req.params.id);
  //     res.render("post.ejs", { post: post, user: req.user });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  postEvent: async (req, res) => {
    console.log(req.body);
    try {
      await Event.create({
        eventName: req.body.eventName,
        // user: req.user.id,
        description: req.body.description,
        duration: req.body.duration,
        eventTime: req.body.eventTime,
        eventDate: req.body.eventDate,
      });
      console.log("Event has been added!");
      res.send("event added to DB");
    } catch (err) {
      console.log(err);
    }
  },
};
