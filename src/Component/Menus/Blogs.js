import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import "../Style/category.css"

export default function Blogs() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(8);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  var titleString = params.category;
  titleString = titleString.toUpperCase();

  const para = params.category;

  useEffect(() => {
    var url = "https://firstbackendapi.onrender.com/api/category";

    // const token = localStorage.getItem("token");
    axios
      .get(url, 
      //   {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(true);
      });
  }, [params]);

  // const navi = useNavigate();

  // const handleImage=(d)=>{
  //   if( localStorage.getItem("token")){
  //     navi(`/Bollywood/${d.id}`, {state: d})
  //   } else{
  //     alert("Please login/signup firstp")
  //   }
  // }

  if (loading) {
    return (
      <>
        <div className="main-container">
          <h1 className="category-page-title-">{titleString}</h1>
          {data
            .filter((e) => {
              return e.category === para;
            })
            .map((article, index) => {
              if (index < count) {
                return (
                  <div className="category-article" key={index}>
                    <Link
                      to={`/details/${encodeURIComponent(article.urlToImage)}`}
                      state={article}
                    >
                      <img
                        className="category-image"
                        src={article.urlToImage}
                        alt={article.title}
                      />
                    </Link>
                    {/* About encodeURIComponent() funtion given below */}

                    <div className="category-blog-content">
                      <Link to={`/details/${article.title}`} state={article}>
                        <p className="category-title">{article.title}</p>
                      </Link>
                      <p className="category-content">{article.content}</p>
                      <div className="category-blog-details">
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
          <button
            onClick={() => {
              setCount(count + 7);
            }}
          >
            Load More
          </button>
        </div>
      </>
    );
  } else {
    return <h1>Loading...⭕</h1>;
  }
}

//the encodeURIComponent() function--> used to encode the URL parameters (article.title and article.urlToImage)
//                                     to ensure that special characters are properly handled.

//avi.atulya@prepbytes.com
