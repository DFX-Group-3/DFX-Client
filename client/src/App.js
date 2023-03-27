import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import { useUserContext } from './hooks/UseUserContext';

function App() {
  const { user } = useUserContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/login' element={!user ? <Login /> : <Navigate  to='/profile'/>} />
          <Route path='/profile' element={user ? <Profile /> : <Navigate to='/login'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
