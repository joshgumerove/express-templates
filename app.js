const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars");

const app = express();

// app.engine("hbs", expressHbs({layoutsDir: 'views/layouts/', defaultLayout: "main-layout", extname: 'hbs'})); // to initialize the engine need to look at docs
// do not need to register EJS engine since supported out of the box
app.set("view engine", "ejs"); // need to use this exact key-value pair to use pug
app.set("views", "views"); // will also default to this

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .render("404", { pageTitle: "404 Page Not Found", path: "/*" });
});

app.listen(3200);
