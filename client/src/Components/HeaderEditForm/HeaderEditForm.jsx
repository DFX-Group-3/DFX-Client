import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HeaderEditForm = () => {
    // test id is 12
    const userID = 12;
    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        gender: '',
        tagline: '',
        linkedin_url: '',
        github_url: '',
        youtube_url: '',
        profile_headline: '',
        nationality: ''
    });

    const uri = `http://localhost:4000/profile/${userID}`;

    const editProfile = async profile => {
        try {
            const responseData = await axios.put(`http://localhost:4000/profile/${1}`, profile);
            return responseData.data;
        }
        catch (e) {
            return { error: `Error` };
        }
    }

    const getProfile = async () => {
        const response = await axios.get(uri)
        setProfile(response.data)
        console.log(response.data);
    }

    useEffect(() => {
        getProfile();
        console.log('Use effect called!');
    }, []);

    function handleChange(e) {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
        console.log(profile)
    }

    // handle form data when being submit
    const handleSubmit = e => {
        e.preventDefault();
        editProfile(profile);
    }

    return (
        <>
            <h3>Edit</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first_name">First name:</label><br />
                <input type="text" id="first_name" name="first_name" value={profile.first_name} onChange={handleChange} /><br />

                <label htmlFor="last_name">Last name:</label><br />
                <input type="text" id="last_name" name="last_name" value={profile.last_name} onChange={handleChange} /><br />

                <label htmlFor="gender">Gender:</label><br />
                <input type="text" id="gender" name="gender" value={profile.gender} onChange={handleChange} /><br />

                <label htmlFor="tagline">Tagline:</label><br />
                <input type="text" id="tagline" name="tagline" value={profile.tagline} onChange={handleChange} /><br />

                <label htmlFor="linkedin_url">LinkedIn:</label><br />
                <input type="text" id="linkedin_url" name="linkedin_url" value={profile.linkedin_url} onChange={handleChange} /><br />

                <label htmlFor="github_url">Github:</label><br />
                <input type="text" id="github_url" name="github_url" value={profile.github_url} onChange={handleChange} /><br />

                <label htmlFor="youtube_url">Youtube:</label><br />
                <input type="text" id="youtube_url" name="youtube_url" value={profile.youtube_url} onChange={handleChange} /><br />

                <label htmlFor="profile_headline">Headline:</label><br />
                <textarea type="text" id="profile_headline" name="profile_headline" rows="4" cols="50" value={profile.profile_headline} onChange={handleChange} /><br />

                <label htmlFor="nationality">Nationality:</label><br />
                <select name="nationality" id="nationality" form="" value={profile.nationality} onChange={handleChange}>
                    {/* need to do default value */}
                    <option value="england" >England</option>
                    <option value="scotland">Scotland</option>
                    <option value="wales">Wales</option>
                </select><br />



                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default HeaderEditForm