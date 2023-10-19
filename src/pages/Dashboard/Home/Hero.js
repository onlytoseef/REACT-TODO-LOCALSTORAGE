import React, { useState } from 'react'
import { Button, DatePicker, Divider, Form, Input, Typography, message } from 'antd'
import { useAuthContext } from 'contexts/AuthContext'
import { Link } from 'react-router-dom'


const initialState = { title: "", location: "", date: "", description: "" }

export default function Hero() {

  const { dispatch } = useAuthContext(initialState)
  const [state, setState] = useState({})
  const [isProcessing, setIsProcessing] = useState(false)

  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))


  const handleDate = (_, date) => setState(s => ({ ...s, date }))

  

  const handleLogin = e => {
    e.preventDefault()

    let { title, location, date, description } = state
    if (!title) {
      return message.error("Please Enter Title")
    }

    const todo = {
      title, location, date, description,
      status: "active",
      dateCreated: new Date().getTime(),
      id: Math.random.toString(36).slice(2),
    }
    setIsProcessing(true)
    const todos = JSON.parse(localStorage.getItem("todos"))|| []
    todos.push(todo)

    setTimeout(() => {
      setIsProcessing(false)
      message.success("Todo has been added Successfuly ")
      localStorage.setItem("todos", JSON.stringify(todos))
    }, 2000)
  }

  return (
    <main className='auth'>
      <div className="container">
        <Link to="/" ><button className='btn btn-primary' >Back to Home</button></Link>
        <div className="row">
          <div className="col">
            <div className="card p-3 p-md-4">

              <div className="container py-5">
                <h2 className='text-center fw-bold mb-3' style={{ fontFamily: "Poppins", }} >Add Todo</h2>

                <div className="row text-center">
                  <label className='mt-2' htmlFor="Title">Title</label>
                  <div className="col-12 ">  <input type="text" placeholder='Input yout Title' name='title' onChange={handleChange} className="form-control" ></input> </div>
                  <label className='mt-2' htmlFor="location">Location</label>
                  <div className="col-12 " >  <input type="text" placeholder='Input your Location' name='location' onChange={handleChange} className="form-control" ></input> </div>
                </div>
                <div className="row text-center">
                  <label className='mt-2' htmlFor="location">Date</label>
                  <div className="col-12 mb-3 "><input type='date' placeholder='Date' onChange={handleDate} name='date' class="form-control" ></input></div>
                </div>
                <div className="row text-center">
                  <label className='mt-2' htmlFor="location">Description</label>
                  <div className="col-12 mb-3 "><input type="text" name='description' onChange={handleChange} placeholder='Input your Descrition Here' class="form-control" ></input></div>
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
