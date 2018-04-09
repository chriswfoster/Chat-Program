const express = require('express')
const {json} = require('body-parser')
const cors = require('cors')
const bcrypt = require ('bcrypt')
const massive = require('massive')
const routes = require("./routes.js")
require('dotenv').config()

const PORT = 3080;


const app = express();
app.use(json())
app.use(cors())
app.set("bcrypt", bcrypt)
app.use("/", routes)

const massiveConnection = massive(process.env.connectionString) // tell massive to make the connection
.then(db => app.set("db", db)) // if connection exists, set 'db' to db
.catch(console.log)





app.listen(PORT, () => console.log(`You are now listening to ${PORT}FM`))