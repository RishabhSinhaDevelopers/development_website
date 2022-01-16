import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import possibilityImage from '../assets/possibility.png';
import '../containers/possibility/possibility.css'

function Paradigm(){
  const { pathname } = useLocation();

useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);

  return( <div>
      <Navbar />
      
      <div className="XSTEM__possibility section__padding" id="possibility">
  <div className="XSTEM__possibility-image">
    <img src={possibilityImage} alt="possibility" />
  </div>
  <div className="XSTEM__possibility-content">
    <h1 className="gradient__text">What is the<br /> Paradigm Challenge?</h1>
    <p>The Paradigm Challenge is an ongoing competition that invites students aged 4 to 18 around the world to use kindness, creativity, and collaboration to help solve real-life problems and make a difference.</p>
  </div>
</div>
<div className="XSTEM__possibility section__padding" id="possibility">
  
  <div className="XSTEM__possibility-content">
    <h1 className="gradient__text">The <br /> Prizes!</h1>
    <p>Imagine winning a 4-day/3-night trip to Los Angeles with your parent to enjoy the beach, experience Disneyland, and star in a video shown around the world. Then dress like a star and your limo will take you to a red carpet event to collect your prize.<br /> All it takes is one idea. Use your creativity to win up to $100,000 and change the world. The students who submit the top idea in each age division (4-8, 9-13, and 14-18) will attend the Ceremony and compete for The Paradigm Challenge Prize!
</p>
  </div>
  <div className="XSTEM__possibility-image">
    <img src={possibilityImage} alt="possibility" />
  </div>
</div>
    
      <Footer />
  </div>)
}
export default Paradigm
