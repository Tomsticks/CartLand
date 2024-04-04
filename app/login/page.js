"use client";
import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Body from "../components/authcomponent/LoginBody";
import Footer from "../components/footer";

export default function page() {
  return (
    <div>
      <div className="sm:hidden ">
        <Header />
      </div>
      <div className="sm:hidden ">
        <Nav />
      </div>
      <div className=" flex justify-center items-center my-10 ">
        <Body />
      </div>
      <div className="sm:hidden">
        <Footer />
      </div>
    </div>
  );
}
