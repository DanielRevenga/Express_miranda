const bookings_data = require('../data/bookings_data.tsx');

const bookingsController = {
   readBooking: (req, res, next) => {
      // res.send("" + ("1" === req.params.id));
      // res.send("" + bookings_data[1].id);
      // res.json(bookings_data);
      res.json(bookings_data.find( (b) => (""+b.id) === req.params.id ));
   },
   readAll: (req, res, next) => {
      console.log("readAll");
      // if (req.user){
         console.log(req.OPTIONS);
      // }
      res.json(bookings_data);
   },
   insert: (req, res, next) => {
      res.send('Insert data');
   },
   update: (req, res, next) => {
      res.send('Update data');
   },
   delete: (req, res, next) => {
      res.send('Delete data');
   }
};

module.exports = bookingsController;