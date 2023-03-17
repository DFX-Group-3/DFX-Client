import "./App.css";
//import Profile from "./Components/Profile/Profile";
import HeaderForm from './Components/HeaderForm/HeaderForm';
import { useState } from "react";
import axios from "axios";
//import classNames from "classnames";

function App() {
  const [mode, setMode] = useState("day");

  function toggleMode() {
    setMode(mode == "day" ? "dark" : "day");
  }

  const addPerson = async person => {

    const result = sendPersonData(person);

    if (!result?.error) {
      console.log(`Person added!`);
    }
    if (result?.error) console.log(`An error occured while adding person data`);
  }

  const sendPersonData = async person => {
    try {
      const responseData = await axios.post(`http://localhost:4000/person`, person);
      return responseData.data;
    }
    catch (e) {
      return { error: `Error` };
    }
  }

  return (
    <>
      {/* <div
      className={classNames({
        "day-mode": mode === "day",
        "dark-mode": mode === "dark",
      })}
      >
        <Profile />

        <button onClick={toggleMode}>Toggle Mode</button>
      </div> */}

      <HeaderForm addPerson={addPerson} />
    </>
  );
}

export default App;
