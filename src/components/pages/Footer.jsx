import React from 'react';
// import logos from '../../assets/images/logo.svg';
import facebook from '../../assets/images/icon-facebook.svg'
import instagram from '../../assets/images/icon-instagram.svg'
import twitter from '../../assets/images/icon-twitter.svg'
import pinterest from '../../assets/images/icon-pinterest.svg'
import { Logosvg } from './Logosvg';


export const Footer = () => {
  return (
    <div className="footer-container">
      <Logosvg color='hsl(167, 40%, 24%)'/>
      <div className="footer-list">
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
      </div>
      <div className="footer-icons">
        <span><img src={ facebook } alt="" /></span>
        <span><img src={ instagram } alt="" /></span>
        <span><img src={ twitter } alt="" /></span>
        <span><img src={ pinterest } alt="" /></span>
      </div>
    </div>
  );
};
