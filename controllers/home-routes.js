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
    res.render("homepage", { randomBooks });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get page by genre
router.get("/post/:genre", async (req, res) => {
  try {
    // console.log(req.params.genre);
    const bookData = await Book.findAll({
      where: { genre: req.params.genre },
    });

    const book = bookData.map((book) => book.get({ plain: true }));
    // const randomBooks = randomizer(book);
    // console.log(book);
    res.render("genrepage", { book });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
