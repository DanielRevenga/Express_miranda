const rooms_data = require('../data/rooms_data.tsx');

const roomsController = {
   readRoom: (req, res, next) => {
      res.json(rooms_data.find( (b) => (""+b.id) === req.params.id ));
   },
   readAll: (req, res, next) => {
      res.json(rooms_data);
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

module.exports = roomsController;