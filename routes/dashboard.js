const express = require("express");
const router = express.Router();
const passport = require("passport");
const app = require("../app");

const bookingsController = require("../controllers/bookingsController");
const dashboardController = require("../controllers/dashboardController");
const roomsController = require("../controllers/roomsController");
const usersController = require("../controllers/usersController");

router.get('/test',
  passport.authenticate('local', { successRedirect: '/about_us',
                                   failureRedirect: '/' }));

// router.get("/", (req, res) => {
//    res.json({
//       status: "API Works"
//    });
// });

// ---------------- DASHBOARD --------------
router.route("/")
   .get(dashboardController.read)
   .put(dashboardController.update)

// ---------------- BOOKINGS --------------

router.route("/bookings")
   .get(bookingsController.readAll)
   .post(bookingsController.insert)
router.route("/bookings/:id")
   .get(bookingsController.readBooking)
   .put(bookingsController.update)
   .delete(bookingsController.delete)


// ---------------- ROOMS --------------
router.route("/rooms")
   .get(roomsController.readAll)
   .post(roomsController.insert)
router.route("/rooms/:id")
   .get(roomsController.readRoom)
   .put(roomsController.update)
   .delete(roomsController.delete)

// ---------------- USERS --------------
router.route("/users")
   .get(usersController.readAll)
   .post(usersController.insert)
router.route("/users/:id")
   .get(usersController.readUser)
   .put(usersController.update)
   .delete(usersController.delete)

// ---------------- CONTACTS --------------
// router.route("/contacts")
//    .get()
//    .post()

router.get(
   "/profile",
   (req, res, next) => {
      res.json({
         message: "You made it to the secure route",
         user: req.user,
         token: req.query.secret_token
      })
   }
);


module.exports = router;