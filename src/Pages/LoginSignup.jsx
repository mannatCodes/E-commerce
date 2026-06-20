import React, { useState } from 'react'
import "../CSS/LoginSignup.css"

const LoginSignup = () => {

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: ""

});

  return (

    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>Sign up</h1>

          <div className="loginSignup-field">

            <input 
            type="text"
            name="name"
            placeholder="Your Name" 
            value={formdata.name} 
            onChange={(e) => {
               setformdata({
                 ...formdata,
                 [e.target.name]: e.target.value,
               })
            }}/>

           <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formdata.email}
            onChange={(e) =>
              setformdata({
                ...formdata,
                [e.target.name]: e.target.value,
              })
            }
          />

             <input
            type="password"
            name="password"
            placeholder="Password"
            value={formdata.password}
            onChange={(e) =>
              setformdata({
                ...formdata,
                [e.target.name]: e.target.value,
              })
            }
          />
          </div>

           <button
          onClick={() =>
            setformdata({
              name: "",
              email: "",
              password: "",
            })
          }
        >
          Continue
        </button>

          <p className="loginSignup-login">
             Already have an account ? <span>Login here</span>
          </p>

          <div className="loginSignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
      </div>
    </div>
  )
}

export default LoginSignup
