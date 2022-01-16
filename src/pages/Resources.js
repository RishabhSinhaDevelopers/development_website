import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider from '../components/Slider'
import ReactPlayer from 'react-player'
import './gallery.css';
export const Resources=()=>{
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
    return( <div>
        <Navbar />
        <h1 className="gradient__text"> <a href='https://blueoceancompetition.org/'>Conrad</a></h1>
        <h1 className="gradient__text"> <a href='https://blueoceancompetition.org/'>Blue Ocean</a></h1>
        <Slider />
        <div><br/><br/></div>
        <div className="whatever">
          <ReactPlayer url='https://www.youtube.com/watch?v=iXUKc4QxD3Y' />
          <ReactPlayer url='https://www.youtube.com/watch?v=AJqZCV5MTvU'/>
          <ReactPlayer url='https://www.youtube.com/watch?v=D9sL8AvNKOM' />
        </div>
        
        <Footer />
    </div>)
}

export default Resources
