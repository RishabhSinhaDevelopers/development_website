import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer'
import '../containers/possibility/possibility.css';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactComponent from '../components/contactComponent/ContactComponent'
function Competitions (){
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return(
    <div>
      
  <Navbar />
    <ContactComponent />
<Footer />
</div>
  )
  
}
  
 


export default Competitions
