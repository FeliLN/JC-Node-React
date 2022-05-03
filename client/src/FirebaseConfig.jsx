import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
    apiKey: "AIzaSyACdUN4HrJn0kMP0W-oXA8bm2mv1slOGlo",
    authDomain: "tiendatest-bc57f.firebaseapp.com",
    projectId: "tiendatest-bc57f",
    storageBucket: "tiendatest-bc57f.appspot.com",
    messagingSenderId: "191114462639",
    appId: "1:191114462639:web:c44f1c32ef1ef95b58db5a",
    measurementId: "G-BGJ5MQLW38"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);

export default db;