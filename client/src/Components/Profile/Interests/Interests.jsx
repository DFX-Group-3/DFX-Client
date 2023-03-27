import React, {useState} from 'react'

export default function Interests() {
  const [popupForm, setpopupForm]=useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div className=' border-col'>
            <div className='title-bts'>
          <h2 className='title'>Interests</h2>
            <div className='buttons'>
            <button>
              <img src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' />
              </button>
            <button onClick={()=>setpopupForm(true)}>
              <img src='https://cdn-icons-png.flaticon.com/512/2311/2311991.png' />
              </button>
            {popupForm && (
              <div className="popup" >
              <form>
        <label htmlFor="certification">Interests</label>
        <select value={selectedValue} onChange={(e)=>{setSelectedValue(e.target.value)}}>
        <option value=""></option>
        <option value="option"></option>
        <option value="option"></option>
        </select>
        <button onClick ={()=>setpopupForm(false)}>Submit</button>
                </form>
            </div>
            )}
        </div>
        
        {/* <CertificationItem/> */}
  </div>
    </div>
  )
}
