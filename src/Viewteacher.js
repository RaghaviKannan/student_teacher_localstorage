import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Viewteacher() {
  const { id } = useParams()
  const [user, setUser] = useState([])

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const res = await axios.get(`https://6406217d40597b65de4b2804.mockapi.io/teachers/${id}`)
    setUser(res.data)
  }
  return (
    <div>
      <main id="main" className="main">
        <section className="section">
          <h3 style={{ color: 'purple' }}>Teacher Details</h3>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h5 style={{ fontWeight: 'bold' }}>Name</h5>
                <h6 style={{ fontStyle: 'italic', color: 'red' }}>{user.tname}</h6>
              </div>
              <div className='col-lg-12'>
                <h5 style={{ fontWeight: 'bold' }}>Email</h5>
                <h6 style={{ fontStyle: 'italic', color: 'red' }}>{user.temail}</h6>
              </div>
              <div className='col-lg-12'>
                <h5 style={{ fontWeight: 'bold' }}>Subject</h5>
                <h6 style={{ fontStyle: 'italic', color: 'red' }}>{user.tsubject}</h6>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Viewteacher