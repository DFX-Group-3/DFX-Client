import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css"
import { retrieveUser } from "../../Utils/GetDetails";
import ProfileOverview from './ProfileOverview/ProfileOverview';
import Experience from './Experience/Experience';
import Portfolio from './Portfolio/Portfolio';
import Certification from './Certification/Certification';
export default function Profile() {

    
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            const data = await retrieveUser();
            setDetails(data.data);
        };
        fetchUserData();
    }, []);
    
    
    return (
        <>
            <div className='div-container'>
                <ProfileOverview details={details} />
                <div className="row gx-1 container-row">
                    {/**Column for the left side (portfolio, experience etc) */}
                    <div className="col-8 ">
                        {/**That is 1 part (experience) until the next comment */}
                        <Experience />
                        {/**Next part starts here */}
                        <Portfolio />
                    </div>
                    {/**The column for the right side(qualification, certification etc) */}
                    <div className="col-3 r-col">
                        {/**Certification part of right column */}
                        <Certification />

                    </div>
                </div>
            </div>

        </>
    )
}
