import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/Signin';

function App() {
  return (

    
    <Router> 
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/signin' element={<SigninPage/>} exact/>

      </Routes>
      
      

    </Router>
    
    );
}

export default App;
