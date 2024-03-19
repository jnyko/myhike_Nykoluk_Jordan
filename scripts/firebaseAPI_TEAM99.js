//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyCHl8dKpn89Uj6ljOZhdMh1i9oMrom4IDY",
  authDomain: "comp1800-202410-demo-1a4f7.firebaseapp.com",
  projectId: "comp1800-202410-demo-1a4f7",
  storageBucket: "comp1800-202410-demo-1a4f7.appspot.com",
  messagingSenderId: "403178287590",
  appId: "1:403178287590:web:04accca5ded9df4ca86627",
  measurementId: "G-352JFMVCZ9"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
