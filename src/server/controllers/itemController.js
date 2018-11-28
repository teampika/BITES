const db = require('../postgresql');

module.exports = {
  getItems(req, res, next) {
    db.any('SELECT * FROM items')
      .then((items) => {
        res.locals.data = items;
        return next();
      })
      .catch((err) => {
        console.log('ERROR', err);
        return next(err);
      });
  },
  createItem(req, res, next) {
    db.one('INSERT INTO items(name, description, defaultPrice) VALUES ($1, $2, $3) RETURNING *', [req.body.name, req.body.description, req.body.defaultPrice])
      .then((item) => {
        res.locals.data = item;
        return next();
      })
      .catch((err) => {
        console.log('ERROR', err);
        return next(err);
      });
  },
  updateItemQuantity(req, res, next) {
    if (req.body.quantity) {
      db.one('UPDATE items SET quantity=$1 WHERE id=$2 RETURNING *', [req.body.quantity, req.body.id])
        .then((item) => {
          res.locals.data = item;
          return next();
        })
        .catch((err) => {
          console.log('ERROR', err);
          return next(err);
        });
    } else {
      next();
    }
  },
  updateItemDescription(req, res, next) {
    if (req.body.description) {
      console.log('INSIDE ITEMDESC');
      db.one('UPDATE items SET description=$1 WHERE id=$2 RETURNING *', [req.body.description, req.body.itemId])
        .then((item) => {
          res.locals.data = item;
          return next();
        })
        .catch((err) => {
          console.log('ERROR', err);
          return next(err);
        });
    } else {
      next();
    }
  },
  updateItemPrice(req, res, next) {
    if (req.body.price) {
      console.log('INSIDE ITEMPRICE');
      db.one('UPDATE items SET default_price=$1 WHERE id=$2 RETURNING *', [req.body.price, req.body.itemId])
        .then((item) => {
          res.locals.data = item;
          return next();
        })
        .catch((err) => {
          console.log('ERROR', err);
          return next(err);
        });
    } else {
      next();
    }
  },

};
