import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../Style/category.css"


export default function TopPosts() {
  const [data, setData] = useState(); //-->data from API
  const [loading, setLoading] = useState(false);
  const [count1] = useState(1);
  const [count2] = useState(3);

  const params = useParams();
  var titleString = params.category;
  titleString = titleString.toUpperCase();
  const para = params.category;

  useEffect(() => {
    var url = "https://firstbackendapi.onrender.com/api/category";
    
    // const token = localStorage.getItem("token");
    axios
      .get(
        url,
        //   {
        //   headers:{
        //     Authorization : `Bearer ${token}`
        //   }
        // }
      ).then((response) => {
      setData(response.data);
      setLoading(true);
    });
  }, [params]);

  if (loading) {
    return (
      <div class="main-container">
        <h1 className="topPosts">Top Posts</h1>
        {data
            .filter((e) => {
              return e.category === para;
            }).slice(18, 28).map((article, index) => {
          // console.log(count, index);

          if (index < count1) {
            return (
              <>
                <div className="article2" key={index}>
                  <Link
                    to={`/details/${encodeURIComponent(article.urlToImage)}`}
                    state={article}
                  >
                    <img
                      className="img2"
                      src={article.urlToImage}
                      alt={article.title}
                    />
                  </Link>
                  <Link to={`/details/${article.title}`} state={article}>
                    <p className="title">{article.title}</p>
                  </Link>
                  <div className="blog-details">
                    <p className="category">{titleString}</p>
                    <p className="published">{article.publishedAt}</p>
                  </div>
                </div>
              </>
            );
          } else if (index <= count2) {
            return (
              <div className="article3" key={index}>
                <Link
                  to={`/details/${encodeURIComponent(article.urlToImage)}`}
                  state={article}
                >
                  <img
                    className="img3"
                    src={article.urlToImage}
                    alt={article.title}
                  />
                </Link>

                <div className="blog-content">
                  <Link to={`/details/${article.title}`} state={article}>
                    <p className="title">{article.title}</p>
                  </Link>

                  <div className="blog-details">
                    <p className="category">{titleString}</p>
                    <p className="published">{article.publishedAt}</p>
                  </div>
                </div>
              </div>
            );
          } else {
            return null; // Add this default return statement
          }
        })}
        <div className="advertistment">
          <h4>Advertistment</h4>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...⭕</h1>;
  }
}

//the encodeURIComponent() function--> used to encode the URL parameters (article.title and article.urlToImage)
//                                     to ensure that special characters are properly handled.
