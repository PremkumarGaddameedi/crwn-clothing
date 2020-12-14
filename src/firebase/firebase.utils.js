import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBmZnC9hAcQsrNAdHFh5B26jsVXBIxy12c",
    authDomain: "crwn-db-5f079.firebaseapp.com",
    projectId: "crwn-db-5f079",
    storageBucket: "crwn-db-5f079.appspot.com",
    messagingSenderId: "272343332806",
    appId: "1:272343332806:web:2512e72d85b641817924c7",
    measurementId: "G-T1SLEYBE43"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
       const { displayName, email } = userAuth;
       const createdAt = new Date();


       try {
         await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionalData
         })
       } catch (error) {
          console.log('error creating user', error.message);
       }
    }


    return userRef;
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;