import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Editstudent() {
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
    const formik = useFormik({
        initialValues: {
            sname: "",
            semail: "",
            sage: "",
            srole: "",
            scourse: "",
            sbatch: ""
        },
        validate: (values) => {
            var err = {}
            if (!values.sname) {
                err.sname = "Please enter Student name"
            }
            if (!values.semail) {
                err.semail = "Please enter Student email"
            }
            if (!values.sage) {
                err.sage = "Please enter Student age"
            }
            if (values.sage && values.sage<18 ) {
                err.sage = "You should be 18 or above"
            }
            if (values.srole === "") {
                err.srole = "Please select your role"
            }
            if (values.scourse === "") {
                err.scourse = "Please select your course"
            }
            if (values.sbatch === "") {
                err.sbatch = "Please select your batch"
            }
            return err;
        },
        onSubmit: async (values) => {
            const students = JSON.parse(localStorage.getItem('students')) || [];
            const updatedStudents = students.map((student) => {
              if (student.id == id) {
                return { ...student, ...values }
              } else {
                return student;
              }
            });
            localStorage.setItem('students', JSON.stringify(updatedStudents));
            alert("Student updated");
            formik.resetForm()
          }
          
    })

    useEffect(() => {
        if (user) {
          formik.setValues({
            sname: user.sname,
            semail: user.semail,
            sage: user.sage,
            srole: user.srole,
            scourse: user.scourse,
            sbatch: user.sbatch,
          })
        }
      }, [user])

    return (
        <div>
            <main id="main" className="main">
                <section className="section">
                    <h3 style={{ color: 'purple' }}>Update Student Details</h3>
                    <div className='container'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label>Student Name</label>
                                    <input type={"text"} value={formik.values.sname} name="sname" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`form-control ${formik.touched.sname && formik.errors.sname ? 'error-box' : ""} ${formik.touched.sname && !formik.errors.sname ? 'success-box' : ""}`}></input>
                                    {
                                        formik.errors.sname ? <span style={{ color: "red" }}>{formik.errors.sname}</span> : null
                                    }
                                </div>
                                <div className="col-lg-6">
                                    <label>Student Email</label>
                                    <input type={"email"} value={formik.values.semail} name="semail" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`form-control ${formik.touched.semail && formik.errors.semail ? 'error-box' : ""} ${formik.touched.semail && !formik.errors.semail ? 'success-box' : ""}`}></input>
                                    {
                                        formik.errors.semail ? <span style={{ color: "red" }}>{formik.errors.semail}</span> : null
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label>Age</label>
                                    <input type={"number"} value={formik.values.sage} name="sage" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`form-control ${formik.touched.sage && formik.errors.sage ? 'error-box' : ""} ${formik.touched.sage && !formik.errors.sage ? 'success-box' : ""}`}></input>
                                    {
                                        formik.errors.sage ? <span style={{ color: "red" }}>{formik.errors.sage}</span> : null
                                    }</div>
                                <div className="col-lg-6">
                                    <label>Role</label>
                                    <select value={formik.values.srole} name="srole" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`form-control ${formik.touched.srole && formik.errors.srole ? 'error-box' : ""} ${formik.touched.srole && !formik.errors.srole ? 'success-box' : ""}`}>
                                        <option value="">--select--</option>
                                        <option value="Student">Student</option>
                                        <option value="Working Professional">Working Professional</option>
                                    </select>
                                    {
                                        formik.errors.srole ? <span style={{ color: "red" }}>{formik.errors.srole}</span> : null
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label>Course</label>
                                    <select value={formik.values.scourse} name="scourse" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`form-control ${formik.touched.scourse && formik.errors.scourse ? 'error-box' : ""} ${formik.touched.scourse && !formik.errors.scourse ? 'success-box' : ""}`}>
                                        <option value="">--select--</option>
                                        <option value="Full Stack development">Full Stack development</option>
                                        <option value="Automation and Testing">Automation and Testing</option>
                                        <option value="Advanced Programming and Data Science">Advanced Programming and Data Science</option>
                                    </select>
                                    {
                                        formik.errors.scourse ? <span style={{ color: "red" }}>{formik.errors.scourse}</span> : null
                                    }
                                </div>

                                <div className="col-lg-6">
                                    <label>Batch</label>
                                    <select value={formik.values.sbatch} name="sbatch" onChange={formik.handleChange} onBlur={formik.handleBlur} className={`form-control ${formik.touched.sbatch && formik.errors.sbatch ? 'error-box' : ""} ${formik.touched.sbatch && !formik.errors.sbatch ? 'success-box' : ""}`}>
                                        <option value="">--select--</option>
                                        <option value="Weekend">Weekend</option>
                                        <option value="Weekday">Weekday</option>
                                    </select>
                                    {
                                        formik.errors.sbatch ? <span style={{ color: "red" }}>{formik.errors.sbatch}</span> : null
                                    }
                                </div>

                                <div>
                                    <button className='btn btn-md btn-primary mt-2'>Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Editstudent