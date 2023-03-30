import React, { useState } from 'react'
import useLogin from '../hooks/UseLogin';
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  const { login, error, isLoading } = useLogin();

   
    const submitHandler = async (e) => {
        e.preventDefault();  
        await login(email,password)
    }

  return (
    <div className='login-container'>

    
      <div className='login'>
        <h1>Login</h1>
          <form className='login-form' onSubmit={submitHandler}>
              
              <input type="email" placeholder='Email'value={email} onChange={(e)=> setEmail(e.target.value)}/>

              
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className='login-submit-div'>
            <input type="submit" value='login' disabled={isLoading} />
              </div>
              
              {error && <div className="error">{error}</div>}
          </form> 
      </div>
      </div>
  )
}

export default Login