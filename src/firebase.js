import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyB1YicW_onVT15VdVtAN7pBZZxqSZHmU94",
    authDomain: "help-u-everyday.firebaseapp.com",
    databaseURL: "https://help-u-everyday.firebaseio.com",
    projectId: "help-u-everyday",
    storageBucket: "help-u-everyday.appspot.com",
    messagingSenderId: "805609343213"
  };
  firebase.initializeApp(config);

export default firebase;