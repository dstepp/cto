import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Custom components
import Title from '../login_page/components/Title';
import SignUpForm from './components/signUpForm';


const SignUp = () => {
  return(
    <div>
      <div className="box">
        <div className="title">
          <Title string={'SIGN UP'} />
        </div>
        <div className="input_box">
      
          <SignUpForm />
       
        </div>
        <div className="button_pos">
        <button type="button" className="btn btn-primary">REGISTER </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
