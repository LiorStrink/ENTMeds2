import * as firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyA95mzDGBRfTsFv05TSubHyRe30s4DJdY8',
  authDomain: 'medent-1aae9.firebaseapp.com',
  projectId: 'medent-1aae9',
  storageBucket: 'medent-1aae9.appspot.com',
  messagingSenderId: '556656849887',
  appId: '1:556656849887:web:d7ecf092d5358818610a6a',
  measurementId: 'G-NDH4R6CXLE',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

function parseCSV(fileName) {
  storage
    .ref(fileName)
    .getDownloadURL()
    .then((url) => {
      return fetch(url);
    })
    .then((response) => response.text())
    .then((text) => {
      Papa.parse(text, {
        complete: function (results) {
          let data = results.data;
          // Do something with the data here
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
