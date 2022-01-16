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
          <p><strong><Link to="/" style={{ color: '#FFF', textDecoration: 'none'}}> XSTEM </Link></strong></p>
        </div>
          <p>          <Link to="/" style={{ color: '#FFF', textDecoration: 'none'}}> Home </Link>
</p>
          <p><Link to="/about" style={{ color: '#FFF', textDecoration: 'none'}}> About </Link></p>
          <p><Link to="/work" style={{ color: '#FFF', textDecoration: 'none'}}> Work </Link></p>
          <p><Link to="/pedagogy" style={{ color: '#FFF', textDecoration: 'none'}}> Pedagogy </Link></p>
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
          <p><Link to="/work" style={{ color: '#FFF', textDecoration: 'none'}}> Work </Link></p>
          <p><Link to="/pedagogy" style={{ color: '#FFF', textDecoration: 'none'}}> Pedagogy </Link></p>
          <p><Link to="/challenges" style={{ color: '#FFF', textDecoration: 'none'}}> Challenges </Link></p>
          <p>
          <Link to="/gallery" style={{ color: '#FFF', textDecoration: 'none'}}> Gallery </Link>
          </p>
          <p>
          <Link to="/team" style={{ color: '#FFF', textDecoration: 'none'}}> Team </Link>
          </p>
          </div>
          
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
