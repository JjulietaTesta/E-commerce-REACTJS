import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe8pQebciL-K1kmj_KCmYrXALfMAEHhqI",
  authDomain: "e-commerce-react-js-71607.firebaseapp.com",
  projectId: "e-commerce-react-js-71607",
  storageBucket: "e-commerce-react-js-71607.appspot.com",
  messagingSenderId: "21985945230",
  appId: "1:21985945230:web:dceaf1d4632002f89c4bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)