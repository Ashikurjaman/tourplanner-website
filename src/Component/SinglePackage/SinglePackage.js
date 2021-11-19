import React from 'react';
import { Link } from 'react-router-dom';

const SinglePackage = ({packs}) => {
    const {name, img, description,price,_id} = packs;
    
    return (
        <div className="col ">
              <div className="card h-100">
                <img
                  src={img}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{name} Package</h5>
                  <p className="card-text">
                    {description.slice(0,100)}
                  </p>
                  <p>Price: {price}TK</p>
                  <Link to={`/setplan/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
              </div>
            </div>
    );
};

export default SinglePackage;