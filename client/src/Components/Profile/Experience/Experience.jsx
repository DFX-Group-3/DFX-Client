import React, { useState } from 'react'
import "./Experience.css"
import ExperienceItem from './ExperienceItem/ExperienceItem'

export default function Experience(props) {
  const [experienceItems, setExperienceItems] = useState([])

  

  
  return (
      <>
      <div className='border-col'>
        <div className='data-container'>
              <div className='title-bts'>
          <h2 className='title'>Experience</h2>
            <div className='buttons'>
            <button>
              <img src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' />
              </button>
            <button>
              <img src='https://cdn-icons-png.flaticon.com/512/2311/2311991.png' />
              </button>
            </div>
          </div>
                <h3>View the experience of the engineer</h3>
              <div className="row exp-col-row">
                <div className="col-4">ORGANIZATION</div>
                <div className="col-3">POSITION</div>
                <div className="col-4">DATES</div>
          </div>
          
          <ExperienceItem experience={props} />
              </div>
              </div>
              
      </>
  )
}
