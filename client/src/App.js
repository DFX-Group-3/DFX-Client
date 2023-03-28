import "./App.css";
//import Profile from "./Components/Profile/Profile";
import HeaderAddForm from './Components/HeaderAddForm/HeaderAddForm';
import { useState } from "react";
import axios from "axios";
import HeaderEditForm from "./Components/HeaderEditForm/HeaderEditForm";
//import classNames from "classnames";

function App() {
  const [mode, setMode] = useState("day");

  function toggleMode() {
    setMode(mode == "day" ? "dark" : "day");
  }

  // const addPerson = async person => {

  //   const result = sendPersonData(person);

  //   if (!result?.error) {
  //     console.log(`Person added!`);
  //   }
  //   if (result?.error) console.log(`An error occured while adding person data`);
  // }

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

      {/* <HeaderAddForm /> */}
      <HeaderEditForm />
    </>
  );
}

export default App;
