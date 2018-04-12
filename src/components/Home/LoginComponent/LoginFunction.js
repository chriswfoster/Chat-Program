

import firebase from "firebase"
require("dotenv").config()

var firebaseconfig = {
  apiKey: process.env.firebasekey,
  authDomain: "first-firebase-project-chriswf.firebaseapp.com",
  databaseURL: "https://first-firebase-project-chriswf.firebaseio.com/",
  storageBucket: "gs://first-firebase-project-chriswf.appspot.com"
}
firebase.initializeApp(firebaseconfig)
var database = firebase.database()

const loginSystem = (username, password) => { console.log(username, password)}
//   console.log("hi1")
//   return firebase
//     .database()
//     .ref("/users/" + username)
//     .once("value")
//     .then(function(snapshot) {
//       if (snapshot.val().password) {
//         const responded = snapshot.val()
//         const hash = responded.password
//         bcrypt.compare(password, hash).then(function(answer) {
//           if (answer == true) {
//             console.log("hi")
//             return responded
//           } else if (answer == false) {
//             return "BADPW"
//           }
//         })
//       } else console.log("something")
//     })
// }
export default loginSystem