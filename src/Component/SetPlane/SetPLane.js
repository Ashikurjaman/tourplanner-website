import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';

const SetPLane = () => {
    
        const [startDate, setStartDate] = useState(new Date());
        
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

        const {user} = useAuth();

    return (
        <div className="container">
            <h2 className="bg-primary">Plan A Trip</h2>
            <form onSubmit={handleSubmit(onSubmit)} ClassName="row g-3  mt-5 ">
  <div ClassName="col-md-6">
    <label htmlFor="inputEmail4" ClassName="form-label">Name</label>
    <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} type="name" ClassName="form-control" id="inputEmail4"/>
  </div>
  <div ClassName="col-md-6">
    <label htmlFor="inputEmail4" ClassName="form-label">Email</label>
    <input defaultValue={user.email} {...register("email")} type="email" ClassName="form-control" id="inputEmail4"/>
  </div>
  <div ClassName="col-md-6">
    <label htmlFor="inputPassword4" ClassName="form-label">Phone</label>
    <input {...register("phone")} type="text" ClassName="form-control" id="inputPassword4"/>
  </div>
  <div ClassName="col-6">
    <label htmlFor="inputAddress" ClassName="form-label">Address</label>
    <input {...register("address")} type="text" ClassName="form-control" id="inputAddress" placeholder=""/>
  </div>
  
  <div ClassName="col-md-6">
  <label htmlFor="inputZip" ClassName="form-label">Date</label>
  <DatePicker {...register("date")} ClassName="form-control col-md-6" selected={startDate} onChange={(date) => setStartDate(date)} />
  </div>

  <div ClassName="col-md-6">
    <label htmlFor="inputCity" ClassName="form-label">City</label>
    <input {...register("city")} type="text" ClassName="form-control" id="inputCity"/>
  </div>
  



  <div ClassName="col-md-2">
    <label htmlFor="inputZip" ClassName="form-label">Zip</label>
    <input {...register("zip")} type="text" ClassName="form-control" id="inputZip"/>
  </div>
  <div ClassName="col-md-6">
    <label htmlFor="inputZip" ClassName="form-label">No of package</label>
    <input {...register("no of package")} type="number" ClassName="form-control" id="inputZip"/>
  </div>
  <div ClassName="col-md-4">
    <label htmlFor="inputZip" ClassName="form-label">No of night</label>
    <input {...register("no of night")} type="number" ClassName="form-control" id="inputZip"/>
  </div>
  
  
  <div ClassName="col-12">
    <button type="submit" ClassName="btn btn-primary">Send</button>
  </div>
</form>
        </div>
    );
};



export default SetPLane;