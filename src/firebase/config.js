import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDhkc2hUo-JqtXZ1mf54GDRSHeoAk9gRec",
    authDomain: "vue-blog-system-8cb78.firebaseapp.com",
    projectId: "vue-blog-system-8cb78",
    storageBucket: "vue-blog-system-8cb78.appspot.com",
    messagingSenderId: "967811995405",
    appId: "1:967811995405:web:066e6503b2c80f7ac84244"
  };

  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp,auth};
