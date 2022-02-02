let User = require("../models/userModel");

const usersController = {
   // GET ONLY ONE USER IN THE DB (id as ref)
   readUser: async (req, res, next) => {

      try {
         const user = await User.findById(req.params.id);
         res.json(user);
      } catch (error) {
         res.send(error);
      }
   },
   // GET ALL USER IN THE DB WITH OPTINAL FILTERS
   readAll: async (req, res, next) => {

      try {
         const user = await User.find();
         res.json(user);
      } catch (error) {
         res.send(error);
      }
      
   },
   // INSERT ONE USER IN THE DB
   insert: async (req, res, next) => {
      
      try {
         let user = new User(req.body);
         await user.save()
            .then(response => res.send(user)) // return the inserted user
            .catch(error => res.send(""+error));
      } catch (error) {
         res.json({error: error});
      }      
   },
   // UPDATE ONE USER IN THE DB (id as ref)
   update: async (req, res, next) => {

      try {
         const user = await User.findByIdAndUpdate(req.params.id, req.body);
         res.json(user); // return the updated boouserking
         
      } catch (error) {
         res.send(error);
      }

   },
   // DELETE ONE USER IN THE DB (id as ref)
   delete: async(req, res, next) => {

      try {         
         const user = await User.findByIdAndDelete(req.params.id);
         res.json(user); // return the deleted user
         
      } catch (error) {
         res.send(error);
      }

   }
};

module.exports = usersController;