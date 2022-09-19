const Book = require("./Book");
const User = require("./User");

Book.belongsTo(Book);

module.exports = { User, Book };
