import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./HeaderForm.css"
import {useUserContext} from "../../hooks/UseUserContext"

const Header = () => {

    const { user } = useUserContext();
    // use state
    const [person, setPerson] = useState(null);
    const [error, setError] = useState(null)
    const [isLoading , setIsLoading] = useState([])
    const [overview, setOverview] = useState({
      profileImageURL: ``,
      firstName: ``,
      lastName: ``,
      pronouns: ``,
      tagline: ``,
      linkedInURL: ``,
      githubURL: ``,
      profileVideoURL: ``,
      profileHeadline: ``,
      nationality: ``,
    });

    
    

    
    const formSubmit = async (e) => {
        e.preventDefault();
        
        await axios.post(`http://localhost:9000/profile`, overview,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${user.token}`
                }
        }).then(res => {
            console.log(res)
            console.log(user._id)
        }).catch(function(error){
                    if (error.response) {
                        console.log(error.response)
                        setError(error.response.data.error)
                        
                    }
            })
            
       
    }
    const handleChange = event => {
        const { name, value } = event.target;
        setOverview({
            ...overview,
            [name]: value
        });
    }
   
    //console.log(getPerson());

    // useEffect(() => {
    //     getPerson();
    //     console.log('Use effect called!');
    // }, []);
    // console.log(overview.nationality)
    return (
      <form className="header-form" onSubmit={formSubmit}>
        <label htmlFor="profileImageURL">Profile Image:</label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          id="profileImageURL"
          name="profileImageURL"
          value={overview.profileImageURL}
        />
        <br />
        <label htmlFor="firstName">First name:</label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          id="firstName"
          name="firstName"
          value={overview.firstName}
        />
        <br />
        <label htmlFor="lastName">Last name:</label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          id="lastName"
          name="lastName"
          value={overview.lastName}
        />
        <br />
        <label htmlFor="pronouns">Pronouns:</label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          id="pronouns"
          name="pronouns"
          value={overview.pronouns}
        />
        <br />
        <label htmlFor="tagline">Tagline:</label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          id="tagline"
          name="tagline"
          value={overview.tagline}
        />
        <br />

        <label htmlFor="linkedInURL">LinkedIn:</label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          id="linkedInURL"
          name="linkedInURL"
          value={overview.linkedInURL}
        />
        <br />
        <label htmlFor="githubURL">Github:</label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          id="githubURL"
          name="githubURL"
          value={overview.githubURL}
        />
        <br />
        <label htmlFor="profileVideoURL">Youtube:</label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          id="profileVideoURL"
          name="profileVideoURL"
          value={overview.profileVideoURL}
        />
        <br />

        <label htmlFor="overview">Profile Headline:</label>
        <br />
        <textarea
          type="text"
          onChange={handleChange}
          id="profileHeadline"
          name="profileHeadline"
          rows="4"
          cols="50"
          value={overview.profileHeadline}
        ></textarea>
        <br />

        <label htmlFor="nationality">Nationality:</label>
        <br />
        <select
          onChange={handleChange}
          value={overview.nationality}
          name="nationality"
          id="nationality"
        >
          <option value="england">England</option>
          <option value="scotland">Scotland</option>
          <option value="wales">Wales</option>
        </select>
        <br />

        <input type="submit" value="Submit" />
        {error && <div className="error">{error}</div>}
      </form>
    );
}

export default Header