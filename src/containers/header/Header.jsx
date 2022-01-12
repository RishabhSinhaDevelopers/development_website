import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content" data-tilt>
      <h1 className="gradient__text" data-tilt>Welcome to XSTEM bitch<br/>Join us and Explore Your Possibilites</h1>
      <p>An entrepreneurship club incorporating STEM knowledge</p>
      <div className="gpt3__header-content__people" data-tilt>
      </div>
    </div>

    <div className="gpt3__header-image">
      
      
      <img src={ai} />
      
    </div>
    <script src="vanilla-tilt.min.js"></script>

  </div>
  
);
export default Header;
