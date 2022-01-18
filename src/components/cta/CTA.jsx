import React from 'react';
import './cta.css';
import { Link } from "react-router-dom";

const CTA = () => (
  <div className="XSTEM__cta">
  <Link to="/challenges" style={{ color: '#000', textDecoration: 'none'}}>
    <div className="XSTEM__cta-content">
        <h3>Start at the Beginning of Next Year and Explore Your Possibilities.</h3>
      </div>
      <div className="XSTEM__cta-btn">
      </div>
  </Link>
  </div>
);

export default CTA;
