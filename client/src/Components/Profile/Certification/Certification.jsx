import { useState, useEffect} from 'react'
import "./Certification.css"
import CertificationItem from "./CertificationItem"
import axios from 'axios'


export default function Certification() {
  const [popupForm, setpopupForm]=useState(false);
  const [certificationData, setCertificationData] = useState({id:``,name:``,})

  // const formSubmit = async (e) => {
  //   e.preventDefault()

  //   await axios.post(`http://localhost:9000/certification`, qualificationItem, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${user.token}`
  //     }
  //   }).then(res => {
  //     console.log(res)
      
  //     setpopupForm(false);

  //   }).catch(function (error) {
  //     if (error.response) {
        
  //       // setError(error.response.data.error)

  //     }
  //   })
  // }

  return (
    <>
        <div className=' border-col'>
            <div className='title-bts'>
          <h2 className='title'>Certifications</h2>
            <div className='buttons'>
            <button>
              <img src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' />
              </button>
            <button onClick={()=>setpopupForm(true)}>
              <img src='https://cdn-icons-png.flaticon.com/512/2311/2311991.png' />
              </button>
            {popupForm && (
              <div className="popup">
                <button className='close-form-button' onClick={()=>setpopupForm(false)}>X</button>
                <form>
                  <label htmlFor="certification">Certifications</label>
                  <select value={certificationData} onChange={(e) => { setCertificationData(e.target.value) }}>
                    <option value="">Select an option</option>
                    <option value="option">Oracle Java Certified Foundations Associate</option>
                    <option value="option">Java Explorer</option>
                    <option value="option">IBM Agile Exporer</option>
                    <option value="option">Oracle Java SE8 Associate</option>
                  </select>
                  <button onClick={() => setpopupForm(false)}>Submit</button>
                </form>
              </div>)}
        </div>
        
        </div>
        <CertificationItem />
        <CertificationItem />
        <CertificationItem/>
    </div>
    </>
    )}