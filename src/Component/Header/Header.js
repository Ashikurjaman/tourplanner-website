import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
  const {user, logOut} = useAuth()
    return (
        <div>
            <nav ClassName="navbar navbar-expand-lg navbar-light bg-light">
  <div ClassName="container-fluid">
    <Link ClassName="navbar-brand" to="/home">TourPlanner</Link>
    <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span ClassName="navbar-toggler-icon"></span>
    </button>
    <div ClassName="collapse navbar-collapse" id="navbarText">
      <ul ClassName="navbar-nav me-auto mb-2 mb-lg-0">
        <li ClassName="nav-item">
          <Link ClassName="nav-link " aria-current="page" to="/home">Home</Link>
        </li>
        {/* <li ClassName="nav-item">
          <Link ClassName="nav-link" to="/package">Package</Link>
        </li> */}
        <li ClassName="nav-item">
          <Link ClassName="nav-link " to="/setplan">Set Plan</Link>
        </li>
        <li ClassName="nav-item">
          <Link ClassName="nav-link" to="/about">About Us</Link>
        </li>
        
        <li ClassName="nav-item">
          <Link ClassName="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>

      
      
      {
        user.email?
        <span>
          <ul ClassName="navbar-nav me-auto mb-2 mb-lg-0">
          <li ClassName="nav-item">
          <Link ClassName="nav-link" to="/myplan">My Plans</Link>
        </li>
        <li ClassName="nav-item">
        <button ClassName="navbar-text btn btn-primary" onClick={logOut} >Logout </button>
        </li>
        </ul>
          
          
          
        </span>
        :
        <span ClassName="navbar-text">  
          <Link ClassName="nav-link " to="/login"> <button ClassName="btn btn-primary">Sign In</button></Link>
      </span>
      }
      <span ClassName="">{user.displayName}</span>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;