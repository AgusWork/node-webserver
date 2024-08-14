require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const hbs = require('hbs');


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {
    if (err) {
        console.error("Error loading partials:", err);
    }
});

app.use(express.static("public"));

const renderPage = (res, view, nombre, titulo) => {
    res.render(view, { nombre, titulo });
};

app.get("/", function (req, res) {
    renderPage(res, "home", "Agustin", "PRUEBA HBS");
});

app.get("/elements", function (req, res) {
    renderPage(res, "elements", "Agustin", "PRUEBA HBS");
});

app.get("/generic", function (req, res) {
    renderPage(res, "generic", "Agustin", "PRUEBA HBS");
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, '0.0.0.0', () => {
    console.log(`App listening at http://localhost:${port}/`);
});