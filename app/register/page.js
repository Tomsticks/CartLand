"use client";
import React from "react";
import Header from "../components/mainComponent/header";
import Nav from "../components/mainComponent/nav";
import Body from "../components/authcomponent/RegisterComponent";
import Footer from "../components/mainComponent/footer";
import FloorMenu from "../components/mainComponent/FloorMenu";
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
      <FloorMenu />
    </div>
  );
}
