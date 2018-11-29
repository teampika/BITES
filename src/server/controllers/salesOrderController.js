const db = require('../postgresql');

module.exports = {
  createSalesOrder(req, res, next) {
    console.log('INSIDE CREATE SALES ORDER')
    db.one('INSERT INTO sales_orders(vendor_id, terms_id, date_created, total, status_id) VALUES($1, $2, $3, $4, $5) RETURNING *', [req.body.vendorId, req.body.termsId, req.body.dateCreated, req.body.total, req.body.status])
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
    console.log('INSIDE ADDITEMSTOSALESORDER');
    const { items } = req.body;
    const salesOrderId = res.locals.data.id;
    console.log(salesOrderId)
    const arrOfItemPromises = [];

    items.forEach((item) => {
      arrOfItemPromises.push(new Promise((resolve, reject) => {
        db.none('INSERT INTO sales_order_items(sales_order_id, items_id, adjusted_price, quantity) VALUES($1, $2, $3, $4)',
          [salesOrderId, item.id, item.price, item.quantity]).then(() => resolve());
      }));
      console.log(arrOfItemPromises);
    });

    Promise.all(arrOfItemPromises)
      .then(() => {
        console.log('INSIDE PROMISE ALL');
        next()
      })
      .catch((err) => {
        console.log('ERROR', err);
        return next(err);
      })

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
  getSaleOrderDetails(req, res, next) {
    db.any(`SELECT soi.adjusted_price, soi.quantity, order_status.status, items.name, items.description, sales_orders.total, vendors.vendor_name, vendors.street_address 
    FROM sales_order_items AS soi 
    LEFT JOIN sales_orders ON sales_order_id = sales_orders.id
    LEFT JOIN items ON items_id = items.id 
    LEFT JOIN order_status on status_id = order_status.id 
    LEFT JOIN vendors ON vendor_id = vendors.id
    WHERE sales_order_id = ${req.body.id}`)
      .then((data) => {
        res.locals.data = data;
        next();
      })
      .catch((err) => {
        console.log('ERROR', err);
        return next(err);
      });
  },
};
