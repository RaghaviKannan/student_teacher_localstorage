import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'


function Createteacher() {
  const formik = useFormik({
    initialValues: {
      tname: "",
      temail: "",
      tsubject: "",
    },
    validate: (values) => {
      var err = {}
      if (!values.tname) {
        err.tname = "Please enter Teacher name"
      }
      if (!values.temail) {
        err.temail = "Please enter Teacher email"
      }
      if (!values.tsubject) {
        err.tsubject = "Please enter Subject"
      }
      return err;
    },
    onSubmit: (values) => {
      const teachers = JSON.parse(localStorage.getItem('teachers')) || [];
      const newTeacher = {...values, id: teachers.length+1}
      teachers.push(newTeacher)
      localStorage.setItem('teachers',JSON.stringify(teachers))       
      formik.resetForm()
      alert("Teacher added")
  }
})
  return (
    <div>
      <main id="main" className="main">
        <section className="section">
          <div className='container'>
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
                <button className='btn btn-md btn-primary mt-2'>Submit</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>)
}

export default Createteacher