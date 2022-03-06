import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/pages/home";
import About from "./component/pages/about";
import Contact from "./component/pages/contact";
import Login from './component/pages/users/login';
import Signup from "./component/pages/users/signup";
import Trainer from "./component/pages/profile/trainerProfile";
import Navbar from "./component/layout/navbar";
import ErrorPage from "./component/pages/errorpage";
import Footer from "./component/pages/footer";
import useToken from "./component/pages/users/useToken"; 
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom"; 

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return (
      <Router>
        <Navbar token={ token }/>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    )
  }
  return (
    <>
    
    <div className="App">
     
      <Router>
      
      <Navbar/>

      <Routes>
        <Route exact path= "/" element= {<Home /> }/>
        <Route exact path="/trainer" element={<Trainer/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path= "/about" element= {<About/>}/>
        <Route exact path= "/contact" element= {<Contact />}/>
        <Route exact path= "*" element= {<ErrorPage />}/>
      </Routes>    

    
      </Router>
  
      <Footer/>
   </div>
   </>
  );
}

export default App;

  
