

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

console.log('ENV FILE',import.meta.env.VITE_PASS);

const firebaseConfig = {
  apiKey: "AIzaSyDA5fmRtzY7m1LZ7ZqFlcGngH369p0GXiM",
  authDomain: "task-master-final.firebaseapp.com",
  projectId: "task-master-final",
  storageBucket: "task-master-final.appspot.com",
  messagingSenderId: "420416626735",
  appId: "1:420416626735:web:03f241af15d638d3aee6da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;