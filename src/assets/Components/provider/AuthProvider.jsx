
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const authContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider();
    const gProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const gitHubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, gProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current User', currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        gitHubSignIn,
        loading
    }
    return (
        <authContext.Provider value={authInfo}>
            {
                children
            }
        </authContext.Provider>
    );
};

export default AuthProvider;