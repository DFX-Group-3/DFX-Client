import { useState } from 'react'
import "./Experience.css"
import ExperienceItem from './ExperienceItem/ExperienceItem'
import { useUserContext } from "../../../hooks/UseUserContext.js";
import axios from 'axios'

export default function Experience(props) {
  const [experienceItems, setExperienceItems] = useState({
    imageURL: ``,
    organization: ``,
    priority: ``,
    position: ``,
    description: ``,
    startDate: ``,
    endDate: ``,
  });
  const [popupForm, setpopupForm] = useState(false)
  const { user } = useUserContext()


  // add data - post request
  const formSubmit = async (e) => {
    e.preventDefault()

    await axios.post(`http://localhost:9000/experience`, experienceItems, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    }).then(res => {
      console.log(res)
      
      setpopupForm(false);

    }).catch(function (error) {
      if (error.response) {
        
        // setError(error.response.data.error)

      }
    })
  }


  // edit data


  // submit data
  function handleChange(event) {
    const { name, value } = event.target
    setExperienceItems({
      ...experienceItems,
      [name]: value
    });
    console.log(experienceItems)
  }


  return (
    <>
      <div className='border-col'>
        <div className='data-container'>
          <div className='title-bts'>
            <h2 className='title'>Experience</h2>
            <div className='buttons'>
              <button>
                <img src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' alt="a" />
              </button>

              < button onClick={() => setpopupForm(true)}>
                <img src='https://cdn-icons-png.flaticon.com/512/2311/2311991.png' alt="b" />
              </button>

            </div>
          </div>
          <h3>View the experience of the engineer</h3>
                <div className="row exp-col-row">
                <div className="col-4">ORGANIZATION</div>
                <div className="col-3">POSITION</div>
                <div className="col-4">DATES</div>
              </div> 
          {popupForm && (
          <div className="form-overlay">
              <div className="popup">
                <button className='close-form-button' onClick={()=>setpopupForm(false)}>X</button>
            <form onSubmit={formSubmit}>
              <div className='row header-form-row'>
                <div className='col-6'> 
                <label htmlFor="imageURL">Image Url</label>
                  <input required type="text" id="imageURL" name="imageURL" value={experienceItems.imageURL} onChange={handleChange} /><br />
                <label htmlFor="organization">Organization</label>
                  <input required type="text" id="organization" name="organization" value={experienceItems.organization} onChange={handleChange} /><br />
                <label htmlFor="priority">Priority</label>
                  <select required name="priority" value={experienceItems.priority} onChange={handleChange}>
                    <option value="">Select an option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="10">10</option>
                      </select><br/>
                    
                <label htmlFor="position">Position</label>
                      <input required type="text" id="position" name="position" value={experienceItems.position} onChange={handleChange} /><br />
                      </div>
                  <div className='col-6'> 
                <label htmlFor="description">Description</label>
                  <input required type="text" id="description" name="description" value={experienceItems.description} onChange={handleChange} /><br />
                <label htmlFor="startDate">Start Date</label>
                  <input required type="date" id="startDate" name="startDate" value={experienceItems.startDate} onChange={handleChange} /><br />
                <label htmlFor="endDate">End Date</label>
                  <input required type="date" id="endDate" name="endDate" value={experienceItems.endDate} onChange={handleChange} /><br />
                <input type="submit" value="Submit" />
                    </div>
                </div>    
                {/* <input type="button" value="close" onClick={() => setpopupForm(false)} /> */}
                </form>
                </div>
          </div>
          )}

          <ExperienceItem experience={props} />
        </div>
      </div>
      

    </>
  )
}
