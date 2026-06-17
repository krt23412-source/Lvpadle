import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

let app;
let auth;
let db;

export async function initFirebase() {
  if (app) return { app, auth, db };
  
  try {
    const config = await import("../../firebase-applet-config.json");
    
    app = initializeApp(config.default || config);
    auth = getAuth(app);
    db = getFirestore(app);
    
    return { app, auth, db };
  } catch (error) {
    console.error("Firebase init failed", error);
    return null;
  }
}

export const googleProvider = new GoogleAuthProvider();
export { auth, db };
