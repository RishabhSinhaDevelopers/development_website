import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../containers/possibility/possibility.css'
import ReactPlayer from 'react-player'
import ConradSponsors from '../assets/conradsponsors.png';

function Conrad(){
  const { pathname } = useLocation();

useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);

  return( <div>
      <Navbar />
      <div><br/><br/><br/></div>

        <h1 className="stupid">The Conrad Challenge</h1>
        <div className="why">
          <p className="estupido">
          If you are a student between the ages of 13-18, you can become an entrepreneur and make new friends by applying science, technology and innovation to solve problems with global impact. With the Challenge’s step-by-step guidance and the support of industry experts, you’ll expand your collaboration, creativity, critical thinking and communication skills. The result? Enter college and the 21st century workforce with the skills necessary to thrive.Students, teachers, experts, colleges and sponsors all agree… the Conrad Challenge is unlike any STEM or business competition out there. Say “no thanks” to science fairs and quiz bowls… Join us to create a sustainable planet and future today.           
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=d8m8kliSXww&feature=emb_logo' />
        </div>

        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">No Box Tool Box.</h1>
        <div className="why">
          <p className="estupido">
           TEAM REGISTERED? READY TO HIT THE GROUND RUNNING, BUT DON'T KNOW WHERE TO START?  
           We are here to help! The Conrad Design Method® (CDM) is a structured, collaboration framework for teachers and student teams to understand and accomplish innovative and entrepreneurial solutions. CDM was inspired by Google Ventures Design Sprint. Step by step, teams will identify and understand a problem, sketch solutions, prototype and validate. The Conrad Foundation strongly encourages teams to utilize this resource during the competition. 
          </p>
        </div>   
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=UGoTAz5vk58' />
        </div>
        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Need Some Guidance?</h1>
        <div className="why">
          <p className="estupido">
            Follow the Conrad Challenge on CanopyLAB for step-by-step instructions and additional resources to guide your Challenge experience. Through our interactive platform, teams work their way through the Challenge steps with helpful tools and resources developed to engage and complement the team’s research and work. Participants also have access to tips for brainstorming and instructional videos along with direct access to a network of educators, Conrad Challenge Alumni Network and industry-specific experts.
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=Gr9r4vPYwqc' />
        </div>
        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Documentary Series</h1>
        <div className="why">
          <p className="estupido">
          Conrad Alumni are past Conrad participants and young professionals who hold a diverse set of specialties across a variety of industries. The backgrounds of Conrad Alumni members include not only successful entrepreneurs and founders but also product managers, designers and consultants. The Alumni Council is a unique group of previous Finalists in the Conrad Challenge who have a passion for no-box thinking and are eager to propagate the culture of innovation following Summit. 
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=M7lLqleu2ao' />
        </div>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Partners</h1>

        <div className="estupido">
          <img src={ConradSponsors} alt="dont worry about it" />
        </div>
        <h1 className="stupid"><a href="https://www.conradchallenge.org/">To Learn More Click Here</a></h1>
  <Footer />
  </div>)
}

export default Conrad
