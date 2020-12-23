import firebase from 'firebase';
require("firebase/database");
require("firebase/auth");

const config = {
    apiKey: "AIzaSyDMdu4Xe3CRJvSkOYz8TXs2-qdLQzxlJOc",
    authDomain: "kido-bookt-backend.firebaseapp.com",
    databaseURL: "https://kido-bookt-backend-default-rtdb.firebaseio.com",
    projectId: "kido-bookt-backend",
    storageBucket: "kido-bookt-backend.appspot.com",
    messagingSenderId: "457486476401",
    appId: "1:457486476401:web:55300cffb22914de2167d0",
};

const fire = firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();

export default fire;