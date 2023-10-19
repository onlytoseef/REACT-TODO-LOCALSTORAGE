import { Button, Space, message } from "antd"
import dayjs from "dayjs"
import React, { useEffect, useState } from "react"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"



export default function Hero() {


  const [documents, setDocuments] = useState([])


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || []
    setDocuments(todos)
  }, [])


  const handleDelete = (todo) =>{
    let documentsAfterDelete = documents.filter(doc=>doc.id !==todo.id)
    setDocuments(documentsAfterDelete)
    localStorage.setItem("todos",JSON.stringify(documentsAfterDelete))
    message.success("Todo Deleted Succesfuly")
  }  
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center" >TODOS</h1>
            </div>
          </div>




          <div className="table-resposive mt-5">
            <div className="">
              <table className="table table-striped-rows ">
                <thead>
                  <tr className="bg-primary text-white">
                    <th>#</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Description</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((todo, i) => {
                    return (
                      <tr>
                        <th  >{i + 1}</th>
                        <td  >{todo.title}</td>
                        <td  >{todo.location}</td>
                        <td  >{todo.description}</td>
                        <td  >{todo.date}</td>
                        <td> <Space size="small" >
                          <Button danger  onClick= {()=>handleDelete(todo)} icon={<DeleteOutlined />} /><Button type="primary" value={"Edit"} icon={<EditOutlined />} />
                        </Space>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>

            </div>
          </div>



        </div>
      </div>
    </>
  )
}
