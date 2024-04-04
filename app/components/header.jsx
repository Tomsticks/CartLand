import React from "react";
import Link from "next/link";

import "../../css/component.css";
export default function header() {
  return (
    <div className=" sizer lg:hidden ">
      <div className="bg-white py-5">
        {/* The Logo */}
        <div className="flex w-full justify-between px-1 text-[14px]  ">
          <h1 className="text-primary text-bold text-[20px]">
            CART<span className=" text-[#2B2D42]">LAND</span>
          </h1>

          {/* Navigation Options */}
          <div className="flex space-x-5  ">
            <a href="/" className="headerDropdown">
              Home
            </a>

            <h3 className="headerDropdown group relative ">
              Shop
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" headersvg w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div className="dropdown ">
                <p>Droped</p>
                <p>Droped</p>
                <p>Droped</p>
                <p>Droped</p>
                <p>Droped</p>
              </div>
            </h3>
            <h3 className="headerDropdown">About</h3>
            <h3 className="headerDropdown">Contact</h3>
          </div>
          {/*login/Register language Currency */}
          <div className="flex space-x-5 items-center   ">
            <h1 className="headerDropdown">
              <Link href="/login">Login</Link> /
              <Link href="/register">Register</Link>
            </h1>
            <h1 className="headerDropdown group relative">
              Language{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" headersvg w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div className="dropdown">
                <p>Droped</p>
                <p>Droped</p>
                <p>Droped</p>
                <p>Droped</p>
                <p>Droped</p>
              </div>
            </h1>
            <h1 className="headerDropdown group relative">
              Currency{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" headersvg w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div className="dropdown">
                <p>Droped</p>
                <p>Droped</p>
                <p>Droped</p>
                <p>Droped</p>
                <p>Droped</p>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
