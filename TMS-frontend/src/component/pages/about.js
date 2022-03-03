import React from "react";
import"./about.css";

const About = () => {
    return (
        // <div className="container">
        //    <h1>What is ICT Academy of Kerala</h1>
        //        <p>ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improve their employability opportunities in the Industry. The Company is supported by Govt. of India , partnered by Govt. of Kerala and the IT industry.</p>
            
        //     </div>
        <>
        <section className="showcase1">
        {/* <div className="overlay"> */}
        <div className="box-4">

          <h1>What is ICT Academy of Kerala?</h1>
       
          {/* </div>
          <br/>
          <br/>
          <div className="box-2"> */}
          <p ><h4>ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improve their employability opportunities in the Industry. The Company is supported by Govt. of India , partnered by Govt. of Kerala and the IT industry.</h4></p>
          </div>
           {/* <div className="box-3">
<p><h1>We're more than just a workplace. We're a family.</h1><br/>
<h4>We know that finding a meaningful and rewarding job can be a long journey. Our goal is to make that process as easy as possible for you, and to create a work environment that's satisfying - one where you'll look forward to coming to every day. Start your journey with us by browsing available jobs.</h4></p> 
</div> */}
               
        {/* <div class="Button">
        {/* <button>View Openings</button> */}
        {/* <a href="#" class="btn btn-primary">View Openings</a> 
        </div> */} 
        </section>
    <div className="box-4">
        <h2>Our Key Focus Areas</h2>
        {/* <div/>
        <div className="box-5"> */}
        <ul className="list unstyled">
                    <h4><li>Industry focused enablement programmes for Faculty members</li>
                    <li>Industry focused ICT Skills development programmes for Students</li>
                    <li>Project assignments related to capability building for Institutions and Corporate.</li>
                    <li>Creating Intellectual Property on niche skill areas and emerging technologies</li></h4>
                </ul>
    {/* </div> */}
    </div>
     
          
          </>
        
    );
};
export default About;