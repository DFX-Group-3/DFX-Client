import React, {useState} from 'react'
import './ExperienceItem.css'

export default function ExperienceItem(props) {
  const [showExpand, setShowExpand] = useState(false)
    const {position, organisation, start_date, end_date} = props.experience.experience
  return (
    <div>
      <div  className="row exp-item-row">

      
          <div className="col-4 company-col">
              <div className='col-6'><img alt="lorem picsum" src='https://picsum.photos/100/70' /></div>
              <div className='col-5'>{ organisation }</div>
              
          </div>
          
          <div className="col-4 pos-name-col">{position }</div>
        <div className='col-2'>{start_date} - {end_date}</div>
        <div className='col-1 expand'><button onClick={() => setShowExpand(!showExpand)}>{ !showExpand ? "Expand" : "Collapse"}</button></div>
      </div>
      {showExpand &&
        <div className='expand-row'>
          <div className='title-bts'>
            <h6 className='title'>{position }</h6>
            <div className='buttons'>
            <button>
              <img src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' />
              </button>
            
            </div>
          </div>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi laboriosam voluptatem quae. Error et repellat minima quisquam modi, animi debitis cumque nostrum. Deleniti accusantium autem non quae iure perspiciatis?
            Odit aliquam deserunt illum molestiae autem dolor pariatur voluptatibus architecto eius laboriosam, molestias necessitatibus, minima sit facilis amet sint repudiandae? Nam ad dolorem fugit tempora fuga, earum pariatur saepe a?</p>
          <p>Skills: </p>
      </div>}
    </div>
    
  )
}
