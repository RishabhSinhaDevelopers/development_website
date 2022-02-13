import React from 'react';
import About from './About';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function Aboutcompiler() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    return (
        <div>
            <About />
        </div>
    )
}

export default Aboutcompiler
