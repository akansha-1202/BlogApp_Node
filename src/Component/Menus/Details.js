import React from "react";
import { useLocation } from "react-router-dom";
import { FaFacebook, FaYoutube, FaCamera, FaTwitter } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import avatar2 from "./avatar2.png";
// import Head from './Head';
import Footer from "./Footer";
import "../Style/details.css";

const Details = () => {
  const article = useLocation().state;
  // console.log("useLocation : ", article);

  return (
    <div>
      {/* <Head/> */}
      <div className="detail-container">
        <h1 className="detail-title">{article.title}</h1>
        <div className="avatar">
          <div className="avatar-content">
            <Avatar alt="avatar" src={avatar2} sx={{ width: 70, height: 70 }} />
            <div className="avatar-cont">
              <p>Akansha Verma</p>
              <p style={{ fontWeight: "100", color: "gray" }}>
                {article.publishedAt}
              </p>
            </div>
          </div>
          <div className="icons">
            <FaFacebook size={16} />
            <FaYoutube size={16} />
            <FaCamera size={16} />
            <FaTwitter size={16} />
          </div>
        </div>

        <img
          className="detail-image"
          src={article.urlToImage}
          alt={article.title}
        />
        <p className="detail-content">{article.description}</p>

        <div className="avatar">
          <div className="avatar-content">
            <Avatar alt="avatar" src={avatar2} sx={{ width: 70, height: 70 }} />
            <div className="avatar-cont">
              {/* <p>WRITTEN BY:</p> */}
              <p>Akansha Verma</p>
              <p style={{ fontWeight: "100", color: "gray" }}>
                {article.publishedAt}
              </p>
            </div>
          </div>
          <div className="icons">
            <FaFacebook size={16} />
            <FaYoutube size={16} />
            <FaCamera size={16} />
            <FaTwitter size={16} />
          </div>
        </div>
      </div>
      <div className="footer">
        <h4>More From the Siren</h4>
        <hr />
        <Footer />
      </div>
    </div>
  );
};

export default Details;

//for icons in react -->  npm install react-icons --save
