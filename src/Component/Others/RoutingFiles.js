import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Menus/Home";
import PageNotFound from "../Menus/PageNotFound";
import Articles from "../Menus/Articles";
import Details from "../Menus/Details";
// import Login from "../Menus/Login";
// import Register from "../Menus/Register";
import NavBar from "./NavBar";

export default function RoutingFiles() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Articles />} />
          <Route path="/details/:title" element={<Details />} />
          <Route path="/details/:urlToImage" element={<Details />} />
          {/* <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
