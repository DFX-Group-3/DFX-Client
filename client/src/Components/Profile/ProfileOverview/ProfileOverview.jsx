import React, { useEffect, useState } from 'react'
import "./ProfileOverview.css"
import HeaderForm from "../../HeaderForm/HeaderForm"
import { useUserContext } from '../../../hooks/UseUserContext';
import axios from 'axios';

export default function ProfileOverview(details) {

  const { user } = useUserContext();
  
  const [profileForm, setProfileForm] = useState(false)
  const [person, setPerson] = useState([])
  

 useEffect(() => {
        const getPerson = async () => {
          const uri = `http://localhost:9000/profile`
          
        const response = await axios.get(uri,{
            headers: {
                
                'Authorization' : `Bearer ${user.token}`
                }
            })
        setPerson(response.data[0])
        

          
   }
   
   getPerson();
    },[]) 
const { profileImageURL,
    firstName,
    lastName,
    nationality,
    linkedInURL,
    pronouns,
    githubURL,
    profileHeadline,
    profileVideoURL,
    tagline } = person;

  

  
  
  return (
      <>
      <div className='profile-div'>
              <div className='top-img'>
                  <img className='profile-background-pic' src='https://picsum.photos/1200/200'></img>
                  </div>
              <section className='profile-section'>
                <div className='prof-pic'>
            <img src="https://picsum.photos/200/200" />
            <div>
            <img className="nationality" src="https://picsum.photos/60/40"/>
            </div>
                      
                    </div>
                    <div className='prof-buttons'>
                    <button className="github-logo"><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/></button>
                        <button className="linkedin-logo"><img src='https://static.vecteezy.com/system/resources/previews/009/097/186/original/blue-color-white-background-linkedin-design-logo-sign-symbol-free-vector.jpg'/></button> 
                    </div>
                </section>
        <div className='overview'>
          
          
            <div className='buttons'>
            
            <h2>{firstName + " " + lastName}</h2>
            <button className='mod-btn' onClick={()=>setProfileForm(true)}>
              {profileForm && <HeaderForm/>}
              <img src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' />
              </button>
          </div>
                  
          <h3>{tagline}</h3>
          <div className='overview-desc'>
            <h3>Overview</h3>
            <p >{ profileHeadline}</p>
          </div>

        </div>
          </div>
      </>
  )
}
