require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require("path");
const bodyParser = require('body-parser');

const indexRouter = require("./routes/index");
const errorController = require('./controllers/errorController');


app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use("/", indexRouter);
app.use(errorController.get500);

app.get("/", (req, res, next) => {
    res.render("index", { title: "Express" });
});



server.listen(80);