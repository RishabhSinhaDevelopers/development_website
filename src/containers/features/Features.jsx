import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Unlimited learnings',
    text: 'We will have weekly presentations from exclusive MIT Curriculum on valuable topics such as Selecting a Problem, Branding, Mockups and User Testing, and More!',
  },
  {
    title: 'Mentorship',
    text: 'Breakout rooms where you can work with board members and ask questions.',
  },
  {
    title: 'Specialization',
    text: 'Each board memeber has something they are specialized in.',
  },
  {
    title: 'The end result',
    text: 'Create a detailed design of your product and learn how to pitch it effectively',
  },
];

const Features = () => (
  <div className="XSTEM__features section__padding" id="features">
    <div className="XSTEM__features-heading">
      <h1 className="gradient__text">The precious secrets of starup success taught for free.</h1>
      <p>Join to learn more.</p>
    </div>
    <div className="XSTEM__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
