import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="XSTEM__navbar">
      <div className="XSTEM__navbar-links">
        <div className="XSTEM__navbar-links_container">
        <div className="XSTEM__navbar-links_logo">
          <p>
            <strong><Link to="/" style={{ color: '#FFF', textDecoration: 'none'}}> XSTEM </Link></strong>
          </p>
        </div>
          <p><Link to="/" style={{ color: '#FFF', textDecoration: 'none'}}> Home </Link></p>
          <p><Link to="/about" style={{ color: '#FFF', textDecoration: 'none'}}> About </Link></p>
          <p><Link to="/challenges" style={{ color: '#FFF', textDecoration: 'none'}}> Challenges </Link></p>
          <p>
          <Link to="/gallery" style={{ color: '#FFF', textDecoration: 'none'}}> Gallery </Link>
          </p>
          <p>
          <Link to="/team" style={{ color: '#FFF', textDecoration: 'none'}}> Team </Link>
          </p>
          <p>
          <Link to="/resources" style={{ color: '#FFF', textDecoration: 'none'}}> Resources </Link>
          </p>
          <p>
          <Link to="/requirements" style={{ color: '#FFF', textDecoration: 'none'}}> Requirements </Link>
          </p>
          <p>
          <Link to="/contact" style={{ color: '#FFF', textDecoration: 'none'}}> Contact </Link>
          </p>
        </div>
      </div>
      <div className="XSTEM__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="XSTEM__navbar-menu_container scale-up-center">
          <div className="XSTEM__navbar-menu_container-links">
          <p> <Link to="/" style={{ color: '#FFF'}}> Home </Link></p>
          <p><Link to="/about" style={{ color: '#FFF', textDecoration: 'none'}}> About </Link></p>
          <p><Link to="/challenges" style={{ color: '#FFF', textDecoration: 'none'}}> Challenges </Link></p>
          <p>
          <Link to="/gallery" style={{ color: '#FFF', textDecoration: 'none'}}> Gallery </Link>
          </p>
          <p>
          <Link to="/team" style={{ color: '#FFF', textDecoration: 'none'}}> Team </Link>
          </p>
          <p>
          <Link to="/resources" style={{ color: '#FFF', textDecoration: 'none'}}> Resources </Link>
          </p>
          <p>
          <Link to="/requirements" style={{ color: '#FFF', textDecoration: 'none'}}> Requirements </Link>
          </p>
          <p>
          <Link to="/contact" style={{ color: '#FFF', textDecoration: 'none'}}> Contact </Link>
          </p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <a href="https://register.capturepoint.com/reg/login.cfm?cuBIB%2F%2FClZwtomy3Erh3n%2B7brRVPXoxk9V2eh8RP2faSwM5QkImp%2FfA%3D">
            <button type="button">Pay Dues</button></a>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
