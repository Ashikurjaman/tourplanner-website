import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
  const {user, logOut} = useAuth()
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TourPlanner
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item ms-2">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#416a59",
                  }}
                  className="ms-4 text-decoration-none"
                  style={{ color: "#39395f" }}
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ms-2">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#416a59",
                  }}
                  className="ms-4 text-decoration-none"
                  style={{ color: "#39395f" }}
                  to="/package"
                >
                  Package
                </NavLink>
              </li>
              
              <li className="nav-item ms-2">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#416a59",
                  }}
                  className="ms-4 text-decoration-none"
                  style={{ color: "#39395f" }}
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
        
              <li className="nav-item ms-2">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#416a59",
                  }}
                  className="ms-4 text-decoration-none"
                  style={{ color: "#39395f" }}
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
      </ul>

      
      
      {
        user.email?
        <span>
          
          <Link to="/dashboard">
                    <button
                      style={{
                        backgroundColor: "#39395f",
                        color: "#fff",
                        marginRight: "10px",
                      }}
                      className="btn "
                    >
                      DashBoard
                    </button>
                  </Link>
                  <Link to="/myorder">
                    <button
                      style={{
                        backgroundColor: "#39395f",
                        color: "#fff",
                        marginRight: "10px",
                      }}
                      className="btn "
                    >
                      myorder
                    </button>
                  </Link>

                  <Link to="/manageallorders">
                    <button
                      style={{
                        backgroundColor: "#39395f",
                        color: "#fff",
                        marginRight: "10px",
                      }}
                      className="btn "
                    >
                      Manage All Orders
                    </button>
                  </Link>
                  <Link to="/addnewservice">
                    <button
                      style={{
                        backgroundColor: "#39395f",
                        color: "#fff",
                        marginRight: "10px",
                      }}
                      className="btn "
                    >
                      Add new service
                    </button>
                  </Link>
        
                  <Link to="/">
                    <button
                      onClick={logOut}
                      style={{ backgroundColor: "#39395f", color: "#fff" }}
                      className="btn "
                    >
                      Logout
                    </button>
                  </Link>        
        
          
          
          
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