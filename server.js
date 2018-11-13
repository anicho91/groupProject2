const express = require("express");
const path = require("path");

const app = express();

var PORT = 8888;

// var PORT = process.env.PORT || 3000;

const db = require("./models");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/item-api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + `${PORT}`);
  });
});
