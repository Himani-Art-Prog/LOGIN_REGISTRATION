import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from "react-router-dom";

function Login() {
    const[email,setEmail]=React.useState()
    const[password,setPassword]=React.useState()
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if (!email.trim()) {
          alert('Email cannot be blank')
          return
      }

      if (!password.trim()) {
          alert('Password cannot be blank')
          return
      }
        axios.post('http://localhost:3001/login',{email,password})
        .then(result=>{console.log(result)
          if(result.data === "success"){
            navigate('/home')
          }
          })
          
        .catch(err=>console.log(err))
    }
    const box={
      width:'25%',
      height:'60%',
      backgroundColor:'white',
      borderRadius:'3px',
      padding:'10px'
    }
    return (
        <div className='d-flex justify-content-center align-item-center bg-secondary vh-100 p-5'>
               <div style={box}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
            
                    <div className="mb-3">
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input
                        type='Email'
                        placeholder='Enter Email'
                        autoComplete='off'
                        name='email'
                        className='form-control rounded-0'
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='email'>
                            <strong>Password</strong>
                        </label>
                        <input
                        type='password'
                        placeholder='Enter Password'
                        autoComplete='off'
                        name='password'
                        className='form-control rounded-0'
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className='btn btn-success w-100 rounded-0'>Login</button>
                    </form>
                    <p>Not a member?</p>
                    <Link to="/register" className='btn btn-default border w-100 bg light rounded-0 text-decoration-none '>
                        Sign Up
                    </Link>
             
            </div>
        </div>
    )
}

export default Login;