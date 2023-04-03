import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/Page/HomePage';
import Sell from './components/Sell/Sell';
import Signin from './components/Signin/Signin';
import HeaderPage from "./components/header/Header"
import Show from './components/show/Show';


function App() {
  return (
    <div >
      
      <BrowserRouter>
      <HeaderPage/>
      <Routes>
        <Route exact path="/sell" element={<Sell/>}></Route>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route exact path="/signin" element={<Signin/>}></Route>
        <Route exact path="/show" element={<Show/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
