import initAuthantication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initAuthantication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState()
    const auth = getAuth()

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])
    const logOut = () => {

        signOut(auth).then(() => {
            setUser({})
        })
            .catch((error) => {
                setError("")
            });
    };
    return {
        user,
        signInUsingGoogle,
        error,
        logOut
    }
}
export default useFirebase;