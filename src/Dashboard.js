import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Dashboard() {
    const [students, setStudents] = useState([])
    useEffect(() => {
      fetchdata()
    }, [])
  
    const fetchdata = async () => {
        const res = localStorage.getItem('students')
        const studentsArray = JSON.parse(res)
        setStudents(studentsArray)
    }
    return (
        <div>
            <main id="main" className="main">
                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <h4 className="card-title" style={{ textAlign: "center" }} >Dashboard</h4>
                            </div>
                            <div className='card card-body'>
                                <table className='table table-striped'>
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Student Name</th>
                                            <th>Teacher Name</th>
                                        </tr>
                                    </thead>
                                    {students?.map((s, index) => {
                                        return <tbody>
                                            <tr>
                                                <th>{index + 1}</th>
                                                <td>{s.sname}</td>
                                                {s.assignedTeacher ? <td>{s.assignedTeacher}</td> : <td>Unassigned</td>}
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

export default Dashboard