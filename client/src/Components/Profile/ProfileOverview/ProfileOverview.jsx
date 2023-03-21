import React from 'react'
import "./ProfileOverview.css"

export default function ProfileOverview(details) {

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
                  <h2>{details.first_name +" "+details.last_name}</h2>
                  <h3>{ details.tagline}</h3>
                  <p>{ details.profile_headline}</p>
        </div>
          </div>
      </>
  )
}
