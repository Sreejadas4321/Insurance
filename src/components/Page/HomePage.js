import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Car from '../CarInsr/Car'
import Carousel from '../carousel/Carousel'
import Family from '../FamilyInsr/Family'
import GuaranteedPlans from '../Guaranteed/GuaranteedPlans'
import HeaderPage from "../header/Header"
import Health from '../HealthInsr/Health'
import Home from '../HomeInsr/Home'
import Invesment from '../Invesment/Invesment'
import Life from '../LifeInsr/Life'
import Retirement from '../Retirement/Retirement'
import Travel from '../TravelInsr/Travel'
export default function HomePage() {
    
  const {state} = useLocation()
  const[active, setActive]=useState(state && state.name ? state.name : "Delivery")

  return (
    <>
    {/* <HeaderPage/> */}
    <Carousel active={active} setActive={setActive}/>
    {getCorretScreen(active)}
    </>
  )
}
const getCorretScreen=(tab)=>{
    switch (tab) {
      case "Life Insurance":
        return  <Life/>
        case "Health Insurance":
        return <Health/>
        case "Car Insurance":
        return <Car/>
        case "Home Insurance":
        return <Home/>
        case "Travel Insurance":
        return <Travel/>
        case "Family Health Insurance":
        return <Family/>
        case "Invesment Plan":
        return <Invesment/>
        case "Retirement Plan":
        return <Retirement/>
        case "Guaranteed Return Plans":
        return <GuaranteedPlans/>
  
      default:
        return <Life/>
    }
  }
