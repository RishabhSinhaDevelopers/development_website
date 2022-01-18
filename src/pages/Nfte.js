import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../containers/possibility/possibility.css'
import ReactPlayer from 'react-player'
import BlueOceanSponsor from '../assets/blueoceansponsors.png';

function Nfte(){
  const { pathname } = useLocation();

useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);

  return( <div>
      <Navbar />
      <div><br/><br/><br/></div>

  <h1 className="stupid">The NFTE Challenge </h1>
        <div className="why">
          <p className="estupido">
          The NFTE World Series of Innovation is a global online competition that challenges young people ages 13-24 to come up with ideas for tackling some of the biggest challenges humanity faces today. ENTRIES ARE DUE BY 11PM ET ON DECEMBER 19, 2021
          Compete solo or invite a few friends to join you and compete as a team. Teams can be affiliated with schools or youth development organizations or they can be wholly independent. Educators interested in using the World Series of Innovation in the classroom or encouraging student participation as an enrichment opportunity can access a robust toolkit with additional resources.
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=yqhrT8-1CQ8&ab_channel=NFTE' />
        </div>

        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">About NFTE</h1>
        <div className="why">
          <p className="estupido">
          NFTE partners with thousands of schools, youth development organizations and community groups in communities across the U.S. and abroad to offer a unique set of high-impact entrepreneurship education programs based on our innovative, experiential curriculum, which integrates lean startup tools and methodologies with project-based learning. Since our founding, we've served well over a million students. </p>
        </div>   
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=he8rTFQlZBA&ab_channel=NFTE' />
        </div>
        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Why Compete?</h1>
        <div className="why">
          <p className="estupido">
          The three highest-scoring entries in each category receive cash prizes. The 1st place winner receives $1500. The 2nd place winner receives $600 and the 3rd place winner receives $300.
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=BlGYJxEUe2c&ab_channel=NFTE' />
        </div>
        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Who can Compete</h1>
        <div className="why">
          <p className="estupido">
          Anyone between the ages of 13 and 24 can compete. You can also nominate any young innovators you know so they get a special invitation!
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=qHcps1T_Rcc&ab_channel=NFTE' />
        </div>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Partners</h1>

        <div className="estupido">
          <img src={BlueOceanSponsor} alt="dont worry about it, bruvskies" />
        </div>
        <div><br/><br/><br/></div>
        <h1 className="stupid"><a href="https://innovation.nfte.com/">To learn more click here</a></h1>
      <Footer />
  </div>)
}

export default Nfte
