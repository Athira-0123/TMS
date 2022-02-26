// import logo from './logo.svg';
import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/pages/home";
import About from "./component/pages/about";
import Contact from "./component/pages/contact";
import Login from './component/pages/login';
import Signup from "./component/pages/signup";
import Navbar from "./component/layout/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

function App() {
  return (
    
    <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route exact path= "/" element= {<Home/>}/>
        <Route  path= "/about" element= {<About/>}/>
        <Route  path= "/contact" element= {<Contact/>}/>
        <Route  path= "/login" element= {<Login/>}/>
        <Route  path= "/signup" element= {<Signup/>}/>
      </Routes>    
    </div>
    
    </Router>
    
  );
}

export default App;

  