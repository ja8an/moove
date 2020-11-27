import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBKGwns-A1l5D4nXttCvuXnCF1yQ22ZRXA",
  authDomain: "moov-6617d.firebaseapp.com",
  databaseURL: "https://moov-6617d.firebaseio.com",
  projectId: "moov-6617d",
  storageBucket: "moov-6617d.appspot.com",
  messagingSenderId: "385277511139",
  appId: "1:385277511139:web:d2e5fc369056e650b1ccd6",
  measurementId: "G-WS9CH6093C"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

const auth = firebase.auth();

export { auth }