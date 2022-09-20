const router = require("express").Router();
const randomizer = require("../utils/helpers");
// We will need the models eventually
const { Book, BookList } = require("../models/");


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
    res.render("homepage", { randomBooks, loggedIn: req.session.loggedIn });
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
    res.render("genrepage", { book, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/book/", async (req, res) => {
  try {
    // console.log(req.body)
    // Find or create the entry of the user
    const [row, created] = await BookList.findOrCreate({
      where: {username: req.body.name},
      defaults: {username: req.body.name, books: [req.body.id]},
    });
    // // Find the users 
    const user = await BookList.findOne({where: {username: req.body.name}});
    // Get current books for user
    console.log(user.books)
    const newArray = [...user.books]
    // Push new books into array
    newArray.push(req.body.id);
    // Filter array to be all unique
    const finalArray = new Set(newArray);
    console.log(finalArray)
    // Set the new books
    user.set({
      books:finalArray
    })
    user = await user.save();
    console.log(user.book1)

    res.status(200).json(data)
    // res.render("genrepage", { book, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
