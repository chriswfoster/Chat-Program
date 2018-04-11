const express = require("express")
const cors = require("cors")
const bcrypt = require("bcrypt")
const routes = require("./routes.js")
const { json } = require("body-parser")
const session = require("express-session")
require("dotenv").config()

/// retire massive?
const massive = require("massive")

const PORT = 3080

const app = express()
app.use(json())
app.use(cors())
app.set("bcrypt", bcrypt)
app.use("/", routes)

app.use(
  session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false
  })
)







////// Massive about to get retired...
const massiveConnection = massive(process.env.connectionString) // tell massive to make the connection
  .then(db => app.set("db", db)) // if connection exists, set 'db' to db
  .catch(console.log)

module.exports = routes
app.listen(PORT, () => console.log(`You are now listening to ${PORT}FM`))
