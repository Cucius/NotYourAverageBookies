const router = require("express").Router();

const homeRoutes = require("./home-routes");
const aboutRoutes = require("./about-routes");
const loginRoutes = require("./api/login-routes");
//For Testing
const genreRoutes = require("./genre-routes");

router.use("/", homeRoutes);
router.use("/about", aboutRoutes);
router.use("/login", loginRoutes);
//For testing
router.use("/genre", genreRoutes);

module.exports = router;
