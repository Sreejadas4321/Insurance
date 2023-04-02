import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./common.css"
import { getData } from './CommonFunc';


export default function Common({text, name, head, cover}) {
  
  const navigate = useNavigate()
    const sellHandler=(async()=>{
      let data= await getData(name)
       navigate("/show", {state:data})
    })
  return (
    <div className='show'>
      <h1 className='heading'>{head}</h1>
    <div className='show-text'>
     {text}
    
    </div>
    <button onClick={sellHandler}>LEARN MORE</button>
        <img className='show-img' src={cover} alt=''/>
       
    </div>
  )
}
