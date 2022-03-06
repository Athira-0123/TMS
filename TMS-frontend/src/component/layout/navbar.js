import React from "react";

const navbar = () => {    
    return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/home">Trainer Management</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" >

      <ul className="logo1">
   <h2 className="logo1">TMS</h2>
  
 </ul>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <a class="navbar-brand" href="#"><img src="logo.jpg" alt="logo"></img></a> */}
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signup">Signup</a>
          </li>
          <li className="nav-item dropdown">
            {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a> */}
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {/* <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li> */}
              {/* <li><hr class="dropdown-divider"></li> */}
              {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
            </ul>
          </li>
          
        </ul>
       
      </div>
    </div>
    
{/* 
    <div className="top">
      <div className="topRight">
      <i class="fa-brands fa-facebook-square"></i>
      </div>
    </div> */}
  </nav>
    );
};
export default navbar;
