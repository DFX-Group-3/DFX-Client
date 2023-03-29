import React from 'react'
import "../Certification/Certification.css"

export default function QualificationItem() {
  return (
    <>
      <div className='row items-flex'>
        <div className='col-2 items-flex-col-img'>
        <img src="https://picsum.photos/50/50" />
        </div>
        <div className='col-10 qualification-items-name'>
          <h6>Bachelors - Software Engineering</h6>
          <p>Oxford University</p>
        </div>
      </div>
      
    </>
  )
}
