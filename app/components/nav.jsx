"use client";
import React, { useState } from "react";
import Button from "./button";
import CartegoryDropdown from "./allcartegorydropdown";
export default function Nav() {
  let [accountDropDown, setAccountDropDown] = useState(false);
  let [cartDropDown, setCartDropDown] = useState(false);

  return (
    <div className="bg-primary w-[100%] ">
      <div className=" sizer">
        <div className="py-2 flex justify-between px-1 item-center  ">
          <h1 className="text-white text-bold text-[20px] lg:flex hidden ">
            CART<span className=" text-[#2B2D42]">LAND</span>
          </h1>
          <div className="group  relative flex items-center justify-between  ">
            <button className="bg-[#2B2D42] py-2 rounded-lg  group px-8 text-white  items-center gap-2 flex lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
                //{" "}
              </svg>
              All Cartegories
            </button>
          </div>
          <div className=" items-center flex lg:hidden ">
            {/* Search */}
            <div className="py-1 rounded-sm border border-green flex justify-between item-center  bg-white relative ">
              <input
                placeholder="Search Products......"
                className="w-[28em] px-2 outline-none  py-2"
                type="text"
              />
            </div>
            {/* <button >Search</button> */}
            <button className="bg-[#2B2D42] py-3 px-5 text-[white] rounded-sm">
              Search
            </button>
          </div>

          <section className="flex items-center mt-2 space-x-4">
            {/* Wish List */}
            <div className="relative flex flex-col items-center justify-center ">
              <span className="navsvgSpan">6</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" navsvg w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <p className="text-white text-[10px]">Wish List</p>
            </div>
            {/* CART */}
            <div
              onClick={() => {
                setCartDropDown(!cartDropDown);
                setAccountDropDown((accountDropDown = false));
              }}
              className=" relative  flex-col items-center  justify-center flex lg:hidden"
            >
              <span className="navsvgSpan">12</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" navsvg w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <p className="text-white text-[10px]">Cart</p>
              {cartDropDown && (
                <div className="border w-[150px] flex flex-col items-start px-2 rounded-sm z-10 bg-white absolute top-full right-0 transition duration-300  py-2  shadow-md">
                  <p>Droped</p>
                  <p>Droped</p>
                  <p>Droped</p>
                  <p>Droped</p>
                  <p>Droped</p>
                </div>
              )}
            </div>
            {/* Account */}
            <div
              onClick={() => {
                setAccountDropDown(!accountDropDown);
                setCartDropDown((cartDropDown = false));
              }}
              className="flex  flex-col item-center justify-center group relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" navsvg w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <p className="text-white text-[10px]">Account</p>
              {accountDropDown && (
                <div className="border w-[150px] flex flex-col items-start px-2 rounded-sm z-10 bg-white absolute top-full right-0 transition duration-300  py-2  shadow-md">
                  <p>Droped</p>
                  <p>Droped</p>
                  <p>Droped</p>
                  <p>Droped</p>
                  <p>Droped</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
