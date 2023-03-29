import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const user_id = 1;

const Header = () => {

    // all in 1
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        nationality: 'england',
        linkedInUrl: '',
        pronouns: '',
        githubUrl: '',
        profileHeadline: '',
        profileVideoUrl: '',
        tagline: '',
        user_id: undefined
    });


    const addProfile = async profile => {
        try {
            const responseData = await axios.post(`http://localhost:4000/profile`, profile);
            return responseData.data;
        }
        catch (e) {
            return { error: `Error` };
        }
    }

    const getCountries = async () => {
        try {
            const responseData = await axios.get(`https://restcountries.com/v3.1/all?fields=name`);
            // console.log(responseData.data)
            setCountries(responseData.data)
            return responseData.data;
        }
        catch (e) {
            return { error: `Error` };
        }
    }

    useEffect(() => {
        getCountries()
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
        console.log(profile);
    }

    // handle form data when being submit
    const handleSubmit = e => {
        e.preventDefault();
        profile.user_id = user_id;
        addProfile(profile);
    }


    const formFields = () => {
        return Object.keys(profile).map(key => {
            if (key === 'user_id') {
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
        let newName = field.replace('_', ' ');
        newName = field[0].toUpperCase() + newName.slice(1);
        return newName;
    };

    return (
        <>
            <h3>Adding</h3>

            <Form onSubmit={e => handleSubmit(e)}>

                {formFields()}

                {/* <Button
                    variant='primary'
                    type='submit'
                    onClick={e => handleSubmit(e)}
                >Submit</Button> */}
                <input type="submit" value="Submit" />
            </Form>
        </>

    );
}

export default Header;