import React, {useState} from 'react';
import Registration from '../../../components/Frontend/Registration';
// import about from '../../assets/about-me.jpg';



function Home(props) {


  

  return(
    <>
    <section className="main py-5">
      <div className="container">
        <div className="row justify-content-center">
        <Registration/>
        </div>
      </div>
     
    </section>
  
    </>
  );

  

}

export default Home;
