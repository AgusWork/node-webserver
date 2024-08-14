require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT;
const hbs = require('hbs');


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {}); 


app.use(express.static("public") )



app.get("/", function (req, res) {
    res.render("home", {
      nombre:"Agustin",
      titulo:"PRUEBA HBS"
    })
  })
app.get("/elements", function (req, res) {
    res.render("elements", {
      nombre:"Agustin",
      titulo:"PRUEBA HBS"
    })
  })
app.get("/generic", function (req, res) {
    res.render("generic", {
      nombre:"Agustin",
      titulo:"PRUEBA HBS"
    })
  })

  app.get('*', function (req, res) {
    res.sendFile( __dirname + "/public/404.html")
  })
  
app.listen(port, () => {
    console.log(`Example app listenting at http://localhost:${port}/`)
})

