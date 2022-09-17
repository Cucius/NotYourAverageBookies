const router = require("express").Router();
const randomizer = require("../utils/helpers");
// We will need the models eventually
const { Book } = require("../models/");

// Get home page - main layout
router.get("/", async (req, res) => {
  try {
    console.log("Called route");
    const bookData = await Book.findAll();
    // Serialize data so we can pass it to handle bars
    // console.log(bookData)
    const book = bookData.map((book) => book.get({ plain: true }));
    // Need a helper function to randomize the first 3 books the user will see
    const randomBooks = randomizer(book);
    // This if for testing
    console.log(randomBooks);
    // res.status(200).json(randomBooks);
    // TODO: Pass randomBooks to handlebars
    res.render("homepage", { randomBooks });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get page by genre
router.get("/post/:genre", async (req, res) => {
  try {
    console.log(req.params.genre);
    const bookData = await Book.findAll({
      where: { genre: req.params.genre },
    });

    const book = bookData.map((book) => book.get({ plain: true }));
    const randomBooks = randomizer(book);
    // This if for testing
    console.log(randomBooks);
    // res.status(200).json(randomBooks);
    // Serialize data so we can pass it to handle bars
    // TODO: pass oject to handlebars so we can render books by genre
    res.render("homepage", {randomBooks});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
