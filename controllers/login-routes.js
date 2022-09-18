const router = require('express').Router();

// Get home page - main layout
router.get('/', async (req, res) => {
    try{
        res.render('loginpage'); 
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;