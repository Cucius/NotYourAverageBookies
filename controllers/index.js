const router = require('express').Router();

const homeRoutes = require('./home-routes');
// const aboutRoutes = require('./about-routes');

router.use('/', homeRoutes);
// router.use('/about', aboutRoutes);

module.exports = router;