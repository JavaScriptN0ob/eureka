import firebase from 'firebase/app';
import 'firebase/auth';
// import config from './config';

const config = {
  apiKey: "AIzaSyClodjfOHopMMYDRg_Jb2Qy46qAgbUxK_A",
  authDomain: "eureka-db-711ae.firebaseapp.com",
  databaseURL: "https://eureka-db-711ae.firebaseio.com",
  projectId: "eureka-db-711ae",
  storageBucket: "eureka-db-711ae.appspot.com",
  messagingSenderId: "935771336726",
  appId: "1:935771336726:web:2f274b36f3a1146d408537",
  measurementId: "G-073B5MCQNE"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
}

export const logOut = () => {
  auth.signOut();
}

export default firebase;