import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import './App.css'
import app from "./firebase/firebase.config";

import { useState } from "react";

function App() {
  const [user,setUser]= useState(null)
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogle =() =>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
      const loggedUser = result.user;
        setUser(loggedUser)
    })
    .catch(error=>{
      console.log(error);
    })
  }

  return (
    <>
      <h1>Firebase + React</h1>
      <div>
        <button onClick={handleGoogle}>Google sign in</button>
      </div>
      {
        user && <p>{user.displayName}</p>
      }
    </>
  )
}

export default App
