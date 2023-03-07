import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Teachers() {
    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = localStorage.getItem('teachers')
        const teachersArray = JSON.parse(res)
        setTeachers(teachersArray)
    }
    const deleteTeacher= async(teacherid)=>{
        let conf = window.confirm("Are you sure you want to delete the student?")
        if(conf){
            const teachers = JSON.parse(localStorage.getItem('teachers'))
            const filteredteachers = teachers.filter((teacher)=>teacher.id !== teacherid)
            const updatedTeachers = filteredteachers.map((teacher, index) => {
                return { ...teacher, id: index+1 };
              });
            localStorage.setItem('teachers', JSON.stringify(updatedTeachers))
            setTeachers(updatedTeachers)
            alert("Teacher deleted")
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
                        <h4 className="card-title" style={{ textAlign: "center" }} >Teachers</h4>
                    </div>
                    <Link to='/teachers/create-teacher'>
                    <button className='btn btn-primary btn-sm shadow-sm mb-4'>
                        Add Teacher
                    </button></Link>
                    <div className='card card-body'>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Subject</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {teachers.map((t,index) => {
                                return <tbody>
                                        <tr>
                                            <th>{index+1}</th>
                                            <td>{t.tname}</td>
                                            <td>{t.temail}</td>
                                            <td>{t.tsubject}</td>
                                            <td><Link to={`/teachers/view-teacher/${t.id}`}className='btn btn-sm btn-success' style={{marginRight:"3px"}}>View</Link>
                                            <Link to={`/teachers/edit-teacher/${t.id}`} className='btn btn-sm btn-warning' style={{marginRight:"3px"}}>Edit</Link>
                                            <button className='btn btn-sm btn-danger' onClick={()=>deleteTeacher(t.id)}>Delete</button>
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

export default Teachers