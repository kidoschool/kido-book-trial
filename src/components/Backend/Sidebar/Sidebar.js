import React, {useContext} from 'react';
import {NavLink , withRouter } from "react-router-dom";
import $ from "jquery";
import fire from '../../../config/Fire';
import { AuthContext } from '../../../context/Auth';
import './Sidebar.css';
import Usericon from './userimg.png';

const Sidebar=()=> {
  const { currentUser } = useContext(AuthContext);
  const tooglesidebar=()=>
  {
    $('#sidebar').toggleClass('active1');
  }

  return (
  
      <>
        {currentUser ? (
		    <nav id="sidebar">
				<div className="custom-menu">
					<button type="button" id="sidebarCollapse" onClick={tooglesidebar} className="btn btn-primary d-md-none d-sm-block"></button>
        </div>
	  		<div className="img bg-wrap text-center pt-5 pb-3">
	  			<div className="user-logo">
            <p className="text-center text-white">{currentUser.email}</p>
	  			</div>
	  		</div>
       
        <ul className="list-unstyled components mb-5">
          <li>
            <NavLink exact to="/backendhome" className="bg-dark"><span className="fa fa-home mr-3"></span>Home</NavLink>
          </li>
          <li>
          <NavLink to="/CreateGroup" className="bg-dark"><span className="far fa-plus-square mr-3"></span>create a Group</NavLink>
          </li>
          <li>
           <a className="bg-dark" onClick={()=>fire.auth().signOut()}><span className="fas fa-sign-out-alt mr-3"></span> Sign Out</a>
          </li>
        </ul>
      </nav>
      ) : (
      <div></div>
       
      )}
      </>
  );
  
}


export default withRouter(Sidebar);
