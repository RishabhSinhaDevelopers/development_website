import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import possibilityImage from '../assets/possibility.png';
import '../containers/possibility/possibility.css'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Technovation() {
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
      <h1 className="gradient__text"> What is <br /> Technovation Girl Summit?</h1>
      <p>Technovation’s World Summit is where girls, technology, entrepreneurship, and social good intersect. Join us online on August 12-13, 2021 for a global celebration of girls changing the world with tech.<br /> - Connect with the global Technovation community <br /> - Watch students pitch their tech ideas live <br /> - Join technology workshops, career panels, and hear from inspiring speakers <br /> Support young people ready to solve the world’s most pressing problems </p>
    </div>
  </div>
  <div className="XSTEM__possibility section__padding" id="possibility">
    
    <div className="XSTEM__possibility-content">
      <h1 className="gradient__text">Help us Celebrate 15 Years of <br /> empowering girls in STEM </h1>
      <p>Over the past 15 years, Technovation has empowered~300,000 young people to develop coding skills so they can solve real-world problems like poverty, climate change, and access to education. <br /> <br /> But we need your help to make sure we can spend the next 15 years supporting even more girls to become leaders and innovators.</p>
    </div>
    <div className="XSTEM__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
  </div>
      
        <Footer />
    </div>)
}
export default Technovation
