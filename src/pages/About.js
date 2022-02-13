import React from 'react'
import Feature from '../containers/whatXSTEM/WhatXSTEM';
import '../containers/features/features.css';
import '../containers/whatXSTEM/whatXSTEM.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';


function About() {

  
    return (
       <div>
           <Navbar />
           <Feature />
           <Footer />
       </div>
        
    )
}

export default About
