"use client";
import React from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Services from "./components/service";
import Footer from "./components/footer";
import Topranking from "./components/Topranking";
import NewArrivals from "./components/NewArrivals";
import FloorMenu from "./components/FloorMenu";
import Sidebar from "./components/Sidebar";

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
