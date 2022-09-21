const User = require("../models/User");

module.exports = {
  getUsername: async (req, res) => {
    try {
      User.findOne(
        { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
        (err, existingUser) => {
          if (err) {
            return next(err);
          }
          if (existingUser) {
            req.flash("errors", {
              msg: "Account with that email address or username already exists.",
            });
            return res.redirect("../signup");
          }
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
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
};
