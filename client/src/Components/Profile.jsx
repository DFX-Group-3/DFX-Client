import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";



const Profile = () => {
  const [profileDetails, setProfileDetails] = useState();
  const history = useNavigate();
  axios.defaults.withCredentials = true;
    
      // axios.get('http://localhost:9000/profile')
      // .then((res) => {
      //   console.log(res)
      //   const resprofileDetails = res.data.message
      //   setProfileDetails(resprofileDetails)
      //   // console.log(profileDetails)
      // })
      // .catch(function (err) {
      //   // if()
      //   console.log(err.response);
      // })


  return (
      <div>
      <h1>PROFILE PAGE</h1>
      {/* <div>{profileDetails}</div> */}
      {/* <input onClick={getProfile}/> */}
      
    </div>
  )
}

export default Profile