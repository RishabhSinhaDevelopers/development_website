import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import '../containers/possibility/possibility.css'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from 'react-player'
import BlueOceanSponsor from '../assets/blueoceansponsors.png';


function Technovation() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
    return( <div>
        <Navbar />
        <div><br/><br/><br/></div>

        <h1 className="stupid">The Technovation Challenge </h1>
        <div className="why">
          <p className="estupido">
          Technovation’s World Summit is where girls, technology, entrepreneurship, and social good intersect. Join us online on August 12-13, 2021 for a global celebration of girls changing the world with tech.<br /> - Connect with the global Technovation community <br /> - Watch students pitch their tech ideas live <br /> - Join technology workshops, career panels, and hear from inspiring speakers <br /> Support young people ready to solve the world’s most pressing problems
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=IxkvdrGvAh4&ab_channel=Technovation' />
        </div>

        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">The Effect.</h1>
        <div className="why">
          <p className="estupido">
          Over the past 15 years, Technovation has empowered~300,000 young people to develop coding skills so they can solve real-world problems like poverty, climate change, and access to education. <br /> <br /> But we need your help to make sure we can spend the next 15 years supporting even more girls to become leaders and innovators
          </p>
        </div>   
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=6aH-gi0FOmg&ab_channel=Iridescent%2CnowTechnovation' />
        </div>
        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Technology is saving the world.</h1>
        <div className="why">
          <p className="estupido">
          Support for Alzheimers' patients, domestic violence, climate change, the impact of COVID-19 — these are just a few  problems 1,700 Technovation Girls teams around the world tackled in 2021.
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=rsIYkfgfnaI&ab_channel=Iridescent%2CnowTechnovation' />
        </div>
        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">You Can Join Them!</h1>
        <div className="why">
          <p className="estupido">
          Our global community of students, mentors, ambassadors, parents and judges are curious, creative, and determined to change the world using technology. Most join with no previous tech experience.Learn how to code a mobile app that solves a problem you care about – or support a team that does. 
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=l4JM0BNqsww&ab_channel=Iridescent%2CnowTechnovation' />
        </div>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Partners</h1>

        <div className="estupido">
          <img src={BlueOceanSponsor} alt="dont worry about it" />
        </div>
        <div><br/><br/><br/></div>
        <h1 className="stupid"><a href="https://www.technovation.org/">To learn more click here</a></h1>
        <Footer />
    </div>)
}
export default Technovation
