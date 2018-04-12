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
  const bcrypt = req.app.get("bcrypt")
  const { username, password } = req.query

  return firebase
    .database()
    .ref("/users/" + username)
    .once("value")
    .then(function(snapshot) {
      if (snapshot.val() === null) {
        return res.status(200).send("UNKNOWNUSER")
      } else if (snapshot.val().password) {
        const responded = snapshot.val()
        const hash = responded.password
        bcrypt.compare(password, hash).then(function(answer) {
          if (answer == true) {
            req.session.user = responded
            res.status(200).send(responded)
          } else if (answer == false) {
            res.status(200).send("BADPW")
          }
        })
      }
    })
})

routes.post("/api/register", (req, res) => {
  const dbInstance = req.app.get("db")
  const bcrypt = req.app.get("bcrypt")
  console.log(req.body)
  const { username, password, image_url } = req.body
  const saltRounds = 10

  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      var newUserRef = firebase
        .database()
        .ref("users/" + username)
        .set(
          { username: username, password: hash, image_url: image_url },
          function(err) {
            err
              ? res.status(200).json(err)
              : (req.session.user =
                  { username, password: hash, image_url } &&
                  res.status(200).json({ username, password: hash, image_url }))
          }
        )
      var newUserKey = newUserRef.key
      return firebase
        .database()
        .ref("usernames/" + username)
        .set(username, function(err) {
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

routes.get("/api/getkey", (req, res) => {
    res.status(200).json(firebaseconfig)
  })

module.exports = routes
