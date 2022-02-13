import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatXSTEM.css';
import { Link } from "react-router-dom";

const WhatXSTEM = () => (
  <div className="XSTEM__whatXSTEM section__margin" id="wXSTEM">
    <div className="XSTEM__whatXSTEM-feature">
      <Feature title="What is XSTEM" text="The X-STEM club will give South Brunswick High School Students opportunities to use their creativity, collaboration, and critical thinking skills in order to create their own companies. Through this club students will gain direct access to one-on-one mentors, MIT backed curriculum, and community of like-minded driven students in order to gather research, create prototypes, and implement their business plans to create innovative products impactful to their community." />
    </div>
    <div className="XSTEM__whatXSTEM-heading">
      <h1 style={{color: '#000000' }}>The possibilities are beyond your imagination</h1>
      <p><Link to='/about' style={{color: '#000000' }}>Explore the Library</Link></p>
    </div>
    <div className="XSTEM__whatXSTEM-container">
      <Feature title="Problem-solving" text="Weekly presentations from exclusive MIT Curriculum on valuable topics such as Selecting a Problem, Branding, Mockups User Testing, and More!" />
      <Feature title="Maintanence" text="Learn how to maintain and grow the compan" />
      <Feature title="Awards" text="Pitch your business to judges to win prestigious awards" />
    </div>
    <br /><br /><br /><br /><br />
  </div>
);

export default WhatXSTEM;
