import React, {Suspense} from 'react';
import { Footer, Blog, Possibility, Features, Header } from './containers';
import { CTA, Navbar } from './components';
import './App.css';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Slider =React.lazy(()=>import('./components/Slider'))
const WhatXSTEM=React.lazy(()=>import('./containers/whatXSTEM/WhatXSTEM'))

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
  <Suspense fallback={<div>Loading...</div>}><WhatXSTEM /></Suspense>
  <Features />
  <Possibility />
  <CTA />
  <Blog />
  <Suspense fallback={<div>Loading...</div>}><Slider /></Suspense>
  
  <div><br/></div>
  <Footer />
</div>)
  
  
};

export default App;
