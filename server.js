// Import modules
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const hbs = exphbs.create({});
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const sess = {
  secret: "MyBookiesKey",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// turn on routes
app.use(routes);

// Keep as force : false because we do not want: DROP TABLE IF EXISTS
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port http://localhost:${PORT}/  !`));
});
