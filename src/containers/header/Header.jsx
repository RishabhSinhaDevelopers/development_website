import React from 'react';
import ai from '../../assets/ai.gif';
import './header.css';

function Header (){
  return(
  <div className="XSTEM__header section__padding" id="home">
    <div className="XSTEM__header-content" data-tilt>
    <h1 className="gradient__text" data-tilt>Welcome to XSTEM <br/>Join Us and Explore Your Possibilites</h1>

      <p>An entrepreneurship club incorporating STEM knowledge</p>
      <div className="XSTEM__header-content__people" data-tilt>
      </div>
    </div>

    <div className="XSTEM__header-image">
      
      
      <img src={ai} alt="not loaded"/>
      
    </div>
    <script src="vanilla-tilt.min.js"></script>

  </div>
  
  );}
export default Header;
