const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const eventsController = require("../controllers/events");
const emailController = require("../controllers/emails");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
// Event routes
router.post("/event", ensureAuth, eventsController.postEvent);
router.get("/event", eventsController.getEvent);
router.put("/bookEvent", eventsController.bookEvent);
// Email routes
router.post("/sendEmail", emailController.sendEmail);

// React test endpoint
// router.get("/username", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

module.exports = router;
