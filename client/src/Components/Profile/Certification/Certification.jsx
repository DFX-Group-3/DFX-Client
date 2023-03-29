import React, { useState } from 'react'
import "./Certification.css"
import CertificationItem from "./CertificationItem"


export default function Certification() {
  const [popupForm, setpopupForm]=useState(false);
  const [selectedValue, setSelectedValue] = useState("");
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
                  <select value={selectedValue} onChange={(e) => { setSelectedValue(e.target.value) }}>
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