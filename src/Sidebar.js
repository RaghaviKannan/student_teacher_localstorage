import React from 'react'
import { Link } from 'react-router-dom'
import Students from './Students'

function Sidebar() {
    return (
        <div><aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/students" className="nav-link">
                        <span>Students</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/teachers" className="nav-link">
                        <span>Teachers</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/management" className="nav-link">
                        <span>Management</span>
                    </Link>
                </li>
            </ul>
        </aside></div>
    )
}

export default Sidebar