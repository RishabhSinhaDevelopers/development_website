import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../containers/possibility/possibility.css'
import ReactPlayer from 'react-player'
import BlueOceanSponsor from '../assets/blueoceansponsors.png';

function Blueocean(){
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
    return( <div>
        <Navbar />
        <div><br/><br/><br/></div>

  <h1 className="stupid">The BlueOcean Challenge </h1>
        <div className="why">
          <p className="estupido">
          The Blue Ocean High School Entrepreneurship Competition is the most prestigious pitch competition for high school students in the world. It is a free virtual entrepreneurship competition that attracts the very best high school aged entrepreneurs from all over the world. Every year, individuals or teams pitch their innovative business concepts to experienced entrepreneurs and business-people, receive feedback on their ideas, join a community of like-minded students, and compete for thousands in cash prizes. Simply finishing in the Top 100 makes you one of the 100 best student entrepreneurs in the world.         
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=8ExRnpy4rPE&feature=emb_logo' />
        </div>

        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">How To Compete</h1>
        <div className="why">
          <p className="estupido">
          Pitches should be 3 to 5 minutes in length. If you are unsure about how to pitch or what to pitch, see the Content page on this site on how to do a pitch and also how the scoring will be done. All pitches should be submitted by February 18, 2022. We will go through 4 rounds of judging and announce the winners on April 18, 2022. We will notify all entrants on the status of their pitches as judging is completed.Video submission for this contest will be accepted beginning on Monday October 25, 2021. There is a submissions tab at the top of this website at that time.
          </p>
        </div>   
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=VI02UX9COow&feature=emb_imp_woyt' />
        </div>
        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Why Compete?</h1>
        <div className="why">
          <p className="estupido">
            The Blue Ocean Competition provides you the opportunity to compete with the best high school entrepreneur students in the world.  Your pitch will be judged by seasoned entrepreneurs and we will showcase your efforts on our YouTube channel.  Watch the video on the right to learn the basics of our competition.
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=j9sbCydhvdk&feature=emb_imp_woyt' />
        </div>
        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Student Testimonials</h1>
        <div className="why">
          <p className="estupido">
          “The Blue Ocean Pitch Competition was a fantastic platform for us to not just get validation for our idea but also learn about many new innovative products and services created by other high school students like us from all over the country. Pitching our idea seemed daunting initially but we learnt how to do it effectively. The competition was an incredible learning opportunity for aspiring entrepreneurs like us.”
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=q8wusjsSmgg&feature=emb_logo' />
        </div>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Partners</h1>

        <div className="estupido">
          <img src={BlueOceanSponsor} alt="dont worry about it" />
        </div>
        <div><br/><br/><br/></div>
        <h1 className="stupid"><a href="https://blueoceancompetition.org/">To learn more click here</a></h1>
        <Footer />
    
    
    </div>
    )
}

export default Blueocean
