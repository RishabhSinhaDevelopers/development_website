import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import possibilityImage from '../assets/possibility.png';
import '../containers/possibility/possibility.css'

function Nfte(){
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
    <h1 className="gradient__text">The NFTE <br /> challenges</h1>
    <p>Every fall, the Network for Teaching Entrepreneurship (NFTE) launches a new set of challenges in the NFTE World Series of Innovation (WSI). We invite you to think big and submit your ideas to advance the UN Global Goals. The best entries win cash prizes and anyone between the ages of 13 and 24 is eligible to enter.</p>
  </div>
</div>
<div className="XSTEM__possibility section__padding" id="possibility">
  
  <div className="XSTEM__possibility-content">
    <h1 className="gradient__text">About NFTE</h1>
    <p>NFTE partners with thousands of schools, youth development organizations and community groups in communities across the U.S. and abroad to offer a unique set of high-impact entrepreneurship education programs based on our innovative, experiential curriculum, which integrates lean startup tools and methodologies with project-based learning. Since our founding, we've served well over a million students.</p>
  </div>
  <div className="XSTEM__possibility-image">
    <img src={possibilityImage} alt="possibility" />
  </div>
</div>
    
      <Footer />
  </div>)
}

export default Nfte
