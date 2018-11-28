const db = require('../postgresql');

module.exports = {
  createSalesOrder(req, res, next) {
    db.one('INSERT INTO sales_orders(vendor_id, terms_id, date_created, total, status) VALUES($1, $2, $3, $4, $5) RETURNING *', [req.body.vendorId, req.body.termsId, req.body.dateCreated, req.body.total, req.body.status])
      .then((salesOrder) => {
        res.locals.data = salesOrder;
        return next();
      })
      .catch((err) => {
        console.log(err);
        return next(err);
      });
  },
  // addItemsToSalesOrder(req, res, next) {

  // }
  getSalesOrders(req, res, next) {
    db.any('SELECT * FROM sales_orders')
      .then((salesOrders) => {
        res.locals.data = salesOrders;
        return next();
      })
      .catch((err) => {
        console.log(err);
        return next(err);
      });
  },
};
