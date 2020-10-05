import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyANzerB5iDiHp7R52OXQwB0sw6zJAaiX9I",
    authDomain: "sql-demos-a8f68.firebaseapp.com",
    databaseURL: "https://sql-demos-a8f68.firebaseio.com",
    projectId: "sql-demos-a8f68",
    storageBucket: "sql-demos-a8f68.appspot.com",
    messagingSenderId: "849629391345",
    appId: "1:849629391345:web:26ece27c61095c98c67c50"
};

firebase.initializeApp(firebaseConfig);


console.log('firebase configurado')

export default firebase.firestore();