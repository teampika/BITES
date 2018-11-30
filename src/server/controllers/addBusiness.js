const db = require('../postgresql');

module.exports = {
  addBusiness(req, res, next) {
    console.log(req.body);
    db.one('INSERT INTO businessInfo(nçame, phoneNumber, street, town, state, zipCode) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [req.body.name, req.body.phoneNumber, req.body.street, req.body.town, req.body.state, req.body.zipCode])
      .then((data) => {
        res.locals.data = data;
        return next();
      })
      .catch((err) => {
        console.log('ERROR', err);
        next(err);
      });
  },
  getBusinesses(req, res, next) {
    db.any('SELECT  * FROM businessInfo')
      .then((data) => {
        res.locals.data = data;
        return next();
      })
      .catch((err) => {
        console.log('ERROR', err);
        next(err);
      });
  },
};
