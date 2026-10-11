import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAOGKpmNXbRZPYPyI_ovwmzT4RKqGIcXJw",
  authDomain: "kigambo.firebaseapp.com",
  projectId: "kigambo",
  storageBucket: "kigambo.firebasestorage.app",
  messagingSenderId: "1000747498246",
  appId: "1:1000747498246:web:5cc4b02b94a64397ecbc87"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)