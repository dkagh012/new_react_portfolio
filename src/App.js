import React from 'react';
import './App.css';
import Home from './component/Home';
import Wrapper from './component/Wrapper';
import Skils from './component/Skils';
import Todo from './component/Todo';
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

        <Route exact path="/Skils">
          <Skils/>
        </Route>
        
        <Route exact path="/todo">
          <Todo/>
        </Route>
      

        
  </BrowserRouter>

    
  
    </div>



  );
}


export default App;
