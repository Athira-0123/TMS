import React from 'react';
import './form.css';


function AllocationForm(props) {
    
    
  
       
        
    return (
        <>
        <h2>Allocate Trainer</h2>
        
        <form className="cbp-mc-form">
            
            <div className="cbp-mc-column">
                <label htmlFor="id">Trainer ID</label>
                <input type="text" id="id" name="id" value={''} disabled style={{backgroundColor:'rgb(115, 143, 143)'}}/>

                <label htmlFor="name">Trainer name</label>
                <input type="text" id="name" name="name" value={''} disabled style={{backgroundColor:'rgb(115, 143, 143)'}}/>

                <label htmlFor="employment">Employed As</label>
                <input type="text" id="employment" name="employment" value={''} disabled style={{backgroundColor:'rgb(115, 143, 143)'}}/>

                <label htmlFor="course">Course</label>
                <input type="text" id="course" name="course" value={''} disabled style={{backgroundColor:'rgb(115, 143, 143)'}}/>



                
            </div>
            <div className="cbp-mc-column">
            <label htmlFor="courseid">Course ID</label>
                <select id="courseid" name="courseid">
                    <option>Choose course ID</option>
                    <option>01_DSA</option>
                    <option>02_FSD</option>
                    <option>03_RPA</option>
                    <option>04_CSA</option>
                </select>
                

                <label htmlFor="batchid">Batch ID</label>
                <select id="batchid" name="batchid">
                    <option>Choose batch ID</option>
                    <option>DSA001</option>
                    <option>DSA002</option>
                    <option>DSA003</option>
                    <option>FSD001</option>
                    <option>FSD002</option>
                    <option>FSD003</option>
                    <option>CSA001</option>
                    <option>CSA002</option>
                    <option>CSA003</option>
                    <option>RPA001</option>
                    <option>RPA002</option>
                    <option>RPA003</option>
                </select>

                <label htmlFor="start">Start date</label>
                <input type="date" id="start" name="start"  />

                <label htmlFor="end">End date</label>
                <input type="date" id="end" name="end"  />

                

                
            </div>
            <div className="cbp-mc-column">
                <label htmlFor="s-time">Start Time</label>
                <input type="time" id="s-time" name="s-time"/>

                <label htmlFor="e-time">End Time</label>
                <input type="time" id="e-time" name="e-time"/>


                <label htmlFor="venue">Meeting/venue link</label>
                <input type='url' id="venue" name="venue" />

                <label htmlFor="block">block calender</label>
                <input type='file' id="block" name="block" />
                
            </div>
            <div className="cbp-mc-submit-wrap"><input className="cbp-mc-submit" type="submit" value="Allocate" /></div>
        </form>
        </>
        
            

                
            
        
        
            
    );
}

export default AllocationForm;