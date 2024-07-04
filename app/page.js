"use client";
import React from "react";
import Header from "./components/mainComponent/header";
import Nav from "./components/mainComponent/nav";
import Hero from "./components/mainComponent/hero";
import Services from "./components/mainComponent/service";
import Footer from "./components/mainComponent/footer";
import Topranking from "./components/mainComponent/Topranking";
import NewArrivals from "./components/mainComponent/NewArrivals";
import FloorMenu from "./components/mainComponent/FloorMenu";
import Sidebar from "./components/mainComponent/Sidebar";

export default function page() {
  return (
    <div className=" overflow-hidden ">
      <Sidebar />
      <Header />
      <Nav />
      <Hero />
      <Services />
      <Topranking />
      <NewArrivals />
      <Footer />
      <FloorMenu />
    </div>
  );
}
