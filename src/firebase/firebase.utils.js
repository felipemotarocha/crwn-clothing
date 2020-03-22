import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDr71S7i0635Ttc-3rT_4Zd8aIEWLL6XHY",
    authDomain: "crwn-db-11e3d.firebaseapp.com",
    databaseURL: "https://crwn-db-11e3d.firebaseio.com",
    projectId: "crwn-db-11e3d",
    storageBucket: "crwn-db-11e3d.appspot.com",
    messagingSenderId: "461995632824",
    appId: "1:461995632824:web:5c8a9795fb2d6817e2ec4d",
    measurementId: "G-1MHJE92ED0"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
