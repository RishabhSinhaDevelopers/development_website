import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import possibilityImage from '../assets/possibility.png';
import '../containers/possibility/possibility.css'

function Diamond(){
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
    <h1 className="gradient__text">The diamond <br /> challenge.</h1>
    <p> The Diamond Challenge provides a unique opportunity for teens to learn about entrepreneurship while putting their ideas into action. While many entrepreneurship programs focus on principles of small business management, the Diamond Challenge focuses on unleashing creativity, encouraging a mindset of abundance and self-determination, and promoting purposeful entrepreneurial action <br /> Created by University of Delaware Horn Entrepreneurship in 2012, the Diamond Challenge is backed by academic grounding in state-of-the-art entrepreneurship education methodologies. </p>
  </div>
</div>
<div className="XSTEM__possibility section__padding" id="possibility">
  
  <div className="XSTEM__possibility-content">
    <h1 className="gradient__text">The Diamond <br /> summit.</h1>
    <p>The Diamond Challenge Summit is a unique three-day conference providing students, educators, and supporters from around the world the opportunity to develop new skills while energizing their entrepreneurial spirit. Participants learn from world-class speakers, entrepreneurs, and mentors and forge lifelong connections!</p>
  </div>
  <div className="XSTEM__possibility-image">
    <img src={possibilityImage} alt="possibility" />
  </div>
</div>
    
      <Footer />
  </div>)
}
export default Diamond
