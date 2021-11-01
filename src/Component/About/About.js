import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="card bg-dark text-white">
        <img
          src="https://media.istockphoto.com/photos/couple-planning-a-travel-picture-id1154378762?k=20&m=1154378762&s=612x612&w=0&h=pNftbYLLftJHnSnv-T-__s3uPUFC_1VAZx3hScmes0U="
          className="card-img img-fluid w-100"
          alt="eye-care"
        />
        <div className="card-img-overlay">
          <h3 className="fs-1 text mt-3">The new way to plan your next trip</h3>
          <h5 className="fs-3 text mt-5">Create a fully customized
day by day itinerary for free</h5>
<Link to="/setplan">
          <button type="" className="btn btn-primary m-2"> Set Plan</button>
          </Link>
          <Link to="contact">
          <button type="" className="btn btn-primary m-2" > Contact us</button> 
          </Link>
        </div>
      </div>
      <h2 className="mt-3">About us</h2>
        <p className="mt-3">
        The name Tour Planners Ltd, is well known in both national and international markets for the quality of its services having knowledgeable team of English / Japanese / Chinese & other language Speaking Guide.

For almost two decades we have been providing our customers with all tourism related services to their complete satisfactions and at competitive prices. Founded in Dhaka in the year 1992, today we operate in the network from the most important tourist centers in the country, which guarantees the best possible service. As a full Destination Management Company, Tour Planners Ltd. offers all services for a professional and perfect handling of all kinds of groups and projects in Bangladesh. We actively participate in the daily life of the communities where we operate. For instance, the company contributes funds to rural tribes visited by our ethnic tours.

We aim to present the people, history, cultural heritage and beauty of Bangladesh to the world through unique customized services of international standards. We will continue to strengthen our position in the tourism market as one of Bangladesh's leading providers of such services as well as to promote the superiority of our products, prices and our team of local and international travel experts.
        </p>
        </div>
    );
};

export default About;<h2>About</h2>