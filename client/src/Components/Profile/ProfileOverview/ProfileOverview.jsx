import React, { useEffect, useState } from 'react'
import "./ProfileOverview.css"
import HeaderForm from "../../HeaderForm/HeaderForm"
import { useUserContext } from '../../../hooks/UseUserContext';
import axios from 'axios';
import { retrieveUser } from '../../../Utils/GetDetails.js'

export default function ProfileOverview() {

  const { user } = useUserContext();

  const [profileForm, setProfileForm] = useState(false);
  const [overview, setOverview] = useState({
    firstName: '',
    lastName: '',
    nationality: '',
    linkedInURL: '',
    pronouns: '',
    githubURL: '',
    profileHeadline: '',
    profileVideoURL: '',
    profileImageURL: '',
    tagline: ''
  });

  const fetchUserData = async () => {
    const data = await retrieveUser(user);
    // if (data.data) setOverview(data.data);  // what *should* be in use
    if (data.data[0]) setOverview(data.data[0]);  // temp because of backend code
  };

  useEffect(() => {
    fetchUserData();
  }, []);

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
              <img className="nationality" src="https://picsum.photos/60/40" />
            </div>

          </div>
          <div className='prof-buttons'>
            <button className="github-logo"><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' /></button>
            <button className="linkedin-logo"><img src='https://static.vecteezy.com/system/resources/previews/009/097/186/original/blue-color-white-background-linkedin-design-logo-sign-symbol-free-vector.jpg' /></button>
          </div>
        </section>
        <div className='overview'>


          <div className='buttons'>

            <h2>{overview.firstName + " " + overview.lastName}</h2>
            <button className='mod-btn' onClick={() => setProfileForm(true)}>
              {profileForm && <HeaderForm overview={overview} />}
              <img src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' />
            </button>
          </div>

          <h3>{overview.tagline}</h3>
          <div className='overview-desc'>
            <h3>Overview</h3>
            <p >{overview.profileHeadline}</p>
          </div>

        </div>
      </div>
    </>
  )
}
