import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { collection, addDoc, getDoc, setDoc,doc, getDocs } from "firebase/firestore";
import { db } from '../../config';



export default function Show() {

   // const [storeData, setStoreData]= useState([])
    const {state} = useLocation();
    console.log(state)

// ( async function  x(){
//     const querySnapshot = await getDocs(collection(db, "life"));
// let data=[]
// querySnapshot.forEach((doc) => {
    
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
//  data.push(doc.data()) ;
  
// });
// setStoreData(data)
// console.log(data)
// })()

    // ( const querySnapshot = await getDocs(collection(db, "plans"));
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // }))
   
  return (
    <div>
    <ul>{state.map((ele, index)=>{
    return(
        <>
        <li>{ele.name} ,{ele.amount}, {ele.type}</li>
        
        </>
    )
    })}</ul>
    </div>
 
  )
}
