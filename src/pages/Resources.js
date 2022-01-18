import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider1 from '../components/Slider1'
import Slider2 from '../components/Slider2'
import Slider3 from '../components/Slider3'
import Slider4 from '../components/Slider4'

import ReactPlayer from 'react-player'
import './gallery.css';
export const Resources=()=>{
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
    return( 
    <div>
        <Navbar />
        <div><br/><br/><br/></div>

      <h1 className="stupid">The Stagona Innovation</h1>
        <div className="why">
        <p className="estupido">The Stagona product was designed and pitched by the members of the 2019 XSTEM batch. This product was pitched in multiple national pitching challenges such as The Diamond Challenge and the WSI.  
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://www.youtube.com/watch?v=D9sL8AvNKOM' />
        </div>

        <br/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">The SwagSwap Drop</h1>
        <div className="why">
          <p className="estupido">
          The SwagSwap product was designed and pitched by the members of the 2019 XSTEM batch. This product was pitched in multiple national pitching challenges such as The Diamond Challenge and the BlueOcean.  
          </p>
        </div>   
        <div className="stupido">
            <ReactPlayer url='https://youtu.be/iXUKc4QxD3Y' />
        </div>
        <div><br/><br/><br/></div>

        <h1 className="stupid">SwagSwap in the Diamond Challenge</h1>
        <div className="why">
          <p className="estupido">
          The SwagSwap product was designed and pitched by the members of the 2019 XSTEM batch. This is the specific pitch that got this group into the Diamond Challenge finals! 
          </p>
        </div>
        <div className="stupido">
            <ReactPlayer url='https://youtu.be/AJqZCV5MTvU' />
        </div>
        <div><br/><br/><br/></div>

        
        
        <div><br/><br/><br/></div>
        <h1 className="stupid">Swift Pitch Deck</h1>
        <div className="why">
          <p className="estupido">
              Swift is an app that revolutionizes e-comemrce through a peer-to-peer B2B delivery framework. Swift seeks to provide such delivery facilities in low-icnome and underepresented communites to boost local economies. Toggle through the slide show to learn more about this exciting business!
          </p>
        </div>
        <Slider4/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">SwagSwap Pitch Deck</h1>
        <div className="why">
          <p className="estupido">
              SwagSwap is a clothing marketplace that . Toggle through the slide show to learn more about this exciting business!
          </p>
        </div>
        <Slider3/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Triton Pitch Deck</h1>
        <div className="why">
          <p className="estupido">
              Triton seeks to inspire the youth to curb plastic pollution in the world's oceans. Toggle through the slide show to learn more about this exciting business!
          </p>
        </div>
        <Slider2/>
        <div><br/><br/><br/></div>

        <h1 className="stupid">Malink Pitch Deck</h1>
        <div className="why">
          <p className="estupido">
              Malink is a platform that shields user devices from viruses and other forms of malware. Toggle through the slide show to learn more about this exciting business!
          </p>
        </div>
        <Slider1/>
        <div><br/><br/><br/></div>
 


       
        
        
        
        <Footer />
    </div>)
}

export default Resources
