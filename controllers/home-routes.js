const router = require('express').Router();
// We will need the models eventually 
//  const {} = require('../models/');

// Get home page - main layout
router.get('/', async (req, res) => {
    try{
        res.render('main') // Placeholder for now, this will render the correct html handlebar page
    } catch (err){
        res.status(500).json(err);
    }
});

// Get page by genre
router.get('/:id', async (req, res)=> {
    try{
        res.render('placehodler')
    } catch (err){
        res.status(500).json(err);
    }
});
