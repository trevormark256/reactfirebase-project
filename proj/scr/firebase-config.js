import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcF48H9piPP66gB4X_g8csq_afJxvNpdE",
  authDomain: "new-raect-fce78.firebaseapp.com",
  projectId: "new-raect-fce78",
  storageBucket: "new-raect-fce78.appspot.com",
  messagingSenderId: "92760785790",
  appId: "1:92760785790:web:c8840918fba8bcc7bca92f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
