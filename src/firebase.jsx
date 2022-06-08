import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyBAv4nz3_KdpAbGMAUU15w6Pv-yRHLlTUQ",
    authDomain: "clone-49802.firebaseapp.com",
    databaseURL: "https://clone-49802.firebaseio.com",
    projectId: "clone-49802",
    storageBucket: "clone-49802.appspot.com",
    messagingSenderId: "259899829754",
    appId: "1:259899829754:web:1d1818a410d62f825fc843",
    measurementId: "G-TBS4Y80S7N"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
 const auth = firebase.auth();
 const db = firebaseApp.firestore();

 export {db,auth};