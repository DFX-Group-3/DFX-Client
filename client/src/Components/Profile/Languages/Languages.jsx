import React, { useState } from 'react'
import axios from 'axios';

export default function Languages() {
  const [popupForm, setpopupForm]=useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [languageData, setlanguageData] = useState({
    level:"",
    language:"",
    priority:""
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("/api/language", languageData);
      console.log(res.data);
      setpopupForm(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className=' border-col'>
            <div className='title-bts'>
          <h2 className='title'>Languages</h2>
            <div className='buttons'>
            <button>
              <img alt='editButton' src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' />
              </button>
            <button onClick={()=>setpopupForm(true)}>
              <img alt='addButton' src='https://cdn-icons-png.flaticon.com/512/2311/2311991.png' />
              </button>
            {popupForm && (
              <div className="popup" ></div>)}
              <form onSubmit={handleSubmit}>
        <label htmlFor="certification">Languages</label>
        <select value={selectedValue} onChange={(e)=>{setSelectedValue(e.target.value)}}>Level
        <option value="option">Learning</option>
        <option value="option">Fluent</option>
        <option value="option">Native Speaker</option></select>
        <select value={selectedValue} onChange={(e)=>{setSelectedValue(e.target.value)}}>Language
        <option value="option">English</option>
        <option value="option">Italian</option>
        <option value="option">Turkish</option>
        <option value="option">Spanish</option>
        <option value="option">Hungarian</option>
        <option value="option">French</option>
        <option value="option">German</option>
         <option value="option">Korean</option>
         <option value="option">Japanese</option>
         <option value="option">Mandarin</option></select>
         <select value={selectedValue} onChange={(e)=>{setSelectedValue(e.target.value)}}>Priority
         <option value="option">1</option>
        <option value="option">2</option>
        <option value="option">3</option>
         </select>
        <button onClick ={()=>setpopupForm(false)}>Submit</button>
                </form>
            </div>
        </div>
  
    </div>
  )
}
