import React, { useEffect, useState } from 'react'
import { auth } from '../../config';

import { v4 as uuidv4 } from 'uuid';
import { collection, addDoc, getDoc, setDoc,doc, getDocs } from "firebase/firestore";
import { db } from '../../config';
import "./sell.css"



export default function Sell() {

  const [planObj, setPlanObj] = useState({
 name: "",
email: "",
phone:"",
date:"",
amount:"",
type:""
})
  const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setUser(user);
        });
    
        return () => unsubscribe();
      }, []);
      const dataHandler=(async()=>{
        console.log("its working")
        console.log(planObj)
    let id= uuidv4();
    
  const plansRef = collection(db, planObj["type"]);

await setDoc(doc(plansRef,id), planObj);


})

const inputHandler=((e)=>{
  
planObj[e.target.name] = e.target.value
})

const selectHandler=((e)=>{
  planObj["type"] = e.target.value
})

  return (<>
    {user ? (<div className='body'>
    <div className='container'>
       <div className="form">
        <div className='input-box'>
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" required  onChange={inputHandler} name="name"/>
        </div>

        <div className="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" required  name="email" onChange={inputHandler}/>
        </div>

        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" required onChange={inputHandler} name='phone'/>
          </div>
          <div class="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date" required onChange={inputHandler} name='date' />
          </div>
        </div>
        <div className="input-box address">
          <label>Amount</label>
          <input type="text" placeholder="Enter Amount" required onChange={inputHandler} name='amount' />
          <div className="column">
            <div className='select-box' >
              <select onChange={selectHandler}>{
                [{"name": "Life Insurance", "value":"life"},
                {"name": "Car Insurance", "value":"car"},
                {"name": "Health Insurance", "value":"health"}].map((e)=>{
                 return <option value={e.value}>{e.name}</option>
                })}
                {/* <option hidden>Insuarance Option</option>
                <option>Life Insurance</option>
                <option>Home Insurance</option>
                <option>Health Insurance</option>
                <option>Car Insuarance</option>
                <option>Family Health Insuarance</option>
                <option>Travel Insuarance</option> */}
              </select>
            </div>
            <input type="text" placeholder="Enter your city" required onChange={inputHandler} name='city' style={{width:"100%"}}/>
          </div>
        </div>
        <button onClick={dataHandler}>Submit</button>
      </div>
    </div>
    </div>):(<></>)}
    </>
  )
}
