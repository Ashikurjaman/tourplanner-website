import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h2 className="mt-3">Contact us</h2>
      <form ClassName="row g-3">
  <div ClassName="col-md-6">
    <label htmlFor="text" ClassName="form-label">Name</label>
    <input type="text" ClassName="form-control" id="text"/>
  </div>
  <div ClassName="col-md-6">
    <label htmlFor="inputEmail4" ClassName="form-label">Email</label>
    <input type="email" ClassName="form-control" id="inputEmail4"/>
  </div>
 
  <div ClassName="col-12">
    <label htmlFor="inputAddress" ClassName="form-label">Address</label>
    <input type="text" ClassName="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  
  <div ClassName="col-md-6">
    <label htmlFor="inputCity" ClassName="form-label">City</label>
    <input type="text" ClassName="form-control" id="inputCity"/>
  </div>
  <div ClassName="col-md-4">
    <label htmlFor="inputState" ClassName="form-label">State</label>
    <select id="inputState" ClassName="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div ClassName="col-md-2">
    <label htmlFor="inputZip" ClassName="form-label">Zip</label>
    <input type="text" ClassName="form-control" id="inputZip"/>
  </div>
  <div ClassName="col-12">
    
  </div>
  <div ClassName="col-12">
    <button type="submit" ClassName="btn btn-primary">Send</button>
  </div>
</form>
    </div>
  );
};

export default Contact;
