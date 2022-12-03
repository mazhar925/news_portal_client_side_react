import React, { createContext, useEffect, useState } from 'react'
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../src/firebase/firebase.init'

export const AuthContext = createContext();
const auth = getAuth(app)

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(null);
    const [loading, setLoad] = useState(true);

    const providerLogin = (provider)=>{
        setLoad(true)
        return signInWithPopup(auth, provider);
    }
    const logOut = () =>{
        return signOut(auth);
    }
    const createUser = (email, password) =>{
        setLoad(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoad(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(
        ()=>{
            const uncubscribe = onAuthStateChanged(auth, (currentUser) => {
                if (currentUser) {
                    console.log(currentUser)
                  setUser(currentUser);
                  setLoad(false)
                }
                else{
                    setUser(null)
                }
              });
              return ()=>{uncubscribe()}
        }
        ,[])

    const authInfo = { user, providerLogin,updateUserProfile, logOut, createUser, signIn, setErr, err, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
