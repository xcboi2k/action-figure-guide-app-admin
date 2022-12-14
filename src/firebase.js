import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB2WVgabBBVAclhREmp12_i02JA9xutcqM",
    authDomain: "action-figure-guide-app.firebaseapp.com",
    projectId: "action-figure-guide-app",
    storageBucket: "action-figure-guide-app.appspot.com",
    messagingSenderId: "774997431008",
    appId: "1:774997431008:web:3dab3d645d96dddc423685"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);