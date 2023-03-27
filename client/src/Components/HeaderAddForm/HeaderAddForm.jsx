import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select'

const Header = () => {

    // all in 1
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

    const addPerson = async person => {
        try {
            const responseData = await axios.post(`http://localhost:4000/person`, person);
            return responseData.data;
        }
        catch (e) {
            return { error: `Error` };
        }
    }

    function handleChange(e) {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        });
        console.log(person);
    }

    // handle form data when being submit
    const handleSubmit = e => {
        e.preventDefault();
        addPerson(person);
    }

    // for nationality
    const options = [
        { value: 'england', label: 'england' },
        { value: 'scotland', label: 'scotland' },
        { value: 'wales', label: 'wales' }
    ]

    const onSelectDataChange = (option, e) => {
        console.dir(option)
        console.dir(e)
        setPerson({
            ...person,
            [e.name]: option.value
        });

    }

    const formFields = () => {
        return Object.keys(person).map(key => {



            if (key === 'nationality') {
                return <Form.Group key={key}>
                    <label htmlFor="nationality">Nationality:</label><br />

                    {/* <select name="nationality" id="nationality" form="" value={person.nationality} onChange={handleChange}>
                        <option value="england" >England</option>
                        <option value="scotland">Scotland</option>
                        <option value="wales">Wales</option>
                    </select><br /> */}

                    <Select options={options} name="nationality" id="nationality" form="" value={person.nationality} onChange={onSelectDataChange} />




                </Form.Group>
            } else if (key === 'profile_headline') {
                return <Form.Group key={key}>
                    <label htmlFor="profile_headline">Headline:</label><br />
                    <textarea type="text" id="profile_headline" name="profile_headline" rows="4" cols="50" value={person.profile_headline} onChange={handleChange} /><br />
                </Form.Group>
            }

            return <Form.Group key={key}>
                <Form.Label>{key}</Form.Label>
                <Form.Control
                    id={key}
                    name={key}
                    text='text'
                    placeholder={key}
                    value={person[key]}
                    onChange={handleChange}
                />
            </Form.Group>
        });
    }

    return (
        <>
            <h3>Adding</h3>

            <Form onSubmit={e => handleSubmit(e)}>

                {formFields()}

                <Button
                    variant='primary'
                    type='submit'
                    onClick={e => handleSubmit(e)}
                >Submit</Button>
            </Form>
        </>

    );
}

export default Header;