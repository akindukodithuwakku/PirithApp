import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMNlR69gEaY1-4ozH-k5l4wVA6iJQCY5U",
  authDomain: "pirithapp.firebaseapp.com",
  projectId: "pirithapp",
  storageBucket: "pirithapp.firebasestorage.app",
  messagingSenderId: "375229020521",
  appId: "1:375229020521:web:40e95798fd8cb7912ba5f8"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth };


