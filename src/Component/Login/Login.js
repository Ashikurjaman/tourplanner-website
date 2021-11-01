import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const {user, signinUsingGoogle, setIsLoading} = useAuth();
    const location = useLocation();
    
    const history = useHistory()
    const redirect_uri =location.state?.from || "/home";

    const handalLogin = () => {
      signinUsingGoogle()
      .then(result => {
        history.push(redirect_uri)
      })
      .finally(() =>setIsLoading(false));
    }

    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

    return (
        <div>
            <div className="container">
                <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
  <div ClassName="row mb-3">
    <label htmlFor="inputEmail3" ClassName="col-sm-2 col-form-label">Email</label>
    <div ClassName="col-sm-10">
      <input {...register("email", { required: true, maxLength: 20 })} type="email" ClassName="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div ClassName="row mb-3">
    <label htmlFor="inputPassword3" ClassName="col-sm-2 col-form-label">Password</label>
    <div ClassName="col-sm-10">
      <input {...register("password", )} type="password" ClassName="form-control" id="inputPassword3"/>
    </div>
  </div>
  
  <div ClassName="row mb-3">
    <div ClassName="col-sm-10 offset-sm-2">
     
    </div>
  </div>
  <button type="submit" ClassName="btn btn-primary">Sign in</button>
</form>
        <h4 ClassName="mt-3">Or</h4>
        <button onClick={handalLogin} ClassName="btn btn-primary"type="submit">Google</button>

            </div>

        </div>
    );
};

export default Login;