let Contact = require("../models/contactModel");

const contactsController = {
   // GET ONLY ONE CONTACT IN THE DB (id as ref)
   readContact: async (req, res, next) => {

      try {
         const contact = await Contact.findById(req.params.id);
         res.json(contact);
      } catch (error) {
         res.send(error);
      }
   },
   // GET ALL CONTACTS IN THE DB WITH OPTINAL FILTERS
   readAll: async (req, res, next) => {

      try {
         const contacts = await Contact.find();
         res.json(contacts);
      } catch (error) {
         res.send(error);
      }
      
   },
   // INSERT ONE CONTACT IN THE DB
   insert: async (req, res, next) => {
      
      try {
         let contact = new Contact(req.body);
         await contact.save()
            .then(response => res.send(contact)) // return the inserted contact
            .catch(error => res.send(""+error));
      } catch (error) {
         res.json({error: error});
      }      
   },
   // UPDATE ONE CONTACT IN THE DB (id as ref)
   update: async (req, res, next) => {

      try {
         const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
         res.json(contact); // return the updated contact
         
      } catch (error) {
         res.send(error);
      }

   },
   // DELETE ONE CONTACT IN THE DB (id as ref)
   delete: async(req, res, next) => {

      try {         
         const contact = await Contact.findByIdAndDelete(req.params.id);
         res.json(contact); // return the deleted contact
         
      } catch (error) {
         res.send(error);
      }

   }
};

module.exports = contactsController;