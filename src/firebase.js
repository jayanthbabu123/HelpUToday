import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyAkmCAJHfiPMXe_FCEWp6n7hItWlvlvo90",
    authDomain: "helputoday-fae2e.firebaseapp.com",
    databaseURL: "https://helputoday-fae2e.firebaseio.com",
    projectId: "helputoday-fae2e",
    storageBucket: "helputoday-fae2e.appspot.com",
    messagingSenderId: "723822167772"
};
firebase.initializeApp(config);

export default firebase;