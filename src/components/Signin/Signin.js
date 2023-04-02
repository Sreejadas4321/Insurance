import React, { useState } from 'react'
import {auth, provider} from "../../config"
import {signInWithPopup} from "firebase/auth"
export default function Signin() {
    const [value, setValue]= useState('')
   const handleClick =()=>{
    signInWithPopup(auth, provider).then((data)=>{
         setValue(data.user.email)
         
    }
    )
   }
  return (
    <div>
        <button onClick={handleClick}>Signin With Goggle</button>
    </div>
  )
}
