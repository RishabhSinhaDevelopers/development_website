import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Article from '../components/article/Article';
import { blog02, blog03, blog04, blog05, blog06, blog07, blog08, blog09} from '../containers/blog/imports';
import '../containers/blog/blog.css';

function Challenges() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Navbar />
      <div className="XSTEM__blog section__padding" id="blog">
    <div className="XSTEM__blog-heading">
      <h1 className="gradient__text">Here are, <br /> our challenges.</h1>
    </div>
    <div className="XSTEM__blog-container">
      {/* <div className="XSTEM__blog-container_groupA">
      <Article imgUrl={blog01} date="Jan 7, 2022" text="Diamond Challenge" />
      </div> */}
      <div className="XSTEM__blog-container_groupB">
        <Article href="/conrad" imgUrl={blog02} date="Nov 5, 2022" text="Conrad Challenge" /> 
        <Article href="/blueocean" imgUrl={blog03} date="Feb 8, 2022" text="Blue Ocean" />
        <Article href="/nfte" imgUrl={blog04} date="Dec 15, 2022" text="NFTE World Series of Innovation" />
        <Article href="/paradigm" imgUrl={blog05} date="May 1, 2022" text="Paradigm Challenge (age restriction)" />
        <Article href="/technovation" imgUrl={blog06} date="Mar 25, 2022" text="Technovation Challange (Girls Only)" />
        <Article href="/cooperhewitt" imgUrl={blog07} date="Feb 22, 2022" text="Cooper Hewitt" />
        <Article href="/diamond" imgUrl={blog08} date="Jan 17, 2022" text="Diamond Challenge" />
        <Article href="/pitchnj" imgUrl={blog09} date="Jan 1, 2022" text="Pitch NJ" />
      </div>
    </div>
  </div>
      <Footer />
    </div>
  )
}

export default Challenges
