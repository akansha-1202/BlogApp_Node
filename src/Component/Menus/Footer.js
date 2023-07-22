import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import avatar2 from "./avatar2.png";
import axios from "axios";

export default function Footer() {
  const [data, setData] = useState([]);

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
        console.log(response.data);
        setData(response.data);
        // setLoading(true);
      });
  }, []);

  return (
    <div className="boxes">
      <p>Related Posts</p>
      <div className="latest-home">
        {data
          .filter((item) => {
            return item.category === "home";
          })
          .slice(14, 17)
          .map((article, index) => {
            return (
              <>
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
                  <div className="av">
                    <Avatar src={avatar2} className="" />
                    <div className="avatar-cont">
                      {/* <p>WRITTEN BY:</p> */}
                      <p>Akansha Verma</p>
                      <p style={{ fontWeight: "100", color: "gray" }}>
                        {article.publishedAt}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

// import React from "react";
// import "../Style/footer.css"

// const Footer = () => {
//   return (
//     <div className="TheMainFooter">
//       <div className="theFWidth">

// <div className="FGridCont">

//       <div className="FSecCon">
//       <div className="fLogo">
//         <div className="theFProp"><div>
//         <h1 className="theFooterLogoPar">
//           <span className="verticleT">The</span> Siren
//         </h1>
//       </div></div>
//       </div>
//       <div className="FmiddleCon">
//         <div className="FmiddleSubCon">
//           <div className="FDescription">
//             An All in one blog, bringing you the best of entertainment, knowledge
//             and inspiration.
//           </div>
//           <div className="FCopywrite">
//             <span>©</span>2023.The Siren. All Rights reserved
//           </div>
//         </div>
//       </div>
//       </div>

//       <div className="Fcontact">
//         <h3>Contact</h3>
//         <div>
//           <span className="LocEmoji">📍</span> 101, Indiranagar, Bangalore.
//         </div>
//         <div>
//           <span className="PhoneEmoji">📞</span> +91 8080 1818
//         </div>
//         <div className="lastFText">
//           <pre><span className="MailEmoji">✉ </span>  support@thesiren.com</pre>
//         </div>
//       </div>

//       <div className="FRefernce">
//         <h3 className="TheFReferences">References</h3>
//         <div className="TheFBollywood"><a className="Flinks" href="https://www.bollywoodhungama.com/movies/top-100-movies/">Bollywood</a></div>
//         <div className="TheFHollywood"><a className="Flinks" href="https://www.themoviedb.org/movie">Hollywood</a></div>
//         <div className="TheFTechnology"><a className="Flinks" href="https://www.cnet.com/news/">Technology</a></div>
//         <div className="TheFFitness"><a className="Flinks" href="https://www.precisionnutrition.com/blog">Fitness</a></div>
//         <div className="TheFFood"><a className="Flinks" href="https://pinchofyum.com/blog">Food</a></div>
//       </div>
//       </div>
// </div>
//     </div>
//   );
// };

// export default Footer;
