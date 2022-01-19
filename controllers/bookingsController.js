let Booking = require("../models/bookingModel");

const bookingsController = {
   // GET ONLY ONE BOOKING IN THE DB (id as ref)
   readBooking: async (req, res, next) => {

      try {
         const booking = await Booking.findById(req.params.id);
         res.json(booking);
      } catch (error) {
         res.send(error);
      }
   },
   // GET ALL BOOKINGS IN THE DB WITH OPTINAL FILTERS
   readAll: async (req, res, next) => {

      try {
         const bookings = await Booking.find();
         res.json(bookings);
      } catch (error) {
         res.send(error);
      }
      
   },
   // INSERT ONE BOOKING IN THE DB
   insert: async (req, res, next) => {
      
      try {
         let booking = new Booking(req.body);
         await booking.save()
            .then(response => res.send(booking)) // return the inserted booking
            .catch(error => res.send(""+error));
      } catch (error) {
         res.json({error: error});
      }      
   },
   // UPDATE ONE BOOKING IN THE DB (id as ref)
   update: async (req, res, next) => {

      try {
         const booking = await Booking.findByIdAndUpdate(req.params.id, req.body);
         res.json(booking); // return the updated booking
         
      } catch (error) {
         res.send(error);
      }

   },
   // DELETE ONE BOOKING IN THE DB (id as ref)
   delete: async(req, res, next) => {

      try {         
         const booking = await Booking.findByIdAndDelete(req.params.id);
         res.json(booking); // return the deleted booking
         
      } catch (error) {
         res.send(error);
      }

   }
};

module.exports = bookingsController;