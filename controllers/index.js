const router = require('express').Router();

const homeRoutes = require('./home-routes');
const aboutRoutes = require('./about-routes');
const loginRoutes = require('./login-routes');

router.use('/', homeRoutes);
router.use('/about', aboutRoutes);
router.use('/login', loginRoutes);

module.exports = router;