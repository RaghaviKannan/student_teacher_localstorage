import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Viewstudent() {
    const { id } = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = JSON.parse(localStorage.getItem('students'))
        const selectedstudent = res.find((student)=> student.id == id)
        setUser(selectedstudent)
    }
    return (
        <div>
            <main id="main" className="main">
                <section className="section">
                    <h3 style={{ color: 'purple' }}>Student Details</h3>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <h5 style={{fontWeight:'bold'}}>Name</h5>
                                <h6 style={{fontStyle:'italic', color:'red'}}>{user.sname}</h6>
                            </div>
                            <div className='col-lg-6'>
                                <h5 style={{fontWeight:'bold'}}>Email</h5>
                                <h6 style={{fontStyle:'italic', color:'red'}}>{user.semail}</h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <h5 style={{fontWeight:'bold'}}>Age</h5>
                                <h6 style={{fontStyle:'italic', color:'red'}}>{user.sage}</h6>
                            </div>
                            <div className='col-lg-6'>
                                <h5 style={{fontWeight:'bold'}}>Role</h5>
                                <h6 style={{fontStyle:'italic', color:'red'}}>{user.srole}</h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <h5 style={{fontWeight:'bold'}}>Course</h5>
                                <h6 style={{fontStyle:'italic', color:'red'}}>{user.scourse}</h6>
                            </div>
                            <div className='col-lg-6'>
                                <h5 style={{fontWeight:'bold'}}>Batch</h5>
                                <h6 style={{fontStyle:'italic', color:'red'}}>{user.sbatch}</h6>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Viewstudent