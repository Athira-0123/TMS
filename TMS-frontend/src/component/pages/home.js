import React from "react";
import './home.css';
const Home = ()=> {
    return (
        <>
        <section className="showcase">
         {/* <div className="overlay"> */}
         <div className="box-1">

           <h1>Welcome to ICT Academy of kerala</h1>
        
           <h3>Building the Nation's Future </h3> 
           </div>
           <br/>
           <br/>
           <div className="box-2">
           <p ><h4>Find the career of your dreams</h4></p>
           </div>
            <div className="box-3">
<p><h1>We're more than just a workplace. We're a family.</h1><br/>
<h5>We know that finding a meaningful and rewarding job can be a long journey. Our goal is to make that process as easy as possible for you, <br/>and to create a work environment that's satisfying - one where you'll look forward to coming to every day. Start your journey with us by browsing available jobs.</h5></p> 
</div>
                
         <div class="Button">
         {/* <button>View Openings</button> */}
         <a href="#" class="btn btn-primary">View Openings</a> 
         </div>
     
      
           </section>
           </>
         
    );
};
export default Home;