import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, BrowserRouter, Link, Routes} from 'react-router-dom';
import SignInComponent from "./components/SignInComponent/SignInComponent";
function App() {
  return (
  
    <BrowserRouter>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">FutureBizops</a>
        </div>
        <ul className="nav navbar-nav">      
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/manageEmployee">About Us</Link></li>    
            <li><Link to="/updateHodProfile">Contact Us</Link></li>  
               
        </ul>
     
      </div>
    </nav>
  
      <Routes>
        <Route path="/" element={<SignInComponent />} />
        <Route path="/signin" element={<SignInComponent />} />
      </Routes>
   
  </BrowserRouter>    
  );  
}

export default App;
