import { useState, useEffect} from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import QualificationItem from "./QualificationItem";

export default function Qualification() {
  const [qualificationItems, setQualificationItems] = useState([]);
  const [date, setDate] = useState(new Date());
  const [popupForm, setpopupForm] = useState(false);
  const [qualificationData, setqualificationData] = useState({
    imageUrl: "",
    subjectname: "",
    grade: "",
    description: "",
    from: "",
    to: "",
    institution: "",
    type: "",
    qualificationlevel: "",
    priority: "",
  });
  const handleChange = (event) => {
    setqualificationData({
      ...qualificationData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // try {
    //   const res = await axios.post("/api/qualification", qualificationData);
    //   console.log(res.data);
    //   setpopupForm(false);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  useEffect(() => {
    async function fetchData() {
      // try {
      //   const response = await axios.get("/api/qualification");
      //   setQualificationItems(response.data);
      // } catch (error) {
      //   console.error(error);
      // }
    }
    fetchData();
  }, []);
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
      <div className="popup">
        <form onSubmit={handleSubmit}>
          <label htmlFor="image">Image URL</label>
          <input type="text" id="image" name="image" onChange={handleChange} />
          <label htmlFor="suject">Subject name</label>
          <input type="text" id="subject" name="subject"onChange={handleChange}/>
          <label htmlFor="grade">Grade</label>
          <input type="text" id="grade" name="grade" onChange={handleChange}/>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" onChange={handleChange}/>
          <label htmlFor="startdate">From</label>
          <DatePicker dateFormat="dd/MM/yyyy"selected={date} onChange={(date) => setDate(date)}/>
          <label htmlFor="enddate">To</label>
          <DatePicker dateFormat="dd/MM/yyyy"selected={date} onChange={(date) => setDate(date)}/>
          <label htmlFor="instituion">Institution name</label>
          <input type="text" id="institution" name="institution"onChange={handleChange}/>
          <label>Type</label>
          <select onChange={handleChange}>
                    <option value="">Select an option</option>
                    <option value="option">A level</option>
                    <option value="option">Degree</option></select>
          <label>Qualification level</label>
          <select onChange={handleChange}> 
                    <option value="">Select an option</option>     
                    <option value="option">Bachelors</option>
                    <option value="option">Masters</option>
                    <option value="option">PhD</option>
                    <option value="option">IB</option></select>
          <label>Priority</label>
          <select onChange={handleChange}> 
                    <option value="">Select an option</option>     
                    <option value="option">1</option>
                    <option value="option">2</option>
                    <option value="option">3</option></select>
          <button onClick={() => setpopupForm(false)}>Submit</button>
        </form>
      </div>
        )}
        
      </div>
      <QualificationItem />
      <QualificationItem />
      <QualificationItem/>
    </div>
  );
}
