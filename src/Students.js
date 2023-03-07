import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Students() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = localStorage.getItem('students')
        const studentsArray = JSON.parse(res)
        setStudents(studentsArray)
        console.log(studentsArray)
    }
    const deleteSTudent= async(studentid)=>{
        let conf = window.confirm("Are you sure you want to delete the student?")
        if(conf){
            const students = JSON.parse(localStorage.getItem('students'))
            const filteredstudents = students.filter((student)=>student.id !== studentid)
            const updatedStudents = filteredstudents.map((student, index) => {
                return { ...student, id: index+1 };
              });
            localStorage.setItem('students', JSON.stringify(updatedStudents))
            setStudents(updatedStudents)
            alert("Student deleted")
            fetchdata()
        }
    }
    return (
        <div>
            <main id="main" className="main">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <h4 className="card-title" style={{ textAlign: "center" }} >Students</h4>
                            </div>
                            <Link to='/students/create-student'>
                            <button className='btn btn-primary btn-sm shadow-sm mb-4'>
                                Add Student
                            </button></Link>
                            <div className='card card-body'>
                                <table className='table table-striped'>
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th>Name</th>
                                            <th>Role</th>
                                            <th>Course</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    {students.map((s,index) => {
                                        return <tbody>
                                                <tr>
                                                    <th>{index+1}</th>
                                                    <td>{s.sname}</td>
                                                    <td>{s.srole}</td>
                                                    <td>{s.scourse}</td>
                                                    <td><Link to={`/students/view-student/${s.id}`}className='btn btn-sm btn-success' style={{marginRight:"3px"}}>View</Link>
                                                    <Link to={`/students/edit-student/${s.id}`} className='btn btn-sm btn-warning' style={{marginRight:"3px"}}>Edit</Link>
                                                    <button className='btn btn-sm btn-danger' onClick={()=>deleteSTudent(s.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                    })}
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Students