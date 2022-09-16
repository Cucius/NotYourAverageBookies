const Book = require("./Book");

Book.belongsTo(Book);

module.exports = { Book };
