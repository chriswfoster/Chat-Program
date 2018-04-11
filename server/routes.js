const session = require("express-session")
const firebase = require("firebase")
const express = require("express")
const routes = express.Router()
require("dotenv").config()

routes.use(
    session({
      secret: process.env.secret,
      resave: false,
      saveUninitialized: false
    })
  )

var firebaseconfig = {
  apiKey: process.env.firebasekey,
  authDomain: "first-firebase-project-chriswf.firebaseapp.com",
  databaseURL: "https://first-firebase-project-chriswf.firebaseio.com/",
  storageBucket: "gs://first-firebase-project-chriswf.appspot.com"
}
firebase.initializeApp(firebaseconfig)
var database = firebase.database()

routes.get("/api/login", (req, res) => {
  req.app
    .get("db")
    .getItems()
    .then(response => res.status(200).json(response))
})

routes.post("/api/register", (req, res) => {
  const dbInstance = req.app.get("db")
  const bcrypt = req.app.get("bcrypt")
  console.log(req.body)
  const { username, password } = req.body
  const saltRounds = 10

  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      var newUserRef = firebase
        .database()
        .ref("users/")
        .push({ username: username, password: hash, image_url: '' }, function(err) {
          err ? res.status(200).json(err) : (req.session.user = username && res.status(200).json(username))
        })
      var newUserKey = newUserRef.key
      return firebase
        .database()
        .ref("usernames/" + username)
        .set(newUserKey, function(err) {
          err ? res.status(200).json(err) : null
        })
    })
  })
})

routes.post("/api/guestName", (req, res) => {
  req.session.user = req.query.name
  res.status(200).json(req.session.user)
  console.log(req.session.user)
})

module.exports = routes
