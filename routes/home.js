const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/about_us', function(req, res, next) {
  res.render('about_us', { title: 'About Us' });
});

router.get('/contact_us', function(req, res, next) {
  res.render('contact_us', { title: 'Contact Us' });
});

router.get('/reservation', function(req, res, next) {
  res.render('reservation', { title: 'Reservation' });
});

router.get('/room_grid', function(req, res, next) {
  res.render('room_grid', { title: 'Room Grid' });
});

module.exports = router;
