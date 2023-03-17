import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css"
import axios from "axios"
import { retrieveUser } from "../../Utils/GetDetails";
export default function Profile() {

    
   const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await retrieveUser();
      setDetails(data.data);
    };
    fetchUserData();
  }, []);
    
    
  return (
    <>
      <div className='div-container'>
          <div className='profile-div'>
              <div className='top-img'>
                  <img className='profile-background-pic' src='https://picsum.photos/1200/200'></img>
                  </div>
              <section className='profile-section'>
                <div className='prof-pic'>
                      <img src="https://picsum.photos/200/200" />
                      <img className="nationality" src="https://picsum.photos/60/40"/>
                    </div>
                    <div className='prof-buttons'>
                    <button className="fa fa-github">Github</button>
                        <button className="fa fa-linkedin">LinkedIn</button> 
                    </div>
                </section>
        <div className='overview'>
                  <h2>{details.first_name +" "+details.last_name}</h2>
                  <h3>{ details.tagline}</h3>
                  <p>{ details.profile_headline}</p>
        </div>
    </div>
      <div className="container">
  <div className="row">
    <div className="col-8">
              
                <h2>Experience</h2>
                <h3>View the experience of the engineer</h3>
              <div className="row">
                <div class="col-3">ORGANIZATION</div>
                <div class="col-2">POSITION</div>
                <div class="col-3">DATES</div>
                



  
                </div>
              </div>   
    <div className="col-4 certification-div">
          <h2>Certification</h2>
          <a href='/'><img src='https://picsum.photos/5/10'/></a>
          <a href='/'><img src='https://picsum.photos/5/10'/></a>
    </div>
  </div>
</div>
</div>
    </>
  )
}
