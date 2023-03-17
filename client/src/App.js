import "./App.css";
import Profile from "./components/Profile/Profile";
import HeaderForm from './Components/HeaderForm';
import { useState } from "react";
import classNames from "classnames";

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
        <Profile />
        <HeaderForm />

        <button onClick={toggleMode}>Toggle Mode</button>
      </div>
    </>
  );
}

export default App;
