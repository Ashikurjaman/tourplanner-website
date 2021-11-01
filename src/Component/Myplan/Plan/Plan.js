import React from 'react';

const Plan = (props) => {
    const {name,email,phone,address,city,zip} =props.plan;
    return (
        <div className="col container ">
              <div className="card h-100">
                
                <div className="card-body">
                  <h5 className="card-title">Name:{name} Package</h5>
                  <p className="card-text">
                    Email:{email}
                  </p>
                  <p className="card-text">
                    Phone:{phone}
                  </p>
                  <p className="card-text">
                   Address: {address} 
                  </p>
                  <p className="card-text">
                    {}
                  </p>
                  <button className="btn btn-primary">Delete</button>
                  
                </div>
              </div>
            </div>
    );
};

export default Plan;