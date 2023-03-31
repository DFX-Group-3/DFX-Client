import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css"
import { retrieveUser, retrieveUserExperience } from "../../Utils/GetDetails.js";
import ProfileOverview from './ProfileOverview/ProfileOverview';
import Experience from './Experience/Experience';
import Portfolio from './Portfolio/Portfolio';
import Certification from './Certification/Certification';
import Qualification from './Qualification/Qualification';
import KeyTools from './KeyTools/KeyTools';
import Interests from './Interests/Interests';
import Languages from './Languages/Languages';
import { useUserContext } from '../../hooks/UseUserContext';

export default function Profile() {

    const { user } = useUserContext();
    const [details, setDetails] = useState([]);
    const [experience, setExperience] = useState([]);

    const fetchUserData = async () => {
        const data = await retrieveUser(user);
        setDetails(data.data[0]);
    };

    useEffect(() => {
        // const fetchUserData = async () => {
        //     const data = await retrieveUser();
        //     setDetails(data.data);
        // };
        // const fetchUserExperienceData = async () => {
        //     const experienceData = await retrieveUserExperience();
        //     setExperience(experienceData.data)
        // }
        // fetchUserData();
        // fetchUserExperienceData();
    }, []);


    return (
        <>
            <div className='div-container'>
                <ProfileOverview details={details} />
                <div className="row gx-1 container-row">
                    {/**Column for the left side (portfolio, experience etc) */}
                    <div className="col-xxl-8 col-md-12 ">
                        {/**That is 1 part (experience) until the next comment */}
                        <Experience experience={experience} />
                        {/**Next part starts here */}
                        <Portfolio />

                    </div>
                    {/**The column for the right side(qualification, certification etc) */}
                    <div className="col-xxl-3 col-md-12 r-col">
                        {/**Certification part of right column */}
                        <Certification />
                        <Qualification />
                        <KeyTools />
                        <Interests />
                        <Languages />
                    </div>
                </div>
            </div>

        </>
    )
}
