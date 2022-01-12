import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import { Link } from "react-router-dom";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is XSTEM" text="The X-STEM club will give South Brunswick High School Students opportunities to use their creativity, collaboration, and critical thinking skills in order to create their own companies. Through this club students will gain direct access to one-on-one mentors, MIT backed curriculum, and community of like-minded driven students in order to gather research, create prototypes, and implement their business plans to create innovative products impactful to their community." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p><Link to='/about' style={{color: '#e87', textDecoration: 'none'}}>Explore the Library</Link></p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Problem-solving" text="Weekly presentations from exclusive MIT Curriculum on valuable topics such as Selecting a Problem, Branding, Mockups User Testing, and More!" />
      <Feature title="Maintanence" text="Learn how to maintain and grow the compan" />
      <Feature title="Awards" text="Pitch your business to judges to win prestigious awards" />
    </div>
  </div>
);

export default WhatGPT3;
