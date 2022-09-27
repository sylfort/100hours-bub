// const nodemailer = require("nodemailer");

module.exports = {
  sendEmail: (req, res) => {
    console.log(req.body);
    res.send("Email sent");
  },
};
