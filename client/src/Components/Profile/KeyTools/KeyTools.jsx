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
            <button>
              <img src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' />
              </button>
            <button onClick={()=>setpopupForm(true)}>
              <img src='https://cdn-icons-png.flaticon.com/512/2311/2311991.png' />
          </button>
          
            {popupForm && (
              <div className="popup" >
              <ToolElement/>
        <button onClick ={()=>setpopupForm(false)}>Close</button>
            </div>)}
          </div>
        </div>
        
  
    </div>
  )
};