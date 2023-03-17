import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Header = ({ addPerson }) => {

    // use state
    const [person, setPerson] = useState(null);
    const [first_name, setFirstName] = useState(``);

    const firstNameChangeHandler = e => setFirstName(e.target.value);

    const uri = `http://localhost:4000/person/1`

    const getPerson = async () => {
        // 
        const response = await axios.get(uri)
        setPerson(response.data)
        console.log(response.data);
    }

    //console.log(getPerson());

    useEffect(() => {
        getPerson();
        console.log('Use effect called!');
    }, []);


    const handleSubmit = e => {
        e.preventDefault();
        //addPerson({ first_name, last_name, gender, tagline, nationality, linkedin_url, github_url, youtube_url, profile_headline });
        addPerson({ first_name });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="first_name">First name:</label><br />
            <input type="text" id="first_name" name="first_name" value={first_name} onChange={firstNameChangeHandler} /><br />
            <label htmlFor="last_name">Last name:</label><br />
            <input type="text" id="last_name" name="last_name" /><br />
            <label htmlFor="gender">Gender:</label><br />
            <input type="text" id="gender" name="gender" /><br />
            <label htmlFor="tagline">Tagline:</label><br />
            <input type="text" id="tagline" name="tagline" /><br />

            <label htmlFor="linkedin_url">LinkedIn:</label><br />
            <input type="text" id="linkedin_url" name="linkedin_url" /><br />
            <label htmlFor="github_url">Github:</label><br />
            <input type="text" id="github_url" name="github_url" /><br />
            <label htmlFor="youtube_url">Youtube:</label><br />
            <input type="text" id="youtube_url" name="youtube_url" /><br />

            <label htmlFor="profile_headline">Headline:</label><br />
            <textarea type="text" id="profile_headline" name="profile_headline" rows="4" cols="50"></textarea><br />

            <label htmlFor="nationality">Nationality:</label><br />
            <select name="nationality" id="nationality" form="">
                <option value="england">England</option>
                <option value="scotland">Scotland</option>
                <option value="wales">Wales</option>
            </select><br />

            <input type="submit" value="Submit" />
        </form>
    );
}

export default Header;