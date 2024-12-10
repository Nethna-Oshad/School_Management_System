import React from "react";
import {Link} from 'react-router-dom';
import schoolLogo from '../assets/images/schoolLOGO.jpeg'; // Update the path to your image


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        {/* Logo Section */}
        <Link to="/" className="navbar-brand">
        <img
  src={schoolLogo} // Use the imported logo here
  alt="School Logo"
  className="d-inline-block align-text-top"
  style={{ height: '50px' }} // Customize the size if needed
/>

        </Link>

        {/* Toggle Button for Mobile View */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link">All Students</Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">Create Student</Link>
            </li>
          </ul>

          {/* Right Side Section: Search Bar and Login Button */}
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
            <Link to="/login">
              <button className="btn btn-outline-secondary ms-2">Login</button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
