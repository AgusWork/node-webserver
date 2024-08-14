require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static("public"));
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials", (err) => {
  if (err) console.error("Error loading partials:", err);
});

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Agustin",
    titulo: "PRUEBA HBS",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Agustin",
    titulo: "PRUEBA HBS",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Agustin",
    titulo: "PRUEBA HBS",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/back/404.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));

module.exports = app;