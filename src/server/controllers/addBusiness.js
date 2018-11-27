const db = require('../postgresql');

module.exports = {
  addBusiness(req, res, next) {
    db.one('INSERT INTO businessInfo(Name, phoneNumber, street, town, state, zipcode) VALUES($1, $2, $3, $4, $5, $6) RETURNING *' ,[req.body.Name, req,body.phoneNumber, req.body.street, req.body.town, req.body.state, req.body.zipcode])
      .then(data) => {
        res.locals.data = data;
        next();
      };
  },
};
