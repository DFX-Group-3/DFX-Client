import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import useLogin from '../hooks/UseLogin';


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {login,error,isLoading} = useLogin()

   
    const submitHandler = async (e) => {
        e.preventDefault();  
        await login(email,password)
    }

  return (
    <div className='login'>
          <form onSubmit={submitHandler}>
              <label htmlFor="email">Email:</label>
              <input type="email" placeholder='Email'value={email} onChange={(e)=> setEmail(e.target.value)}/>

              <label htmlFor="password">Password:</label>
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

              <input type="submit" value='login' disabled={isLoading} />
              {error && <div className="error">{error}</div>}
          </form> 
    </div>
  )
}

export default Login