import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore"

const app = initializeApp({
    apiKey: "AIzaSyBUX_iyKYdmMtiyFxnKwDy5D1Xj5x12WG8",
    authDomain: "sample-commerce-app.firebaseapp.com",
    projectId: "sample-commerce-app",
    storageBucket: "sample-commerce-app.appspot.com",
    messagingSenderId: "224086397643",
    appId: "1:224086397643:web:b9ad6e86c76b7bcf48c14e",
    measurementId: "G-0CHC7JWGPH"
});
export const db = getFirestore();
export const auth = getAuth();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = doc(db, 'users', userAuth.uid)
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef,
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                });
        } catch (error) {
            console.log('Error creating user: ', error.message);
        }
    } else {
        console.log(userAuth);
    }

    return userRef;
}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;