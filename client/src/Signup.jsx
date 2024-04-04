import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from "react-router-dom";

function Signup() {
    const[name,setName]=React.useState()
    const[email,setEmail]=React.useState()
    const[password,setPassword]=React.useState()
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if (name.length < 5) {
            alert('Name should be at least 5 characters long')
            return
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            alert('Please enter a valid email address')
            return
        }

        if (!/(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,}/.test(password)) {
            alert('Password should be at least 8 characters long and contain at least one digit, one symbol, and one letter.')
            return
        }

        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result=>{console.log(result)
           navigate('/login')})
        .catch(err=>console.log(err))
    }
    const box={
        width:'25%',
        height:'70%',
        backgroundColor:'white',
        borderRadius:'3px',
        padding:'10px'
      }
    return (
        <div className='d-flex justify-content-center align-item-center bg-secondary vh-100 p-5'>
               <div style={box}>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor='email'>
                            <strong>Name</strong>
                        </label>
                        <input
                        type='text'
                        placeholder='Enter Name'
                        autoComplete='off'
                        name='name'
                        className='form-control rounded-0'
                        onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
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
                    <button type="submit" className='btn btn-success w-100 rounded-0'>Register</button>
                    </form>
                    <p>Already Have an Account?</p>
                    <Link to="/login" className='btn btn-default border w-100 bg light rounded-0 text-decoration-none '>
                        Login
                    </Link>
             
            </div>
        </div>
    )
}

export default Signup