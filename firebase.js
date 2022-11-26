// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { 
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
 } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdoJKPXYb8jsfjT0c3dFYd6Kl1ty4D9g0",
  authDomain: "fir-javascrip-crud-95a5c.firebaseapp.com",
  projectId: "fir-javascrip-crud-95a5c",
  storageBucket: "fir-javascrip-crud-95a5c.appspot.com",
  messagingSenderId: "491485791965",
  appId: "1:491485791965:web:074c2c595b26523e9c3d34"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const saveTask = (title, description) => addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) => onSnapshot(collection(db, "tasks"), callback);

export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) => updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));