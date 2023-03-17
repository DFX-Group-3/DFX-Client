import React from 'react'
import "./Profile.css"


export default function Profile() {
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
            <h2>Fname Lname</h2>
            <h3>Tagline</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestiae aliquid tempora obcaecati quos quidem temporibus ipsa quisquam suscipit labore dignissimos praesentium aliquam, necessitatibus nostrum facere, architecto maxime iure! Odio?
            Error iusto facere laborum eveniet laudantium quos non cum rem est consequuntur, eius fuga omnis eaque dolor sint fugit. Ipsum rerum eveniet ut consectetur, nesciunt iste labore dolores quisquam adipisci!</p>
        </div>
    </div>

    </>
  )
}
