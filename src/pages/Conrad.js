import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import possibilityImage from '../assets/possibility.png';
import '../containers/possibility/possibility.css'
function Conrad(){
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
    <h1 className="gradient__text">The Conrad Challenge</h1>
    <p>If you are a student between the ages of 13-18, you can become an entrepreneur and make new friends by applying science, technology and innovation to solve problems with global impact. With the Challenge’s step-by-step guidance and the support of industry experts, you’ll expand your collaboration, creativity, critical thinking and communication skills. The result? Enter college and the 21st century workforce with the skills necessary to thrive.Students, teachers, experts, colleges and sponsors all agree… the Conrad Challenge is unlike any STEM or business competition out there. Say “no thanks” to science fairs and quiz bowls… Join us to create a sustainable planet and future today. </p>
  </div>
</div>
<div className="XSTEM__possibility section__padding" id="possibility">
  
  <div className="XSTEM__possibility-content">
    <h1 className="gradient__text">Want Some  <br /> Help?.</h1>
    <p>Follow the Conrad Challenge on CanopyLAB for step-by-step instructions and additional resources to guide your Challenge experience. Through our interactive platform, teams work their way through the Challenge steps with helpful tools and resources developed to engage and complement the team’s research and work. Participants also have access to tips for brainstorming and instructional videos along with direct access to a network of educators, Conrad Challenge Alumni and industry-specific experts.</p>
  </div>
  <div className="XSTEM__possibility-image">
    <img src={possibilityImage} alt="possibility" />
  </div>
</div>
    
      <Footer />
  </div>)
}

export default Conrad
