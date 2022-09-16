const router = require('express').Router();

// Get home page - main layout
router.get('/about', async (req, res) => {
    try{
        res.render('placeholder') // Placeholder for now, this will render the correct html handlebar page
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;