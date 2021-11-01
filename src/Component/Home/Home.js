import React from "react";
import { Link } from "react-router-dom";
import Package from "../Package/Package";

const Home = () => {
  return (
    <div>
      <div className="card bg-dark text-white">
        <img
          src="https://media.istockphoto.com/photos/romantic-couple-on-summer-vacation-enjos-the-sunset-over-the-sea-by-picture-id1256296335?b=1&k=20&m=1256296335&s=170667a&w=0&h=qHMizjo19yp4P2IolVNI3zCndbeKqv2xHiU2ZZY2DSM="
          className="card-img img-fluid w-100"
          alt="tour"
        />
        <div className="card-img-overlay ">
          <div className="mt-5 text-center d-block align-center justify-content-center">
          <h3 className="fs-3 text-center mt-5 text-primary">The new way to plan your next trip</h3>
          
          <Link to="/setplan">
          <button type="" className="btn btn-primary m-2 mt-3"> Set Plan</button>
          </Link>
          <Link to="contact">
          <button type="" className="btn btn-primary m-2 mt-3" > Contact us</button> 
          </Link>
          </div>
          
        </div>
      </div>

      <div className="container">
      <Package></Package>
      </div>
    </div>
  );
};

export default Home;
