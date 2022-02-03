const express = require('express');
const router = express.Router();

let Room = require("../models/roomModel");

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('home', { title: 'Home' });
});

router.get('/about_us', (req, res, next) => {
    res.render('about_us', { title: 'About Us' });
});

router.get('/contact_us', (req, res, next) => {
    res.render('contact_us', { title: 'Contact Us' });
});

router.get('/reservation/:id', async (req, res, next) =>  {
  try {
    const room = await Room.findById(req.params.id);
    res.render('reservation', { title: 'Reservation', room });
  } catch (error) {
    console.log(error);
  }
});

router.get('/room_grid', async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.render('room_grid', { title: 'Room Grid', rooms });
    
  } catch (error) {
    console.log(error);
  }
});

router.get('/offers', async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.render('offers', { title: 'Room Offers', rooms });
    
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
