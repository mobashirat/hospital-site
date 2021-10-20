import initAuthantication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initAuthantication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState()
    const auth = getAuth()
    // google sign in
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })

    }
    // observer
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
    // for logout
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