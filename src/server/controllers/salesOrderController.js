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
  addItemsToSalesOrder(req, res, next) {
    const { items } = req.body;
    const salesOrderId = res.locals.data.id;
    const arrOfItemPromises = [];
    // items.forEach((item) => {
    //   console.log('ITEM', item);
    //   db.none('INSERT INTO sales_order_items(sales_order_id, items_id, adjusted_price, quantity) VALUES($1, $2, $3, $4)', [salesOrderId, item.id, item.price, item.quantity]);
    // });

    items.forEach((item) => {
      arrOfItemPromises.push(new Promise((resolve, reject) => {
        db.none('INSERT INTO sales_order_items(sales_order_id, items_id, adjusted_price, quantity) VALUES($1, $2, $3, $4)', [salesOrderId, item.id, item.price, item.quantity]);
      }));
    });

  },
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
