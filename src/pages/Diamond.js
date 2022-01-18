import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../containers/possibility/possibility.css'
import ReactPlayer from 'react-player'
import BlueOceanSponsor from '../assets/blueoceansponsors.png';

function Diamond(){
  const { pathname } = useLocation();

useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);

  return( <div>
      <Navbar />
      <div><br/><br/><br/></div>

      <h1 className="stupid">The Diamond challenge</h1>
        <div className="why">
        <p className="estupido">
        The Diamond Challenge provides a unique opportunity for teens to learn about entrepreneurship while putting their ideas into action. While many entrepreneurship programs focus on principles of small business management, the Diamond Challenge focuses on unleashing creativity, encouraging a mindset of abundance and self-determination, and promoting purposeful entrepreneurial action.

Created by University of Delaware Horn Entrepreneurship in 2012, the Diamond Challenge is backed by academic grounding in state-of-the-art entrepreneurship education methodologies.   
          </p>
      </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=0fnoS8PBV9c&ab_channel=SergeRichardPETIT-FRERE' />
        </div>

        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">The Prizes!</h1>
        <div className="why">
           <p className="estupido">
          Imagine winning a 4-day/3-night trip to Los Angeles with your parent to enjoy the beach, experience Disneyland, and star in a video shown around the world. Then dress like a star and your limo will take you to a red carpet event to collect your prize.<br /> All it takes is one idea. Use your creativity to win up to $100,000 and change the world. The students who submit the top idea in each age division (4-8, 9-13, and 14-18) will attend the Ceremony and compete for The Paradigm Challenge Prize!
          The Diamond Challenge Summit is a unique three-day conference providing students, educators, and supporters from around the world the opportunity to develop new skills while energizing their entrepreneurial spirit. Participants learn from world-class speakers, entrepreneurs, and mentors and forge lifelong connections!   </p>     </div>   
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=YEwhHdSXX6Q&ab_channel=IsabellaLiu ' />
        </div>
       <div><br/><br/><br/></div>

        <h1 className="stupid">How does the Paradigm Challenge Adress Student Privacy</h1>
        <div className="why">
        <p className="estupido">
          Participants in The Paradigm Challenge are not asked to provide any identifying information (such as last name, day of birth, or address), unless their parents/guardians have provided written consent for the submission of such information. Emails to participants under age 13 will be sent to the parent/guardian email address provided during registration.
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=TWwzU0X1nno&ab_channel=UniversityofDelaware' />
        </div>
   <div><br/><br/><br/></div>

        <h1 className="stupid">How Will Winners Be Selected?</h1>
        <div className="why">
          <p className="estupido">
          Project Paradigm will select no less than 100 entries as Paradigm Challenge Finalists. Finalists will be selected throughout the current Challenge as entries are submitted. A blue-ribbon panel of judges will evaluate Finalist entries based on effectiveness, feasibility, originality, presentation, and collaboration to determine the First, Second, Third, and Grand Prize winners.
          The Diamond Challenge Team is honored to present this year's topical prize awards. Established in 2019, topical prize awards recognize Diamond Challenge semifinalist teams that have shown significant promise and excellence in a particular field of entrepreneurial capacity. All topical prize awards are sponsored by innovative companies investing in the next generation.  </p>       </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=_UN94IBtJlA&ab_channel=SpondooliOfficial' />
        </div>
<div><br/><br/><br/></div>

<h1 className="stupid">Partners</h1>

<div className="estupido">
  <img src={BlueOceanSponsor} alt="dont worry about it" />
</div>
<div><br/><br/><br/></div>
<h1 className="stupid"><a href="https://diamondchallenge.org//">To learn more click here</a></h1>
      <Footer />
  </div>)
}
export default Diamond
