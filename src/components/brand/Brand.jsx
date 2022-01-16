import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="XSTEM__brand section__padding">
    <div>
      <img className='img' src={google} alt="not loaded"/>
    </div>
    <div>
      <img src={slack} alt="not loaded"/>
    </div>
    <div>
      <img src={atlassian} alt="not loaded"/>
    </div>
    <div>
      <img src={dropbox} alt="not loaded"/>
    </div>
    <div>
      <img src={shopify} alt="not loaded"/>
    </div>
  </div>
);

export default Brand;
