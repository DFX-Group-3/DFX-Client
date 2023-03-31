import { useState, useEffect} from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import QualificationItem from "./QualificationItem";
import { useUserContext } from "../../../hooks/UseUserContext";

export default function Qualification() {
  const { user } = useUserContext()
  
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [popupForm, setpopupForm] = useState(false);
  const [qualificationItem, setQualificationItem] = useState({
    imageURL:``,
    grade:``,
    subjectName:``,
    institutionName:``,
    description:``,
    from:``,
    to:``,
    type:``,
    weight:``,
    qualificationLevel:``,
    priority:``
  });
  function handleChange(event) {
    const { name, value } = event.target
    setQualificationItem({
      ...qualificationItem,
      [name]: value
    });
    // console.log(qualificationItem)
  }

const formSubmit = async (e) => {
    e.preventDefault()

    await axios.post(`http://localhost:9000/qualification`, qualificationItem, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    }).then(res => {
      console.log(res)
      window.location.reload();
      setpopupForm(false);

    }).catch(function (error) {
      if (error.response) {
        console.log(error)
       

      }
    })
  }

  return (
    <div className="border-col">
      <div className="title-bts">
        <h2 className="title"> Qualifications</h2>
      <div className="buttons">
        
        <button>
          <img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" />
        </button>
        <button onClick={() => setpopupForm(true)}>
          <img src="https://cdn-icons-png.flaticon.com/512/2311/2311991.png" />
        </button>
        </div>
        {popupForm && (
          <div className="form-overlay">
            <div className="popup">
              <button className='close-form-button' onClick={()=>setpopupForm(false)}>X</button>
              <form onSubmit={formSubmit}>
                <div className='row header-form-row'>
                <div className='col-4'> 
          <label htmlFor="imageURL">Image URL</label>
              <input type="text" id="imageURL" name="imageURL" onChange={handleChange} value={qualificationItem.imageURL } />
          <label htmlFor="subjectName">Subject name</label>
          <input type="text" id="subjectName" name="subjectName"onChange={handleChange} value={qualificationItem.subjectName }/>
          <label htmlFor="grade">Grade</label>
          <input type="text" id="grade" name="grade" onChange={handleChange} value={qualificationItem.grade }/>
          <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" onChange={handleChange} value={qualificationItem.description} />
                  </div>
                  <div className="col-4">
              <label htmlFor="weight">Weight</label>
          <input type="text" id="weight" name="weight" onChange={handleChange} value={qualificationItem.weight }/>
              <label htmlFor="from">From</label>
              <input type="date" name="from" value={qualificationItem.from} onChange={handleChange}/>
          {/* <DatePicker dateFormat="dd/MM/yyyy"selected={fromDate} name="from" onChange={(fromDate) => setFromDate(fromDate)}/> */}
              <label htmlFor="to">To</label>
              <input type="date" name="to" value={qualificationItem.to} onChange={handleChange}/>
          {/* <DatePicker dateFormat="dd/MM/yyyy"selected={toDate} name="to" onChange={(toDate) => setToDate(toDate)} /> */}
          <label htmlFor="institutionName">Institution name</label>
                    <input type="text" id="institutionName" name="institutionName" onChange={handleChange} value={qualificationItem.institutionName} />
                  </div>
                  <div className="col-4">
          <label htmlFor="type">Type</label>
          <select onChange={handleChange} name="type" value={qualificationItem.type }>
                    <option value="">Select an option</option>
                    <option value="A level">A level</option>
                    <option value="Degree">Degree</option></select>
          <label htmlFor="qualificationLevel">Qualification level</label>
          <select onChange={handleChange} name="qualificationLevel" value={qualificationItem.qualificationLevel }> 
                    <option value="">Select an option</option>     
                    <option value="Bachelors">Bachelors</option>
                    <option value="Masters">Masters</option>
                    <option value="PhD">PhD</option>
                    <option value="IB">IB</option></select>
          <label htmlFor="priority">Priority</label>
          <select onChange={handleChange} name="priority" value={qualificationItem.priority }> 
                    <option value="">Select an option</option>     
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option></select>
                    <input type="submit" value="Submit" />
                    </div>
                    </div>
        </form>
      </div>
            </div>
        )}
        
      </div>
      <QualificationItem />
      
    </div>
  );
}
