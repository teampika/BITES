const db = require('../postgresql');

module.exports = {
  signup(req, res, next) {
    db.one('INSERT INTO users(email, password) VALUES ($1, $2) RETURNING *', [req.body.email, req.body.password])
      .then((user) => {
        res.locals.user = user;
        return next();
      })
      .catch((err) => {
        console.log('ERROR', err);
        return next(err);
      });
  },
  login(req, res, next) {
    
  },
  
};
