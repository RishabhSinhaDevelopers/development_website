import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import possibilityImage from '../assets/img25.jpg';
import possibilityImage1 from '../assets/img26.jpg';
import '../containers/possibility/possibility.css'
function Blueocean(){
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
      <h1 className="gradient__text">The Blue Ocean High School<br /> Entrepreneurship Challenge.</h1>
      <p>The Blue Ocean High School Entrepreneurship Competition is the most prestigious pitch competition for high school students in the world. It is a free virtual entrepreneurship competition that attracts the very best high school aged entrepreneurs from all over the world. Every year, individuals or teams pitch their innovative business concepts to experienced entrepreneurs and business-people, receive feedback on their ideas, join a community of like-minded students, and compete for thousands in cash prizes. Simply finishing in the Top 100 makes you one of the 100 best student entrepreneurs in the world.

</p>
    </div>
  </div>
  <div className="XSTEM__possibility section__padding" id="possibility">
    
    <div className="XSTEM__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> enless.</h1>
      <p>Students will also prepare to pitch and compete for awards in various regional and national competitions such as the conrad challenge, Diamond Challenge, UMich, Blue Ocean, Cooper Hewitt, Seton Hall, and SXSA EDU.In these competitions, students will receive feedback from well-known founders and investors nationwide. All motivated students who have entrepreneurial interests are welcome and strongly encouraged to join!</p>
    </div>
    <div className="XSTEM__possibility-image">
      <img src={possibilityImage1} alt="possibility" />
    </div>
  </div>

        <Footer />
    
    
    </div>
    )
}

export default Blueocean
