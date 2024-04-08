import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import auth from './../Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const emailPasswordRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const emailPasswordLogIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
  }
  const googleLogin = ()=>{
    return signInWithPopup(auth, googleProvider);
  }
  const githubLogin = ()=>{
    return signInWithPopup(auth, githubProvider);
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // console.log(currentUser);
        setUser(currentUser);
      }
      else{
        setUser(null);
      }
    });
    return ()=>unSubscribe();
  },[])
  const authInfo = {
    emailPasswordRegister,
    emailPasswordLogIn,
    googleLogin,
    githubLogin,
    user,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
