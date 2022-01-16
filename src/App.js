import React from 'react';
import { Footer, Blog, Possibility, Features, WhatXSTEM, Header } from './containers';
import { CTA, Navbar } from './components';
import './App.css';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider from './components/Slider'


const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (<div className="App">
  <div className="gradient__bg">
    <Navbar />
    <Header />
  </div>
  <WhatXSTEM />
  <Features />
  <Possibility />
  <CTA />
  <Blog />
  <Slider />
  <div><br/></div>
  <Footer />
</div>)
  
  
};

export default App;
