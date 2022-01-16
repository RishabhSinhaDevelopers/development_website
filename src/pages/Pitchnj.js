import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import possibilityImage from '../assets/possibility.png';
import '../containers/possibility/possibility.css'

function Pitchnj(){
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
    <h1 className="gradient__text"> What is  <br /> Pitch NJ</h1>
    <p>Pitch New Jersey is an entrepreneurship competition where students create a lean canvas for an idea or entrepreneurial venture and get chosen to pitch live in front of industry professionals, venture capitalists, and local entrepreneurs for a chance to win up to $1,500! There are two stages to this competition, with the first being an application and the second being a live pitch at Farleigh Dickinson University. </p>
  </div>
</div>
<div className="XSTEM__possibility section__padding" id="possibility">
  
  <div className="XSTEM__possibility-content">
    <h1 className="gradient__text">Why <br /> Pitch NJ?</h1>
    <p>Our goal is to create passion for entrepreneurship throughout New Jersey, and give high school students a chance to express their ideas and innovate. Through this event, not only are young entrepreneurs able to do just that, but they can also network with industry professionals to gain experience from them, learn about public speaking and other necessary skills required for entrepreneurship, and be part of a lifelong community of other entrepreneurs.</p>
  </div>
  <div className="XSTEM__possibility-image">
    <img src={possibilityImage} alt="possibility" />
  </div>
</div>
    
      <Footer />
  </div>)
}

export default Pitchnj
