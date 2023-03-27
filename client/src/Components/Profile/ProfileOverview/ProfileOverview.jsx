import React, { useState } from 'react'
import "./ProfileOverview.css"
import HeaderForm from "../../HeaderForm/HeaderForm"

export default function ProfileOverview(details) {

  const { first_name, last_name, tagline, profile_headline } = details.details;
  const [profileForm, setProfileForm] = useState(false)

  return (
      <>
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
          
          
            <div className='buttons'>
            
            <h2>{first_name + " " + last_name}</h2>
            <button className='mod-btn' onClick={()=>setProfileForm(true)}>
              {profileForm && <HeaderForm/>}
              <img src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' />
              </button>
          </div>
                  
          <h3>{tagline}</h3>
          <div className='overview-desc'>
            <h3>Overview</h3>
            <p >{ profile_headline}</p>
          </div>

        </div>
          </div>
      </>
  )
}
