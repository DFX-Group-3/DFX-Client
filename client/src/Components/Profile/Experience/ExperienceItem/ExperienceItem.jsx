import React, { useState, useEffect } from 'react'
import './ExperienceItem.css'
import axios from 'axios'
import { useUserContext } from '../../../../hooks/UseUserContext'


export default function ExperienceItem(props) {
  const [showExpand, setShowExpand] = useState(false)
  // const { imageURL, organization, priority, position, description, startDate, endDate } = props.experience.experience

  const [experience, setExperience] = useState([])

  const { user } = useUserContext()

  useEffect(() => {
    const getExperience = async () => {
      const uri = `http://localhost:9000/experience`

      const response = await axios.get(uri, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      setExperience(response.data)
    }
    getExperience();
  }, [])
  const {
    imageURL,
    organization,
    priority,
    position,
    description,
    startDate,
    endDate
  } = experience;
console.log(experience)
  const experiences = experience.map((exp) => {
    const { organization, position, startDate, endDate, description, imageURL } = exp;
    return (
    <div key={exp._id}>
      <div  className="row exp-item-row">
        <div className="col-4 company-col">
          <div className='col-6'><img alt="lorem picsum" src={imageURL} /></div>
          <div className='col-5'>{organization}</div>

        </div>

        <div className="col-4 pos-name-col">{position}</div>
        <div className='col-2'>{startDate} - {endDate}</div>
        <div className='col-1 expand'><button onClick={() => setShowExpand(!showExpand)}>{!showExpand ? "Expand" : "Collapse"}</button></div>
      </div>
      {showExpand &&
        <div className='expand-row'>
          <div className='title-bts'>
            <h6 className='title'>{position}</h6>
            <div className='buttons'>
              <button>
                <img src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' />
              </button>

            </div>
          </div>
            <p>{description}</p>
            {/* needs fix in database, to have skills as well */}
          <p>Skills: </p>


        </div>}
    </div>

  )
  })

  return (
    <>
      {experiences}
    </>

  )
}
