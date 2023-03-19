import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Editteacher() {
  const { id } = useParams()
  const [user, setUser] = useState([])

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const res = JSON.parse(localStorage.getItem('teachers'))
    const selectedTeacher = res.find((teacher) => teacher.id == id)
    setUser(selectedTeacher)
  }
  const formik = useFormik({
    initialValues: {
      tname: "",
      temail: "",
      tsubject: "",
    },
    validate: (values) => {
      var err = {}
      if (!values.tname) {
        err.tname = "Please enter Student name"
      }
      if (!values.temail) {
        err.temail = "Please enter Student email"
      }
      if (!values.tsubject) {
        err.tsubject = "Please enter Student age"
      }
      return err;
    },
    onSubmit: async (values) => {
      const teachers = JSON.parse(localStorage.getItem('teachers')) || [];
      const updatedTeachers = teachers?.map((teacher) => {
        if (teacher.id == id) {
          return { ...teacher, ...values }
        } else {
          return teacher;
        }
      });
      localStorage.setItem('teachers', JSON.stringify(updatedTeachers));
      alert("Teacher updated");
      formik.resetForm()
    }
    
  })

  useEffect(() => {
    if (user) {
      formik.setValues({
        tname: user.tname,
        temail: user.temail,
        tsubject: user.tsubject,
      })
    }
  }, [user])

  return (
    <div>
      <main id="main" clastname="main">
        <section clastname="section">
          <h3 style={{ color: 'purple' }}>Update Teacher Details</h3>
          <div clastname='container'>
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-lg-12">
                  <label>Teacher Name</label>
                  <input type={"text"} value={formik.values.tname} name="tname" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`form-control ${formik.touched.tname && formik.errors.tname ? 'error-box' : ""} ${formik.touched.tname && !formik.errors.tname ? 'success-box' : ""}`}></input>
                  {
                    formik.errors.tname ? <span style={{ color: "red" }}>{formik.errors.tname}</span> : null
                  }
                </div>
                <div className="col-lg-12">
                  <label>Teacher Email</label>
                  <input type={"email"} value={formik.values.temail} name="temail" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`form-control ${formik.touched.temail && formik.errors.temail ? 'error-box' : ""} ${formik.touched.temail && !formik.errors.tmail ? 'success-box' : ""}`}></input>
                  {
                    formik.errors.temail ? <span style={{ color: "red" }}>{formik.errors.temail}</span> : null
                  }
                </div>
              </div>
              <div className="col-lg-12">
                <label>Subject</label>
                <input type={"text"} value={formik.values.tsubject} name="tsubject" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`form-control ${formik.touched.tsubject && formik.errors.tsubject ? 'error-box' : ""} ${formik.touched.tsubject && !formik.errors.tsubject ? 'success-box' : ""}`}></input>
                {
                  formik.errors.tsubject ? <span style={{ color: "red" }}>{formik.errors.tsubject}</span> : null
                }
              </div>
              <div>
                <button className='btn btn-md btn-primary mt-2'>Update</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Editteacher