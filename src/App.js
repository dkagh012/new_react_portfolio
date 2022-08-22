import React from 'react';
import './App.css';
import Home from './component/Home';
import Wrapper from './component/Wrapper';
import About from './component/About';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    
    <div className="container">
  <BrowserRouter>
 
  <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/Wrapper">
          <Wrapper/>
        </Route>
      
        <Route exact path="/About">
          <About/>
        </Route>
        
  </BrowserRouter>

    
  
    </div>

  );
}

export default App;
