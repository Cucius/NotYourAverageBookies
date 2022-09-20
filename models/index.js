const Book = require("./Book");
const User = require("./User");
const BookList = require("./BookList")

Book.belongsTo(Book);

module.exports = { User, Book, BookList };
