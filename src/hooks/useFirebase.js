import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Components/Login/Firebase/Firebase.init';


initializeAuthentication()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState("");
    const [isloading, setIsloading] = useState(true)
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsloading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

            .catch(error => {
                setUser(error.message)
            })
            .finally(() => setIsloading(false))
    }


    const logOut = () => {

        signOut(auth)
            .then(() => { })
            .finally(() => setIsloading(false))
            .catch((error) => {
            });

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsloading(false)
        });
        return () => unsubscribed;
    }, [])





    return {
        auth,
        user,
        isloading,
        setError,
        error,
        setUser,
        signInUsingGoogle,
        logOut

    }

}
export default useFirebase;