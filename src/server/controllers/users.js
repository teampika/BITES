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
    db.one('SELECT * FROM users WHERE email LIKE $1 RETURNING *' [req.body.email ])
      .then(user) => {
        if (!user) return res.status(400).json('Username not found');
        else {
          db.one('SELECT * FROM users WHERE password LIKE $1 RETURNING *' [req.body.password])
            .then(password) => {
              if (password === req.body.password) return res.status(200).json('Login success');
            }
          return res.status(400).json('Login failure');
        }
      } 
  },
};
