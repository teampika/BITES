const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const { addVendor, getVendors } = require('./controllers/vendorControllers');

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/vendors', addVendor, (req, res) => {
  res.status(200).json(res.locals.data);
});

app.get('/vendors', getVendors, (req, res) => {
  res.status(200).json(res.locals.data);
});


app.use((err, req, res, next) => {
  res.status(400).send(err);
});


module.exports = app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
