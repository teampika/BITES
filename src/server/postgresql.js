const connection = 'postgres://ibozpohp:Uzn5QSUV-Ry6MhWyNjMJBMZWtHckR1rT@baasu.db.elephantsql.com:5432/ibozpohp';

const pgp = require('pg-promise');

const db = pgp(connection);

module.exports = db;
