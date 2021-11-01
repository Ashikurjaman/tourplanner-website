import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=" mt-4">
            <div className="container row mt-3  p-2">
            <div className="col-md-4">
            
            <h4>Get in Touch</h4>
          <p>Email:tourplanner0007@gmail.com</p>
          <p>Mobile:+8801751248200</p>
          <p>Address:Dhaka,Bangladesh</p>
                
            
            </div>
            <div className="col-md-4 ">
                <h4>Tour Planner</h4>
            The name Tour Planners Ltd, is well known in both national and international markets for the quality of its services having knowledgeable team of English / Japanese / Chinese & other language Speaking Guide.
            </div>
            <div className="col-md-4">
            <h4>Important Links</h4>
          <p>Our Facebook Page</p>
          <p>BD Tour Planners</p>
          <p> Help Line: 9998</p>
            </div>
            </div>
        </div>
    );
};

export default Footer;