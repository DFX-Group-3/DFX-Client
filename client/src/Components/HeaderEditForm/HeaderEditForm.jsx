import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HeaderEditForm = ({ editPerson }) => {
    // test id is 12
    const userID = 12;
    const [person, setPerson] = useState({
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

    const uri = `http://localhost:4000/person/${userID}`;

    const getPerson = async () => {
        const response = await axios.get(uri)
        setPerson(response.data)
        console.log(response.data);
    }

    useEffect(() => {
        getPerson();
        console.log('Use effect called!');
    }, []);

    function handleChange(e) {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        });
        console.log(person)
    }

    // handle form data when being submit
    const handleSubmit = e => {
        e.preventDefault();
        editPerson(person);
    }

    return (
        <>
            <h3>Edit</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first_name">First name:</label><br />
                <input type="text" id="first_name" name="first_name" value={person.first_name} onChange={handleChange} /><br />

                <label htmlFor="last_name">Last name:</label><br />
                <input type="text" id="last_name" name="last_name" value={person.last_name} onChange={handleChange} /><br />

                <label htmlFor="gender">Gender:</label><br />
                <input type="text" id="gender" name="gender" value={person.gender} onChange={handleChange} /><br />

                <label htmlFor="tagline">Tagline:</label><br />
                <input type="text" id="tagline" name="tagline" value={person.tagline} onChange={handleChange} /><br />

                <label htmlFor="linkedin_url">LinkedIn:</label><br />
                <input type="text" id="linkedin_url" name="linkedin_url" value={person.linkedin_url} onChange={handleChange} /><br />

                <label htmlFor="github_url">Github:</label><br />
                <input type="text" id="github_url" name="github_url" value={person.github_url} onChange={handleChange} /><br />

                <label htmlFor="youtube_url">Youtube:</label><br />
                <input type="text" id="youtube_url" name="youtube_url" value={person.youtube_url} onChange={handleChange} /><br />

                <label htmlFor="profile_headline">Headline:</label><br />
                <textarea type="text" id="profile_headline" name="profile_headline" rows="4" cols="50" value={person.profile_headline} onChange={handleChange} /><br />

                <label htmlFor="nationality">Nationality:</label><br />
                <select name="nationality" id="nationality" form="" value={person.nationality} onChange={handleChange}>
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