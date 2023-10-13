import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from './Pages/Destination'
import Technology from './Pages/Technology'
import Home from './Pages/Home'




export default function App() {
  return(
    
    <BrowserRouter>
  <Routes>
    
  <Route path="/" element={<Home/>}/>
  <Route path="/des" element={<Destination/>}/>
  <Route path="/techno" element={<Technology/>}/>
  </Routes>
    </BrowserRouter>



    
  )
    

}

