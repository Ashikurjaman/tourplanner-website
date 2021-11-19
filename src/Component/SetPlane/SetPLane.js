import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const SetPLane = () => {
    
        const [startDate, setStartDate] = useState(new Date());
        const [pack, setPackage] = useState({});
        const {_id} = useParams();
        const {user} = useAuth();

        useEffect(() => {
          fetch(`https://limitless-dawn-39820.herokuapp.com/packages/${_id}`)
            .then((res) => res.json())
            .then((data) => setPackage(data));
        }, []);

        const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
          
          
          
fetch("https://limitless-dawn-39820.herokuapp.com/setplan", {
  method: "POST",
  headers:{
    "content-type": "application/json"
  },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(result =>{
  if(result.insertedId){
    alert("Your plan has been successfully. Check my plan")
    reset();
  }
})

        };

        

    return (
        <div className="container">

<div className="  mt-5">
        <div>
          <img src={pack.img} alt="" />
        </div>
        <div className="px-5 mt-5">
          <h2 className="text-warning">About this Package</h2>
          <hr />
          <h3>{pack.name}</h3>
          <p>Price:{pack.price}</p>
        </div>
      </div>
            <h2 className="bg-primary">Plan A Trip</h2>
            <br/>

            <form onSubmit={handleSubmit(onSubmit)} ClassName="row g-3  mt-5 ">
            <input
              style={{ width: 400 }}
              {...register("name", { required: true, maxLength: 1000 })}
              defaultValue={user.displayName}
            />
            <br />
            <input
              style={{ width: 400 }}
              {...register("email", { required: true, maxLength: 1000 })}
              defaultValue={user.email}
            />
  <br/>
  <input
              style={{ width: 400 }}
              {...register("title", { required: true, maxLength: 1000 })}
              defaultValue={pack.name}
            />
  <br/>
  <input
              style={{ width: 400 }}
              {...register("img", { required: true, maxLength: 1000 })}
              defaultValue={pack.img}
            />
  <br/>

  <input
              style={{ width: 400 }}
              {...register("location", { required: true, maxLength: 100 })}
              placeholder="Where do you live?"
            />
  
  

  <br/>
  



  
  
  
  
  <div ClassName="col-12">
    <button type="submit" ClassName="btn btn-primary">Send</button>
  </div>
</form>
        </div>
    );
};



export default SetPLane;