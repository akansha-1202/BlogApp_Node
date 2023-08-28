import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Style/home.css"

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    var url = "https://firstbackendapi.onrender.com/api/category";

    // const token = localStorage.getItem("token");
    axios
      .get(
        url
        //    {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      )
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        setLoading(true);
      });
  }, []);

  if (loading) {
  return (
    <div className="mid">
      <div className="home-image-container">
        <div className="images">
          {data
            .filter((item) => {
              return item.category === "home";
            })
            .slice(1, 3)
            .map((article, index) => (
              <div id="small-image" key={index}>
                <img src={article.urlToImage} alt={article.title}></img>
              </div>
            ))}
        </div>
        {data
          .filter((item) => {
            return item.category === "home";
          })
          .slice(16, 17)
          .map((article, index) => (
            <div id="large-image" key={index}>
              <img src={article.urlToImage} alt={article.title}></img>
            </div>
          ))}
      </div>

      <div className="page-heading">
        The Latest <hr className="hr-under" />
      </div>
      <div className="latest-home">
        <br />
        {data
          .filter((item) => {
            return item.category === "home";
          })
          .slice(3, 6)
          .map((article, index) => (
            <div className="latest2" key={index}>
              <Link
                to={`/details/${encodeURIComponent(article.urlToImage)}`}
                state={article}
              >
                <img src={article.urlToImage} alt={article.title} />
              </Link>
              <div className="content">
                <Link to={`/details/${article.title}`} state={article}>
                  <p>{article.title}</p>
                </Link>
                <p className="content">{article.content}</p>
                <div className="blog-details">
                  <p className="category">{article.category}</p>
                  <p className="published">{article.publishedAt}</p>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="main-page">
        <div className="latest">
          <div className="page-heading">
            Latest Articles <hr className="hr-under" />
          </div>
          {data
            .filter((item) => {
              return item.category === "home";
            })
            .slice(6, 11)
            .map((article, index) => (
              <div className="latest1" key={index}>
                <Link
                  to={`/details/${encodeURIComponent(article.urlToImage)}`}
                  state={article}
                >
                  <img src={article.urlToImage} alt={article.title} />
                </Link>
                <div className="blog-content">
                  <Link to={`/details/${article.title}`} state={article}>
                    <p className="title">{article.title}</p>
                  </Link>
                  <p className="content">{article.content}</p>
                  <div className="blog-details">
                    <p className="category">{article.category}</p>
                    <p className="published">{article.publishedAt}</p>
                  </div>
                </div>
              </div>
            ))}
          {data
            .filter((item) => {
              return item.category === "home";
            })
            .slice(11, 12)
            .map((article, index) => (
              <div className="big-image" key={index}>
                <Link
                  to={`/details/${encodeURIComponent(article.urlToImage)}`}
                  state={article}
                >
                  <img src={article.urlToImage} alt={article.title} />
                </Link>
              </div>
            ))}
        </div>

        <div className="latest">
          <div className="home-advertisement">Advertisement</div>

          <div className="page-heading">
            Top Post <hr className="hr-under" />
          </div>

          {data
            .filter((item) => {
              return item.category === "home";
            })
            .slice(12, 13)
            .map((article, index) => (
              <div className="topPost" key={index}>
                <Link
                  to={`/details/${encodeURIComponent(article.urlToImage)}`}
                  state={article}
                >
                  <img
                    className="topPost-img"
                    src={article.urlToImage}
                    alt={article.title}
                  />
                </Link>
                <Link to={`/details/${article.title}`} state={article}>
                  <p className="title">{article.title}</p>
                </Link>
                <div className="blog-details">
                  <p className="category">{article.category}</p>
                  <p className="published">{article.publishedAt}</p>
                </div>
              </div>
            ))}

          {data
            .filter((item) => {
              return item.category === "home";
            })
            .slice(13, 16)
            .map((article, index) => (
              <div className="topPostList" key={index}>
                <Link
                  to={`/details/${encodeURIComponent(article.urlToImage)}`}
                  state={article}
                >
                  <img
                    className="topPostList-img"
                    src={article.urlToImage}
                    alt={article.title}
                  />
                </Link>

                <div className="blog-content">
                  <Link to={`/details/${article.title}`} state={article}>
                    <p className="title">{article.title}</p>
                  </Link>

                  <div className="blog-details">
                    <p className="category">{article.category}</p>
                    <p className="published">{article.publishedAt}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="page-heading">
        Latest Stories
        <hr className="hr-under" />
      </div>
      <div className="latest-home">
        <br />
        {data
          .filter((item) => {
            return item.category === "home";
          })
          .slice(16, 19)
          .map((article, index) => (
            <div className="latest2" key={index}>
              <Link
                to={`/details/${encodeURIComponent(article.urlToImage)}`}
                state={article}
              >
                <img src={article.urlToImage} alt={article.title} />
              </Link>
              <div className="content">
                <Link to={`/details/${article.title}`} state={article}>
                  <p>{article.title}</p>
                </Link>
                <p className="content">{article.content}</p>
                <div className="blog-details">
                  <p className="category">{article.category}</p>
                  <p className="published">{article.publishedAt}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
} else {
  return <h1>Loading...⭕</h1>;
}
};

export default Home;
