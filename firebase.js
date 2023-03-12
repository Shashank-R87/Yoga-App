// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3XpzCfCHdXfQyoZaRUfh9hnXSBwLDhUY",
  authDomain: "yoga-app-auth.firebaseapp.com",
  projectId: "yoga-app-auth",
  storageBucket: "yoga-app-auth.appspot.com",
  messagingSenderId: "712166171171",
  appId: "1:712166171171:web:ff820c06d1352d5e598796"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};