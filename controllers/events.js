const Post = require("../models/Post");

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
      const post = await Post.findById(req.params.id);
      res.render("post.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  postEvent: async (req, res) => {
    try {
      await Event.create({
        eventName: req.body.eventName,
        user: req.user.id,
        description: req.body.description,
        duration: req.body.duration,
        eventDate: req.body.eventDate,
      });
      console.log("Event has been added!");
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  },
};
