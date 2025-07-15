import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMNlR69gEaY1-4ozH-k5l4wVA6iJQCY5U",
  authDomain: "pirithapp.firebaseapp.com",
  projectId: "pirithapp",
  storageBucket: "pirithapp.appspot.com",
  messagingSenderId: "375229020521",
  appId: "1:375229020521:web:40e95798fd8cb7912ba5f8",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { firebaseApp, auth };
