import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../containers/possibility/possibility.css'
import ReactPlayer from 'react-player'
import BlueOceanSponsor from '../assets/blueoceansponsors.png';

function Pitchnj(){
  const { pathname } = useLocation();

useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);

  return( <div>
      <Navbar />
      <div><br/><br/><br/></div>

      <h1 className="stupid">The Pitch NJ Competition</h1>
      <div className="why">
          <p className="estupido">
          Pitch New Jersey is an entrepreneurship competition where students create a lean canvas for an idea or entrepreneurial venture and get chosen to pitch live in front of industry professionals, venture capitalists, and local entrepreneurs for a chance to win up to $1,500! There are two stages to this competition, with the first being an application and the second being a live pitch at Farleigh Dickinson University
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=gAU9de7SL38&ab_channel=BusinessBootCamp' />
        </div>

        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Why Pitch NJ</h1>
        <div className="why">
          <p className="estupido">
          Our goal is to create passion for entrepreneurship throughout New Jersey, and give high school students a chance to express their ideas and innovate. Through this event, not only are young entrepreneurs able to do just that, but they can also network with industry professionals to gain experience from them, learn about public speaking and other necessary skills required for entrepreneurship, and be part of a lifelong community of other entrepreneurs
          </p>
        </div>   
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=4A0Yos8vzSM&ab_channel=BusinessBootCamp' />
        </div>
        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Applying for Pitch NJ</h1>
        <div className="why">
          <p className="estupido">
            The PitchNJ Application consists of a Google Form with questions about your business, such as the marketing plan, target market, and what problem you are solving. In addition to this Google Form, applicants must submit a lean canvas, which is a condensed version of a business plan. Although this may sound daunting, since you might not be aware of what a lean canvas is, we hold a seminar discussing what it is in order to guide applicants through this process. The application is open until January 31, 2022.
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=d6kR1Wq1njg&ab_channel=BusinessBootCamp' />
        </div>
        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">The Live Pitch</h1>
        <div className="why">
          <p className="estupido">
          The Live Pitch will occur at Farleigh Dickinson University on March 1, 2022. Ten finalists are selected out of the application process to come to FDU and pitch on that day in front of industry professionals and entrepreneurs. Students here have a chance to network and speak to professionals who have already embarked on their upcoming journey. This pitch can be daunting as well, especially to students who have never given a live presentation in front of an extensive audience, but we also hold a public speaking seminar to make students more comfortable.
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=1zXFEXuP0SU&ab_channel=BusinessBootCamp' />
        </div>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Partners</h1>

        <div className="estupido">
          <img src={BlueOceanSponsor} alt="dont worry about it" />
        </div>
        <div><br/><br/><br/></div>
        <h1 className="stupid"><a href="https://www.businessbootcamp101.org/">To learn more click here</a></h1>
      <Footer />
  </div>)
}

export default Pitchnj
