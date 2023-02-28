const nodemailer = require("nodemailer");

module.exports = {
  sendEmail: async function main(req, res) {
    console.log(req.body);
    const user = req.body.user;
    const event = req.body.e;
    const output = `
    <p>Hi,</p>
    <br/>
    <p>A new event has been scheduled.</p>
    <br/>
    <p><b>Event Name:</b></p>
    <p>${event.eventName}</p>
    <br/>

    <p><b>Event Details:</b></p>
    <p>${event.description}</p>
    <br/>

    <p><b>Participants:</b></p>
    <p>${event.user} and ${user.userName}</p>
    <br/>

    <p><b>Participants Email:</b></p>
    <p>${event.email} and ${user.email}</p>
    <br/>

    <p><b>Event Date/Time:</b></p>
    <p>${event.eventTime} - ${event.eventDate}</p>
    <br/>

    <p><b>Event Duration:</b></p>
    <p>${event.duration} minutes</p>
    <br/>    
    `;

     // create reusable transporter object using the default SMTP transport
     let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_ADDRESS, // generated ethereal user
        pass: process.env.EMAIL_PASSWORD, // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `${process.env.EMAIL_ADDRESS}`, // sender address
      to: `${event.email}, ${user.email}`, // list of receivers
      subject: `New Event scheduled!`, // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    console.log(user);

    console.log(event);

    res.send("email sent!");

    // main().catch(console.error);
  },
};
