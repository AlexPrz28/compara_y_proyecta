import React, { useContext, useEffect, useState } from 'react'
import { Fragment } from 'react';
import { auth, db } from '../utilities/Firebase'
import Notification from '../Helpers/Notification'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    //Sets the state for the notification component.
    const [notify, setNotify] = useState({isOpen: false, message: '', type: ''});

    //function for user creation.
    const signUp = data => {
        return createUserWithEmailAndPassword(auth, data.email, data.password)
    }

    //function for user login
    const login = data => {
        return signInWithEmailAndPassword(auth, data.email, data.password)
        
    }

    //Function for user logout
    const logout = () => {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signUp,
        login,
        logout
    }

    return (
        <Fragment>
            <AuthContext.Provider value={value} >
            {!loading && children}
            </AuthContext.Provider>
            <Notification 
            notify = {notify}
            setNotify = {setNotify}
            />
        </Fragment>
        
    )
}
