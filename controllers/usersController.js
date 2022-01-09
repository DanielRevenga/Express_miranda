const users_data = require('../data/users_data.tsx');

const usersController = {
   readUser: (req, res, next) => {
      res.json(users_data.find( (b) => (""+b.id) === req.params.id ));
   },
   readAll: (req, res, next) => {
      res.json(users_data);
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

module.exports = usersController;