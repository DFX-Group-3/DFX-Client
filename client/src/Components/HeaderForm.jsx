import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Header = () => {


    // use state
    const [person, setPerson] = useState(null);


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

    return (
        <form method="post">
            <label for="fname">First name:</label><br />
            <input type="text" id="fname" name="fname" /><br />
            <label for="lname">Last name:</label><br />
            <input type="text" id="lname" name="lname" /><br />
            <label for="pronouns">Pronouns:</label><br />
            <input type="text" id="pronouns" name="pronouns" /><br />
            <label for="tagline">Tagline:</label><br />
            <input type="text" id="tagline" name="tagline" /><br />

            <label for="linkedin">LinkedIn:</label><br />
            <input type="text" id="linkedin" name="linkedin" /><br />
            <label for="github">Github:</label><br />
            <input type="text" id="github" name="github" /><br />
            <label for="youtube">Youtube:</label><br />
            <input type="text" id="youtube" name="youtube" /><br />

            <label for="overview">Overview:</label><br />
            <textarea type="text" id="overview" name="overview" rows="4" cols="50"></textarea><br />

            <label for="nationality">Nationality:</label><br />
            <select name="nationality" id="nationality" form="">
                <option value="england">England</option>
                <option value="scotland">Scotland</option>
                <option value="wales">Wales</option>
            </select><br />

            <input type="submit" value="Submit" />
        </form>
    );
}

export default Header