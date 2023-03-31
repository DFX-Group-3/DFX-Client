import "../Certification/Certification.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUserContext } from '../../../hooks/UseUserContext';

export default function QualificationItem() {
  const { user } = useUserContext();
  const [qualification, setQualification] = useState([]);

  useEffect(() => {
    const getQualifcation = async () => {
      const url = `http://localhost:9000/qualification`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setQualification(response.data)
      
    };
    getQualifcation();
  }, []);


 console.log(qualification)

  const qualifications = qualification.map((qualification) => {


    return (
      <div key={qualification._id}>
        <div className='row items-flex'>
          <div    className='col-2 items-flex-col-img'>
            <img src="https://picsum.photos/50/50" />
          </div>
          <div className='col-10 qualification-items-name'>
            <h6>{qualification.qualificationLevel} - { qualification.subjectName}</h6>
            <p>{ qualification.institutionName}</p>
          </div>
        </div>
      
      </div>
    )
  
  })


    return (
      <>
        {qualifications}
      </>
    )
  
 };