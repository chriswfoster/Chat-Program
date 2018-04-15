import * as firebase from "firebase";
  
  const config = {
    apiKey: process.env.firebasekey,
    authDomain: "first-firebase-project-chriswf.firebaseapp.com",
    databaseURL: "https://first-firebase-project-chriswf.firebaseio.com/",
    storageBucket: "gs://first-firebase-project-chriswf.appspot.com"
  };
  
  firebase.initializeApp(config);
  
  export default firebase;
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const facebookProvider = new firebase.auth.FacebookAuthProvider();
  export const auth = firebase.auth();