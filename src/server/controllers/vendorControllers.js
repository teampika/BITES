const db = require('../postgresql');

module.exports = {
  addVendor(req, res, next) {
    db.one('INSERT INTO vendors(vendor_name, phone_number, street_address, town, state, zip_code) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [req.body.vendorName, req.body.phoneNumber, req.body.streetAddres, req.body.town, req.body.state, req.body.zipCode])
      .then((vendor) => {
        res.locals.data = vendor;
        return next();
      })
      .catch((err) => {
        console.log('ERROR', err);
        return next(err);
      });
  },
  getVendors(req, res, next) {
    db.any('SELECT * FROM vendors')
      .then((data) => {
        res.locals.data = data;
        return next();
      })
      .catch((err) => {
        console.log('ERROR', err);
        return next(err);
      });
  },
};
