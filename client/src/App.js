import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Profile/Navbar/Navbar";
import { useUserContext } from "./hooks/UseUserContext";
import { useState } from "react";
import classNames from "classnames";

function App() {
  const [mode, setMode] = useState("day");
  const { user } = useUserContext();

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

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={!user ? <Login /> : <Navigate to="/profile" />}
          />
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
