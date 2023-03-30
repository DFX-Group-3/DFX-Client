import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../hooks/UseUserContext';

const HeaderForm = ({ overview }) => {

    const emptyProfile = {
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
    };

    const { user } = useUserContext();
    const [profile, setProfile] = useState(overview.user_id ? overview : emptyProfile);

    const editProfile = async profile => {
        try {
            const responseData = await axios.patch(`http://localhost:9000/profile`, profile, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });
            return responseData.data;
        }
        catch (e) {
            return { error: `Error` };
        }
    }

    const addProfile = async profile => {
        try {
            const responseData = await axios.post(`http://localhost:9000/profile`, profile, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });
            console.dir(responseData.data)
            return responseData.data;
        }
        catch (e) {
            return { error: `Error` };
        }
    }

    const getCountries = async () => {
        try {
            const responseData = await axios.get(`https://restcountries.com/v3.1/all?fields=name`);
            setCountries(responseData.data)
            return responseData.data;
        }
        catch (e) {
            return { error: `Error` };
        }
    }

    useEffect(() => {
        getCountries();
    }, [])

    const [countries, setCountries] = useState([])
    const countryNames = countries.map(country => {
        return (country.name.common)
    })

    countryNames.sort()

    const allCountries = countryNames.map(country => {
        return (
            <option value={country} key={country}>
                {country}
            </option>
        )
    })

    function handleChange(e) {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (profile.user_id) {
            editProfile(profile);
        }
        else {
            addProfile(profile)
        }
    }

    const formFields = () => {
        return Object.keys(profile).map(key => {
            if (key === 'user_id' || key === '_id' || key === '__v') {
                return;
            }
            else if (key === 'nationality') {
                return <Form.Group key={key}>
                    <label htmlFor="nationality">Nationality:</label><br />
                    <select id="nationality" name="nationality" defaultValue={profile.nationality} onChange={handleChange}>

                        {allCountries}
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
        // need to change implementation
        let newName = field.replace('_', ' ');
        newName = field[0].toUpperCase() + newName.slice(1);
        return newName;
    };

    return (
        <Form onSubmit={e => handleSubmit(e)}>

            {formFields()}

            {/* <Button
                    variant='primary'
                    type='submit'
                    onClick={e => handleSubmit(e)}
                >Update</Button> */}
            <input type="submit" value="Submit" />
        </Form>
    )
}

export default HeaderForm;