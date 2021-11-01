import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PackageService = () => {
    const {packsId} = useParams();
    const [service, setService] = useState({});
    useEffect( () => {
        fetch(`https://limitless-dawn-39820.herokuapp.com/${packsId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className="col ">
              <div className="card h-100">
                <img
                  src={service.img}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{service.name} Package</h5>
                  <p className="card-text">
                    {service.description.slice(0,100)}
                  </p>
                  <p>Price: {service.price}TK</p>
                </div>
              </div>
            </div>
    );
};

export default PackageService;