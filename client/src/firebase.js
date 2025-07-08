import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your Firebase configuration from the Firebase Console
const firebaseConfig = {
    apiKey:import.meta.env.VITE_apiKey ,
    authDomain:import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket:import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup }; 