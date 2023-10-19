import React, { useState } from 'react'
import { Button, DatePicker, Divider, Form, Input, Typography } from 'antd'
import { useAuthContext } from 'contexts/AuthContext'

const { Title } = Typography

export default function Login() {

  const { dispatch } = useAuthContext()
  const [state, setState] = useState({ fullName: "", email: "", password: "" })
  const [isProcessing, setIsProcessing] = useState(false)

  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

  const handleLogin = e => {
    e.preventDefault()

    let { fullName, email, password } = state

    const user = { fullName, email, password }
    setIsProcessing(true)

    setTimeout(() => {
      setIsProcessing(false)
      dispatch({ type: "SET_LOGGED_IN", payload: { user } })
      localStorage.setItem("user", JSON.stringify(user))
    }, 2000)
  }

  return (
    <main className='auth'>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card p-3 p-md-4">
            
              <div className="container py-5">
                <h2 className='text-center fw-bold mb-3' style={{ fontFamily: "Poppins", }}>LOGIN</h2>
                
                    <div className="row">
                        <div className="col-12 col-md-6 mb-3">  <input type="text" placeholder='First Name' name='firstName' onChange={handleChange} className="form-control" ></input> </div>
                        <div className="col-12 col-md-6 mb-3" >  <input type="text" placeholder='Last Name' name='lastName' onChange={handleChange} className="form-control" ></input> </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-3 "><input type="text" placeholder='Email' onChange={handleChange} name='Email' class="form-control" ></input></div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-3 "><input type="text" name='Password' onChange={handleChange} placeholder='Password' class="form-control" ></input></div>
                    </div>
                    <div className="row">
                        <button className='btn btn-primary m-auto w-50' onClick={handleLogin} >Submit</button>
                    </div>

                
            </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
