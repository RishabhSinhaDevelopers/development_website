import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../containers/possibility/possibility.css'
import ReactPlayer from 'react-player'
import BlueOceanSponsor from '../assets/blueoceansponsors.png';

function Cooperhewitt(){
  const { pathname } = useLocation();

useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);

  return( <div>
      <Navbar />
      <div><br/><br/><br/></div>

      <h1 className="stupid">The Cooper Hewitt challenge</h1>
        <div className="why">
        <p className="estupido">Cooper Hewitt, Smithsonian Design Museum launched the National High School Design Competition in 2016. Every year, students around the country are challenged to design a solution to a unique scenario, inspired by Cooper Hewitt’s rich collection and stimulating exhibitions.
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=tsiKV--q_4I' />
        </div>

        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Previous Winners: ADITI JHA, NIDHI MALPANI, AND YASMINA MURADOVA</h1>
        <div className="why">
          <p className="estupido">
          Aditi, Nidhi, and Yasmina entered the competition as eleventh grade students at duPont Manual High School in Louisville, KY, Westwood High School in Austin, TX, and The Gatton Academy in Bowling Green, KY. Their project, Aegle, plays on people’s empathy and natural inclination to help others by encouraging self-care through a physical-mechanical plant and an app that responds to an individual’s well-being
          </p>
        </div>   
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=Nlq_JwJPEVg' />
        </div>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Previous Winners: PRIYA AGARWAL AND ANIKA AGNIHOTRI</h1>
        <div className="why">
          <p className="estupido">
          Priya and Anika entered the competition as eleventh grade students at the Academy for Mathematics, Science, and Engineering in Rockaway, NJ. They created Storily, a design that allows users to turn their family into storybook characters and insert them into riveting and educational picture books that reflect different cultures and experiences. 
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=CF10ikhx730' />
        </div>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Previous Winners: DANIELA CONTRERAS AND LUCAS DUNOYER</h1>
        <div className="why">
          <p className="estupido">
          Daniela and Lucas entered the competition as twelfth graders from Miami, FL. They created Sound Gardens, a solution to sound pollution in urban areas that suppresses stressful city sounds, improves life quality, and provides a safer habitat for people as well as wildlife surrounding the city. Their design is inspired by the sounds of wind in nature passing through foliage and by rattle seeds
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=ZaoEXrpGmB0' />
        </div>
<div><br/><br/><br/></div>

<h1 className="stupid">Partners</h1>

<div className="estupido">
  <img src={BlueOceanSponsor} alt="dont worry about it" />
</div>
<div><br/><br/><br/></div>
<h1 className="stupid"><a href="https://www.cooperhewitt.org/education/student-design-challenge/">To learn more click here</a></h1>
      <Footer />
  </div>)
}
       


export default Cooperhewitt
