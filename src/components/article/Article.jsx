import React from 'react';
import './article.css';
import { Link } from "react-router-dom";
const Article = ({ imgUrl, date, text, href }) => (
  <div>
    <Link to={href}>
    <div className="XSTEM__blog-container_article">
      <div className="XSTEM__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="XSTEM__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
      </div>
    </div>
    </Link>
  </div>
    
);

export default Article;
