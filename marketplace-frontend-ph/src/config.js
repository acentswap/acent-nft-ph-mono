import firebase from 'firebase/app';
import 'firebase/database'; // for realtime database

const firebaseConfig = {
  apiKey: 'AIzaSyAeMSYOHfIF5LNeEjtq3QSexA85vYgUpvs',
  authDomain: 'acent-ddd7c.firebaseapp.com',
  projectId: 'acent-ddd7c',
  storageBucket: 'acent-ddd7c.appspot.com',
  messagingSenderId: '253358232012',
  appId: '1:253358232012:web:e9c5c8a7223def40a68d69',
  measurementId: 'G-G0889SHN3J',
  databaseURL: 'https://acent-ddd7c-default-rtdb.firebaseio.com',
};

const myfirebase = firebase.initializeApp(firebaseConfig);
export default myfirebase;
