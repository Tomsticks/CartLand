import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Body from "../components/usersComponent/Accounts";
import Footer from "../components/footer";
export default function page() {
  return (
    <div>
      <div>
        <Header />
        <Nav />
        <div className="  ">
          <Body />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}
