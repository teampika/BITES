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

const {
  signup,
  // login,
} = require('./controllers/users');

const {
  addBusiness,
  // getBusinesses,
} = require('./controllers/addBusiness');

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const sendResponse = (req, res) => res.status(200).json(res.locals.data);

app.get('/vendors',
  getVendors,
  sendResponse);

app.post('/vendors',
  addVendor,
  sendResponse);

app.get('/items',
  getItems,
  sendResponse);

app.post('/items',
  createItem,
  sendResponse);

app.patch('/items',
  updateItemDescription,
  updateItemPrice,
  sendResponse);

app.get('/salesOrder',
  getSalesOrders,
  sendResponse);

app.post('/salesOrder',
  createSalesOrder,
  addItemsToSalesOrder,
  sendResponse);

app.post('/signup',
  addBusiness,
  signup,
  sendResponse);

// app.post('/login',
//   login,
//   sendResponse);


app.use((err, req, res, next) => {
  res.status(400).send(err);
});


module.exports = app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
