const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost");

module.exports = {
  db
};
