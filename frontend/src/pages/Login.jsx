import React, { useState } from 'react'

const Login = () => {
  const [state,setState] =useState('Sign Up')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')
  const onSubmitHandler = async (event) =>{
    event.preventDefault()
  }
  return (
    <form>
       <div>
        <p>{state === 'Sign Up' ? "Create Account" : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? "Sign Up" : 'Log in'} Book Appointement</p>
        <div>
          <p>Full Name</p>
          <input type="text" onChange={(e)=>setName(e.target.name)} value={name} required/>
        </div>
        <div>
          <p>Email</p>
          <input type="email" onChange={(e)=>setName(e.target.email)} value={email} required/>
        </div>
        <div>
          <p>Password</p>
          <input type="password" onChange={(e)=>setName(e.target.password)} value={password} required/>
        </div>
        <button>{state === 'Sign Up' ? "Create Account" : 'Login'}</button>
       </div>
    </form>
  )
}

export default Login