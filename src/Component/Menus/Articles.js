import React from "react";
import Blogs from "./Blogs";
import TopPosts from "./TopPosts";
import "../Style/category.css"

const Articles = () => {
  return (
    <>  
      <div className="articlesContainer">
        <Blogs />
        <TopPosts />
      </div>
    </>
  );
};

export default Articles;
