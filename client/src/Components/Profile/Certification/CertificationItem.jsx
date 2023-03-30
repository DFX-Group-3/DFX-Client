import React, {useEffect,useState} from 'react'
import "./Certification.css"
import axios from 'axios';
import { useUserContext } from '../../../hooks/UseUserContext';


export default function CertificationItem() {
  const {user} = useUserContext();
  const [certification, setCertification] = useState([]);

   
    
      // const getCertification = async (e) => {
        // e.preventDefault();
      // await axios.post (`http://localhost:9000/certification`, certification
  
      //   const response = await axios.post(uri, {
      //     headers: {
      //       Authorization: `Bearer ${user.token}`,
      //     },
      //   });
      //   setCertification(response.data);
      // };
      // getCertification();
   
// useEffect(() => {getCertification}, []);
  const certifications = certification.map((certification) => {
  return (
    <>
      <div className='items-flex'>
        <img src="https://picsum.photos/50/50" />
        <h6>Oracle Certified</h6>
      </div>
    </>
  )
})
return (
  <>
    {certifications}
  </>
)


}