import "./App.css";
import Profile from "./Components/Profile/Profile";
import { useState, useEffect } from "react";
import classNames from "classnames";
import HeaderAddForm from "./Components/HeaderAddForm/HeaderAddForm";

function App() {
  const [mode, setMode] = useState("day");

  function toggleMode() {
    setMode(mode == "day" ? "dark" : "day");
  }
  return (
    <>
      <div
        className={classNames({
          "day-mode": mode === "day",
          "dark-mode": mode === "dark",
        })}
      >
        <button onClick={toggleMode}>Toggle Mode</button>
      </div>
      <Profile />
    </>
  );
}

export default App;
