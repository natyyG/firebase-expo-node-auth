// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "fir-auth-545eb",
  storageBucket: "fir-auth-545eb.appspot.com",
  messagingSenderId: "273797031621",
  appId: "1:273797031621:web:f09546d964e92ea4bef2ac"
};


let app;
if (firebase.apps.length === 0){
    app=firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}
const auth = firebase.auth()
export{auth};