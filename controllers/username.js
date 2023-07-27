const User = require("../models/User");

module.exports = {
  getUsername: async (req, res, next) => {  // next parameter added to handle errors
    try {
      const existingUser = await User.findOne({
        $or: [{ email: req.body.email }, { userName: req.body.userName }],
      });
      if (existingUser) {
        req.flash("errors", {
          msg: "Account with that email address or username already exists.",
        });
        return res.redirect("../signup");
      }

      // Creating the user object
      const user = new User({
        email: req.body.email,
        userName: req.body.userName,
        // Include additional fields here
      });

      user.save((err) => {
        if (err) {
          return next(err);
        }
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          res.redirect("/");
        });
      });
        
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },
};

