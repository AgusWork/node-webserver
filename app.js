require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const hbs = require("hbs");

app.use(express.static("public"));

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {
  if (err) {
    console.error("Error loading partials:", err);
  }
});

app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Agustin",
    titulo: "PRUEBA HBS",
  });
});
app.get("/elements", function (req, res) {
  res.render("elements", {
    nombre: "Agustin",
    titulo: "PRUEBA HBS",
  });
});
app.get("/generic", function (req, res) {
  res.render("generic", {
    nombre: "Agustin",
    titulo: "PRUEBA HBS",
  });
});

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/back/404.html");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listenting at http://localhost:${port}/`);
});

module.exports = app;
