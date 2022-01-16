import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import possibilityImage from '../assets/possibility.png';
import '../containers/possibility/possibility.css'

function Cooperhewitt(){
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
    <h1 className="gradient__text">The Copper Hewwitt <br /> chalange.</h1>
    <p>Design an outdoor chair inspired by Cooper Hewitt’s world-renowned collection that will be functional, comfortable, and unexpected. The winning design will be manufactured by Target for exclusive use in Cooper Hewitt, Smithsonian Design Museum’s Arthur Ross Terrace and Garden. Cooper Hewitt is located in New York City in the historic Carnegie Mansion. The enclosed garden was an original feature of the mansion and is directly across the street from New York’s famed Central Park.</p>
  </div>
</div>
<div className="XSTEM__possibility section__padding" id="possibility">
  
  <div className="XSTEM__possibility-content">
    <h1 className="gradient__text"> Awards and<br /> Prizes!</h1>
    <p>Cooper Hewitt will feature the designs of five finalists and four regional honorable mentions in a special online exhibition celebrating the creativity of promising young designers.
Target will produce a limited edition of seven of the winning chair design. Five of the chairs will be installed for exclusive use in Cooper Hewitt’s Arthur Ross Terrace and Garden. The winning designer will receive the other two chairs for his or her personal use.</p>
  </div>
  <div className="XSTEM__possibility-image">
    <img src={possibilityImage} alt="possibility" />
  </div>t
</div>
    
      <Footer />
  </div>)
}
       


export default Cooperhewitt
