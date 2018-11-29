const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const { addVendor, getVendors } = require('./controllers/vendorControllers');
const { createSalesOrder, getSalesOrders, addItemsToSalesOrder } = require('./controllers/salesOrderController');
const {
  createItem,
  getItems,
  updateItemDescription,
  updateItemPrice,
} = require('./controllers/itemController');

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const sendRespose = (req, res) => res.status(200).json(res.locals.data);

app.get('/vendors',
  getVendors,
  sendRespose);

app.post('/vendors',
  addVendor,
  sendRespose);

app.get('/items',
  getItems,
  sendRespose);

app.post('/items',
  createItem,
  sendRespose);

app.patch('/items',
  updateItemDescription,
  updateItemPrice,
  sendRespose);

app.get('/salesOrder',
  getSalesOrders,
  sendRespose);

app.post('/salesOrder',
  createSalesOrder,
  addItemsToSalesOrder,
  sendRespose);


app.use((err, req, res, next) => {
  res.status(400).send(err);
});


module.exports = app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
