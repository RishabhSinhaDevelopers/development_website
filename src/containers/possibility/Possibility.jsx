import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="XSTEM__possibility section__padding" id="possibility">
    <div className="XSTEM__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="XSTEM__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> enless.</h1>
      <p>Students will also prepare to pitch and compete for awards in various regional and national competitions such as the conrad challenge, Diamond Challenge, UMich, Blue Ocean, Cooper Hewitt, Seton Hall, and SXSA EDU.In these competitions, students will receive feedback from well-known founders and investors nationwide. All motivated students who have entrepreneurial interests are welcome and strongly encouraged to join!</p>
    </div>
  </div>
);

export default Possibility;
