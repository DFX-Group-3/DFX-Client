import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
const user_id = 2;

const HeaderEditForm = () => {
    // test id is 12
    //const userID = 1;
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        pronouns: '',
        tagline: '',
        linkedInUrl: '',
        githubUrl: '',
        profileVideoUrl: '',
        profileHeadline: '',
        nationality: '',
        user_id: undefined
    });

    const uri = `http://localhost:4000/profile/${user_id}`;

    const editProfile = async profile => {
        try {
            const responseData = await axios.put(`http://localhost:4000/profile/${user_id}`, profile);
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

    const formFields = () => {
        return Object.keys(profile).map(key => {
            if (key === 'user_id' || key === 'id') {
                return;
            }
            else if (key === 'nationality') {
                return <Form.Group key={key}>
                    <label htmlFor="nationality">Nationality:</label><br />
                    <select id="nationality" name="nationality" defaultValue={profile.nationality} onChange={handleChange}>
                        <option value="england" >England</option>
                        <option value="scotland">Scotland</option>
                        <option value="wales">Wales</option>
                    </select>
                </Form.Group>
            } else if (key === 'profileHeadline') {
                return <Form.Group key={key}>
                    <label htmlFor="profileHeadline">Headline:</label><br />
                    <textarea type="text" id="profileHeadline" name="profileHeadline" rows="4" cols="50" value={profile.profileHeadline} onChange={handleChange} /><br />
                </Form.Group>
            }

            return <Form.Group key={key}>
                <Form.Label>{formatName(key)}</Form.Label>
                <Form.Control
                    id={key}
                    name={key}
                    text='text'
                    placeholder={formatName(key)}
                    value={profile[key]}
                    onChange={handleChange}
                />
            </Form.Group>
        });
    }

    const formatName = field => {
        let newName = field.replace('_', ' ');
        newName = field[0].toUpperCase() + newName.slice(1);
        return newName;
    };

    return (
        <>
            <h3>Edit</h3>

            <Form onSubmit={e => handleSubmit(e)}>

                {formFields()}

                <Button
                    variant='primary'
                    type='submit'
                    onClick={e => handleSubmit(e)}
                >Update</Button>
            </Form>

            {/* <form onSubmit={handleSubmit}>
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
                    <option value="england" >England</option>
                    <option value="scotland">Scotland</option>
                    <option value="wales">Wales</option>
                </select><br />



                <input type="submit" value="Submit" />
            </form> */}
        </>
    )
}

export default HeaderEditForm