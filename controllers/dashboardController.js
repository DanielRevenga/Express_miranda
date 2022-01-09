// const dashboard_data = require('../data/dashboard_data.tsx');

const dashboardController = {
   read: (req, res, next) => {
      res.json({data: "..."});
   },
   update: (req, res, next) => {
      res.send('Update data');
   },
};

module.exports = dashboardController;