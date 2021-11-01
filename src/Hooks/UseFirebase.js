import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged , signOut , signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuth from "../Firebase/Firebase.init";

initializeAuth();


const useFirebase = ()=>{
    
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signinUsingGoogle = () => {
        setIsLoading(true);
       return signInWithPopup(auth, googleProvider);
        
        
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then ( () => {
            setUser({})
        })
        .finally(() =>setIsLoading(false));
    }

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              setUser(user);
              
            } else{
                setUser({})
            }
            setIsLoading(false);
          });
    },[])

    return{
        user,
        signinUsingGoogle,
        logOut,
        isLoading,
        setIsLoading

    }
};

export default useFirebase;