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
          
          <Link to="/package">
          <button type="" className="btn btn-primary m-2 mt-3"> Package</button>
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
      <div className="py-5 container">
          <h4>Holyday Special</h4>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://avijatrik.org/wp-content/uploads/2019/06/1542-768x511.jpg"
                  className="card-img-top "
                  alt="..."
                />
                <div className="card-body">
                  
                  <p className="card-text">
                  Saptarshi Riverside Resort is located on the bank of Shitalakhsa river. We are just 10 minutes away from Kanchan Bridge, Purbachal. 


                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://avijatrik.org/wp-content/uploads/2020/08/IMG_5387-768x512.jpg"
                  alt="..." className="card-img-top "
                />
                <div className="card-body">
                  
                  <p className="card-text">
                  Saptarshi Riverside Resort is located on the bank of Shitalakhsa river. We are just 10 minutes away from Kanchan Bridge, Purbachal. 


                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://avijatrik.org/wp-content/uploads/2020/08/1111-1-768x512.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  
                  <p className="card-text">
                  Saptarshi Riverside Resort is located on the bank of Shitalakhsa river. We are just 10 minutes away from Kanchan Bridge, Purbachal. 


                    
                      
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>

<br/>
<br/>
<br/>
      <div className="py-5 container">
          <h4>Why choose us</h4>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://avijatrik.org/wp-content/uploads/2020/08/tour-guide.png"
                  className="card-img-top "
                  alt="..."
                />
                <div className="card-body">
                  
                  <p className="card-text">
                  Saptarshi Riverside Resort is located on the bank of Shitalakhsa river. We are just 10 minutes away from Kanchan Bridge, Purbachal. 


                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://avijatrik.org/wp-content/uploads/2020/08/cottage.png"
                  alt="..." className="card-img-top "
                />
                <div className="card-body">
                  
                  <p className="card-text">
                  Saptarshi Riverside Resort is located on the bank of Shitalakhsa river. We are just 10 minutes away from Kanchan Bridge, Purbachal. 


                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://avijatrik.org/wp-content/uploads/2020/08/pickup-car.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  
                  <p className="card-text">
                  Saptarshi Riverside Resort is located on the bank of Shitalakhsa river. We are just 10 minutes away from Kanchan Bridge, Purbachal. 


                    
                      
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        
    </div>
  );
};

export default Home;
