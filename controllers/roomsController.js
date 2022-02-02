let Room = require("../models/roomModel");

const roomsController = {
   // GET ONLY ONE ROOM IN THE DB (id as ref)
   readRoom: async (req, res, next) => {

      try {
         const room = await Room.findById(req.params.id);
         res.json(room);
      } catch (error) {
         res.send(error);
      }
   },
   // GET ALL ROOMS IN THE DB WITH OPTINAL FILTERS
   readAll: async (req, res, next) => {

      try {
         const room = await Room.find();
         res.json(room);
      } catch (error) {
         res.send(error);
      }
      
   },
   // INSERT ONE ROOM IN THE DB
   insert: async (req, res, next) => {
      
      try {
         let room = new Room(req.body);
         await room.save()
            .then(response => res.send(room)) // return the inserted room
            .catch(error => res.send(""+error));
      } catch (error) {
         res.json({error: error});
      }      
   },
   // UPDATE ONE ROOM IN THE DB (id as ref)
   update: async (req, res, next) => {

      try {
         const room = await Room.findByIdAndUpdate(req.params.id, req.body);
         res.json(room); // return the updated room
         
      } catch (error) {
         res.send(error);
      }

   },
   // DELETE ONE ROOM IN THE DB (id as ref)
   delete: async(req, res, next) => {

      try {         
         const room = await Room.findByIdAndDelete(req.params.id);
         res.json(room); // return the deleted room
         
      } catch (error) {
         res.send(error);
      }

   }
};

module.exports = roomsController;