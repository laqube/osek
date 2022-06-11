import React from 'react';
import { createContext,useContext, useEffect,useState } from 'react';
import { auth } from "../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import { Email } from "@material-ui/icons"; 
import { userData } from "../pages/Reg";
const UserContext=createContext();

export const AuthContextProvider = ({children})=>{
    const[user, setUser]=useState({});

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    };  
    
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logout = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(user);
            setUser(currentUser);
        })
        return()=>{
            unsubscribe()
        }
    },[])


    return (
        <UserContext.Provider value={{createUser, user, logout, signIn}}>
            {children}
        </UserContext.Provider>
    );

};
export const UserAuth =()=>{
    return useContext(UserContext);
};