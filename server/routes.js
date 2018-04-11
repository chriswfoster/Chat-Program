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



    // var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('/users/asdfasdf/-L9m_xZiDC8NRa_2N-RS').once('value').then(function(snapshot) {
        console.log(snapshot)
      var usernames = (snapshot.val() && snapshot.val().usernames) || 'Anonymous';
console.log(usernames)
    })
        // snapshot.forEach(function(childSnapshot) {
        //     var childKey = childSnapshot.key;
        //     var childData = childSnapshot.val();
        //     console.log(childData)
        //   })
    // })
    //   .then(response => {
    //       console.log(response)
        // if (response.length > 0) {
        //   var hash = response[0].password
        //   bcrypt.compare(password, hash).then(function(answer) {
        //     if (answer == true) {
        //       // req.session.user = response[0]
        //       res.status(200).send(response[0])
        //     } else if (answer == false) {
        //       res.status(200).send("BADPW")
        //     }
        //   })
        // } else if (response.length < 1) {
        //   res.status(200).send("UnknownUser")
        // }
    //   })
    //   .catch(err => console.log(err))
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
        .ref("users/"+username)
        .push({ username: username, password: hash, image_url: '' }, function(err) {
          err ? res.status(200).json(err) : (req.session.user = username && res.status(200).json(username))
        })
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

module.exports = routes
