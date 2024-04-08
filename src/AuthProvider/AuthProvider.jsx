import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import auth from './../Firebase/firebase.config';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';


export const AuthContext = createContext(null);



AOS.init();


AOS.init({
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate',
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99, 
  


  offset: 120, 
  delay: 0,
  duration: 800, 
  easing: 'ease', 
  once: false,
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});

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
const logOut = ()=> {
  return signOut(auth);
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
    logOut
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}  <ToastContainer /> </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
