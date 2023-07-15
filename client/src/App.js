
import Nav from './components/Nav/Nav.jsx';
import Abaut from './view/Abaut/Abaut'
import Home from './view/HomePage/Home'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';



function App() {
  return(
    <div className="App">
          <Routes>
            <Route path='/abaut' element={<Abaut/>}/>
          </Routes>
    </div>
    
  )
}

export default App;
