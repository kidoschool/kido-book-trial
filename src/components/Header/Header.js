import React from 'react';
import logo from '../../assets/kido-logo.jpg'

function Header(props){

    return(
      <>
       <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-color fixed-top">
          <a className="navbar-brand pl-4" href="/"><img src={logo} alt="logo"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
              <li className="nav-item">
                <a className="nav-link pl-4" activeclassname="selected" href="#home">home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-4" href="#about">about</a>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-4" href="#services">our lines</a>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-4" href="#appointment">gift</a>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-4" href="#contact">contact</a>
              </li>
              <li className="nav-item pl-4">
                <a className="nav-link mainbtn" href="#contact">get it</a>
              </li>
            </ul> */}
          </div>
        </nav>
      </header>
      </>

    );

}

export default Header;
