import React from "react";
import FormLogin from "../FormLogin/FormLogin";
import SliderLogin from "../SliderLogin/SliderLogin";
import "./Login.css";

function Login(props) {
  return (
    <div className="custom-wrapper">
      <div className="row">
        <div className="col-md-8 login-slider">
          <SliderLogin></SliderLogin>
        </div>
        <div className="col-md-4 login-form">
          <FormLogin></FormLogin>
        </div>
      </div>
    </div>
  );
}

export default Login;
