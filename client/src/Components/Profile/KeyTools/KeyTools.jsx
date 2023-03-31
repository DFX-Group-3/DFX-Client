import React, {useState} from 'react'
import ToolElement from './ToolElement.jsx'
import "./KeyTools.css"

export default function KeyTools(){
  const [popupForm, setpopupForm]=useState(false);

  return (
    <div className=' border-col'>
            <div className='title-bts'>
          <h2 className='title'>Key Tools</h2>
            <div className='buttons'>
            <button onClick={()=>setpopupForm(true)}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnA9x3PDBXeG8ksJ1Xsj7lrOM1U-Fok4EjuVJuA6Cv&s' />
          </button>
          
          {popupForm && (
            <div className="form-overlay">
              <div className="popup" >
              <ToolElement/>
        <button onClick ={()=>setpopupForm(false)}>Close</button>
              </div>
            </div>)}
          </div>
        </div>
        
  
    </div>
  )
};