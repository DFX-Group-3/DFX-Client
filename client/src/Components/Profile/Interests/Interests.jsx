import React, {useState} from 'react'

export default function Interests() {
  const [popupForm, setpopupForm]=useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [interestData, setinterestData] = useState({
    interest_type: "",
    interest_title: "",
    topic: "",
    priority: "",
  });

  const handleChange = (event) => {
    setinterestData({
      ...interestData,
      [event.target.name]: event.target.value,
    });
  };
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
        <select>Interest Type
        <option value="option">favorite</option>
        <option value="option">trivia</option>
        <option value="option">hobby</option></select>
        <label htmlFor="description">Interest Tile</label>
        <input type="text" id="image" name="image" onChange={handleChange}/>
        <select>Topic
        <option value="option">movie</option>
        <option value="option">food</option>
        <option value="option">game</option>
        <option value="option">tech</option>
        <option value="option">travel</option>
        <option value="option">sport</option>
        <option value="option">band</option></select>
        <select>Priority
        <option value="option">1</option>
        <option value="option">2</option>
        <option value="option">3</option></select>
        <button onClick ={()=>setpopupForm(false)}>Submit</button>
                </form>
            </div>
            )}
        </div>
        
  </div>
    </div>
  )
}
