const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const aboutRoutes = require('./about-routes.js');

router.use('/', homeRoutes);
router.use('/about', aboutRoutes);

module.exports = router;