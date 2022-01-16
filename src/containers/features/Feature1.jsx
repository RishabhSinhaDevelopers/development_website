import React from 'react';
import './feature1.css';

const Feature1 = ({ title, text }) => (
  <div className="XSTEM__features-container__feature1">
    <div className="XSTEM__features-container__feature-title1">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="XSTEM__features-container_feature-text1">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature1;
