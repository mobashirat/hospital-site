import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initAuthantication = () => {
    initializeApp(firebaseConfig);
}
export default initAuthantication;