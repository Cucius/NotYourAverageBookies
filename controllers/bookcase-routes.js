const router = require('express').Router();
// We will need the models eventually
const { Book, BookList } = require("../models/");

// Get home page - main layout
router.post('/', async (req, res) => {
    try{
        console.log("got here")
            // // Find the users 
        const user = await BookList.findOne({where: {username: req.body.name}});
        console.log(user.books);
        const bookData = await Book.findAll({
            where: { id: user.books },
          });
        // console.log(bookData);
        const book = bookData.map((book) => book.get({ plain: true }));
        console.log(book);
        // res.status(200).json("we are here")
        res.render('> myBookies', {book, loggedIn: req.session.loggedIn }); 
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;