
// import firebase from "firebase"
// require("dotenv").config()


// console.log(process.env)
// firebase.initializeApp(this.props.firebaseconfig)
// var database = firebase.database()

// export const chatGrabber = (username, password) => { console.log(username, password)}
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
