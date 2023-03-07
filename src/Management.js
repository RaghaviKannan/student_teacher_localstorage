import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'

function Management() {
    const [teachers, setTeachers] = useState([])
    const [students, setStudents] = useState([])
    const [selectedstudent, setSelectedstudent] = useState('')
    const [selectedteacher, setSelectedteacher] = useState('')
    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const teachers = await axios.get("https://6406217d40597b65de4b2804.mockapi.io/teachers");
        const students = await axios.get("https://6406217d40597b65de4b2804.mockapi.io/students");
        setTeachers(teachers.data)
        setStudents(students.data)
    }

    const formik= useFormik({
      initialValues:{
        selectedstudent:"",
        selectedteacher:""
      },
      onSubmit:async({selectedstudent, selectedteacher})=>{
        try {
          const studentdata = students.find((s)=> s.sname === selectedstudent)
          const teacherdata = teachers.find((t)=> t.tname === selectedteacher)
          const updatedStudent = { ...studentdata, assignedTeacher: teacherdata.tname };
          await axios.put(
            `https://6406217d40597b65de4b2804.mockapi.io/students/${studentdata.id}`,
            updatedStudent
          );
          const updatedTeacher = { ...teacherdata, assignedStudent: studentdata.sname };
          await axios.put(
            `https://6406217d40597b65de4b2804.mockapi.io/teachers/${teacherdata.id}`,
            updatedTeacher
          );
          alert("Assigned successfully")
          formik.resetForm()
        } catch (error) {
          console.log(error)
        }
      }
    })

      return (
        <div>
          <main id="main" className="main">
            <section className="section">
              <div className="row">
                <div className="col-lg-12">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="card">
                      <h4 className="card-title" style={{ textAlign: "center" }}>
                        Management
                      </h4>
                    </div>
                    <div className="card card-body">
                      <div className="row">
                        <div className="col-lg-6">
                          <h4
                            style={{
                              paddingLeft: "250px",
                              fontStyle: "italic",
                            }}
                          >
                            <u>Students</u>
                          </h4>
                          <select
                            style={{ fontSize: "20px" }}
                            value={formik.values.selectedstudent}
                            onChange={formik.handleChange}
                            name="selectedstudent"
                          >
                            <option value="">--select--</option>;
                            {students.map((s) => {
                              return <option value={s.sname} key={s.id}>{s.sname}</option>;
                            })}
                          </select>
                        </div>
                        <div className="col-lg-6">
                          <h4
                            style={{
                              paddingLeft: "150px",
                              fontStyle: "italic",
                            }}
                          >
                            <u>Teachers</u>
                          </h4>
                          <select
                            style={{ fontSize: "20px" }}
                            value={formik.values.selectedteacher}
                            onChange={formik.handleChange}
                            name="selectedteacher"
                          >
                            <option value="">--select--</option>;
                            {teachers.map((t) => {
                              return <option value={t.tname} key={t.id}>{t.tname}</option>;
                            })}
                          </select>
                        </div>
                      </div>
                      <button className="btn btn-sm mt-2 btn-primary"
                      >
                        Assign
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </main>
        </div>
      );
                        }     

export default Management