const router = require('express').Router();
// We will need the models eventually 
const { Book } = require('../models/');

// Get home page - main layout
router.get('/', async (req, res) => {
    try{
        const bookData = await Book.findAll();
        res.status(200).json(bookData);
        // Need a helper funciton to randomize the first 3 books the user will see

        // Serialize data so we can pass it to handle bars
        // const book = bookData.map((book) => book.get({plain:true}));
        // res.render('main', { book }) // Placeholder for now, this will render the correct html handlebar page
    } catch (err){
        res.status(500).json(err);
    }
});

// Get page by genre
router.get('/:id', async (req, res)=> {
    try{
        console.log(req.params.id);
        const bookData = await Book.findAll({
            where: {genre: req.params.id}});
        res.status(200).json(bookData);
        // Serialize data so we can pass it to handle bars
        // const book = bookData.map((book) => book.get({plain:true}));
        // res.render('placehodler', {book})
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports =router;