import React, {Suspense, useState, useEffect} from 'react';
import { Footer, Blog, Possibility, Features, Header } from './containers';
import { CTA, Navbar } from './components';
import './App.css';
import { useLocation } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
const Slider =React.lazy(()=>import('./components/Slider'))
const WhatXSTEM=React.lazy(()=>import('./containers/whatXSTEM/WhatXSTEM'))

const App = () => {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1500)
  },[])
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (<div className="App">
    {
      loading ?
        <div className='Appy'>
          <RingLoader color={'#FFFFFF'} loading={loading} size={100} />
        </div>
      :
      <div>
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
      </div>


    }
    </div>
  )
  
  
};

export default App;
