import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBUX_iyKYdmMtiyFxnKwDy5D1Xj5x12WG8",
    authDomain: "sample-commerce-app.firebaseapp.com",
    projectId: "sample-commerce-app",
    storageBucket: "sample-commerce-app.appspot.com",
    messagingSenderId: "224086397643",
    appId: "1:224086397643:web:b9ad6e86c76b7bcf48c14e",
    measurementId: "G-0CHC7JWGPH"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;