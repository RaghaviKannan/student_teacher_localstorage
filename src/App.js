import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Sidebar';
import Students from './Students';
import Teachers from './Teachers';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Createstudent from './Createstudent';
import Createteacher from './Createteacher';
import Viewstudent from './Viewstudent';
import Viewteacher from './Viewteacher';
import Editstudent from './Editstudent';
import Editteacher from './Editteacher';
import Management from './Management';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header id="header" className="header fixed-top d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center">
            <Link to="/" className="logo d-flex align-items-center"><span className="d-none d-lg-block">Student Teacher Management</span></Link>
          </div>
        </header>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/teachers" element={<Teachers />}></Route>
          <Route path="/management" element={<Management />}></Route>
          <Route path="/students/create-student" element={<Createstudent />}></Route>
          <Route path="/teachers/create-teacher" element={<Createteacher />}></Route>
          <Route path="/students/view-student/:id" element={<Viewstudent />}></Route>
          <Route path="/teachers/view-teacher/:id" element={<Viewteacher />}></Route>
          <Route path="/students/edit-student/:id" element={<Editstudent />}></Route>
          <Route path="/teachers/edit-teacher/:id" element={<Editteacher />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
