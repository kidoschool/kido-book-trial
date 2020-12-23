import React, { useState, useContext } from 'react';
import fire from '../../../config/Fire';
import { AuthContext } from '../../../context/Auth';
import { withRouter, Redirect, Link } from 'react-router-dom';
import './LoginRegister.css';


function LoginRegister(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formTitle, setFormTitle] = useState('Login');
  const [fireErrors, setFireErrors] = useState("");
  const [loginBtn, setLoginBtn] = useState(true);


  const login = (event) => {
    event.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password)
     .catch((error) => {
        setFireErrors(error.message)
     })
  }

  const register = (event) => {
    event.preventDefault();
    fire.auth().createUserWithEmailAndPassword(email, password)
     .catch((error) => {
        setFireErrors(error.message)
     })
  }

  const getAction = action => {
      if(action === 'reg'){
            setFormTitle('Register New User');
            setLoginBtn(false);
            setFireErrors('');
      }else{
            setFormTitle('Login');
            setLoginBtn(true);
            setFireErrors('');
      }
  }

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/backendhome" />;
  }

  
  

  let errorNotification = fireErrors ? 
  (<div className="alert alert-danger" role="alert">{fireErrors}</div>) : null;

  let submitBtn = loginBtn ?
  (<button  type="submit" className="loginBtn btn btn-success" onClick={login} >Enter</button>) :
  (<button  type="submit" className="loginBtn btn btn-success" onClick={register} >Register</button>);

  let login_register = loginBtn ? 
  (
    <button  className="loginBtn btn btn-primary float-right d-none" onClick={() => getAction('reg')}>Register</button>
  ) :
  (<button  className="loginBtn btn btn-primary float-right" onClick={() => getAction('login')}>Login</button>);

  return(
    <div className="authentication">
    <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-6">
            {/* <h1 className="title">REACT CRUD DASHBOARD</h1> */}
                <div className="mt-5 px-5 py-5 bg-white border shadow-lg rounded signup-box">
                <h2 className="text-center">{formTitle}</h2>
                <div>{errorNotification}</div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="text" className="form-control" id="email" name="email" value={email} placeholder="Enter a email" onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={password} placeholder="Enter a password" onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    {submitBtn}
                    {login_register}
                </div>
            </div>
        </div>
    </div>
    </div>
  );

}

export default withRouter(LoginRegister);
